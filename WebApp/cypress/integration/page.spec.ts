import * as cypress from "cypress";
describe('Our genre browse', () => {
    beforeEach("Login Input with valid credentials", () => {
        cy.visit('/login');
        cy.get("#loginId").type("admin");
        cy.get("#loginPassword").type("admin");
        cy.get("#loginBtn").click();
        cy.get('#side-menu').click();
        cy.get('#side-menu-browse').click();
    })
    it("Clicking genre 1 from the browse menu", () => {
        cy.server()
        cy.route('GET', 'http://localhost:8080/api/getGenres').as('getGenres')
        cy.contains('Horror').click();
    })
    it("Clicking genre 2 from the browse menu", () => {
        cy.server()
        cy.route('GET', 'http://localhost:8080/api/getGenres').as('getGenres')
        cy.contains('Thriller').click();
    })
    it("Clicking genre 2 from the browse menu", () => {
        cy.server()
        cy.route('GET', 'http://localhost:8080/api/getGenres').as('getGenres')
        cy.contains('Romance').click();
    })
    it("Clicking genre 2 from the browse menu", () => {
        cy.server()
        cy.route('GET', 'http://localhost:8080/api/getGenres').as('getGenres')
        cy.contains('Classics').click();
    })
    it("Clicking genre 2 from the browse menu", () => {
        cy.server()
        cy.route('GET', 'http://localhost:8080/api/getGenres').as('getGenres')
        cy.contains('Cook-Books').click();
    })

})