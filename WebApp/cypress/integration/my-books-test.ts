import * as cypress from "cypress";
describe('Our mybooks add', () => {
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
        cy.get('#image1').click();
        cy.wait(1000);
        cy.get('#addbook').click();
        cy.get('#side-menu').click();
        cy.get('#side-menu-browse').click();
        cy.route('GET', 'http://localhost:8080/api/getGenres').as('getGenres')
        cy.contains('Horror').click();
        cy.wait(1000);
        cy.get('#image2').click();
        cy.wait(1000);
        cy.get('#addbook').click();
        cy.get('#side-menu').click();
        cy.get('#side-menu-browse').click();
        cy.route('GET', 'http://localhost:8080/api/getGenres').as('getGenres')
        cy.contains('Horror').click();
        cy.wait(1000);
        cy.get('#image3').click();
        cy.wait(1000);
        cy.get('#addbook').click();
        cy.get('#side-menu').click();
        cy.get('#side-menu-browse').click();
        cy.route('GET', 'http://localhost:8080/api/getGenres').as('getGenres')
        cy.contains('Horror').click();
        cy.wait(1000);
        cy.get('#image4').click();
        cy.wait(1000);
        cy.get('#addbook').click();
        cy.get('#side-menu').click();
        cy.get('#side-menu-mybooks').click();

    })

})