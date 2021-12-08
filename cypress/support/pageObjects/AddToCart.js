class AddToCart
{

getBrand()
{
    return cy.get('[data-controllerurl="/widgets/emotion/index/emotionId/30/secret//controllerName/index"] > .emotion--container > .col-xs-3 > .emotion--banner > .banner--content > .banner--link')
}

getAddressTextBox()
{
    return cy.get('input[id="address-input"]')

}
getAddressSumbitButton()
{
  return  cy.get('input[value="zum menü"]')
}

getDish()
{
   return cy.get('button[class="buybox--button bare-element"]')
}
getButtonAddToCart()
{
    return  cy.get('button[name="In den Warenkorb"]')
}

getAlertInformation()
{
    return  cy.get('.ajax--cart > .alert > .alert--content')
}

}

export default AddToCart;
