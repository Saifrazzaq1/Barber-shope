import {showSnackbar} from 'src/Components/Snackbar';
import {getRedux} from 'src/Redux/function';
import API from 'src/config/API';
import Api from 'src/config/Serivce/Api';
import {getError} from 'src/config/function';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN = 'USER_LOGIN';

export const LOGIN = data => {
  const {dispatch} = getRedux();
  const {method, url} = API.LOGIN;
  console.log(JSON.stringify(data, null, 2));
  Api.request({method, url, data})
    .then(res => {
      console.log(JSON.stringify(res, null, 2));
      dispatch({
        type: USER_LOGIN,
        payload: res,
      });
      showSnackbar({
        type: 'success',
        header: 'Login',
        body: 'Login successfully',
      });
    })
    .catch(error => {
      console.log(error);
      showSnackbar({
        type: 'error',
        header: 'Login ERROR',
        body: getError(error),
      });
    });
};
export const SIGNUPOTP = data => {
  const {dispatch} = getRedux();
  const {method, url} = API.SIGNUPOTP;
  console.log(JSON.stringify(data, null, 2));
  Api.request({method, url, data})
    .then(res => {
      console.log(JSON.stringify(res, null, 2));
      dispatch({
        type: USER_LOGIN,
        payload: res,
      });
      showSnackbar({
        type: 'success',
        header: 'OTP send',
        body: 'SignUp success',
      });
    })
    .catch(error => {
      console.log(error);
      showSnackbar({
        type: 'error',
        header: 'OTP send ERROR',
        body: getError(error),
      });
    });
};
export const OTPVERIFICATION = data => {
  const {dispatch} = getRedux();
  const {method, url} = API.OTPVER;
  console.log(JSON.stringify(data, null, 2));
  Api.request({method, url, data})
    .then(res => {
      console.log(JSON.stringify(res, null, 2));
      dispatch({
        type: USER_LOGIN,
        payload: res,
      });
      showSnackbar({
        type: 'success',
        header: 'OTP Verification',
        body: 'OTP Verification successfully',
      });
    })
    .catch(error => {
      console.log(error);
      showSnackbar({
        type: 'error',
        header: 'OTP Verification ERROR',
        body: getError(error),
      });
    });
};
export const SETPASSWORD = data => {
  const {dispatch} = getRedux();
  const {method, url} = API.REGISTER;
  console.log(JSON.stringify(data, null, 2));
  Api.request({method, url, data})
    .then(res => {
      console.log(JSON.stringify(res, null, 2));
      dispatch({
        type: USER_LOGIN,
        payload: res,
      });
      showSnackbar({
        type: 'success',
        header: 'Login',
        body: 'Login successfully',
      });
    })
    .catch(error => {
      console.log(error);
      showSnackbar({
        type: 'error',
        header: 'Login ERROR',
        body: getError(error),
      });
    });
};

export const SIGNUP = (data, cb) => {
  const {method, url} = API.SIGNUP;
  Api.request({method, url, data})
    .then(response => {
      cb(response);
    })
    .catch(error => {
      cb(error);
      showSnackbar({
        type: 'error',
        header: 'Signup ERROR',
        body: getError(error),
      });
    });
};
export const LOGOUT = () => {
  const {dispatch} = getRedux();
  dispatch({
    type: USER_LOGOUT,
  });
  showSnackbar({
    type: 'success',
    body: 'Logout Successful',
    header: 'Logout',
  });
};

export const UPDATE_USER = (_userId, data, cb) => {
  const {method, url} = API.UPDATEUSER;
  const requestUrl = `${url}${_userId}`;
  Api.formRequest({method, data, url: requestUrl})
    .then(response => {
      showSnackbar({
        type: 'success',
        header: 'successfully updated',
        body: cb(response),
      });
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'Update ERROR',
        body: getError(error),
      });
    });
};

export const FORGOT_PASSWORD = data => {
  const {dispatch} = getRedux();
  const {method, url} = API.FORGET_PASSWORD;
  console.log(JSON.stringify(data, null, 2));
  Api.request({method, url, data})
    .then(res => {
      console.log(JSON.stringify(res, null, 2));
      dispatch({
        type: USER_LOGIN,
        payload: res,
      });
      showSnackbar({
        type: 'success',
        header: 'FORGOT_PASSWORD',
        body: 'FORGOT_PASSWORD successfully',
      });
    })
    .catch(error => {
      console.log(error);
      showSnackbar({
        type: 'error',
        header: 'FORGOT_PASSWORD ERROR',
        body: getError(error),
      });
    });
};

