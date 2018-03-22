import http from '../index'

export default {
	/*获取主播等级所有枚举状态*/
	allStatus(success){
		http.get('anchorLevel/allStatus', success);
	},
	/*主播等级分页列表*/
	search(levelList, success){
		http.postBody('anchorLevel/search', levelList, success);
	},
	/**添加主播等级*/
	add(addLevel, success){
		http.postBody('anchorLevel/add', addLevel, success);
	},
	/*主播等级修改*/
	update(updateLevel, success){
		http.postBody('anchorLevel/update', updateLevel, success);
	}
}