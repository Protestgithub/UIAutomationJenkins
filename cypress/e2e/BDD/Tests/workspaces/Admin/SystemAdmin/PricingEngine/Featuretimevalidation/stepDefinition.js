/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import PricingEnginePage from '../../../../../../../../support/pageObjects/PricingEngine/PricingEnginePage'
import W2BandB2W from "../../../../../../../../support/pageObjects/W2BandB2W/W2BandB2W";


const pricingEnginePage = new PricingEnginePage()
const W2B = new W2BandB2W()

//------------------------------------------------------------------------

And('Click on CashOut',function(){
  pricingEnginePage.getCashOut().click()
  cy.wait('@PricingEngine', {timeout:40000}) 
  cy.wait(2000)
})

And('Enter all details and add service charge for cashout', function () {
  cy.wait(5000)
  var number = "0.5"
  var numberone = "0.8"
  pricingEnginePage.getCurrency().select(this.data05.Currency)
  pricingEnginePage.getCurrencyChangeButton().click()
  cy.wait(3000)
  cy.wait('@PricingEngine', {timeout:40000})
  pricingEnginePage.getAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type("Default Charge", { force: true })

  pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(0).should('be.visible', { force: true })
  })
  pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  pricingEnginePage.getStartTime().click({ force: true })

  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(1).should('be.visible', { force: true })
  })
  pricingEnginePage.getEndTime().click({ force: true })


  pricingEnginePage.getWhoPays().select('Sender', { force: true })
  pricingEnginePage.getSVAType().select("Normal", { force: true })
  pricingEnginePage.getWhomeToPay().select(this.data05.WhomeToPay, { force: true })
  pricingEnginePage.getChargeStatmentPricing().click({ force: true })
  pricingEnginePage.getPricingPercntage().type('0')
  pricingEnginePage.getPricingFixedAmt().type('1.5')
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  cy.wait(1000)
  //cy.intercept(this.data20.SubmitPolicy).as('getSubmitPolicy')
  pricingEnginePage.getSubmitPolicy().click({ force: true })
  cy.wait(1000)
  //cy.wait('@getSubmitPolicy', { timeout: 30000 })
  //cy.intercept(this.data20.SubmitBtn).as('getSubmit')
  cy.intercept('/shulka/serviceChargePolicy').as('getSubmit')
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait(2000)
  //cy.wait('@getSubmit', { timeout: 30000 })
  // pricingEnginePage.getServiceHeader().contains(this.data05.textmsg)
})


And('Enter all commssion details for start and end time', function () {

  pricingEnginePage.getCurrency().select(this.data05.Currency)
  pricingEnginePage.getCurrencyChangeButton().click()
  cy.wait('@PricingEngine', {timeout:40000})
  cy.wait(2000)
  pricingEnginePage.getAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type('Commission rule', { force: true })
  pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(0).should('be.visible', { force: true })
  })
  pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  pricingEnginePage.getStartTime().click({ force: true })

  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(1).should('be.visible', { force: true })
  })
  pricingEnginePage.getEndTime().click({ force: true })
   pricingEnginePage.getSenderRoleCom().select('Customer', { force: true })
  pricingEnginePage.getSenderHierarchyCom().select('Customer', { force: true })
  
  pricingEnginePage.getSenderGradeCom1().click({ force: true })
  
  pricingEnginePage.getGoldCustomer().click({ force: true })
  
  pricingEnginePage.getSilverCustomer().click({ force: true })
  
  pricingEnginePage.getWhoPays().select(this.data05.Senderforcashout, { force: true })
  pricingEnginePage.getSVAType().select(this.data05.SenderSVAtypeCom, { force: true })
  pricingEnginePage.getWhomeToPay().select(this.data05.WhomeToPayCom, { force: true })
  pricingEnginePage.getChargeStatmentPricing().click({ force: true })
  pricingEnginePage.getPricingPercntage().type('0')
 
  pricingEnginePage.getPricingFixedAmt().type('1.5')
  
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  
  pricingEnginePage.getSubmitPolicy().dblclick({ force: true })
  cy.wait(2000)
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait(2000)
  pricingEnginePage.getCommissionHeader().should('contain', this.data05.comsuccess)
})

