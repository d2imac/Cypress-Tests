/// <reference types="cypress" />

describe("Products Page", () => {
    //run this before each test
    beforeEach (() => {
        cy.visit("https://www.saucedemo.com");
        cy.get("[data-test=username]").type("standard_user");
        cy.get("[data-test=password").type("secret_sauce");
        cy.get("[data-test=login-button]").click();
        cy.url().should("include","/inventory.html");
    })

    it("should navigate to Shopping Cart page", () => {
        cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click();
        cy.get(".shopping_cart_container").click();
    })

});
