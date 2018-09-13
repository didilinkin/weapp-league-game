/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 18:12:21
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-12 21:41:56
 * @Description: 赛程列表
 */
import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { is, fromJS } from 'immutable'
import _ from 'lodash'
const dayjs = require('dayjs')

import { AtList, AtListItem } from 'taro-ui'
import { List } from 'antd-mobile' // View

import mapToArray from '../../../utils/mapToArray'

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

const Item = List.Item
const Brief = Item.Brief

class LeagueList extends Component {
  static defaultProps = { // 判空 不渲染
    list: fromJS([]),
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

    const Element = this.props.list.map((item, key) => (
      <AtListItem
        key={key}
        title={dayjs(item.match_time).format('YYYY-MM-DD')}
        note={item.status}
      />
    ))

    return (
      <View>
        {/* {this.props.list.map((item, key) => (
          <AtListItem
            key={key}
            title={dayjs(item.match_time * 1000).format('YYYY-MM-DD')}
            note={item.status}
          />
        ))} */}
        {Element}
      </View>
    )
  }
}

export default LeagueList as ComponentClass<PageOwnProps, PageState>
