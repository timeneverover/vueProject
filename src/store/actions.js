import * as types from './mutation-types'

export default {
  getPersonData({
    commit
  }, data) {
    httpService.getLink(Urls.getDataUrl)
      .then(function(res) {
        commit(types.PERSON_DATA, res)
      })
      .catch(function(error) {
        console.log(error);
      });

  },
  savePersonData({
    commit
  }, data) {
    commit(types.PERSON_DATA, data)
  },
  changeEditData({
    commit
  }, data) {
    commit(types.EDIT_DATA, data)
  },
  saveEditData({
    commit
  }, data) {
    //去后台改变数据
    httpService.postLink(Urls.editDataUrl, JSON.stringify(data))
      .then(function(res) {
        commit(types.TO_EDIT_DATA, data)
        TipBoxService.open('success', '修改成功！');
      })
      .catch(function(error) {
        console.log(error);
      })
  },
  saveData({
    commit
  }, data) {
    //去后台改变数据
    httpService.postLink(Urls.addDataUrl, JSON.stringify(data))
      .then(function() {
        TipBoxService.open('success', '添加成功！');
        console.log('添加成功')
        httpService.getLink(Urls.getDataUrl)
          .then(function(res) {
            console.log('查询成功');
            commit(types.SAVE_DATA, res)
          })
          .catch(function(error) {
            console.log('查询失败');
            console.log(error);
          });
      }).catch(function(error) {
        console.log(error);
      })
  },
  changePopName({
    commit
  }, data) {
    commit(types.POP_NAME, data)
  },
  delDataIndex({
    commit
  }, data) {
    //去后台改变数据
    httpService.postLink(Urls.delDataUrl, JSON.stringify(data))
      .then(function(res) {
        commit(types.DEL_DATA_INDEX)
        TipBoxService.open('success', '删除成功！');
      })
      .catch(function(error) {
        console.log(error);
      })
  },
  delData({
    commit
  }, data) {
    commit(types.DEL_DATA, data)
  },
}
