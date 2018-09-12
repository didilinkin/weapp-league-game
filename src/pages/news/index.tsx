/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 10:59:48
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-12 11:06:48
 * @Description: news 资讯数据
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
  // getScheduleList: () => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface News {
  props: IProps;
}

@connect(
  state => ({}),
  dispatch => ({}),
)
class News extends Component {
  config: Config = {
    navigationBarTitleText: '资讯',
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
        资讯 News
      </View>
    )
  }
}

export default News as ComponentClass<PageOwnProps, PageState>
