const {test: base,expect} = require('@playwright/test')
const {LoginPage} = require('../pages/LoginPage')
const {DashboardPage} = require('../pages/DashboardPage')
const {AdminPage} = require('../pages/AdminPage')

exports.test = base.extend({
    loginPage: async({page},use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    dashboardPage: async({page},use)=>{
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },
    adminPage: async({page},use)=>{
        const adminPage = new AdminPage(page);
        await use(adminPage)
    }  
})
exports.expect = expect;