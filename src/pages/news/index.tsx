/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 10:59:48
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2019-01-08 12:38:33
 * @Description: news 资讯数据
 */
import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtNavBar, AtIcon } from 'taro-ui'
import './index.styl'

type GetNewsPayload = {
  game_type: number,
  AcceptLanguage: string,
  data_key: number,
  limit?: number | 15,
  search?: string,
}

type PageStateProps = {
  dispatch: Function,
  newwList: any,
}

type PageDispatchProps = {
  getNewsList: (payload: GetNewsPayload) => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface News {
  props: IProps;
}

@connect(
  state => ({
    newwList: state.news.get('newsList'),
  }),
  dispatch => ({
    getNewsList(payload: GetNewsPayload): void {
      dispatch({
        type: 'news/getNewsList',
        payload,
      })
    },
  }),
)
class News extends Component {
  config: Config = {
    navigationBarTitleText: '电竞',
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark",
  };

  componentDidMount = () => {
    this.props.getNewsList({
      game_type: 1,
      AcceptLanguage: 'zh_CN',
      data_key: 0,
      limit: 15,
    })
  }

  render() {
    const newsList = [
      {
        author: '几页',
        poster: 'https://thumb.vpgame.com/f7a66139.png',
        title: '丹麦王朝VS银河战舰，这只喵星人来交作业了',
        description: '在今晚，FACEIT Major就要打响第二轮四分之一决赛了',
        post_time: 1534985452,
        view: 1598,
        comment: 0,
      },
      {
        author: '唐教授',
        poster: 'https://thumb.vpgame.com/f39fecd.png/c/175x105',
        title: '兄弟同上阵：天禄WESG第五人确认，qz随队登场！',
        description: '看来天禄并没有放弃WESG，而且已经找到了他们的第五人',
        post_time: 1534985452,
        view: 4242,
        comment: 8,
      },
      {
        author: '唐教授',
        poster: 'https://thumb.vpgame.com/88204caa4d0.png/c/175x105',
        title: 'FACEIT Major淘汰赛首日：黑马告别，豪强晋级！',
        description: 'CSGO FACEIT Major线下淘汰赛第一日已经结束，黑马coL还是没能走到最后',
        post_time: 1534985452,
        view: 14461,
        comment: 7,
      },
      {
        author: '唐教授',
        poster: 'https://thumb.vpgame.com/864ea28f.jpg/c/175x105',
        title: 'FACEIT选手纪录片第三集：天生领袖，shox',
        description: 'FACEIT Major线下淘汰赛在今天就要开赛了，选手纪录片也迎来了最后一位主角——shox',
        post_time: 1534985452,
        view: 5816,
        comment: 27,
      },
    ]

    return (
      <View>
        {/* 顶部 导航栏 */}
        <AtNavBar
          color='#000'
          title={'CSGO'}
          fixed={true}
        />

        {/* 资讯内容 */}
        <View className="newsList">
          {newsList.map((item, key) =>
            <View key={key} className="news--item">
              <Image src={item.poster} className="news--poster" mode='aspectFill' lazy-load={true} />
              <View className="news--content">
                <Text className="news--title"> {item.title} </Text>
                <View style={{ display: 'flex' }}>
                  <View className="news--author">
                    <AtIcon value='user' size='16' color='#767676' />
                    <Text className="news--small"> {item.author} </Text>
                  </View>
                  <View className="news--comment">
                    <AtIcon value='message' size='16' color='#767676' />
                    <Text className="news--small"> {item.comment} </Text>
                  </View>
                  <View className="news--view">
                    <AtIcon value='eye' size='16' color='#767676' />
                    <Text className="news--small"> {item.view} </Text>
                  </View>
                </View>
                <Text className="news--description"> {item.description} </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    )
  }
}

export default News as ComponentClass<PageOwnProps, PageState>
