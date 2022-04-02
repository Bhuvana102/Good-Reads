import * as cypress from "cypress";
describe('Book Details', () => {
    beforeEach("Login Input with valid credentials", () => {
        cy.visit('/login');
        cy.get("#loginId").type("admin");
        cy.get("#loginPassword").type("admin");
        cy.get("#loginBtn").click();
        cy.get('#side-menu').click();
        cy.get('#side-menu-browse').click();
        cy.wait(1000);
        cy.server();
        cy.route('GET', 'http://localhost:8080/api/getGenres').as('getGenres')
        cy.contains('Horror').click();
        cy.wait(1000);
    })
    it("Clicking Book 1 from the list of Books", () => {
        cy.get('#image1').click();
        cy.wait(1000);
    })
    it("View Reviews", () => {
        cy.get('#image1').click();
        cy.wait(1000);
        cy.get('#viewReview').click();
        cy.wait(1000);
    })
    it("Post Review", () => {
        cy.get('#image1').click();
        cy.wait(1000);
        cy.get('#postReview').click();
        cy.get('#typeReview').type('Test Review');
        cy.get('#submitReview').click();
        cy.wait(1000);
    })
})