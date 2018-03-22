import http from '../index'

export default {
    /**所有枚举状态 */
    allStatus(success){
        http.get('anchorWithdraw/allStatus', success)
    },
    /**列表 */
    list(params, success){
        http.postBody('anchorWithdraw/search', params, success)
    },
    /**同意 */
    accept(params, success){
        http.post('anchorWithdraw/accept', params, success)
    },
    /**拒绝 */
    refuse(params, success){
        http.post('anchorWithdraw/refuse', params, success)
    }
}