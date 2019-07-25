import { browser, protractor,element,by } from "protractor";
import { RegisterPageObject } from "../pages/registerPage";
const randonFakeData = require('casual');
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const home: RegisterPageObject = new RegisterPageObject();

Given('Im user logged in', async function() {
    await browser.refresh();
    await expect(browser.getTitle()).to.eventually.equal("Test Form");
});

When('I insert a name', async function () {
    await home.nameInput.sendKeys(randonFakeData.full_name);
});

When('I insert a login', async function () {
    await home.loginInput.sendKeys(randonFakeData.domain);
});

When('I inform a password',async function () {
    await home.passwordInput.sendKeys(randonFakeData.password);
});

When('I inform an email',async function () {
    await home.emailInput.sendKeys(randonFakeData.email);
});

When('I insert a main address',async function () {
    await home.addressInput.sendKeys(randonFakeData.address);
});

When('I inform additional address details',async function () {
    await home.addressDetailsInput.sendKeys(randonFakeData.address2);
});

When('I select an {string}',async function (education) {
    await home.selectEducation(education);
});

When('I select a {string} of interest', async function (course) {
    await home.selectCourse(course);
});

When('I save the form',async function() {
    await home.clickSubmit();
});

Then('the system should inform, register successfully', async function () {
    var expected= home.messageSuccess;
    await expect(home.verifyRegisterSuccess()).to.eventually.equal(expected);
    home.clickClose().click();
});

Then('the system not should be register', async function () {
   await expect(home.verifyModalRegister()).to.eventually.equal(false);
});

When('I inform a wrong email',async function () {
    await home.emailInput.sendKeys(randonFakeData.name);
});