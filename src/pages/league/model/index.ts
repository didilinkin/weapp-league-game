/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 11:08:03
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-12 18:09:20
 * @Description: model - league
 */
import Taro from '@tarojs/taro'
import { fromJS } from 'immutable'

import * as leagueServices from '../../../services/league'
import { DvaApi } from '../../../utils/typeConf'
import checkResStatus from '../../../utils/checkResStatus'

const pick = require('lodash/pick')

interface GetSchedulePayload {
  payload: {
    game_type: 'csgo' | 'dota' | 'lol' | 'ow',
    status: 'wait' | 'end',
    lang: 'cn' | 'en' | 'ru',
    interval: number,
    start_date: number,
    // 页面状态: 因无 () => event() 方法, 会造成页面多次渲染
    leftIconShow: boolean,
    rightIconShow: boolean,
  },
}

interface SetSchedulePayload {
  payload: {
    schedule: Array<{
      date: number,
      list: Array<any>,
    }>,
  },
}

const SET_SCHEDULE_LIST = 'SET_SCHEDULE_LIST'
const SET_DRAWER = 'SET_DRAWER'

const initState = fromJS({
  gameType: 'csgo',
  status: 'wait',
  schedule: [],
  leftIconShow: false,
  rightIconShow: false,
})

export default {
  namespace: 'league',

  state: initState,

  effects: {
    * getScheduleList({ payload }: GetSchedulePayload, { call, put }: DvaApi) {
      Taro.showLoading({ title: 'Loading...' })
      let schedule = []

      try {
        const res = yield call(leagueServices.getScheduleList, payload)

        if (checkResStatus(res.status)) {
          schedule = res.data
        }
      } catch (e) {
        console.log('请求错误 ===> ', e)

        Taro.showToast({
          title: '请求失败',
          icon: 'loading',
          duration: 500,
        })
      } finally {
        yield put({
          type: SET_SCHEDULE_LIST,
          payload: {
            ...pick(payload, ['status']),
            gameType: payload.game_type,
            schedule,
          },
        })

        Taro.hideLoading()
      }
    },

    * changeDrawer({ payload }: any, { put }: DvaApi) {
      yield put({
        type: SET_DRAWER,
        payload,
      })
    }
  },

  reducers: {
    SET_SCHEDULE_LIST(state: any, { payload }: any) {
      return state
        .merge(fromJS(payload))
    },

    SET_DRAWER(state: any, { payload }: any) {
      return state
        .merge(payload)
    },
  },
}
