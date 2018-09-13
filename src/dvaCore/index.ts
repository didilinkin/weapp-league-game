/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 00:52:51
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-12 01:59:33
 * @Description: dva core
 */
import { create } from 'dva-core'
import { createLogger } from 'redux-logger'
import createLoading from 'dva-loading'

let app
// let global

const createApp = (opt) => {
  opt.onAction = [createLogger()]
  const app = create(opt)
  app.use(createLoading({}))

  if (!global.registered) opt.models.forEach(model => app.model(model))
  global.registered = true
  app.start()

  const store = app._store
  app.getStore = () => store

  const dispatch = store.dispatch

  app.dispatch = dispatch
  return app
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  }
}
