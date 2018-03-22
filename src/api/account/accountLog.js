import http from '../index'

export default {
    /**
     * 所有枚举状态
     * @param {Function} success 回调
     */
    allStatus(success) {
        http.get('accountLog/allStatus', success);
    },
    
    /**
     * 分页列表搜索
     * @param {*} formSearch 
     * @param {*} success 
     */
    search(formSearch, success){
        http.postBody('accountLog/search',formSearch, success);
    }
}