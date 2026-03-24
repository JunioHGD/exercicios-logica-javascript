// Step 1 — Declare the Variables

let productName = 'Amaciante Ype Aconchego 1L';

let basePrice = 10.99;

let quantity = 10;

let customerAge = 19;

let isMember = true;

//Step 2 — Calculate Initial Total

let totalPrice = basePrice * quantity;

//Step 3 — Apply Discounts

let discount = 0;

let finalPrice = 0;

if(customerAge >= 18)
    {

        if(quantity >= 3)
            {
                if(isMember)
                    {
                        discount = 15/100;
                        finalPrice = totalPrice - (totalPrice * discount);
                    }
                else
                    {
                        discount = 10/100;
                        finalPrice = totalPrice - (totalPrice * discount);
                    }
                
            }
        else
            {
                if(isMember)
                    {
                        discount = 5/100;
                        finalPrice = totalPrice - (totalPrice * discount);
                    }
                else
                    {
                        finalPrice = totalPrice;
                    }     
            }
    }
else
    {
        if(quantity <= 2)
            {
                if(isMember)
                    {
                        discount = 5/100;
                        finalPrice = totalPrice - (totalPrice * discount);
                    }
                else
                    {
                        finalPrice = totalPrice;
                    }
            }
        else
            {
                console.log("Purchase higher than 2 items  are not allowed for minors");
                quantity = 0;
                totalPrice = 0;
            }
    }

console.log('Product: ' + productName);
console.log('Quantity: ' + quantity);
console.log('Total Price: R$' + totalPrice.toFixed(2));
console.log('Final price: R$' + finalPrice.toFixed(2));
