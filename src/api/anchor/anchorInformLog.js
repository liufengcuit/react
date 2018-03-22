import http from '../index'

export default {
    selectCount(anchorId, page, success){
        http.post('anchorInformLog/selectCount', {
            anchorId:anchorId,
            page:page
        }, success)
    },
    search(parms, success){
        http.postBody('anchorInformLog/search', parms, success)
    }
}