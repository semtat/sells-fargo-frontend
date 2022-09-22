import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import LoginForm from '@/components/login/LoginForm.vue'

const testValues = {
    login: 'login',
    password: 'password'
}

describe('Тестирование полей компонента формы', () => {
    const wrapper = mount(LoginForm)
    const inputLogin = wrapper.find('input#username')        
    const inputPassword = wrapper.find('input#password')
    
    it('Проверка на пустой логин', async () => {
        await inputLogin.setValue(testValues.login)
        expect(inputLogin.element.value.length).toBeGreaterThan(0)
    })
    it('Проверка на пустой пароль', async () => {
        await inputPassword.setValue(testValues.password)
        expect(inputPassword.element.value.length).toBeGreaterThan(0)
    })
})