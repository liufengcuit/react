import request from '../utils/request'
import qs from 'qs'

export default{
	post(url, data, done, fail){
		return request(url, {
			method: 'post',
			headers: new Headers({
				'X-Requested-With': 'XMLHttpRequest',
				 Accept: 'application/json',
        		'Content-Type': 'multipart/form-data'
			}),
			mode: 'cors',
			credentials: 'include',
			body: qs.stringify(data)
		})
		.then(res=>{
			console.log('成功')
			console.log(res)
			done(res.data)
		})
		.catch(err => {
			console.log('失败')
			console.log(err)
			fail(err.data);
		})
	},
	postBody(url, data, done, fail){
		return request(url,{
			method: 'post',
			headers: new Headers({ 
				Accept: 'application/json',
				'Content-Type': 'application/json;charset=UTF-8'
			}),
			mode: 'cors',
			credentials: 'include',
			body: JSON.stringify(data)
		})
		.then(res=>{
			console.log('成功')
			console.log(res)
			done(res.data)
		})
		.catch(err => {
			console.log('失败')
			console.log(err)
			fail(err.data);
		})
	},
	get(url, ...options){
		let params, done, fail;
        if (typeof options[0] === 'object') {
            params = options[0];
            done = options[1];
            fail = options[2];
        } else {
            params = {};
            done = options[0];
            fail = options[1];
        }
		return request(url,{
			method: 'get',
			headers: new Headers({ 
				'X-Requested-With': 'XMLHttpRequest'
			}),
			mode: 'cors',
			credentials: 'include',
			data: params
		})
		.then(res=>{
			console.log(res)
			done(res.data)
		})
		.catch(err => {
			console.log(err)
			fail(err.data);
		})
	}
}