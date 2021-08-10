import {element, by} from 'protractor';

export class LoginPage{

    //Email ID
    private EmailIDfield = element(by.id('username'));
    
    //Password
    private Passwordfield = element(by.id('userkey'));
    
    //Sign In button
    private SignInbutton = element(by.css('button.btn.login-btn.ml-auto'));

    enterEmail(EmailID:string):void{
        this.EmailIDfield.sendKeys(EmailID);
    }
    
    enterPassword(Password:string):void{
        this.Passwordfield.sendKeys(Password);
    }

    clickSigninbutton():void{
        this.SignInbutton.click();
    }

    clearEmailID():void{
        this.EmailIDfield.clear()
    }

    clearPassword():void{
        this.Passwordfield.clear()
    }
}
