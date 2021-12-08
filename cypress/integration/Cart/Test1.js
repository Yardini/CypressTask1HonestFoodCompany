/// <reference types="Cypress" />

describe('Adding products to cart', function() {

    it('Getting into Mamacita Brand and confirming with alter message',function() {
        cy.get('[data-controllerurl="/widgets/emotion/index/emotionId/30/secret//controllerName/index"] > .emotion--container > .col-xs-3 > .emotion--banner > .banner--content > .banner--link').click();
        cy.url().should('include','mamacita');
        cy.get('input[id="address-input"]').type("Seidengasse 44, 1070 Wien, Austria");
        cy.get('input[value="zum menü"]').click();
        // cy.wait(2000)
        cy.url().should('include','huetteldorferstr');
		/**
	     * If product display on the site is static 
         */          
        // cy.get('[data-ordernumber="SW11069"] > .box--content > .product--info > :nth-child(2) > .product--title > .buybox--button').click();
		
        /**
	     * If product display on the site is dynamic 
         */        
        cy.get('button[class="buybox--button bare-element"]').each(($el, index, $list) => {
            const textDish=$el.text()
            if(textDish.includes(' Cheesy Pork Burrito '))
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
        cy.get('button[name="In den Warenkorb"]').click();
        cy.log('Added to cart')
        cy.get('.ajax--cart > .alert > .alert--content').should('have.text','Der Artikel wurde erfolgreich in den Warenkorb gelegt');   
        cy.log("Done");
    })
} )