//----------------------------------------------------------

And('Enter details for discount rule for time validations', function () {
  pricingEnginePage.getCurrency().select(this.data05.Currency)
  pricingEnginePage.getCurrencyChangeButton().click()
  cy.wait(3000)
  cy.wait('@PricingEngine', {timeout:40000})

  cy.wait(2000)
  pricingEnginePage.getDiscountAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type("Default Rule", { force: true })

  pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(0).should('be.visible', { force: true })
  })
  pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  pricingEnginePage.getStartTime().click({ force: true })

  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(1).should('be.visible', { force: true })
  })
  pricingEnginePage.getEndTime().click({ force: true })

  pricingEnginePage.getDiscountGivenTo().select("Sender")
  pricingEnginePage.getDiscountFixedAmount().type("0.5")
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  //cy.intercept(this.data20.SubmitPolicy).as('getSubmitPolicy')
  pricingEnginePage.getSubmitPolicy().click({ force: true })
  cy.wait(2000)
 cy.intercept('/shulka/serviceChargePolicy').as('getSubmit')
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait('@getSubmit', {timeout:60000})
 pricingEnginePage.getServiceHeader().should('contain', this.data05.textmsg)
})

And('Enter details for service charge tax for time validation', function () {
  pricingEnginePage.getCurrency().select(this.data05.Currency)
  pricingEnginePage.getCurrencyChangeButton().click()
  cy.wait(3000)
  cy.wait('@PricingEngine', {timeout:40000})

  cy.wait(2000)
  pricingEnginePage.getTaxAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type('servicetaxrule')
  
  pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(0).should('be.visible', { force: true })
  })
  pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  pricingEnginePage.getStartTime().click({ force: true })

  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(1).should('be.visible', { force: true })
  })
  pricingEnginePage.getEndTime().click({ force: true })



  
  pricingEnginePage.getPricingPercntage().type('0')
  
  pricingEnginePage.getPricingFixedAmt().type('0.5')
 
   cy.wait(2000)
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
   cy.wait(1000)
  //cy.intercept(this.data20.SubmitPolicy).as('getSubmitPolicy')
  pricingEnginePage.getSubmitPolicy().click({ force: true })
  cy.wait(2000)
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait(2000)
  pricingEnginePage.getServiceHeader().should('contain', this.data05.textmsg)
})


And('Enter details for commission tax rule for time validation', function () {
  pricingEnginePage.getCurrency().select(this.data05.Currency)
  pricingEnginePage.getCurrencyChangeButton().click()
  cy.wait(3000)
  cy.wait('@PricingEngine', {timeout:40000})

  cy.wait(2000)
  
  pricingEnginePage.getTaxAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type('Commissiontax')
 
  pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(0).should('be.visible', { force: true })
  })
  pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  pricingEnginePage.getStartTime().click({ force: true })

  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(1).should('be.visible', { force: true })
  })
  pricingEnginePage.getEndTime().click({ force: true })
  

  pricingEnginePage.getPricingPercntage().type('0')
  
  pricingEnginePage.getPricingFixedAmt().type('1')
  
  cy.wait(2000)
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
   cy.wait(1000)
  //cy.intercept(this.data20.SubmitPolicy).as('getSubmitPolicy')
  pricingEnginePage.getSubmitPolicy().click({ force: true })
  cy.wait(2000)
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait(2000)
})

And('click on commission taxation rule',function(){
   pricingEnginePage.getCommissionTaxationRule().click()
   cy.wait(2000)
})

//-------------------------------------------------------
And('Vadidate Withdraw rules',function(){
  W2B.getTax().eq(0).contains('1.00')
  W2B.getTax().eq(1).contains('0.50')
  W2B.getTax().eq(2).contains('1.50')
  // W2B.getTax().eq(4).contains('0.5')
  W2B.getTax().eq(4).contains('1.50')
})


