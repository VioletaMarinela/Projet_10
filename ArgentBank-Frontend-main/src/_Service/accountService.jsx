import Axios from './callerService.jsx';

let loginConnect = (data) => {
    return Axios.post('/api/v1/user/login', data)
}

let logout = () => {
    localStorage.removeItem('KeyToken')
}

let savetoken = (token) => {
    localStorage.setItem('KeyToken', token);
}

let getToken = () => {
    return localStorage.getItem("KeyToken");
}

let ConnectorNotConnect = () => {
    let token = getToken();
    return !!token
}

export const accountService = {
    loginConnect,
    logout,
    savetoken,
    getToken,
    ConnectorNotConnect
}