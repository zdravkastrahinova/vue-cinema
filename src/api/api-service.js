import axios from 'axios';
import constants from '../constants';

export default {
    get(url, success, failure, params) {
        this.request({
            method: 'get',
            url,
            params,
            success,
            failure,
        });
    },
    post(url, data, success, failure) {
        this.request({
            method: 'post',
            url,
            data,
            success,
            failure,
        });
    },
    put(url, data, success, failure) {
        this.request({
            method: 'put',
            url,
            data,
            success,
            failure,
        });
    },
    delete(url, success, failure) {
        this.request({
            method: 'delete',
            url,
            success,
            failure,
        });
    },
    request(options) {
        if (!options.url) {
            console.log('URL is required');
            return;
        }

        const data = Object.assign({
            method: 'get',
            baseURL: constants.apiUrl,
        }, options);

        axios(data)
            .then((response) => {
                if (options.success) {
                    options.success(response.data);
                }
            })
            .catch((error) => {
                if (options.failure) {
                    options.failure(error);
                }
            });
    }
};