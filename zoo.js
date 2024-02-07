

function calculateMoney(ticketsale){

if (typeof ticketsale !== 'number' || ticketsale < 0 ){
    return 'Invalid Number! Number of ticket must be positive integer'
} 
else { let perTicketPrice = 120
       let gatemanFee = 500
       let stafLunchFee = 50
       let numOfstaf = 8

totalMoney = perTicketPrice * ticketsale
totalCost  = gatemanFee + (stafLunchFee * numOfstaf)

    let moneyLeft = totalMoney - totalCost 

    return moneyLeft 
}
}
const numOfTicket = 10
console.log(calculateMoney(numOfTicket))