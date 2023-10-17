/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/registration";
import "../../../../../../../../../support/Utils/subscriberCommands";
import "../../../../../../../../../support/Utils/AdministratorCommands"
import "../../../../../../../../../support/Utils/BusinessUserCommands";
import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import myActivity from '../../../../../../../../../support/pageObjects/MyActivity/myActivity';
import API from '../../../../../../../../../support/pageObjects/API';
import securityQuestion from '../../../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';


//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
const APIPage = new API()
const myActivityPage = new myActivity()
const securityQuestionPage = new securityQuestion()
const uuid = () => Cypress._.random(1e8)
const uuid1 = () => Cypress._.random(1e6)
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()
var loginId, mobile, KycValue, amount, name, ifscnum, accnumber
const kycid = () => Cypress._.random(1e8)
const timestamp = (new Date).getTime()
KycValue = "A" + timestamp
mobile = "77" + uuid1()
var mobile1, Submobile, loginId, name
mobile1 = "77" + uuid()
var filename = 'cypress/fixtures/userData/AdministratorData.json'
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'
var BuisnessReg = 'cypress/fixtures/userData/BusinessUsersData.json'
var BuisnessRegO2C = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
var BankData = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'

//-----------------------------------variable declaration-----------------
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

function getRandomName1() {
  name = "12";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 7; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


// //--------------------------Test Scripts--------------------------------------------------------------

And('Select User type as Business and Select user role and click on Payment Gateway', function () {

    pageLogin.getiFrame()
    cy.wait(2000)
    registerPage.getregisterPageTitle().should('have.text', this.data2.registerPageTitle)
    registerPage.getSelectUserTypeTab().contains(this.data2.userType2).click({ force: true })
    registerPage.getSelectUserTypeTab().contains(this.data2.userType2).focused()
    registerPage.getUserRole().contains(this.data2.userRole7).click({ force: true })
    
  })

  And('Enter all the required business user details for Payment gateway', function () {

    cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
    cy.wait(2000)
    //const uuid = () => Cypress._.random(1e8)
    let mobileut;
    const m = parseInt(Date.now()/100000);
    mobileut = "77" + m
  
    cy.wait(2000)
    const lgid = () => Cypress._.random(1e5)
    loginId = this.data2.personalInfo.name + lgid()
    cy.wait(2000)
  
    //cy.iframe().find('select[data-test-id="title"]')
      //.select(this.data2.personalInfo.Title, { force: true })
  
    //   recurse(
    //     () => registerPage.getMobileNumber().clear().type(mobileut, { force: true }),
    //     () => registerPage.getFirstName().clear().type(getRandomName(), { force: true }),
    //     (uniqueness) => (uniqueness) == registerPage.getuniqueness()
    //   )
    //   cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data) => {
    //     data.registeredMobilePaymentGateway =mobileut
    //     cy.writeFile('cypress/fixtures/userData/BusinessUsersData.json',data)
    // })
      //cy.writeFile('cypress/fixtures/userData/BusinessUsersData.json',{registeredMobilePaymentGateway:mobileut})
      registerPage.getLastName().type(getRandomName(), { force: true })
      registerPage.getFirstName().type(getRandomName(), { force: true })
      cy.MobileNumber()
      registerPage.getMobileNumber().invoke('val').then((val) => {
        cy.readFile(BuisnessReg).then((data) => {
          data.registeredMobilePaymentGateway = val
          cy.writeFile(BuisnessReg, data)
        })
      })
      registerPage.getNextButtonBasic().eq(0).click({ force: true })
    


// registerPage.getReguProfile().select(this.data2.personalInfo.ReguProfile, { force: true })
 // cy.readFile(RegulatoryMarketingProfile).then((data) => {
   //    let RegProfile = data.RegulatoryProfileName
   registerPage.getReguProfile().select(this.data2.OReguProfile, { force: true })
   // })
 //registerPage.getMarketingProfile().select(this.data2.personalInfo.MarketProfile, { force: true })
// cy.readFile(RegulatoryMarketingProfile).then((data) => {
  //   let MarProfile = data.MarketingProfileNameDistributer
      registerPage.getMarketingProfile().select(this.data2.PGMarketingProfile, { force: true })
  //  })
  cy.wait(2000)
   registerPage.getNextButtonBasic212().click({force:true})

})


Then('Click on Submit Button and Verify the success message text', function () {
  registerPage.getSubmitButton().click({force:true})
  cy.wait(3000)
  //.getSuccessText().should('have.text', Success)
})


And('Assert Created Buissness User Mobile Number and Write Created on time for PaymentGateway', function () {
  cy.wait(2000)
  cy.readFile(BuisnessReg).then((user) => {
    let BusinessMobile = user.registeredMobilePaymentGateway
    var BusinessUserMobile = " " + BusinessMobile
    manageUsersPage.getAssertMobile().eq(1).should('have.text', BusinessUserMobile)
  })
  cy.wait(2000)
  myActivityPage.getCreatedOnTime().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(BuisnessReg).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(BuisnessReg, data)
    })
  })
})