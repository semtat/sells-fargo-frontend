import { describe, expect, it, afterEach } from 'vitest'
import axios from 'axios'
import { getRequest } from '../../src/helpers/request'
/* eslint-disable no-undef */
const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);

const baseLoginUrl = `${import.meta.env.VITE_API_LOGIN_URL}`

const params = {
    username: encodeURIComponent('login'),
    password: encodeURIComponent('password')
}
describe('Тестирование функции getRequest', () => {
    afterEach(() => {
        mock.reset()
    })

    it('Статус 200', async () => {
        mock.onGet(baseLoginUrl, params).reply(200, {
            status: 200,
            type: 'ok',
            data: 'Logged in user session: 15646816387'
        })        
        const res = await getRequest(baseLoginUrl, params)

        expect(res.status).toEqual(200)
        expect(res.type).toEqual('ok')
        expect(res.data.data).toBeTypeOf('string').toMatch('Logged in user session')
    })
    it('Статус 401', async () => {
        mock.onGet(baseLoginUrl, params).reply(401, {})        
        const res = await getRequest(baseLoginUrl, params)
        
        expect(res.status).toEqual(401)
        expect(res.type).toEqual('alert')
        expect(res.data).toEqual('Неправильный логин или пароль')
    })
    it('Статус 400', async () => {
        mock.onGet(baseLoginUrl, params).reply(400, {})        
        const res = await getRequest(baseLoginUrl, params)
        
        expect(res.status).toEqual(400)
        expect(res.type).toEqual('log')
        expect(res.data).toEqual('Сервер не смог обработать запрос')
    })
    it('Статус 422', async () => {
        mock.onGet(baseLoginUrl, params).reply(422, {})        
        const res = await getRequest(baseLoginUrl, params)
        
        expect(res.status).toEqual(422)
        expect(res.type).toEqual('log')
        expect(res.data).toEqual('Сервер не смог обработать запрос')
    })
    it('Статус 500', async () => {
        mock.onGet(baseLoginUrl, params).reply(500, {})        
        const res = await getRequest(baseLoginUrl, params)
        
        expect(res.status).toEqual(500)
        expect(res.type).toEqual('alert')
        expect(res.data).toEqual('Сервер авторизации недоступен, попробуйет повторить позже')
    })
})