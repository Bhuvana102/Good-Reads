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
        cy.wait(1000);

    })
    it("Clicking genre 2 from the browse menu", () => {
        cy.server()
        cy.route('GET', 'http://localhost:8080/api/getGenres').as('getGenres')
        cy.contains('Thriller').click();
        cy.wait(1000);
    })
    it("Clicking genre 3 from the browse menu", () => {
        cy.server()
        cy.route('GET', 'http://localhost:8080/api/getGenres').as('getGenres')
        cy.contains('Romance').click();
        cy.wait(1000);
    })
    it("Clicking genre 4 from the browse menu", () => {
        cy.server()
        cy.route('GET', 'http://localhost:8080/api/getGenres').as('getGenres')
        cy.contains('Classics').click();
        cy.wait(1000);
    })
    it("Clicking genre 5 from the browse menu", () => {
        cy.server()
        cy.route('GET', 'http://localhost:8080/api/getGenres').as('getGenres')
        cy.contains('Cook-Books').click();
        cy.wait(1000);
    })

})