/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 11:08:14
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-12 12:01:03
 * @Description: model - news
 */
import Taro from '@tarojs/taro'
import { fromJS } from 'immutable'

import { DvaApi } from '../../../utils/typeConf'
import * as newsServices from '../../../services/news'
import checkResStatus from '../../../utils/checkResStatus'

const pick = require('lodash/pick')

const initState = fromJS({
  newsList: [],
})

export default {
  namespace: 'news',

  state: initState,

  effects: {
    * getNewsList({ payload }: any, { put }: DvaApi) {
      // Taro.showLoading({ title: 'Loading...' })
      let newsList = []

      // debugger

      // try {
      //   // const res = yield call(newsServices.getNewsList, pick({
      //   //   ...payload,
      //   //   'Accept-Language': payload.AcceptLanguage,
      //   // }, ['game_type', 'Accept-Language', 'data_key', 'limit']))

      //   if (checkResStatus(res.status)) {
      //     newsList = res.data
      //   } else {
      //     console.log('news list 接口出错, 请稍后再试!')
      //   }
      // } catch (e) {
      //   console.log('news list 请求出错 ===> ', e)
      // }

      // 临时用 资讯接口: TI 资讯
      // yield put({ type: 'getTiNews' })
    },

    // 使用
    * getTiNews({}: null, { call, put}: DvaApi) {
      try {
        const news1 = yield call(newsServices.getTi1)
        const news2 = yield call(newsServices.getTi2)
        const news3 = yield call(newsServices.getTi3)

        console.log('new1 ===> ', news1)
        console.log('new1 ===> ', news2)
        console.log('new1 ===> ', news3)
        debugger
      } catch (e) {
        console.log('请求 TI8 头图资讯失败')
      }
    },
  },

  reducers: {},
}
