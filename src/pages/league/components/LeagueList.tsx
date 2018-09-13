/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 18:12:21
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-13 18:24:16
 * @Description: 赛程列表
 */
import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import TeamInfo from './TeamInfo'

import './LeagueList.styl'

const _ = require('lodash')

type PageStateProps = {
  list: any,
}

type PageDispatchProps = {}

type PageOwnProps = {
  list: any
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface LeagueList {
  props: IProps;
}

class LeagueList extends Component {
  static defaultProps = { // 判空 不渲染
    list: [],
  }

  state = {
    schedule: [],
  }

  // componentWillReceiveProps(nextProps) {
  //   if (!is(this.state.schedule, nextProps.schedule)) {
  //     this.setState({
  //       schedule: nextProps.schedule,
  //     })
  //   }
  // }

  render () {
    console.log('LeagueList props ===> ', this.props.list)

    return (
      <View className="leagueList">
        <View className="leagueList--ul">
          {this.props.list.map(item =>
            <View className="leagueList--li" key={item.key}>
              {/* 比赛 日期 */}
              <View className="match--date">
                <Text className="league--time"> {item.time} </Text>
              </View>

              {/* 比赛 队伍 */}
              <View className="match--info">
                <View className="match--team">
                  <TeamInfo
                    left={true}
                    abbr={_.get(item, 'team1.abbr')}
                    logo={_.get(item, 'team1.logo')}
                  />
                </View>

                <View className="match--state">
                  {item.status === 'wait'
                    ? <Text className="text"> VS </Text>
                    : (
                      <View>
                        <Text className="text"> {_.get(item, 'team1.score' || 0)} </Text>
                        <Text className="text"> {` - `} </Text>
                        <Text className="text"> {_.get(item, 'team2.score' || 0)} </Text>
                      </View>
                    )
                  }
                </View>

                <View className="match--team">
                  <TeamInfo
                    left={false}
                    abbr={_.get(item, 'team2.abbr')}
                    logo={_.get(item, 'team2.logo')}
                  />
                </View>
              </View>

              {/* 比赛 状态 */}
              <View className="match--status">
                <Text
                  className="status--title"
                  style={{
                    color: item.status === 'wait'
                      ? 'gray'
                      : item.status === 'start'
                        ? 'green'
                        : 'blue'}}
                >
                  {item.status === 'wait'
                    ? '未进行'
                    : item.status === 'start'
                      ? '进行中'
                      : '已结束'}
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    )
  }
}

export default LeagueList as ComponentClass<PageOwnProps, PageState>
