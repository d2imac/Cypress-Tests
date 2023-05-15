/// <reference types="cypress" />

it('searches google', function(){
    cy.visit('https://www.google.com');
    cy.get('#W0wltc > .QS5gu').click();
})