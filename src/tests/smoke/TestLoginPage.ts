import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import using = require("jasmine-data-provider");
import { BaseClass } from '../../main/BaseClass';
import { LoginPage } from '../../pages/LoginPage';


describe("Login Module", () => {
    let baseclass = new BaseClass();
    let loginpage = new LoginPage();

    beforeAll(()=>{
        baseclass.initialize();
    })    

    it("Check Login is successful",()=>{        
        loginpage.enterEmail('blmadmin@srinsofttech.com');
        loginpage.clearEmailID()
        loginpage.enterEmail('blmadmin@srinsofttech.com');
        loginpage.enterPassword('sst12345');
        loginpage.clickSigninbutton();
    })
})

describe("Project Module", () => {   

    beforeAll(()=>{
        
    })

    it("Get Project Page title",async ()=>{      
        expect(await browser.getTitle()).toEqual("a");
    })
})