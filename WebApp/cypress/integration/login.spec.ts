import * as cypress from "cypress";
describe('Login Feature',()=>{
    it("Login Input without any credentials",()=>{
        cy.visit('/login');
        cy.get("#loginBtn").click(); 
    })
    it("Login Input with just Login Id and no Password",()=>{
        cy.visit('/login');
        cy.get("#loginId").type("Test1@gmail.com");
        cy.get("#loginBtn").click(); 
    })
    it("Login Input with just password and no login Id",()=>{
        cy.visit('/login');
        cy.get("#loginPassword").type("Test1@123");
        cy.get("#loginBtn").click(); 
    })
    it("Login Input with incorrect credentials",()=>{
        cy.visit('/login');
        cy.get("#loginId").type("Test1@gmail.com");
        cy.get("#loginPassword").type("Test1@1234");
        cy.get("#loginBtn").click(); 
    })
    it("Login Input with valid credentials",()=>{
        cy.visit('/login');
        cy.get("#loginId").type("Test1@gmail.com");
        cy.get("#loginPassword").type("Test1@123");
        cy.get("#loginBtn").click(); 
    })
});