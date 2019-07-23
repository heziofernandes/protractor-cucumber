import { browser, protractor,element,by } from "protractor";
import { RegisterPageObject } from "../pages/registerPage";
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const home: RegisterPageObject = new RegisterPageObject();

Given('Im user logged in', async function() {
    await expect(browser.getTitle()).to.eventually.equal("Test Form");
});

When('I insert a name', async function () {
    await home.nameInput.sendKeys("TEST");
});

When('I insert a login', async function () {
    await home.loginInput.sendKeys("TEST");
});

When('I inform a password',async function () {
    await home.passwordInput.sendKeys("tests");
});

When('I inform an email',async function () {
    await home.emailInput.sendKeys("tests@mail.com");
});

When('I insert a main address',async function () {
    await home.addressInput.sendKeys("mailcom");
});

When('I inform additional address details',async function () {
    await home.addressDetailsInput.sendKeys('test');
});

When('I select an education training',async function () {
    await home.selectEducation();
});

When('I select a course of interest', async function () {
    await home.selectCourse();
});

When('I save the form',async function() {
    await home.clickSubmit();
});

Then('the system should inform, register successfully', async function () {
    var expected= home.messageSuccess;
    await expect(home.verifyRegisterSuccess()).to.eventually.equal(expected);
});