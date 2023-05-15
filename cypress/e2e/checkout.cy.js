/// <reference types="cypress" />

describe("Checkout", () => {
    //run this before each test
    beforeEach (() => {
        cy.visit("https://www.saucedemo.com");
        cy.get("[data-test=username]").type("standard_user");
        cy.get("[data-test=password").type("secret_sauce");
        cy.get("[data-test=login-button]").click();
        cy.url().should("include","/inventory.html");
    })

    it("Should checkout", () =>{
        cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click();
        cy.get(".shopping_cart_container").click();
        cy.get("[data-test=checkout]").click();
        cy.get("[data-test=firstName").type("Big");
        cy.get("[data-test=lastName").type("Fakeman");
        cy.get("[data-test=postalCode").type("EH2 1DJ");
        cy.get("[data-test=continue").click();
        cy.get("[data-test=finish]").click();
        

    })
});