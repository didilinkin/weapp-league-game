/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 00:52:51
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-12 01:24:48
 * @Description: dva core
 */
// import { create } from 'dva-core';
// import { createLogger } from 'redux-logger';
// import createLoading from 'dva-loading';

// let app;
// let store;
// let dispatch;

// function createApp(opt) {
//   opt.onAction = [createLogger()];
//   app = create(opt);
//   app.use(createLoading({}));
//   if (!global.registered) opt.models.forEach(model => app.model(model));
//   global.registered = true;
//   app.start();
//   store = app._store;
//   app.getStore = () => store;
//   dispatch = store.dispatch;
//   app.dispatch = dispatch;
//   return app;
// }
// export default {
//   createApp,
//   getDispatch() {
//     return app.dispatch;
//   }
// }

// Me
import createLoading from 'dva-loading'
const { create } = require('dva-core')

const dvaCore = (options: any) => {
  const createOpts = {
    setupMiddlewares(middlewares: any) {
      return [
        // routerMiddleware(history),
        // reduxUnhandledAction(callback),
        ...middlewares,
      ]
    },
    setupApp(app: any) {
      // app._history = patchHistory(history)
    },
  }

  const dvaCore = create(options, createOpts)

  options.models.forEach(function (model: any): any {
    return dvaCore.model(model)
  })

  dvaCore.start()

  const store = dvaCore._store

  dvaCore.getStore = () => store

  dvaCore.use(createLoading())

  return dvaCore
}

export default dvaCore


