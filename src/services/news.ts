/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 11:16:06
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2019-01-08 12:34:19
 * @Description: services - news
 */
import request from '../utils/request'

export async function getNewsList(params: any): Promise<any> {
  return request({
    method: 'GET',
    url: 'https://api.vpgame.com/news/mix',
    data: { ...params },
  })
}
