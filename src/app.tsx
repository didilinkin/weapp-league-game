import Taro, { Component, Config } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

// import configStore from './store'
import { createLogger } from 'redux-logger'
import dvaCore from './dvaCore'
import models from './models'

// import './app.styl'

// const store = configStore()
// console.log('dvaCore ===> ', dvaCore)
// debugger

const app = dvaCore({
  models,
  onAction: createLogger(),
})

console.log('app ===> ', app)
console.log('app._store ===> ', app._store)
console.log('app.getStore ===> ', app.getStore)

// debugger

// const store = app.getStore()
const store = app._store


console.log('store ===> ', store)

// debugger

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