export const FORGOT_OTP = data => {
  const {dispatch} = getRedux();
  const {method, url} = API.FORGET_OTPVER;
  console.log(JSON.stringify(data, null, 2));
  Api.request({method, url, data})
    .then(res => {
      console.log(JSON.stringify(res, null, 2));
      dispatch({
        type: USER_LOGIN,
        payload: res,
      });
      showSnackbar({
        type: 'success',
        header: 'FORGOT_OTP',
        body: ' OTP Verify successfully',
      });
    })
    .catch(error => {
      console.log(error);
      showSnackbar({
        type: 'error',
        header: 'FORGOT_OTP ERROR',
        body: getError(error),
      });
    });
};

export const FORGOT_NEW_PASS = data => {
  const {dispatch} = getRedux();

  const {method, url} = API.FORGET_NEW_PASSWORD;
  console.log(JSON.stringify(data, null, 2));
  Api.request({method, url, data})
    .then(res => {
      console.log(JSON.stringify(res, null, 2));

      showSnackbar({
        type: 'success',
        header: 'NEW PASSWORD',
        body: ' UPDATE PASSWORD successfully',
      });
    })
    .catch(error => {
      console.log(error);
      showSnackbar({
        type: 'error',
        header: 'NEW PASSWORD ERROR',
        body: getError(error),
      });
    });
};

export const BARBERS = cb => {
  const {method, url} = API.BARBERS;
  Api.request({method, url})
    .then(res => {
      cb(res);
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'Login ERROR',
        body: getError(error),
      });
    });
};

export const ALL_SERVICES = cb => {
  const {method, url} = API.SERVICES;
  Api.request({method, url})
    .then(res => {
      cb(res);
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'Services ERROR',
        body: getError(error),
      });
    });
};

export const ALL_FAQS = cb => {
  const {method, url} = API.GETFAQS;
  Api.request({method, url})
    .then(res => {
      cb(res);
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'FAQs ERROR',
        body: getError(error),
      });
    });
};

export const GET_APPOINTMENTS = (status, cb) => {
  const {method, url} = API.APPOINTMENTS;
  const requestUrl = `${url}?status=${status}`;

  Api.request({method, url: requestUrl})
    .then(response => {
      showSnackbar({
        type: 'success',
        header: 'Fetch Successful',
        body: cb(response),
      });
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'Fetch Error',
        body: getError(error),
      });
    });
};

export const CHANGE_PASSWORD = (_userId, data, cb) => {
  const {method, url} = API.CHANGEPASS;
  const requestUrl = `${url}${_userId}`;
  console.log('first', _userId, data);
  Api.request({method, data, url: requestUrl})
    .then(response => {
      showSnackbar({
        type: 'success',
        header: 'CHANGE PASSWORD successfully',
        body: cb(response),
      });
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'CHANGE PASSWORD ERROR',
        body: getError(error),
      });
    });
};
export const CHANGE_NUMBER = (_userId, data, cb) => {
  const {method, url} = API.CHANGENUM;
  const requestUrl = `${url}${_userId}`;
  console.log('first', _userId, data);
  Api.request({method, data, url: requestUrl})
    .then(response => {
      showSnackbar({
        type: 'success',
        header: 'CHANGE_NUMBER success',
        body: cb(response),
      });
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'CHANGE NUMBER ERROR',
        body: getError(error),
      });
    });
};

export const CHANGE_OTP_VER = (_userId, data, cb) => {
  const {method, url} = API.CHANGEOTP;
  const requestUrl = `${url}${_userId}`;
  console.log('first', _userId, data);
  Api.request({method, data, url: requestUrl})
    .then(response => {
      showSnackbar({
        type: 'success',
        header: 'CHANGE OTP success',
        body: cb(response),
      });
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'CHANGE OTP ERROR',
        body: getError(error),
      });
    });
};

export const BOOK_APPOINTMET = (data, cb) => {
  const {method, url} = API.BOOKAPPOINT;
  Api.request({method, url, data})
    .then(response => {
      cb(response);
    })
    .catch(error => {
      cb(error);
      showSnackbar({
        type: 'error',
        header: 'Signup ERROR',
        body: getError(error),
      });
    });
};
