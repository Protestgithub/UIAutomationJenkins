class CreateCircle{

    getSidebarNav()
    {
        return cy.get('nav.fd-side-nav div.fd-side-nav__main-navigation div.lui-fd-side-nav-wrapper ul:nth-child(1)')
    }

    getMobiquityCircle() {
        return cy.get('[id="collapsible_listnode_21"]')
    }

    getCreateCircle() {
        return cy.get('[title="Create Circle"]')
    }

    getSearchMobileNumberInputBox() {
        return cy.iframe().find("input[formcontrolname='mobileNumber']")
    }

    getSearchButton() {
        return cy.iframe().find("p.btn.vbutton")
    }

    getSearchedMobileNumber() {
        return cy.iframe().find("table.mat-table tbody tr:nth-child(1) td.cdk-column-mobilenumber")
    }

    getCircleNameInputbox() {
        return cy.iframe().find("input[formcontrolname='circleName']")
    }

    getDescriptionInputbox() {
        return cy.iframe().find("input[formcontrolname='description']")
    }

    getCurrencyDropdown() {
        return cy.iframe().find("mat-select#currency")
    }

    getSaveNextButton() {
        return cy.iframe().find("button.btn-save")
    }

    getCurrencyUsDollarDropdownValue() {
        return cy.iframe().find("div#currency-panel mat-option:nth-child(1)")
    }

    getAlertValue() {
        return cy.iframe().find('[class="popup-img_des_main success"]')
    }
}
export default CreateCircle