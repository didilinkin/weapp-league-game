/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 11:16:37
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-12 15:33:41
 * @Description: services - league
 */
import request from '../utils/request'

export async function getScheduleList(params: any): Promise<any> {
  return request({
    method: 'GET',
    url: 'https://dataservice-sec.vpgame.com/dota2/pro/webservice/schedule/list/all',
    data: { ...params },
  })
}
