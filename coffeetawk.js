//CoffeeTawk - by Ellen Xu - applab, lab 1, 2018

//Challenge1: Break out assumptions in the email
/*
    - The lines are long,

    -  it can take up to a minute or more just to take an order,

    - and another 5 minutes for them to walk out the door with their 
    beverage.
    
    - Payment is quick,

    - most people use AliPay or WeChat Pay.

    - The order-taking process is slow,

    - our baristas are fast,

    - but they struggle to keep up with making drinks and handling customer 
    questions.

    -  I think most people know what they want before they even walk in the 
    store,

    - but there are still a lot of people that just stand at the register 
    asking questions and holding up the line.

    - I think we’re losing that business(people who want to take it and go).
*/


//Challenge2: Pseudocode 
/* 
    Assumptions: - Payment is quick,
    - most people use AliPay or WeChat Pay.
*/
// Calculate the percentage of online payment among all payments
// Calculate the average paymentTime

/* 
    Assumptions: - The lines are long,
    - it takes another 5 minutes for them to walk out the door with their 
    beverage.
*/
// Once every minute, count the number of people in a line
// Calculate the average of people in a line during busy hours
// Take 50 samples, measure the time for each customer between standing in the line and leaving with beverage
// Measure the total number of drinks ordered by 50 customers 
// Calculate the average totalTime and average totalTimePerDrink

/* 
    Assumptions: - The order-taking process is slow,
 	-  it can take up to a minute or more just to take an order,     
*/
// Still use the 50 samples above, measure the time between standing at the register and finishing taking an order
// Calculate the average orderTakingTime                                                    


// Challenge3: Simple program
/* Assumption: baristas struggle to keep up with making drinks and handling customer 
    questions. */
let quantity = Number(prompt('Number of drinks made by a baristas per 10 minutes:'))
let questionppl = Number(prompt('Number of people asking baristas questions per 10 minutes:'))
let time = Number(prompt('Average time for a baristas to make a drink undisturb'))
let difference = (10 / time - quantity ) / questionppl

if (difference > 0)
    {
    console.log(`The baristas makes ${difference.toFixed(2)} less pieces of drinks each time answering questions from a customer`)
    }
else
    {
    console.log(`Answering questions does not affect their work too much.`)
    }
