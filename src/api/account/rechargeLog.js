import http '../index'

export default {
    /**
     * 所有枚举状态
     * @param {Function} success 回调
     */
    allStatus(success) {
        http.get('rechargeLog/allStatus', success);
    },
    
    /**
     * 分页列表搜索
     * @param {*} formSearch 
     * @param {*} success 
     */
    search(formSearch, success){
        http.postBody('rechargeLog/search',formSearch, success);
    }
}