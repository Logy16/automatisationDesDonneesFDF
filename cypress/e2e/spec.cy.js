describe('Make sure our todo list app is working well', () => {
    it('Test that we can open a browser and load our app', () => {
        cy.visit("http://localhost:4000");
        //cy.wait(5000); // /!\ /!\ /!\ USELESS LINE HERE <---
    })

    it('Test that verify if we click on "New game", there is an input area on the page ', () => {
        cy.visit("http://localhost:4000");
        cy.get('#new-game-btn').click();
        cy.url().should('include', '/game')
    })

    it('Test that verify that if we type "zzzzz", the correct message appears', () => {
        cy.visit("http://localhost:4000/game");
        cy.window().as('window');
        cy.get('@window').trigger('keydown', { key: 'z' });
        cy.wait(1000);
        cy.get('@window').trigger('keydown', { key: 'z' });
        cy.wait(1000);
        cy.get('@window').trigger('keydown', { key: 'z' });
        cy.wait(1000);
        cy.get('@window').trigger('keydown', { key: 'z' });
        cy.wait(1000);
        cy.get('@window').trigger('keydown', { key: 'z' });
        cy.wait(1000);
        cy.get('#valider-button').click();
        cy.wait(5000);
        cy.contains("Le mot n'est pas français")
    })

    it('Test that verify that the word "jante" is accepted', () => {
        cy.visit("http://localhost:4000/game");
        cy.window().as('window');
        cy.get('@window').trigger('keydown', { key: 'j' });
        cy.wait(1000);
        cy.get('@window').trigger('keydown', { key: 'a' });
        cy.wait(1000);
        cy.get('@window').trigger('keydown', { key: 'n' });
        cy.wait(1000);
        cy.get('@window').trigger('keydown', { key: 't' });
        cy.wait(1000);
        cy.get('@window').trigger('keydown', { key: 'e' });
        cy.wait(1000);
        cy.get('#valider-button').click();
        cy.wait(5000);
        cy.get('#input').should('be.empty');
    })

    it('Test that verify if we go on a defeat page when we press the button "Give up"', () => {
        cy.visit("http://localhost:4000/game");
        cy.get('#abandonner-button').click();
        cy.url().should('include', '/fail')
    })

    it('Test that the stats page appears when we want to see them', () => {
        cy.visit("http://localhost:4000");
        cy.get('#stats-btn').click();
        cy.url().should('include', '/stats')
    })
})