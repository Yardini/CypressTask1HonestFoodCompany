/// <reference types="Cypress" />
import AddToCart from '../../support/pageObjects/AddToCart'

describe('Adding products to cart', function() {

    before(function() {
        // runs once before all tests in the block
        cy.fixture('input').then(function(data)
        {
            this.data=data
        })
      })

    it('Getting into Mamacita Brand and confirming with alter message',function() {
        const addToCart = new AddToCart()
        addToCart.getBrand().click();
        cy.url().should('include','mamacita');
        addToCart.getAddressTextBox().type(this.data.address);
        addToCart.getAddressSumbitButton().click();
        // cy.wait(2000)
        cy.url().should('include','huetteldorferstr');
		/**
	     * If product display on the site is static 
         */          
        // cy.get('[data-ordernumber="SW11068"] > .box--content > .product--info > :nth-child(2) > .product--title > .buybox--button').click();
		
        /**
	     * If product display on the site is dynamic 
         */        
         addToCart.getDish().each(($el, index, $list) => {
            const textDish=$el.text()
            if(textDish.includes(this.data.dish))
            {
                 cy.log(textDish);
                $el.click();
            }
        })
        /**
	     * Intermittently checkout ajaxCart is taking time. if need can add explicit wait. 
         */         
        // cy.wait(3000)   
        cy.scrollTo('bottom')
        addToCart.getButtonAddToCart().click();
        cy.log('Added to cart')
        addToCart.getAlertInformation().should('have.text','Der Artikel wurde erfolgreich in den Warenkorb gelegt');   
        cy.log("Done");
    })
} )