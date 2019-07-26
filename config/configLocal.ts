import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    seleniumAddress: "http://localhost:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "http://localhost:3000/",


   capabilities: { 
       browserName: "chrome",
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
     //   browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        tags: "@Validation or @RegisterE2E",
        strict: true,
    },
    
    onComplete: () => {
        Reporter.createHTMLReport();
    },
};