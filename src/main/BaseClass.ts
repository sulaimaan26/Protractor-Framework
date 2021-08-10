import {browser} from 'protractor';


export class BaseClass{

    url:string = 'http://192.168.2.14/blm/login';

    initialize(){
        browser.get(this.url);
    }
}