import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

  seleniumAddress: "http://172.24.0.1:4444/wd/hub",

  SELENIUM_PROMISE_MANAGER: false,

  baseUrl: "http://172.24.0.1:3000/",

    multiCapabilities: [
      {
        browserName: "chrome",
        shardTestFiles: true,
        maxInstances: 2
      },
      {
        browserName: "firefox",
        'moz:firefoxOptions': {
            'args': ['--safe-mode']},
        shardTestFiles: false,
        'count': 2
      }
    ],
  
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
  
  //  suites: {
    //  cucumberFeature: ["../../features/*.feature"]
    //},

    specs: [
        "../../features/*.feature",
    ],
  
    onPrepare: function() {
      browser.ignoreSynchronization = true;
      browser.manage().window().maximize();
      Reporter.createDirectory(jsonReports);
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },

    cucumberOpts: {
      strict: true,
      format: "json:./reports/json/cucumber_report.json",
      require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
      tags: "@Validation or @RegisterE2E"
    }
  };