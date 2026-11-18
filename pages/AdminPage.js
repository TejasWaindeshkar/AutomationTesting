class AdminPage{
    constructor(page){
        this.page = page;
        this.adminlink = page.getByRole('link', { name: 'Admin' })
        this.AddButton = page.getByRole('button', { name: ' Add' })
        this.selectUserRoleDropdown = page.locator('.oxd-grid-item')
            .filter({ hasText: 'User Role' })
            .locator('.oxd-select-text')
        this.selectStatusDropDown = page.locator('.oxd-grid-item')
            .filter({ hasText: 'Status' })
            .locator('.oxd-select-text')
        this.formInputs = page.locator('.oxd-form input')
        this.employeeNameInput = page.getByRole('textbox', { name: 'Type for hints...' })
        this.userNameInput = this.formInputs.nth(1)
        this.passwordInput = this.formInputs.nth(2)
        this.confirmPasswordInput = this.formInputs.nth(3)
        this.SaveBtn = page.getByRole('button', { name: 'Save' })
    }

    async openAdminPage(){
        await this.adminlink.click()
        await this.page.waitForURL(/admin\/viewSystemUsers/)
    }
    async clickAddUser(){
        await this.AddButton.click()
        await this.page.getByRole('heading', { name: 'Add User' }).waitFor({state: 'visible'})
    }
    async selectUserRole(role){
        await this.selectUserRoleDropdown.click()
        await this.page.getByRole('option',{
            name : role,
            exact: true
        }).click()
    }
    async selectStatus(status){
        await this.selectStatusDropDown.click()
        await this.page.getByRole('option',{
            name : status,
            exact: true
        }).click()
    }
    async selectEmployee(employeeName){
        await this.employeeNameInput.fill(employeeName)
        const suggest = this.page.locator('.oxd-autocomplete-option')
            .filter({ hasText: employeeName })
            .first()
        await suggest.waitFor({state:'visible'})
        await suggest.click()
    }
    async adduser(user){
        await this.selectUserRole(user.role)
        await this.selectEmployee(user.employeeName)
        await this.userNameInput.fill(user.username)
        await this.selectStatus(user.status)
        await this.passwordInput.fill(user.password)
        await this.confirmPasswordInput.fill(user.password)
        await this.SaveBtn.click()
    }
}
module.exports ={AdminPage}