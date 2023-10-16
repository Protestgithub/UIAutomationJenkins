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





And('Select User type as Business and Select Agent user role', function()
  {
  
   pageLogin.getiFrame()
   cy.wait(2000)
   registerPage.getregisterPageTitle().should('have.text', this.data2.registerPageTitle)
   registerPage.getSelectUserTypeTab().contains(this.data2.userType2).click({force:true})
   registerPage.getSelectUserTypeTab().contains(this.data2.userType2).focused()
   registerPage.getUserRole().contains(this.data2.userRole008).click({force:true})
   registerPage.getRegistrationMode().eq(0).click({force: true})
  })


  And('Enter all the required business user details Creation for Agent user role', function () {
//     //const uuid = () => Cypress._.random(1e8)
//     let mobileut;
//     const m = parseInt(Date.now()/100000);
//     mobileut = "77" + m
  
//     cy.wait(2000)
//     const lgid = () => Cypress._.random(1e5)
//     loginId = this.data2.personalInfo.name + lgid()
//     cy.wait(2000)
  
//     cy.iframe().find('select[data-test-id="title"]')
//       .select(this.data2.personalInfo.Title, { force: true })
//     // cy.get('input[id="dateOfBirth"]').click()
    
//     //registerPage.getDOB().dblclick().type('1 Oct, 990') //01 Jan, 142022  01 Jan, 12022
//     //-----------------------Mobile Number OTP-------------------------------------------------------------------
//     recurse(
//       () => registerPage.getMobileNumber().clear().type(mobileut, { force: true }),
//       () => registerPage.getFirstName().clear().type(getRandomName(), { force: true }),
//       (uniqueness) => (uniqueness) == registerPage.getuniqueness()
//     )
//     cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data) => {
//       data.registeredMobileAgent =mobileut
//       cy.writeFile('cypress/fixtures/userData/BusinessUsersData.json',data)
//   })
//     //cy.writeFile('cypress/fixtures/userData/BusinessUsersData.json',{registeredMobileAgent:mobileut})
//     registerPage.getLastName().type(getRandomName(), { force: true })
//     cy.OTP(Cypress.env('Adminurl'),Cypress.env('port'))
//     cy.wait(2000)
//     //----------------email id otp---------------------------------------------------//
//     cy.getBusinessrandomUserEmailID()
//     cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
//     cy.OTP(Cypress.env('Adminurl'),Cypress.env('port'))
//     cy.wait(2000)
  
//     registerPage.getSupportOnline().select(this.data2.personalInfo.online, { force: true })
//     registerPage.getAdressLine1().type(this.data2.personalInfo.addressLine1, { force: true })
//     registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
//     registerPage.getState().select(this.data2.personalInfo.state, { force: true })
//     registerPage.getCity().select(this.data2.personalInfo.city, { force: true })
//     registerPage.getLatitude().type(this.data2.personalInfo.Latitude, { force: true })
//     registerPage.getlongitude().type(this.data2.personalInfo.Longitude, { force: true })
   
    cy.iframe().find('select[data-test-id="title"]').select(this.data2.personalInfo.Title, { force: true })
    cy.getBasicInfoTextFields()
    cy.MobileNumber()
    cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
    if (Cypress.env('otpVerification').includes("Yes")) {
      cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
    }
    else {
      cy.log("No OTP verification required")
    }
    registerPage.getMobileNumber().invoke('val').then((val) => {
      cy.readFile(BuisnessReg).then((data) => {
        data.registeredMobileAgent = val
        cy.writeFile(BuisnessReg, data)
      })
    })

 
    cy.getAtmMachineEmailID()
    registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
    registerPage.getState().select(this.data2.subPersonalInfo.state, { force: true })
    registerPage.getCity().select(this.data2.subPersonalInfo.city, { force: true })
    
    if (Cypress.env('otpVerification').includes("Yes")) {
      cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
    }
    else {
      cy.log("No OTP verification required")
    }
    registerPage.getSupportOnline().select(this.data2.personalInfo.online, { force: true })
    cy.wait(5000)
    registerPage.getLatitude().clear().type(this.data2.personalInfo.Latitude, { force: true })
    registerPage.getlongitude().clear().type(this.data2.personalInfo.Longitude, { force: true })   
    registerPage.getNextButtonBasic().eq(0).click({ force: true })

    //------------------------------------------------KYC-------------------------------------------------
    let kycut
    const k = parseInt(Date.now());
  
    kycut = "A" + k
    registerPage.getKYCButton().eq(0).click({ force: true })
    cy.wait(2000)
    //cy.intercept('/mobiquitypay/v1/user/enums?parent-value=').as('all')
    registerPage.getKYCIDType().select(this.data2.KycInfo8.KycIDType, { force: true })
    //cy.checkAPI('/mobiquitypay/v1/user/enums?parent-value=')
    registerPage.getKYCIDValue().type(kycut, { force: true })
  
  
    cy.wait(2000)
    registerPage.getMakeThisPrimaryButton().eq(2).click({ force: true })
    cy.wait(2000)
   // cy.intercept('/mobiquitypay/v1/marketingProfiles?categoryCode=').as('all')
    registerPage.getNextButtonBasic1().click({ force: true })
    //cy.checkAPI('/mobiquitypay/v1/marketingProfiles?categoryCode=')
  
  
  //------------------------------------Hierarchy--------------------------------------------------------------
    cy.wait(6000)
    registerPage.getParent().type(this.data006.registeredMobile,{force:true})
    cy.wait(10000)
    registerPage.getGo().click({force:true})
    cy.wait(10000)
    registerPage.getRadioButton().click({force:true})
    registerPage.getNextButtonBasic2().click({force: true})
  
  
   //-----------------------------Profile---------------------------------------------------------------
  
    cy.wait(5000)
    //cy.readFile(SubProfileName).then((data) => {
    //  let Profile = data.Distributer
      registerPage.getSecurityProfile().select(this.data2.ASecurityProfile, { force: true })
   // })
   // cy.readFile(SubAuthProfileName).then((data) => {
    //  let Profile1 = data.BusinessDistributor
      registerPage.getAuthProfile().select(this.data2.AAuthProfile, { force: true })
    //})
   // registerPage.getReguProfile().select(this.data2.personalInfo.ReguProfile, { force: true })
   // cy.readFile(RegulatoryMarketingProfile).then((data) => {
     //    let RegProfile = data.RegulatoryProfileName
       registerPage.getReguProfile().select(this.data2.OReguProfile, { force: true })
      // })
    //registerPage.getMarketingProfile().select(this.data2.personalInfo.MarketProfile, { force: true })
   // cy.readFile(RegulatoryMarketingProfile).then((data) => {
     //   let MarProfile = data.MarketingProfileNameDistributer
         registerPage.getMarketingProfile().select(this.data2.AMarketingProfile, { force: true })
     //  })
     registerPage.getNextButtonBasic2().click({force:true})
     cy.wait(5000)
  registerPage.getNextButtonBasic3().click({force:true})
  cy.wait(5000)
  
    //Newly Added code
    cy.intercept('mobiquitypay/v1/ums/user').as('all')
    registerPage.getSubmitButton().click({ force: true })
    cy.wait('@all', {timeout: 70000}).then(inter => {
      if(inter.response.statusCode>500)
      {
     registerPage.getErrorMessage().should('include.text', 'It is taking too long to respond. You will receive a notification with the result soon')
     registerPage.getErrorDone().click({force:true})
      }
      else{
        return
      }
      cy.log(JSON.stringify(inter.response.statusCode))
      console.log(JSON.stringify(inter.response.statusCode))
    })
  
  
   //registerPage.getSubmitButton().click({ force: true })
  
  
  })
  
  And('Assert Created Buissness User Mobile Number and Write Created on time for Agent', function () {
    cy.wait(2000)
    cy.readFile(BuisnessReg).then((user) => {
      let BusinessMobile = user.registeredMobileAgent
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
  
  And('Select User type as Business and Select user role as SuperAgent', function () {
    cy.wait(6000)
    pageLogin.getiFrame()
    cy.wait(2000)
    registerPage.getregisterPageTitle().should('have.text', this.data2.registerPageTitle)
    registerPage.getSelectUserTypeTab().contains(this.data2.userType2).click({ force: true })
    registerPage.getSelectUserTypeTab().contains(this.data2.userType2).focused()
    registerPage.getAgentButton().click({ force: true })
   // registerPage.getUserRole().contains(this.data2.userRole13).click({ force: true })
    //registerPage.getUserRole().contains(this.data2.userRole13).focused()
   cy.wait(3000)
    registerPage.getRegistrationMode().eq(0).click({ force: true })
  })    


  And('Enter all the required business user details Creation for SuperAgent user role', function () {

//     //const uuid = () => Cypress._.random(1e8)
//     let mobileut;
//     const m = parseInt(Date.now()/100000);
//     mobileut = "77" + m
  
//     cy.wait(2000)
//     const lgid = () => Cypress._.random(1e5)
//     loginId = this.data2.personalInfo.name + lgid()
//     cy.wait(2000)
  
//     cy.iframe().find('select[data-test-id="title"]')
//       .select(this.data2.personalInfo.Title, { force: true })
//     // cy.get('input[id="dateOfBirth"]').click()
    
//     //registerPage.getDOB().dblclick().type('1 Oct, 990') //01 Jan, 142022  01 Jan, 12022
//     //-----------------------Mobile Number OTP-------------------------------------------------------------------
//     recurse(
//       () => registerPage.getMobileNumber().clear().type(mobileut, { force: true }),
//       () => registerPage.getFirstName().clear().type(getRandomName(), { force: true }),
//       (uniqueness) => (uniqueness) == registerPage.getuniqueness()
//     )
  
//     cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data) => {
//       data.registeredMobileSuperAgent =mobileut
//       cy.writeFile('cypress/fixtures/userData/BusinessUsersData.json',data)
//   })
//     //cy.writeFile('cypress/fixtures/userData/BusinessUsersData.json',{registeredMobileSuperAgent:mobileut})
//     registerPage.getLastName().type(getRandomName(), { force: true })
//     cy.OTP(Cypress.env('Adminurl'),Cypress.env('port'))
//     cy.wait(2000)
//     //----------------email id otp---------------------------------------------------//
//     cy.getBusinessrandomUserEmailID()
//     cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
//     cy.OTP(Cypress.env('Adminurl'),Cypress.env('port'))
//     cy.wait(2000)
  

cy.iframe().find('select[data-test-id="title"]').select(this.data2.personalInfo.Title, { force: true })
cy.getBasicInfoTextFields()
cy.MobileNumber()
cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
if (Cypress.env('otpVerification').includes("Yes")) {
  cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
}
else {
  cy.log("No OTP verification required")
}
registerPage.getMobileNumber().invoke('val').then((val) => {
  cy.readFile(BuisnessReg).then((data) => {
    data.registeredMobileSuperAgent = val
    cy.writeFile(BuisnessReg, data)
  })
})
    
cy.getAtmMachineEmailID()
registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
registerPage.getState().select(this.data2.subPersonalInfo.state, { force: true })
registerPage.getCity().select(this.data2.subPersonalInfo.city, { force: true })

if (Cypress.env('otpVerification').includes("Yes")) {
  cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
}
else {
  cy.log("No OTP verification required")
}

    //registerPage.getSupportOnline().select(this.data2.personalInfo.online, { force: true })
    //registerPage.getAdressLine1().type(this.data2.personalInfo.addressLine1, { force: true })
    //registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
    //registerPage.getState().select(this.data2.personalInfo.state, { force: true })
    //registerPage.getCity().select(this.data2.personalInfo.city, { force: true })
   // registerPage.getLatitude().type(this.data2.personalInfo.Latitude, { force: true })
   // registerPage.getlongitude().type(this.data2.personalInfo.Longitude, { force: true })
    registerPage.getNextButtonBasic().eq(0).click({ force: true })
  //------------------------------------------------KYC-------------------------------------------------
    let kycut
    const k = parseInt(Date.now());
  
    kycut = "A" + k
    registerPage.getKYCButton().eq(0).click({ force: true })
    cy.wait(2000)
   // cy.intercept('/mobiquitypay/v1/user/enums?parent-value=').as('all')
    registerPage.getKYCIDType().select(this.data2.KycInfo8.KycIDType, { force: true })
    //cy.checkAPI('/mobiquitypay/v1/user/enums?parent-value=')
    registerPage.getKYCIDValue().type(kycut, { force: true })
  
  
    cy.wait(2000)
    registerPage.getMakeThisPrimaryButton().eq(1).click({ force: true })
    cy.wait(2000)
   // cy.intercept('/mobiquitypay/v1/marketingProfiles?categoryCode=').as('all')
    registerPage.getNextButtonBasic1().click({ force: true })
    //cy.checkAPI('/mobiquitypay/v1/marketingProfiles?categoryCode=')
  
  
  //------------------------------------Hierarchy--------------------------------------------------------------
  
    registerPage.getParent().type(this.data006.registeredMobile,{force:true})
    cy.wait(5000)
    registerPage.getGo().click({force:true})
    cy.wait(10000)
    registerPage.getRadioButton().click({force:true})
    registerPage.getNextButtonBasic2().click({force: true})
  
  
   //-----------------------------Profile---------------------------------------------------------------
  
    cy.wait(5000)
    //cy.readFile(SubProfileName).then((data) => {
    //  let Profile = data.Distributer
      registerPage.getSecurityProfile().select(this.data2.SASecurityProfile, { force: true })
   // })
   // cy.readFile(SubAuthProfileName).then((data) => {
    //  let Profile1 = data.BusinessDistributor
      registerPage.getAuthProfile().select(this.data2.SAAuthProfile, { force: true })
    //})
   // registerPage.getReguProfile().select(this.data2.personalInfo.ReguProfile, { force: true })
   // cy.readFile(RegulatoryMarketingProfile).then((data) => {
     //    let RegProfile = data.RegulatoryProfileName
       registerPage.getReguProfile().select(this.data2.MReguProfile, { force: true })
      // })
    //registerPage.getMarketingProfile().select(this.data2.personalInfo.MarketProfile, { force: true })
   // cy.readFile(RegulatoryMarketingProfile).then((data) => {
     //   let MarProfile = data.MarketingProfileNameDistributer
         registerPage.getMarketingProfile().select(this.data2.SAMarketingProfile, { force: true })
     //  })
     registerPage.getNextButtonBasic2().click({force:true})
  
  registerPage.getNextButtonBasic3().click({force:true})
  
    //Newly Added code
    cy.intercept('mobiquitypay/v1/ums/user').as('all')
    registerPage.getSubmitButton().click({ force: true })
    cy.wait('@all', {timeout: 70000}).then(inter => {
      if(inter.response.statusCode>500)
      {
     registerPage.getErrorMessage().should('include.text', 'It is taking too long to respond. You will receive a notification with the result soon')
     registerPage.getErrorDone().click({force:true})
      }
      else{
        return
      }
      cy.log(JSON.stringify(inter.response.statusCode))
      console.log(JSON.stringify(inter.response.statusCode))
    })
  
  
   //registerPage.getSubmitButton().click({ force: true })
  
  
  })
  
  

  And('Assert Created Buissness User Mobile Number and Write Created on time for SuperAgent', function () {
    cy.wait(2000)
    cy.readFile(BuisnessReg).then((user) => {
      let BusinessMobile = user.registeredMobileSuperAgent
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
  