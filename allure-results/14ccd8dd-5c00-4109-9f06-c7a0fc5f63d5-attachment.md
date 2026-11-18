# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hooks.spec.js >> admin user visibility test
- Location: tests\hooks.spec.js:47:5

# Error details

```
Test timeout of 40000ms exceeded while running "afterEach" hook.
```

# Page snapshot

```yaml
- generic [ref=f5e3]:
  - generic:
    - complementary [ref=f5e4]:
      - navigation "Sidepanel" [ref=f5e5]:
        - generic [ref=f5e6]:
          - link [ref=f5e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f5e9]
          - text: 
        - generic [ref=f5e10]:
          - generic [ref=f5e11]:
            - generic [ref=f5e12]:
              - textbox "Search" [ref=f5e15]
              - button "" [ref=f5e16] [cursor=pointer]
            - separator [ref=f5e18]
          - list [ref=f5e19]:
            - listitem [ref=f5e20]:
              - link "Admin" [ref=f5e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f5e25]:
              - link "PIM" [ref=f5e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f5e41]:
              - link "Leave" [ref=f5e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f5e46]:
              - link "Time" [ref=f5e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f5e54]:
              - link "Recruitment" [ref=f5e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f5e62]:
              - link "My Info" [ref=f5e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f5e70]:
              - link "Performance" [ref=f5e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f5e80]:
              - link "Dashboard" [ref=f5e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f5e85]:
              - link "Directory" [ref=f5e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f5e90]:
              - link "Maintenance" [ref=f5e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f5e96]:
              - link "Claim" [ref=f5e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f5e105]:
              - link "Buzz" [ref=f5e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f5e110]:
      - generic [ref=f5e111]:
        - generic [ref=f5e112]:
          - text: 
          - generic [ref=f5e113]:
            - heading "Admin" [level=6] [ref=f5e114]
            - heading "/ User Management" [level=6] [ref=f5e115]
        - link [ref=f5e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f5e118] [cursor=pointer]
        - list [ref=f5e124]:
          - listitem [ref=f5e125]:
            - generic [ref=f5e126] [cursor=pointer]:
              - img "profile picture" [ref=f5e127]
              - paragraph [ref=f5e128]: Rudraksh Pareek
              - generic [ref=f5e129]: 
      - navigation "Topbar Menu" [ref=f5e131]:
        - list [ref=f5e132]:
          - listitem [ref=f5e133] [cursor=pointer]:
            - generic [ref=f5e134]:
              - text: User Management
              - generic [ref=f5e135]: 
          - listitem [ref=f5e136] [cursor=pointer]:
            - generic [ref=f5e137]:
              - text: Job
              - generic [ref=f5e138]: 
          - listitem [ref=f5e139] [cursor=pointer]:
            - generic [ref=f5e140]:
              - text: Organization
              - generic [ref=f5e141]: 
          - listitem [ref=f5e142] [cursor=pointer]:
            - generic [ref=f5e143]:
              - text: Qualifications
              - generic [ref=f5e144]: 
          - listitem [ref=f5e145] [cursor=pointer]:
            - link "Nationalities" [ref=f5e146]:
              - /url: "#"
          - listitem [ref=f5e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=f5e148]:
              - /url: "#"
          - listitem [ref=f5e149] [cursor=pointer]:
            - generic [ref=f5e150]:
              - text: Configuration
              - generic [ref=f5e151]: 
          - button "" [ref=f5e153] [cursor=pointer]
  - generic [ref=f5e155]:
    - generic [ref=f5e157]:
      - generic [ref=f5e158]:
        - generic [ref=f5e159]:
          - heading "System Users" [level=5] [ref=f5e161]
          - button "" [ref=f5e164] [cursor=pointer]
        - separator [ref=f5e166]
        - generic [ref=f5e168]:
          - generic [ref=f5e170]:
            - generic [ref=f5e172]:
              - generic [ref=f5e173]: Username
              - textbox [ref=f5e176]
            - generic [ref=f5e178]:
              - generic [ref=f5e179]: User Role
              - generic [ref=f5e183] [cursor=pointer]:
                - generic [ref=f5e184]: "-- Select --"
                - generic [ref=f5e185]: 
            - generic [ref=f5e188]:
              - generic [ref=f5e189]: Employee Name
              - textbox "Type for hints..." [ref=f5e194]
            - generic [ref=f5e196]:
              - generic [ref=f5e197]: Status
              - generic [ref=f5e201] [cursor=pointer]:
                - generic [ref=f5e202]: "-- Select --"
                - generic [ref=f5e203]: 
          - separator [ref=f5e205]
          - generic [ref=f5e206]:
            - button "Reset" [ref=f5e207] [cursor=pointer]
            - button "Search" [ref=f5e208] [cursor=pointer]
      - generic [ref=f5e209]:
        - button " Add" [ref=f5e211] [cursor=pointer]:
          - generic [ref=f5e212]: 
          - text: Add
        - generic [ref=f5e213]:
          - separator [ref=f5e214]
          - generic [ref=f5e215]: (27) Records Found
        - table [ref=f5e218]:
          - rowgroup [ref=f5e219]:
            - row [ref=f5e220]:
              - columnheader "" [ref=f5e221]:
                - generic [ref=f5e223] [cursor=pointer]:
                  - checkbox "" [ref=f5e224]
                  - generic [ref=f5e225]: 
              - columnheader "Username " [ref=f5e227]:
                - text: Username
                - generic [ref=f5e228]:
                  - generic [ref=f5e229] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=f5e230]:
                - text: User Role
                - generic [ref=f5e231]:
                  - generic [ref=f5e232] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=f5e233]:
                - text: Employee Name
                - generic [ref=f5e234]:
                  - generic [ref=f5e235] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f5e236]:
                - text: Status
                - generic [ref=f5e237]:
                  - generic [ref=f5e238] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f5e239]
          - rowgroup [ref=f5e240]:
            - row [ref=f5e242]:
              - cell "" [ref=f5e243]:
                - generic [ref=f5e247]:
                  - checkbox "" [ref=f5e248]
                  - generic [ref=f5e249]: 
              - cell "Admin" [ref=f5e251]
              - cell "Admin" [ref=f5e253]
              - cell "Rudraksh Pareek" [ref=f5e255]
              - cell "Enabled" [ref=f5e257]
              - cell [ref=f5e259]:
                - generic [ref=f5e260]:
                  - button "" [ref=f5e261] [cursor=pointer]
                  - button "" [ref=f5e263] [cursor=pointer]
            - row [ref=f5e266]:
              - cell "" [ref=f5e267]:
                - generic [ref=f5e270] [cursor=pointer]:
                  - checkbox "" [ref=f5e271]
                  - generic [ref=f5e272]: 
              - cell "amina.okafor.1030" [ref=f5e274]
              - cell "ESS" [ref=f5e276]
              - cell "Amina Okafor" [ref=f5e278]
              - cell "Enabled" [ref=f5e280]
              - cell [ref=f5e282]:
                - generic [ref=f5e283]:
                  - button "" [ref=f5e284] [cursor=pointer]
                  - button "" [ref=f5e286] [cursor=pointer]
            - row [ref=f5e289]:
              - cell "" [ref=f5e290]:
                - generic [ref=f5e293] [cursor=pointer]:
                  - checkbox "" [ref=f5e294]
                  - generic [ref=f5e295]: 
              - cell "BLOCKED_USERNAME_Emory" [ref=f5e297]
              - cell "ESS" [ref=f5e299]
              - cell "Emory Hermann" [ref=f5e301]
              - cell "Disabled" [ref=f5e303]
              - cell [ref=f5e305]:
                - generic [ref=f5e306]:
                  - button "" [ref=f5e307] [cursor=pointer]
                  - button "" [ref=f5e309] [cursor=pointer]
            - row [ref=f5e312]:
              - cell "" [ref=f5e313]:
                - generic [ref=f5e316] [cursor=pointer]:
                  - checkbox "" [ref=f5e317]
                  - generic [ref=f5e318]: 
              - cell "emp_anil" [ref=f5e320]
              - cell "ESS" [ref=f5e322]
              - cell "Anil QA2" [ref=f5e324]
              - cell "Enabled" [ref=f5e326]
              - cell [ref=f5e328]:
                - generic [ref=f5e329]:
                  - button "" [ref=f5e330] [cursor=pointer]
                  - button "" [ref=f5e332] [cursor=pointer]
            - row [ref=f5e335]:
              - cell "" [ref=f5e336]:
                - generic [ref=f5e339] [cursor=pointer]:
                  - checkbox "" [ref=f5e340]
                  - generic [ref=f5e341]: 
              - cell "ess_test" [ref=f5e343]
              - cell "ESS" [ref=f5e345]
              - cell "Test Employee" [ref=f5e347]
              - cell "Enabled" [ref=f5e349]
              - cell [ref=f5e351]:
                - generic [ref=f5e352]:
                  - button "" [ref=f5e353] [cursor=pointer]
                  - button "" [ref=f5e355] [cursor=pointer]
            - row [ref=f5e358]:
              - cell "" [ref=f5e359]:
                - generic [ref=f5e362] [cursor=pointer]:
                  - checkbox "" [ref=f5e363]
                  - generic [ref=f5e364]: 
              - cell "ESS_USERNAME_Emory" [ref=f5e366]
              - cell "ESS" [ref=f5e368]
              - cell "Emory Hermann" [ref=f5e370]
              - cell "Enabled" [ref=f5e372]
              - cell [ref=f5e374]:
                - generic [ref=f5e375]:
                  - button "" [ref=f5e376] [cursor=pointer]
                  - button "" [ref=f5e378] [cursor=pointer]
            - row [ref=f5e381]:
              - cell "" [ref=f5e382]:
                - generic [ref=f5e385] [cursor=pointer]:
                  - checkbox "" [ref=f5e386]
                  - generic [ref=f5e387]: 
              - cell "FMLName" [ref=f5e389]
              - cell "ESS" [ref=f5e391]
              - cell "Qwerty LName" [ref=f5e393]
              - cell "Enabled" [ref=f5e395]
              - cell [ref=f5e397]:
                - generic [ref=f5e398]:
                  - button "" [ref=f5e399] [cursor=pointer]
                  - button "" [ref=f5e401] [cursor=pointer]
            - row [ref=f5e404]:
              - cell "" [ref=f5e405]:
                - generic [ref=f5e408] [cursor=pointer]:
                  - checkbox "" [ref=f5e409]
                  - generic [ref=f5e410]: 
              - cell "FMLName1" [ref=f5e412]
              - cell "ESS" [ref=f5e414]
              - cell "FName LName" [ref=f5e416]
              - cell "Enabled" [ref=f5e418]
              - cell [ref=f5e420]:
                - generic [ref=f5e421]:
                  - button "" [ref=f5e422] [cursor=pointer]
                  - button "" [ref=f5e424] [cursor=pointer]
            - row [ref=f5e427]:
              - cell "" [ref=f5e428]:
                - generic [ref=f5e431] [cursor=pointer]:
                  - checkbox "" [ref=f5e432]
                  - generic [ref=f5e433]: 
              - cell "funcionario" [ref=f5e435]
              - cell "ESS" [ref=f5e437]
              - cell "Test1793369007433 Automation" [ref=f5e439]
              - cell "Enabled" [ref=f5e441]
              - cell [ref=f5e443]:
                - generic [ref=f5e444]:
                  - button "" [ref=f5e445] [cursor=pointer]
                  - button "" [ref=f5e447] [cursor=pointer]
            - row [ref=f5e450]:
              - cell "" [ref=f5e451]:
                - generic [ref=f5e454] [cursor=pointer]:
                  - checkbox "" [ref=f5e455]
                  - generic [ref=f5e456]: 
              - cell "jhonedwa" [ref=f5e458]
              - cell "ESS" [ref=f5e460]
              - cell "jhon Osorio" [ref=f5e462]
              - cell "Enabled" [ref=f5e464]
              - cell [ref=f5e466]:
                - generic [ref=f5e467]:
                  - button "" [ref=f5e468] [cursor=pointer]
                  - button "" [ref=f5e470] [cursor=pointer]
            - row [ref=f5e473]:
              - cell "" [ref=f5e474]:
                - generic [ref=f5e477] [cursor=pointer]:
                  - checkbox "" [ref=f5e478]
                  - generic [ref=f5e479]: 
              - cell "Jobinsam@6742" [ref=f5e481]
              - cell "ESS" [ref=f5e483]
              - cell "Jobin Sam" [ref=f5e485]
              - cell "Enabled" [ref=f5e487]
              - cell [ref=f5e489]:
                - generic [ref=f5e490]:
                  - button "" [ref=f5e491] [cursor=pointer]
                  - button "" [ref=f5e493] [cursor=pointer]
            - row [ref=f5e496]:
              - cell "" [ref=f5e497]:
                - generic [ref=f5e500] [cursor=pointer]:
                  - checkbox "" [ref=f5e501]
                  - generic [ref=f5e502]: 
              - cell "kangdaniel" [ref=f5e504]
              - cell "ESS" [ref=f5e506]
              - cell "Kang Daniel" [ref=f5e508]
              - cell "Enabled" [ref=f5e510]
              - cell [ref=f5e512]:
                - generic [ref=f5e513]:
                  - button "" [ref=f5e514] [cursor=pointer]
                  - button "" [ref=f5e516] [cursor=pointer]
            - row [ref=f5e519]:
              - cell "" [ref=f5e520]:
                - generic [ref=f5e523] [cursor=pointer]:
                  - checkbox "" [ref=f5e524]
                  - generic [ref=f5e525]: 
              - cell "Leksh123" [ref=f5e527]
              - cell "ESS" [ref=f5e529]
              - cell "Leksh G" [ref=f5e531]
              - cell "Enabled" [ref=f5e533]
              - cell [ref=f5e535]:
                - generic [ref=f5e536]:
                  - button "" [ref=f5e537] [cursor=pointer]
                  - button "" [ref=f5e539] [cursor=pointer]
            - row [ref=f5e542]:
              - cell "" [ref=f5e543]:
                - generic [ref=f5e546] [cursor=pointer]:
                  - checkbox "" [ref=f5e547]
                  - generic [ref=f5e548]: 
              - cell "lucas.pereira.1030" [ref=f5e550]
              - cell "ESS" [ref=f5e552]
              - cell "Lucas Pereira" [ref=f5e554]
              - cell "Enabled" [ref=f5e556]
              - cell [ref=f5e558]:
                - generic [ref=f5e559]:
                  - button "" [ref=f5e560] [cursor=pointer]
                  - button "" [ref=f5e562] [cursor=pointer]
            - row [ref=f5e565]:
              - cell "" [ref=f5e566]:
                - generic [ref=f5e569] [cursor=pointer]:
                  - checkbox "" [ref=f5e570]
                  - generic [ref=f5e571]: 
              - cell "maya.chen.1030" [ref=f5e573]
              - cell "ESS" [ref=f5e575]
              - cell "Maya Chen" [ref=f5e577]
              - cell "Enabled" [ref=f5e579]
              - cell [ref=f5e581]:
                - generic [ref=f5e582]:
                  - button "" [ref=f5e583] [cursor=pointer]
                  - button "" [ref=f5e585] [cursor=pointer]
            - row [ref=f5e588]:
              - cell "" [ref=f5e589]:
                - generic [ref=f5e592] [cursor=pointer]:
                  - checkbox "" [ref=f5e593]
                  - generic [ref=f5e594]: 
              - cell "noah.bennett.1030" [ref=f5e596]
              - cell "ESS" [ref=f5e598]
              - cell "Noah Bennett" [ref=f5e600]
              - cell "Enabled" [ref=f5e602]
              - cell [ref=f5e604]:
                - generic [ref=f5e605]:
                  - button "" [ref=f5e606] [cursor=pointer]
                  - button "" [ref=f5e608] [cursor=pointer]
            - row [ref=f5e611]:
              - cell "" [ref=f5e612]:
                - generic [ref=f5e615] [cursor=pointer]:
                  - checkbox "" [ref=f5e616]
                  - generic [ref=f5e617]: 
              - cell "peter" [ref=f5e619]
              - cell "ESS" [ref=f5e621]
              - cell "Peter Anderson" [ref=f5e623]
              - cell "Enabled" [ref=f5e625]
              - cell [ref=f5e627]:
                - generic [ref=f5e628]:
                  - button "" [ref=f5e629] [cursor=pointer]
                  - button "" [ref=f5e631] [cursor=pointer]
            - row [ref=f5e634]:
              - cell "" [ref=f5e635]:
                - generic [ref=f5e638] [cursor=pointer]:
                  - checkbox "" [ref=f5e639]
                  - generic [ref=f5e640]: 
              - cell "Pritam98897" [ref=f5e642]
              - cell "ESS" [ref=f5e644]
              - cell "Ranga Akunuri" [ref=f5e646]
              - cell "Enabled" [ref=f5e648]
              - cell [ref=f5e650]:
                - generic [ref=f5e651]:
                  - button "" [ref=f5e652] [cursor=pointer]
                  - button "" [ref=f5e654] [cursor=pointer]
            - row [ref=f5e657]:
              - cell "" [ref=f5e658]:
                - generic [ref=f5e661] [cursor=pointer]:
                  - checkbox "" [ref=f5e662]
                  - generic [ref=f5e663]: 
              - cell "qa.f865b20" [ref=f5e665]
              - cell "Admin" [ref=f5e667]
              - cell "Ranga Akunuri" [ref=f5e669]
              - cell "Enabled" [ref=f5e671]
              - cell [ref=f5e673]:
                - generic [ref=f5e674]:
                  - button "" [ref=f5e675] [cursor=pointer]
                  - button "" [ref=f5e677] [cursor=pointer]
            - row [ref=f5e680]:
              - cell "" [ref=f5e681]:
                - generic [ref=f5e684] [cursor=pointer]:
                  - checkbox "" [ref=f5e685]
                  - generic [ref=f5e686]: 
              - cell "ravi_test_1793375046088" [ref=f5e688]
              - cell "Admin" [ref=f5e690]
              - cell "Ravi B" [ref=f5e692]
              - cell "Enabled" [ref=f5e694]
              - cell [ref=f5e696]:
                - generic [ref=f5e697]:
                  - button "" [ref=f5e698] [cursor=pointer]
                  - button "" [ref=f5e700] [cursor=pointer]
            - row [ref=f5e703]:
              - cell "" [ref=f5e704]:
                - generic [ref=f5e707] [cursor=pointer]:
                  - checkbox "" [ref=f5e708]
                  - generic [ref=f5e709]: 
              - cell "ravi_test_1793375414318" [ref=f5e711]
              - cell "Admin" [ref=f5e713]
              - cell "Ravi B" [ref=f5e715]
              - cell "Enabled" [ref=f5e717]
              - cell [ref=f5e719]:
                - generic [ref=f5e720]:
                  - button "" [ref=f5e721] [cursor=pointer]
                  - button "" [ref=f5e723] [cursor=pointer]
            - row [ref=f5e726]:
              - cell "" [ref=f5e727]:
                - generic [ref=f5e730] [cursor=pointer]:
                  - checkbox "" [ref=f5e731]
                  - generic [ref=f5e732]: 
              - cell "sofia.martinez.1030" [ref=f5e734]
              - cell "ESS" [ref=f5e736]
              - cell "Sofia Martinez" [ref=f5e738]
              - cell "Enabled" [ref=f5e740]
              - cell [ref=f5e742]:
                - generic [ref=f5e743]:
                  - button "" [ref=f5e744] [cursor=pointer]
                  - button "" [ref=f5e746] [cursor=pointer]
            - row [ref=f5e749]:
              - cell "" [ref=f5e750]:
                - generic [ref=f5e753] [cursor=pointer]:
                  - checkbox "" [ref=f5e754]
                  - generic [ref=f5e755]: 
              - cell "sup_test" [ref=f5e757]
              - cell "ESS" [ref=f5e759]
              - cell "Test Supervisor" [ref=f5e761]
              - cell "Enabled" [ref=f5e763]
              - cell [ref=f5e765]:
                - generic [ref=f5e766]:
                  - button "" [ref=f5e767] [cursor=pointer]
                  - button "" [ref=f5e769] [cursor=pointer]
            - row [ref=f5e772]:
              - cell "" [ref=f5e773]:
                - generic [ref=f5e776] [cursor=pointer]:
                  - checkbox "" [ref=f5e777]
                  - generic [ref=f5e778]: 
              - cell "user.int1234" [ref=f5e780]
              - cell "ESS" [ref=f5e782]
              - cell "99N75 5TlV" [ref=f5e784]
              - cell "Enabled" [ref=f5e786]
              - cell [ref=f5e788]:
                - generic [ref=f5e789]:
                  - button "" [ref=f5e790] [cursor=pointer]
                  - button "" [ref=f5e792] [cursor=pointer]
            - row [ref=f5e795]:
              - cell "" [ref=f5e796]:
                - generic [ref=f5e799] [cursor=pointer]:
                  - checkbox "" [ref=f5e800]
                  - generic [ref=f5e801]: 
              - cell "User20261030095657" [ref=f5e803]
              - cell "Admin" [ref=f5e805]
              - cell "Orange Test" [ref=f5e807]
              - cell "Enabled" [ref=f5e809]
              - cell [ref=f5e811]:
                - generic [ref=f5e812]:
                  - button "" [ref=f5e813] [cursor=pointer]
                  - button "" [ref=f5e815] [cursor=pointer]
            - row [ref=f5e818]:
              - cell "" [ref=f5e819]:
                - generic [ref=f5e822] [cursor=pointer]:
                  - checkbox "" [ref=f5e823]
                  - generic [ref=f5e824]: 
              - cell "user6925439" [ref=f5e826]
              - cell "ESS" [ref=f5e828]
              - cell "TimeF69254 TimeL69254" [ref=f5e830]
              - cell "Enabled" [ref=f5e832]
              - cell [ref=f5e834]:
                - generic [ref=f5e835]:
                  - button "" [ref=f5e836] [cursor=pointer]
                  - button "" [ref=f5e838] [cursor=pointer]
            - row [ref=f5e841]:
              - cell "" [ref=f5e842]:
                - generic [ref=f5e845] [cursor=pointer]:
                  - checkbox "" [ref=f5e846]
                  - generic [ref=f5e847]: 
              - cell "user7096213" [ref=f5e849]
              - cell "ESS" [ref=f5e851]
              - cell "TimeF70962 TimeL70962" [ref=f5e853]
              - cell "Enabled" [ref=f5e855]
              - cell [ref=f5e857]:
                - generic [ref=f5e858]:
                  - button "" [ref=f5e859] [cursor=pointer]
                  - button "" [ref=f5e861] [cursor=pointer]
    - generic [ref=f5e864]:
      - paragraph [ref=f5e865]: OrangeHRM OS 5.9
      - paragraph [ref=f5e866]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e867] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | // hooks - to avoid the duplicate code.
  2  | // 4 types
  3  | // beforeAll() - runs once before all tests
  4  | // afterAll() - runs once after all tests
  5  | // beforeEach() - runs before every test
  6  | // afterEach() - runs after every test
  7  | 
  8  | import{test,expect} from '@playwright/test'
  9  | 
  10 | test.beforeAll(async({})=>{
  11 |     console.log("Establish DB Connection for setup")
  12 | })  
  13 | 
  14 | test.afterAll(async({})=>{
  15 |     console.log("Terminate DB Connection")
  16 | })  
  17 | 
  18 | test.beforeEach(async({page})=>{
  19 |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  20 |   await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  21 |   await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  22 |   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  23 |   await page.getByRole('button', { name: 'Login' }).click();
  24 | })
> 25 | test.afterEach(async({page})=>{
     |      ^ Test timeout of 40000ms exceeded while running "afterEach" hook.
  26 |   await page.getByRole('listitem').filter({ hasText: 'manda user' }).locator('i').click();
  27 |   await page.getByRole('menuitem', { name: 'Logout' }).click();
  28 | })
  29 | test('Dashboard Test',async({page})=>{
  30 |   await expect(page.getByRole('img', { name: 'profile picture' }).nth(1)).toBeVisible();
  31 |   await expect(page.getByText('Time at Work')).toBeVisible();
  32 |   await expect(page.getByRole('banner').getByRole('img', { name: 'profile picture' })).toBeVisible();
  33 |   await expect(page.getByRole('heading')).toContainText('Dashboard');
  34 |   await expect(page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('list')).toContainText('Admin');
  35 |   await expect(page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('list')).toContainText('Recruitment');
  36 |   await expect(page.getByRole('banner')).toMatchAriaSnapshot(`- button "Upgrade"`);
  37 |   await expect(page.getByRole('button', { name: 'Assign Leave' })).toBeVisible();
  38 |   await expect(page.getByRole('button', { name: 'Leave List' })).toBeVisible();
  39 |   await expect(page.getByRole('button', { name: 'Timesheets' })).toBeVisible();
  40 |   await expect(page.getByRole('button', { name: 'Apply Leave' })).toBeVisible();
  41 |   await expect(page.getByRole('button', { name: 'My Leave' })).toBeVisible();
  42 |   await expect(page.getByRole('button', { name: 'My Timesheet' })).toBeVisible();
  43 |   await expect(page.getByRole('img', { name: 'profile picture' }).nth(2)).toBeVisible();
  44 |   await page.locator('div').filter({ hasText: /^Assign LeaveLeave ListTimesheetsApply LeaveMy LeaveMy Timesheet$/ }).first().click();
  45 | })
  46 | 
  47 | test('admin user visibility test',async({page})=>{
  48 |   await page.getByRole('link', { name: 'Admin' }).click();
  49 |   await expect(page.getByText('Admin').nth(2)).toBeVisible();
  50 | })
  51 | 
  52 | test('My Info Test',async({page})=>{
  53 |   await page.getByRole('link', { name: 'My Info' }).click();
  54 |   await expect(page.getByRole('textbox', { name: 'First Name' })).toBeVisible();
  55 |   await expect(page.getByRole('textbox').nth(4)).toBeVisible();
  56 |   await expect(page.getByRole('textbox').nth(5)).toBeVisible();
  57 |   await expect(page.getByRole('img', { name: 'profile picture' }).nth(1)).toBeVisible();
  58 | })
  59 | 
  60 | // BeforeAll
  61 | // BeforeEach
  62 | // test 1
  63 | // AfterEach
  64 | 
  65 | // BeforeEach
  66 | // test 2
  67 | // AfterEach
  68 | 
  69 | // BeforeEach
  70 | // test 3
  71 | // AfterEach
  72 | // AfterAll
```