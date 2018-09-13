/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-13 19:50:27
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-13 20:05:42
 * @Description: js 处理 单行省略
 */
const padEnd = require('lodash/padEnd')

export default (str: string = 'string', num: number): string =>
  str.length > num
    ? `${str.substring(0, num - 1)}...`
    : `${padEnd(str, num, ' ')}`
