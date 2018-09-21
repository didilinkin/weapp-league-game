/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 11:16:06
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-12 11:16:32
 * @Description: services - news
 */
import request from '../utils/request'
import jsonp from 'jsonp'

export async function getNewsList(params: any): Promise<any> {
  return request({
    method: 'GET',
    url: 'https://api.vpgame.com/news/mix',
    data: { ...params },
  })
}

export async function getTi1(params: any): Promise<any> {
  // return request({
  //   method: 'GET',
  //   url: 'http://www.vpgame.com/webservice/v2/article/default/list?category_id=&page_size=6&lang=zh_CN&tags=TI8%E5%A4%B4%E5%9B%BE1',
  //   data: { ...params },
  // })
}


export async function getTi2(params: any): Promise<any> {
  // return request({
  //   method: 'GET',
  //   url: 'http://www.vpgame.com/webservice/v2/article/default/list?category_id=&page_size=6&lang=zh_CN&tags=TI8%E5%A4%B4%E5%9B%BE2',
  //   data: { ...params },
  // })
}


export async function getTi3(params: any): Promise<any> {
  // return request({
  //   method: 'GET',
  //   url: 'http://www.vpgame.com/webservice/v2/article/default/list?category_id=&page_size=6&lang=zh_CN&tags=TI8%E5%A4%B4%E5%9B%BE3',
  //   data: { ...params },
  // })
}

