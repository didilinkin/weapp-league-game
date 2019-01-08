import Taro, { Component, Config } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import dvaCore from './dvaCore'
import { createLogger } from 'redux-logger'
import models from './models'

import League from './pages/league'
import News from './pages/news'

const dva = dvaCore.createApp({
  initialState: {},
  models: models,
  onAction: createLogger(),
  onError(e, dispatch) {
    console.log('发生错误 ===> ', e, dispatch)
  },
})
const store = dva.getStore()

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
      'pages/league/index',
      'pages/news/index',
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      color: '#626567',
      selectedColor: '#2A8CE5',
      backgroundColor: '#FBFBFB',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/league/index',
          text: '赛程',
          iconPath: './assets/league.png',
          selectedIconPath: './assets/league.png',
        },
        {
          pagePath: 'pages/news/index',
          text: '电竞',
          iconPath: './assets/news.png',
          selectedIconPath: './assets/news.png',
        },
      ]
    }
  }

  componentDidMount () {}
  componentDidShow () {}
  componentDidHide () {}
  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <League />
        <News />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
