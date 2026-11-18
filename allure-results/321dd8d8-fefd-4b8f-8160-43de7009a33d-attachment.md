# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPageTest.spec.js >> OramgeHRM Test cases >> Forgot Password test
- Location: tests\loginPageTest.spec.js:32:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for getByText('Forgot your password?')

```

# Page snapshot

```yaml
- generic [ref=f1e4]:
  - generic [ref=f1e6]:
    - img "company-branding" [ref=f1e8]
    - generic [ref=f1e9]:
      - heading "Inloggen" [level=5] [ref=f1e10]
      - generic [ref=f1e11]:
        - generic [ref=f1e13]:
          - paragraph [ref=f1e14]: "Username : Admin"
          - paragraph [ref=f1e15]: "Password : admin123"
        - generic [ref=f1e16]:
          - generic [ref=f1e18]:
            - generic [ref=f1e19]:
              - generic [ref=f1e20]: 
              - generic [ref=f1e21]: Gebruikersnaam
            - textbox "Gebruikersnaam" [active] [ref=f1e23]
          - generic [ref=f1e25]:
            - generic [ref=f1e26]:
              - generic [ref=f1e27]: 
              - generic [ref=f1e28]: Wachtwoord
            - textbox "Wachtwoord" [ref=f1e30]
          - button "Inloggen" [ref=f1e32] [cursor=pointer]
          - paragraph [ref=f1e34] [cursor=pointer]: Wachtwoord vergeten?
      - generic [ref=f1e35]:
        - generic [ref=f1e36]:
          - link [ref=f1e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=f1e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=f1e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=f1e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=f1e49]:
          - paragraph [ref=f1e50]: OrangeHRM OS 5.9
          - paragraph [ref=f1e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=f1e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=f1e54]
```

# Test source

```ts
  1  | class LoginPage{
  2  |     constructor(page){  
  3  |         this.page = page;
  4  |         // locators
  5  |         this.username = page.getByRole('textbox', { name: 'Username' });
  6  |         this.password = page.getByRole('textbox', { name: 'Password' });
  7  |         this.loginBtn = page.getByRole('button', { name: 'Login' })
  8  |         this.forgotPasswordlink = page.getByText('Forgot your password?');
  9  |         this.inavalidCredMessage = page.getByText('Invalid credentials');
  10 |     }   
  11 |     async navigate(){
  12 |         await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  13 |     }
  14 |     async login(username,password){
  15 |         await this.username.fill(username)
  16 |         await this.password.fill(password)
  17 |         await this.loginBtn.click()
  18 |     }
  19 |     async forgotPassword(){
> 20 |         await this.forgotPasswordlink.click()
     |                                       ^ Error: locator.click: Test timeout of 40000ms exceeded.
  21 |     }
  22 | }
  23 | module.exports = {LoginPage}
```