And('Enter all details and add service charge for cashout for Particular time', function () {
  cy.wait(5000)
  pricingEnginePage.getCurrency().select(this.data05.Currency)
  pricingEnginePage.getCurrencyChangeButton().click()
  cy.wait(3000)
  cy.wait('@PricingEngine', {timeout:40000})
  pricingEnginePage.getAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type("Priority Charge", { force: true })

  pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(0).should('be.visible', { force: true })
  })
  pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  pricingEnginePage.getCurrentDateSelect().click({ force: true })

  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(1).should('be.visible', { force: true })
  })
  pricingEnginePage.getCurrentDateSelect().click({ force: true })


  pricingEnginePage.getWhoPays().select('Sender', { force: true })
  pricingEnginePage.getSVAType().select("Normal", { force: true })
  pricingEnginePage.getWhomeToPay().select(this.data05.WhomeToPay, { force: true })
  pricingEnginePage.getChargeStatmentPricing().click({ force: true })
  pricingEnginePage.getPricingPercntage().type('0')
  pricingEnginePage.getPricingFixedAmt().type('2')
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  cy.wait(1000)
  //cy.intercept(this.data20.SubmitPolicy).as('getSubmitPolicy')
  pricingEnginePage.getSubmitPolicy().click({ force: true })
  cy.wait(1000)
  //cy.wait('@getSubmitPolicy', { timeout: 30000 })
  //cy.intercept(this.data20.SubmitBtn).as('getSubmit')
  cy.intercept('/shulka/serviceChargePolicy').as('getSubmit')
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait(2000)
  //cy.wait('@getSubmit', { timeout: 30000 })
  // pricingEnginePage.getServiceHeader().contains(this.data05.textmsg)
})


And('Enter all commssion details for start and end time for Priority', function () {

  pricingEnginePage.getCurrency().select(this.data05.Currency)
  pricingEnginePage.getCurrencyChangeButton().click()
  cy.wait('@PricingEngine', {timeout:40000})
  cy.wait(2000)
  pricingEnginePage.getAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type('Commission rule', { force: true })
  pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(0).should('be.visible', { force: true })
  })
  pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  pricingEnginePage.getStartTime().click({ force: true })

  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(1).should('be.visible', { force: true })
  })
  pricingEnginePage.getEndTime().click({ force: true })
   pricingEnginePage.getSenderRoleCom().select('Customer', { force: true })
  pricingEnginePage.getSenderHierarchyCom().select('Customer', { force: true })
  
  pricingEnginePage.getSenderGradeCom1().click({ force: true })
  
  pricingEnginePage.getGoldCustomer().click({ force: true })
  
  pricingEnginePage.getSilverCustomer().click({ force: true })
  
  pricingEnginePage.getWhoPays().select(this.data05.Senderforcashout, { force: true })
  pricingEnginePage.getSVAType().select(this.data05.SenderSVAtypeCom, { force: true })
  pricingEnginePage.getWhomeToPay().select(this.data05.WhomeToPayCom, { force: true })
  pricingEnginePage.getChargeStatmentPricing().click({ force: true })
  pricingEnginePage.getPricingPercntage().type('0')
 
  pricingEnginePage.getPricingFixedAmt().type('2')
  
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  
  pricingEnginePage.getSubmitPolicy().dblclick({ force: true })
  cy.wait(2000)
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait(2000)
  pricingEnginePage.getCommissionHeader().should('contain', this.data05.comsuccess)
})

And('Vadidate Commission rules for true Priority',function(){
  W2B.getTax().eq(2).contains('2')
})
And('Vadidate ServiceCharge rule for false priority',function(){
  W2B.getTax().eq(0).contains('1')
})
And('Vadidate rule for time is up',function(){
  W2B.getTax().eq(4).contains('0.00')
})

