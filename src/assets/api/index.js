import axios from '../utils/Axios.js'

/*
    接口地址
*/

//获取表单列表
const list = '/form_api/list/';




/*
    接口使用的函数
*/

//创建表单
export let getList = (params) => {
  return axios.post(list, params);
}
