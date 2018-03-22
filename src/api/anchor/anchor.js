import http from '../index'

export default {
	/*主播列表展示*/
	list(achorLists, success) {
        http.postBody('anchor/search', achorLists, success);
    },
    /*添加主播*/
    add(anchorAdd, success) {
        http.postBody('anchor/add', anchorAdd, success);
    },
    /*主播封禁*/
    disabled(anchorId, success) {
        http.post('anchor/disabled', {anchorId:anchorId}, success);
    },
    /*主播修改*/
    update(anchorUpdate, success) {
        http.postBody('anchor/update', anchorUpdate, success);
    },
    /*快速修改主播等级*/
    fastModifyLevel(parms, success) {
    	http.post('anchor/setLevel', parms, success);
    },
    /*快速修改主播操作状态*/
    fastModifyAnchorStatus(parms, success) {
        http.post('anchor/setAnchorStatus', parms, success);
    },
    /*获取所有枚举状态*/
    allStatus(success) {
    	http.get('anchor/allStatus', success);
    },
    /*检测手机号唯一*/
    anchorPhone(parms, success){
        http.post('anchor/checkPhone', parms, success);
    },
    /*检测昵称是否可用*/
    checkNickName(parms, success){
        http.post('anchor/checkNickname', parms, success);
    },
    setSort(anchorId, sort, success) {
        http.post('anchor/setSort', {
            anchorId: anchorId,
            sort: sort
        }, success);
    },
    /* 保存主播的分成比例 */
    setDivide(parms, success) {
        http.postBody('anchor/setDivide', parms, success);
    },
    /* 刷新主播缓存 */
    refreshRedis(success) {
        http.get('anchor/refreshRedis',success);
    }
}