And('Inactive the first rule',function(){
  pricingEnginePage.getCurrency().select(this.data05.Currency)
  pricingEnginePage.getCurrencyChangeButton().click()
  cy.wait('@PricingEngine', {timeout:40000})
  cy.wait(2000)
  pricingEnginePage.getInActive().eq(0).click()
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  
  pricingEnginePage.getSubmitPolicy().dblclick({ force: true })
  cy.wait(2000)
  pricingEnginePage.getSubmitBtn().click({ force: true })
  cy.wait(2000)

})

And('Validate Comission rule for Inactive priority',function(){
  W2B.getTax().eq(2).contains('1.5')
})

//-------------------------------------------

And('View start time and end time in calendar for USD', function () {
  cy.wait(5000)
  pricingEnginePage.getCurrency().select(this.data05.Currency)
  pricingEnginePage.getCurrencyChangeButton().click()
  cy.wait(5000)
  cy.wait('@PricingEngine', {timeout:40000})
  pricingEnginePage.getAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type('Default rule', { force: true })
  pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  pricingEnginePage.getTime().eq(0).should('be.visible', { force: true })
  cy.wait(2000)
  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(1).should('be.visible', { force: true })
  })
  pricingEnginePage.getTime().eq(1).should('be.visible', { force: true })
  
})
And('View start time and end time in calendar for INR', function () {
  cy.wait(5000)
  pricingEnginePage.getAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type('Default rule', { force: true })
  pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  pricingEnginePage.getTime().eq(0).should('be.visible', { force: true })
  cy.wait(2000)
  pricingEnginePage.getDatePickerEnd().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(1).should('be.visible', { force: true })
  })
  pricingEnginePage.getTime().eq(1).should('be.visible', { force: true })
})

//--------------------
And('Click on the Transaction Tax for Time', function () {
  pricingEnginePage.getTransactionTax().contains('Transaction Tax').click({force:true})
  cy.wait(3000)
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
})

And('Click on Service charge',function(){
  pricingEnginePage.getServiceChargeTab().click()
  cy.wait(3000)
  cy.intercept('/shulka/referenceData*').as('PricingEngine')
})

//--------------------------------------
And('Enter the time greater than 24 hour', function () {
  cy.wait(5000)
  var number = "0.5"
  var numberone = "0.8"
  pricingEnginePage.getCurrency().select(this.data05.Currency)
  pricingEnginePage.getCurrencyChangeButton().click()
  cy.wait(3000)
  cy.wait('@PricingEngine', {timeout:40000})
  pricingEnginePage.getAddNewRuleBtn().click()
  pricingEnginePage.getRuleName().type("Default Charge", { force: true })

  pricingEnginePage.getDatePickerStart().dblclick({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('div.xdsoft_datepicker.active').eq(0).should('be.visible', { force: true })
  })
  pricingEnginePage.getCalanderStart().should('be.visible', { force: true })
  pricingEnginePage.getStartTime().click({ force: true })

  pricingEnginePage.getDatePickerEnd().type("2023-10-10 25:00",{ force: true })
  // cy.waitUntil(() => {
  //   return cy.iframe().find('div.xdsoft_datepicker.active').eq(1).should('be.visible', { force: true })
  // })
  // pricingEnginePage.getEndTime().click({ force: true })

  pricingEnginePage.getWhoPays().select('Sender', { force: true })
  pricingEnginePage.getSVAType().select("Normal", { force: true })
  pricingEnginePage.getWhomeToPay().select(this.data05.WhomeToPay, { force: true })
  pricingEnginePage.getChargeStatmentPricing().click({ force: true })
  pricingEnginePage.getPricingPercntage().type('0')
  pricingEnginePage.getPricingFixedAmt().type('1.5')
  pricingEnginePage.getSaveDraftBtn().trigger('mouseover').click({ force: true })
  
  pricingEnginePage.getSubmitPolicy().dblclick({ force: true })
  cy.wait(2000)
})

Then('Verify the Error Message',function(){
  pricingEnginePage.getErrorMsgTxt().should('contain',"  There seems to be some issue with rule(s) definitions. Please verify the rule changes done across the policy")
})