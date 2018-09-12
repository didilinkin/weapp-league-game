/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 11:08:03
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-12 17:41:43
 * @Description: model - league
 */
import Taro from '@tarojs/taro'
import { fromJS } from 'immutable'

import * as leagueServices from '../../../services/league'
import { DvaApi } from '../../../utils/typeConf'
import checkResStatus from '../../../utils/checkResStatus'

interface GetSchedulePayload {
  payload: {
    game_type: 'csgo' | 'dota' | 'lol' | 'ow',
    status: 'wait' | 'end',
    lang: 'cn' | 'en' | 'ru',
    interval: number,
    start_date: number,
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

// immutable
const initState = fromJS({
  gameType: 'csgo',
  status: 'wait',
  schedule: [],
})

export default {
  namespace: 'league',

  // state: {
  //   gameType: 'csgo',
  //   status: 'wait',
  //   schedule: [{
  //     date: 0,
  //     list: [],
  //   }],
  // },
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
            schedule: schedule,
          },
        })

        Taro.hideLoading()
      }
    },
  },

  reducers: {
    SET_SCHEDULE_LIST(state: any, { payload }: SetSchedulePayload) {
      // return { ...state, ...payload }
      return state
        .set('schedule', fromJS(payload.schedule))
    },
  },
}
