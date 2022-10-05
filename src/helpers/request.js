import axios from 'axios'

function checkStatusRequest(status) {
    let type
    switch (status) {
        case 200: type = 'ok'
            break
        case 401: case 500: type = 'alert'
            break
        default: type = 'log'
            break
    }

    return type
}

export async function getRequest(url, params) {
    try {
        const response = await axios.get(url, params)
        return {
            status: response.status,
            type: checkStatusRequest(response.status),
            data: response.data
        }
    } catch (error) {
        let res
        if (error.response) {
            switch (error.response.status) {
                case 401: res = 'Неправильный логин или пароль'
                    break
                case 400: case 422: res = 'Сервер не смог обработать запрос'
                    break
                case 500: res = 'Сервер авторизации недоступен, попробуйте повторить позже'
                    break
                default: res = error.response.data.message
                    break
            }
            return {
                status: error.response.status,
                type: checkStatusRequest(error.response.status),
                data: res
            }
        } else if (error.request) {
            return {
                status: 'unknown',
                type: 'log',
                data: error.request
            }
        } else {
            return {
                status: 'unknown',
                type: 'log',
                data: error.message
            }
        }
    }
}