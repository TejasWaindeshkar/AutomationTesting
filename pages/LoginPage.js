const {BasePage} = require('../pages/BasePage')
class LoginPage extends BasePage{
    constructor(page){  
        //this.page = page;
        super(page);    // calls the parent class constructor
        // locators
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Login' })
        this.forgotPasswordlink = page.getByText('Forgot your password?');
        this.inavalidCredMessage = page.getByText('Invalid credentials');
        this.loginHeading = page.getByRole('heading',{
            name: "Login"
        })
    }   
    
    async login(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
    async forgotPassword(){
        await this.forgotPasswordlink.click()
    }
    async verifyPageLoaded(){
        await this.loginHeading.waitFor({
            state: 'visible'
        });
        return await this.loginHeading.isVisible()
    }
}
module.exports = {LoginPage}