class CheckoutPage {

  addFirstName(firstName) {
    cy.get('[data-test="firstName"]').type(firstName)
  }

  addLastName(lastName) {
    cy.get('[data-test="lastName"]').type(lastName)
  }

  addPostalCode(postalCode) {
    cy.get('[data-test="postalCode"]').type(postalCode)
  }

  continueCheckout() {
    cy.get('[data-test="continue"]').click()
  }

  finishCheckout() {
    cy.get('[data-test="finish"]').click()
  }

  successMessage() {
    return cy.get('[data-test="complete-header"]')
  }

    completeCheckout(user) {

    this.addFirstName(user.firstName)
    this.addLastName(user.lastName)
    this.addPostalCode(user.postalCode)

    this.continueCheckout()
  }

}

export default new CheckoutPage()