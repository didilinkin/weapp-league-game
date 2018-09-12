/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 11:55:46
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-12 16:26:46
 * @Description: config Dva models auto type & interface
 */
interface DvaApi {
  call: Function,
  put: Function,
  select?: Function,
}

interface SubscriptionsProps {
  dispatch: Function,
  history: {
    listen: Function,
  },
}

export {
  DvaApi,
  SubscriptionsProps,
}
