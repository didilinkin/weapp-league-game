/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 11:08:14
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2019-01-08 12:37:32
 * @Description: model - news
 */
import { fromJS } from 'immutable'

import { DvaApi } from '../../../utils/typeConf'

const initState = fromJS({
  newsList: [],
})

export default {
  namespace: 'news',

  state: initState,

  effects: {
    * getNewsList({}: any, {}: DvaApi) {},
    * getTiNews({}: null, {}: DvaApi) {},
  },

  reducers: {},
}
