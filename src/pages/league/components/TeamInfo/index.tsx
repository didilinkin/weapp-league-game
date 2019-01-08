/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-13 17:41:10
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2019-01-08 12:39:48
 * @Description: Team info
 */
import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import singleEllipsis from '../../../../utils/singleEllipsis'
import './index.styl'

type PageStateProps = {}
type PageDispatchProps = {}
type PageOwnProps = {
  left: boolean,
  abbr: string,
  logo: string,
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface TeamInfo {
  props: IProps;
}

class TeamInfo extends Component {
  static defaultProps = {
    left: false,
    abbr: 'g2',
    logo: 'https://resource-sec.vpgame.com/teams/15149637489662649821',
  }

  render () {
    return (
      <View className="teamInfo">
        {this.props.left
          ? (
            <View style={{
              textAlign: 'right',
              display: 'flex',
            }}>
              <View className="teamInfo__flex">
                <Text className="text">
                  {singleEllipsis(this.props.abbr, 6)}
                </Text>
              </View>
              <Image
                src={this.props.logo}
                className="teamInfo--logo"
                lazy-load={true}
              />
            </View>
          )
          : (
            <View style={{
              textAlign: 'left',
              display: 'flex',
            }}>
              <Image
                src={this.props.logo}
                className="teamInfo--logo"
              />
              <View className="teamInfo__flex">
                <Text className="text">
                  {singleEllipsis(this.props.abbr, 6)}
                </Text>
              </View>
            </View>
          )
        }
      </View>
    )
  }
}

export default TeamInfo as ComponentClass<PageOwnProps, PageState>
