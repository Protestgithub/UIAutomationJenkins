/// <reference types= "Cypress" />
// <reference types= "Cypress-iframe" />

//import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
//import "../../../../../support/utils/Generic"
import LoginPage from "../../../../../../../../support/pageObjects/ConsumerPortalUserLogin/LoginPage";
import HomePage from "../../../../../../../../support/pageObjects/ConsumerPortalHomePage/HomePage";
//import WithdrawCash from "../../../../../support/pageObjects/ConsumerPortalWithdrawCash/WithdrawCash";
import SendMoney from "../../../../../../../../support/pageObjects/ConsumerPortalSendMoney/SendMoney";


const UserLoginPage = new LoginPage()
const WelcomePage = new HomePage()
const SendMoneyPage = new SendMoney()

var mobile
const amount1=1
const uuid1 = () => Cypress._.random(1e1)
amount = uuid1()
const uuid2 = () => Cypress._.random(1e1)
pin = "@"+uuid2()
const uuid3 = () => Cypress._.random(1e35)
remark = uuid3()
// before(()=>{
//         cy.fixture('ConsumerPortal/Merchant').then(function(data){
//     this.data=data;
//         })
//     })
        
// export function verify(){
//     SendMoneyPage.getReviewConfirmPage().contains('Review & Confirm')
//     SendMoneyPage.getPinField().clear().type('1357')
//     SendMoneyPage.getViewPin().invoke('show').should('be.visible')
//             cy.wait(4000)
//             SendMoneyPage.getVerifyBtn().click({force:true})
   
//   }

  When('Click on Send Money And Fill all the details', function(){
    cy.wait(4000) 
    WelcomePage.getSendMoney().click({force:true}) 
    cy.wait(2000)
   // SendMoneyPage.getMobileNumber().type('@1355qwe')  
    SendMoneyPage.getMobileNumber().clear().type("7786990976")
    //SendMoneyPage.getAmount().clear().type('qwer')
    //SendMoneyPage.getAmountError().contains('Incorrect amount entered')
    SendMoneyPage.getAmount().clear().type(amount1)
    SendMoneyPage.getRemarks().type(remark)
    cy.wait(4000)
    //PayMerchant.getRemarksCount().should('have.attr','maxlength','30')
    // SendMoney.getCurrency().should('exist').invoke('text').then((value)=>{
    //     let CurrencyName = value  //.text()
    //     cy.log(CurrencyName)
    //     cy.readFile(MerchantPaydata).then((data)=>{
    //         data.Currency = CurrencyName
    //         cy.writeFile(MerchantPaydata, data)
    //     })
    //})
    //PayMerchant.getSelectATM().click({force:true})
    //PayMerchant.getNormalWallet().should('be.visible')
    SendMoneyPage.getSelectNormalWallet().click({force:true})
    SendMoneyPage.getProceedBtn().should('be.enabled').click({force:true})
    })
    Then('Copey Transaction ID',function(){
        SendMoneyPage.getCopyTransactionId().contains("Transaction ID")
    })