/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 10:59:05
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-12 11:05:40
 * @Description: league 赛程表
 */
import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import _ from 'lodash'

type PageStateProps = {
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
  state => ({}),
  dispatch => ({}),
)
class League extends Component {
  config: Config = {
    navigationBarTitleText: '赛程',
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark",
  };

  componentDidMount = () => {
    // this.props.getScheduleList()
  }

  render() {
    console.log('this.props ==> ', this.props)

    return (
      <View>
        赛程 League
      </View>
    )
  }
}

export default League as ComponentClass<PageOwnProps, PageState>
