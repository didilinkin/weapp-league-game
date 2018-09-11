import Taro, { Component, Config } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

// import configStore from './store'
import dvaCore from './dvaCore'
import models from './models'

// import './app.styl'

// const store = configStore()
// console.log('models ===> ', models)
// debugger

const app = dvaCore.createApp({
  initialState: {},

  models,

  onError(e, dispatch) {
    // dispatch(action("sys/error", e))
    console.log('出错 ! ===> ', e)
    console.log(dispatch)
  },
})

console.log('app ===> ', app)

debugger

const store = app.getStore()

console.log('store ===> ', store)

debugger

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
