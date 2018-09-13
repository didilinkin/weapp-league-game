/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 10:59:05
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-12 21:24:29
 * @Description: league 赛程表
 */
import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import LeagueList from './components/LeagueList'
import './index.styl'

const _ = require('lodash')
const dayjs = require('dayjs') // import dayjs from 'dayjs' // 不能用？ 不知为何...

type PageStateProps = {
  league: any,
  gameType: string,
  status: string,
  lang: string,
  schedule: any,
  dispatch: Function,
}

type PageDispatchProps = {
  getScheduleList: () => void
}

type PageOwnProps = {}

type PageState = {}

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
  }),
  dispatch => ({
    getScheduleList() {
      dispatch({
        type: 'league/getScheduleList',
        payload: {
          game_type: this.gameType || 'csgo',
          status: this.status || 'wait',
          lang: this.lang || 'cn',
          interval: 7,
          start_date: Date.parse(`${new Date()}`),
        },
      })
    }
  }),
)
class League extends Component {
  config: Config = {
    navigationBarTitleText: '赛程',
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark",
  };

  componentDidMount = () => {
    this.props.getScheduleList()
  }

  render() {
    console.log('this.props ==> ', this.props)
    console.log('props.schedule => toJS() ===> ', this.props.schedule.toJS())

    const scheduleList = this.props.schedule.toJS().map((item, key) => _.assign(item, {
      key,
      list: item.list.map((subItem, subKey) =>
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
        {scheduleList.map(item => (
          <View key={item.key}>
            <View> {dayjs(item.date * 1000).format('YYYY-MM-DD')} </View>
            <LeagueList list={item.list} />
          </View>
        ))}
      </View>
    )
  }
}

export default League as ComponentClass<PageOwnProps, PageState>
