import fetch from '../config/fetch'

/**
 * 登录
 */

export const sentLogin = (type,account,password,application) => fetch('/business/auth/login', {
	type,
    account,
    password,
    application
},'post');

