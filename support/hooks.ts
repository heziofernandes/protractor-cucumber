const { BeforeAll, After, AfterAll, Status } = require("cucumber");
import { browser } from "protractor";
import { config } from "../config/config";

BeforeAll({timeout: 100 * 1000}, async () => {
    await browser.get(config.baseUrl);
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});

After(function(scenario) {
    if (scenario.result.status === Status.FAILED) {
      const attach = this.attach; // cucumber's world object has attach function which should be used
      return browser.takeScreenshot().then(function(png) {
        const decodedImage = Buffer.from(png, "base64");
        return attach(decodedImage, "image/png");
      });
    }
  });