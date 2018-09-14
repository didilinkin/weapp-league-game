/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 10:59:05
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-14 01:14:34
 * @Description: league 赛程表
 */
import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtNavBar, AtDrawer } from 'taro-ui'
import { fromJS, is } from 'immutable'

import LeagueList from './components/LeagueList'
import './index.styl'

const _ = require('lodash')
const toUpper = require('lodash/toUpper')
const dayjs = require('dayjs') // import dayjs from 'dayjs' // 不能用？ 不知为何...

type PageStateProps = {
  league: any,
  gameType: string,
  status: string,
  lang: string,
  schedule: any,
  leftIconShow: boolean,
  rightIconShow: boolean,
  dispatch: Function,
}

type PageDispatchProps = {
  getScheduleList: (payload: object) => void
  changeDrawer: (payload: object) => void
}

type PageOwnProps = {}

type PageState = {
  leftIconShow: boolean,
  rightIconShow: boolean,
  schedule: any,
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface League {
  props: IProps;
}

@connect(
  state => ({
    league: state.league, // 用于开发 预览数据, 无其他作用
    gameType: state.league.get('gameType'),
    status: state.league.get('status'),
    lang: 'cn', // state.league.get('lang'),
    schedule: state.league.get('schedule'),
    leftIconShow: state.league.get('leftIconShow'),
    rightIconShow: state.league.get('rightIconShow'),
  }),
  dispatch => ({
    getScheduleList(payload: any): void {
      dispatch({
        type: 'league/getScheduleList',
        payload,
      })
    },

    changeDrawer(payload: any): void {
      dispatch({
        type: 'league/changeDrawer',
        payload,
      })
    },
  }),
)
class League extends Component {
  static defaultProps = {
    league: {},
    gameType: 'csgo',
    status: 'wait',
    lang: 'cn',
    schedule: fromJS([{}]),
    rightIconShow: true,
    leftIconShow: false,
    getScheduleList: () => {},
  }

  constructor (props: IProps) {
    super()
    if (!_.isEmpty(props)) {
      props.getScheduleList({
        game_type: props.gameType || 'csgo',
        status: props.status || 'wait',
        lang: props.lang || 'cn',
        interval: 7,
        start_date: Date.parse(`${new Date()}`),
      })
    }
  }

  state = { // 将 immutable 对象传入 子组件 => 如果 只是 抽屉状态改变 => 子组件不要渲染
    leftIconShow: false,
    rightIconShow: false,
    schedule: fromJS([])
  }

  config: Config = {
    navigationBarTitleText: '赛程',
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark",
  }

  // componentWillReceiveProps (nextProps: any): void {}

  componentDidMount = () => {}

  shouldComponentUpdate(nextProps: any, nextState: any): boolean { // 当 loading 发生改变 就要再次渲染
    // console.log('nextProps ===> ', nextProps)
    // console.log('nextState ===> ', nextState)
    // console.log('检查是否需要 更新')

    if (
      !is(nextProps.schedule, fromJS(nextState.schedule)) ||
      nextState.leftIconShow === true ||
      nextState.rightIconShow === true
    ) { // 不相同的 list => 更新 state
      console.log('不相同的 list => 更新 state')

      this.setState({
        schedule: nextProps.schedule.toJS(),
      })

      return true
    } else if ( // 用： this.state 而不是用 nextState
      this.state.rightIconShow === false &&
      this.state.leftIconShow === false
    ) {
      console.log('列表相同 + 抽屉 状态无改变 => 不渲染')
      return false
    } else {
      return true
    }

    return false
  }

  // 自定义事件
  handleClickLeftIcon = (): void => {
    console.log('点击 左侧 icon')
  }

  handleClickRightIcon = (): void => {
    this.setState({ rightIconShow: true })
    // this.props.changeDrawer({ rightIconShow: true })
  }

  handleRightDrawer = (): void => {
    this.setState({ rightIconShow: false })
    // this.props.changeDrawer({ rightIconShow: false })
  }

  drawerClick = (index: number): void => {
    let gameType = 'csgo'

    switch (index) {
      case 0:
        gameType = 'csgo'
        break
      case 1:
        gameType = 'dota'
        break
      case 2:
        gameType = 'lol'
        break
      case 3:
        gameType = 'ow'
        break
      default:
        gameType = 'csgo'
    }

    console.log('切换 gameType ===> ', gameType)

    // 改变类型, 发起请求
    this.props.getScheduleList({
      game_type: gameType || 'csgo',
      status: this.props.status || 'wait',
      lang: this.props.lang || 'cn',
      interval: 7,
      start_date: Date.parse(`${new Date()}`),
    })
  }

  render() {
    console.log('this.props ==> ', this.props)
    console.log('props.schedule => toJS() ===> ', this.props.schedule.toJS())

    const scheduleList = !!this.props.schedule && this.props.schedule.toJS().map((item, key) => _.assign(item, {
      key,
      list: _.isArray(item.list) && item.list.map((subItem, subKey) =>
        _.assign(
          {},
          subItem,
          {
            subKey,
            time: dayjs(subItem.match_time * 1000).format('HH:mm'),
          },
        ))
    }))

    return (
      <View className="league">
        {/* 顶部 导航栏 */}
        <AtNavBar
          color='#000'
          title={toUpper(this.props.gameType)}
          fixed={true}
          leftIconType='user'
          rightFirstIconType='bullet-list'
          onClickLeftIcon={this.handleClickLeftIcon}
          onClickRgIconSt={this.handleClickRightIcon}
        />

        {/* 赛程列表 */}
        {scheduleList.map(item => (
          <View key={item.key}>
            <View> {dayjs(item.date * 1000).format('YYYY-MM-DD')} </View>
            <LeagueList list={item.list} />
          </View>
        ))}

        {/* 右侧 抽屉 - gameType */}
        <AtDrawer
          mask={true}
          right={true}
          show={this.state.rightIconShow}
          onClose={this.handleRightDrawer}
          onItemClick={this.drawerClick}
          items={['CSGO', 'DOTA', 'LOL', 'OW']}
        />
      </View>
    )
  }
}

export default League as ComponentClass<PageOwnProps, PageState>
