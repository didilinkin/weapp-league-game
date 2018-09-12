/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 10:59:05
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-12 16:59:23
 * @Description: league 赛程表
 */
import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import _ from 'lodash'

type PageStateProps = {
  // schedule: Array<any>,
  league: any,
  gameType: string,
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
    league: state.league,
    gameType: state.league.get('gameType'),
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
    console.log('props => toJS() ===> ', this.props.league.toJS())

    return (
      <View>
        赛程 League
      </View>
    )
  }
}

export default League as ComponentClass<PageOwnProps, PageState>
