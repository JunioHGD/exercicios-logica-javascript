//Order - These values are examples

let productPrice = 15;

let quantity = 20;

let customerAge = 30;

let hasAccount = true;

let paymentMethod = "pix";  // "credit", "debit", "pix"

let availableBalance = 1000;

let productRestricted = false;

//Calculate Order Value

let totalPrice = productPrice * quantity;

const discount = 0.1;

if(totalPrice >= 300)
    {
         totalPrice -= (discount * totalPrice); 
    }

//Age Restriction
let productAgeValidation = true;

if((productRestricted) && (customerAge < 18))
    {
        productAgeValidation = false;
    }

//Payment Validation

let paymentMethodValidation = false;

if(paymentMethod == 'pix')
    {
        paymentMethodValidation = true;
    }
else if(((paymentMethod == 'credit') || (paymentMethod == 'debit')) && (availableBalance >= totalPrice))
    {
        paymentMethodValidation = true;
    }
else
    {
        console.log("Payment rejected.");
    }

//Final Result

let orderApproved = false;

if((productAgeValidation) && (hasAccount) && (paymentMethodValidation))
    {
        orderApproved = true;
    }
else
    {
        console.log("Order cannot proceed");
    }

if(orderApproved)
    {
        console.log("Order: " + orderApproved);
        console.log("Total Price: " + Number(totalPrice.toFixed(2)));
        console.log("Balance: " + availableBalance);
        console.log("Payment Method: " + paymentMethod);
    }

