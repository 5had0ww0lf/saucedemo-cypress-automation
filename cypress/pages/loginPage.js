class LoginPage {

  visit() {
    cy.visit('/')
  }

  fillUsername(username) {
    cy.get('[data-test="username"]').type(username)
  }

  fillPassword(password) {
    cy.get('[data-test="password"]').type(password)
  }

  clickLogin() {
    cy.get('[data-test="login-button"]').click()
  }

  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.clickLogin()
  }

  logout() {
    cy.get('#react-burger-menu-btn')
      .should('be.visible')
      .click()

    cy.get('[data-test="logout-sidebar-link"]')
      .should('be.visible')
      .click()
  }

  errorMessage() {
    return cy.get('[data-test="error"]')
  }

}

export default new LoginPage()