/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 11:08:03
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-12 12:02:17
 * @Description: model - league
 */
import Taro from '@tarojs/taro'

import request from '../../../utils/request'
import { DvaApi } from '../../../utils/typeConf'

const SET_LIST = 'SET_LIST'

export default {
  namespace: 'league',

  state: {
    list: [],
  },

  effects: {
    * getScheduleList({ payload }, { call, put }) {
      let { data } = yield call(request, {
        method: 'get',
        url: 'https://dataservice-sec.vpgame.com/dota2/pro/webservice/schedule/list/all',
        data: {
          ...payload,
        },
      })

      yield put({
        type: SET_LIST,
        payload: {
          list: data,
        },
      })
    },
  },

  reducers: {
    SET_LIST(state, { payload }) {
      return { ...state, ...payload }
    },
  },
}
