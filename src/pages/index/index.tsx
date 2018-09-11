import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import action from '../../utils/action'

// @connect(({ league }) => ({
//   league,
// }))
export default class League extends Component {
  config = {
    navigationBarTitleText: '赛程',
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark",
  };

  componentDidMount = () => {
    // this.props.dispatch({
    //   type: 'league/get',
    //   payload: {
    //     game_type: 'csgo',
    //     status: 'wait',
    //     lang: 'cn',
    //     interval: 7,
    //     start_date: 1536655598000,
    //   },
    // })
  }

  render() {
    // console.log('this.props ==> ', this.props.league)

    return (
      <View>
        赛程
      </View>
    )
  }
}
