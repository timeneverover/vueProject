import * as types from './mutation-types'
import Urls from '../publicService/urls.js'
import TipBoxService from '../publicService/TipBoxService.js'
import httpService from '../publicService/HttpService.js';


export default {
  //表格全局数据
  [types.PERSON_DATA](state, data) {
    state.personData = data;
  },
  //需要修改的单条数据
  [types.EDIT_DATA](state, data) {
    state.editData = data
  },
  //去修改数据
  [types.TO_EDIT_DATA](state, data) {
    //去后台改变数据
    state.personData.splice(data.index, 1, data);
  },
  //增加数据
  [types.SAVE_DATA](state, data) {
    state.personData = res;
  },
  //删除数据索引
  [types.DEL_DATA_INDEX](state, data) {
    state.delDataIndex = data;
  },
  //删除数据
  [types.DEL_DATA](state) {
    state.personData.splice(state.delDataIndex, 1);
  },
  //修改弹窗类型
  [types.POP_NAME](state, data) {
    state.popName = data;
  }
};
