/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2018-09-12 15:43:26
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2018-09-12 15:43:54
 * @Description: 因 retcode的 状态码不稳定: 有可能是200 也可能是 0; 所以写了此方法
 */
export default (retcode: number): boolean =>
  retcode === 0 ||
  retcode === 200
