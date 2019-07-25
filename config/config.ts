import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    seleniumAddress: "http://localhost:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "http://localhost:3000/",

   // capabilities: {
     //   browserName: "chrome",
   // },

    multiCapabilities: [{
        'browserName': 'chrome',
            shardTestFiles: true,
            maxInstances: 2,
            specs: ['./features/register.feature']
         },{
        'browserName': 'firefox',
             'count': 2,
              specs: ['./features/register_required.feature']
         //}
         //,{
           // 'browserName': 'internet explorer',
            // version: 'ANY',
            //'ignoreProtectedModeSettings': true,
            //specs: ['./features/register_required.feature']
        }],
    

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        strict: true,
        tags: "@Validation or @OutlineScenario",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
