import axios from 'axios';
import {ENV} from 'src/config/env';
import {getRedux} from 'src/Redux/function';
interface IApi {
  method: string;
  url: string;
  data?: Object;
}
const neededKeys = ['name', 'uri', 'type', 'size'];
class Api {
  static request({method, url, data = {}}: IApi) {
    const {state} = getRedux();
    const token = state?.auth?.token;
    return axios({
      method,
      url: ENV.base_url + url,
      ...(Object.keys(data).length !== 0 && {data: JSON.stringify(data)}),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        ...(token && {Authorization: `Bearer ${token}`}),
      },
    })
      .then((res: any) => res.data)
      .catch((err: any) => {
        throw err;
      });
  }
  static formRequest({method, url, data = {}}: IApi) {
    const {state} = getRedux();
    const token = state?.auth?.token;
    return axios({
      method,
      url: ENV.base_url + url,
      data,
      headers: {
        accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        ...(token && {Authorization: `Bearer ${token}`}),
      },
    })
      .then((res: any) => res.data)
      .catch((err: any) => {
        throw err;
      });
  }
  static async requestWithFormData({method, url, data = {}}: IApi) {
    const {state} = getRedux();
    const token = state?.auth?.token;
    try {
      const formData = new FormData();
      function generateFormData(json: any, parentKey = '') {
        for (let key in json) {
          if (json.hasOwnProperty(key)) {
            const value = json[key];
            const fullKey = parentKey ? `${parentKey}[${key}]` : key;
            if (Array.isArray(value)) {
              value.forEach((item, index) => {
                const itemKey = `${fullKey}[${index}]`;
                formData.append(itemKey, item);
              });
            } else if (typeof value === 'object' && value !== null) {
              generateFormData(value, fullKey);
            } else {
              formData.append(fullKey, value);
            }
          }
        }
      }
      generateFormData(data);
     
      const res = await axios({
        method,
        url: ENV.base_url + url,
        data: formData,
        headers: {
          accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          ...(token && {Authorization: `Bearer ${token}`}),
        },
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  }
}
export default Api;
