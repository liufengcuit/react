import http from '../index'

export default {
	/*获取主播等级所有枚举状态*/
	allStatus(success){
		http.get('anchorEarning/allStatus', success);
	},
	/*主播等级分页列表*/
	list(params, success){
		http.postBody('anchorEarning/search', params, success);
	},
}