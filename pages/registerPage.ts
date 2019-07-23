import { $, ElementFinder, browser,element,by, } from "protractor";
import { protractor } from "protractor/built/ptor";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

export class RegisterPageObject {
    public nameInput: ElementFinder;
    public loginInput: ElementFinder;
    public passwordInput: ElementFinder;
    public emailInput: ElementFinder;
    public addressInput: ElementFinder;
    public addressDetailsInput: ElementFinder;
    public educationTechnician: ElementFinder;
    public educationBachelorsDegree: ElementFinder;
    public educationMasterDegree: ElementFinder;
    public educationDoctorateDegree: ElementFinder;
    public educationHighlander: ElementFinder;
    public courseSelect: ElementFinder;
    public submit: ElementFinder;
    public messageSuccess = 'Registration Success';
    timeout=2000;
    
    constructor() {
        this.nameInput = $("input[id='name']");
        this.loginInput = $("input[id='login']");
        this.passwordInput = $("input[id='password']");
        this.emailInput = $("input[id='email']");
        this.addressInput = $("input[id='address']");
        this.addressDetailsInput = $("textarea[id='address-details']");
        this.educationTechnician = $("input[id='opt-tecnico']");
        this.educationBachelorsDegree = $("input[id='opt-tecnico']");
        this.educationMasterDegree = $("input[id='opt-tecnico']");
        this.educationDoctorateDegree = $("input[id='opt-tecnico']");
        this.educationHighlander = $("input[id='opt-tecnico']");
        this.courseSelect = $("input[id='qa-select']");
        this.submit = $("input[id='btn-save']");
    }
    
    async selectEducation(education:string) {
        var elemEducation = await element(by.css("#qa-radio ."+education));
        this.waitElement(elemEducation.click());
    }
    
    async selectCourse(course:string) {
        await element(by.tagName("select#qa-select")).click();
        await element(by.xpath("//option[text()='"+course+"']")).click();
    }
    async clickSubmit() {
        await element(by.buttonText('Save')).click();
    }
    async verifyRegisterSuccess() {
        return element(by.css('.messageBox #message')).getText();
    }

    async clickClose() {
        await element(by.buttonText('close')).click();
    }
        waitElement(element:ElementFinder){
        var EC=protractor.ExpectedConditions;
        return browser.wait(EC.presenceOf(element),this.timeout, element+":NOT FOUND!!!");
     }
}
    

