import http from '../index'

export default {
	list(parms, success){
		http.postBody('anchorThird/search', parms, success);
	}
}