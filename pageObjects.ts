import { By, WebDriver } from "selenium-webdriver"; 
import {BasePage} from "./basePage" 

export class f1Page extends BasePage {
    driver: WebDriver
    url: string

    cookiesBtn: By = By.xpath('(//button[@class="trustarc-agree-btn"])')
    exitBtn: By = By.xpath('//button[@class="sailthru-overlay-close"]')
    driverTab: By = By.xpath('(//span[@class="link-text"]) [5]')
    danielRicci: By = By.xpath('(//div[@class="listing-item--image-wrapper f1-pattern-fill"]) [14]')
    driverResult: By = By.xpath('(//h1[@class="driver-name"])')
   
    teamsTab: By = By.xpath('(//span[@class="link-text"]) [6]')
    ferrari: By = By.xpath('(//div[@class="listing-info"]) [1]')
    teamResult: By = By.xpath('(//h1[@class="headline"])')
   
    scheduleTab: By = By.xpath('(//span[@class="link-text"]) [3]')
    spain: By = By.xpath('(//div[@class="event-place"]) [1]') 
    scheduleResult: By = By.xpath('(//h2[@class="f1--s"])')

    signInBtn: By = By.xpath('(//span[@class="user-icon-text"]) [1]')
    emailInput: By = By.xpath('//input[@name="Login"]')
    passwordInput: By = By.xpath('//input[@name="Password"]')
    signInBtn2: By = By.xpath('(//button[@class="btn btn-primary"]) [1]')
    signInresult: By = By.xpath('(//div[@class="field alert alert-danger alert-error"])')

    accountBtn: By = By.xpath('(//a[@class="user-account-actions btn btn--default btn--icon-left btn--transparent"])')
    logoutBtn: By = By.xpath('(//a[@class="btn btn--alpha logout-link"])')

    manageAccountBtn: By = By.xpath('(//a[@class="btn btn--default my-account"])')
    accountResults: By = By.xpath('(//div[@class="panel-heading"])')
    




    constructor() {
        super({url: 'https://www.formula1.com/en.html'})
    }
}