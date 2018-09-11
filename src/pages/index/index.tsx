import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import action from '../../utils/action'

type PageStateProps = {
  // gameType: string,
  // status: string,
  // schedule: any,
  league: any,
  // dispatch: Function,
}

type PageDispatchProps = {
  getScheduleList: () => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(
  state => ({
    league: state.league,
  }),
  dispatch => ({
    getScheduleList() {
      dispatch({
        type: 'league/getScheduleList',
        payload: {
          game_type: this.gameType || 'csgo',
          status: this.status || 'wait',
          lang: 'cn',
          interval: 7,
          start_date: Date.parse(new Date()),
        },
      })
    },
  }),
)
class Index extends Component {
  config: Config = {
    navigationBarTitleText: '赛程',
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark",
  };

  componentDidMount = () => {
    this.props.getScheduleList()
  }

  render() {
    console.log('this.props ==> ', this.props)

    return (
      <View>
        赛程
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>
