/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 19:56:16
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-12 20:04:24
 * @Description: immutable Map => Array
 */
const assign = require('lodash/assign')

export default (map: any): Array<any> =>
  Array.from(
    assign(map.toObject(), { length: map.size })
  )
