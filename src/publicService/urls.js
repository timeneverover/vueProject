// let config = require('@/../config');
// let baseUrl = config.serverUrl;
let baseUrl = '/api/checkUser/'
export default {
  //baseUrl
  // serverUrl: config.serverUrl,
  // reportUrl: config.reportUrl,
  //otherUrl
  getDataUrl: baseUrl + 'userlist',
  addDataUrl: baseUrl + 'save',
  delDataUrl: baseUrl + 'deleteById',
  editDataUrl: baseUrl + 'update',
}
