function monthlySavings(arrayOfPayments,livingCost){

    if ( !Array.isArray(arrayOfPayments) || typeof livingCost !== 'number'){
        return 'invalid input'
    }
   let totalTaxFee = 0
   for ( let amount of arrayOfPayments){
    if( amount >= 3000){
       let taxFee = amount * (20 / 100)
       totalTaxFee = totalTaxFee + taxFee
       }
   }
   let totalPayment = 0
   for ( let perPayment of arrayOfPayments ){
    totalPayment = totalPayment + perPayment
   }
  let shahedSavings = totalPayment - ( totalTaxFee + livingCost)
  if ( shahedSavings >= 0 ){
    return shahedSavings
  }
  else {
    return 'Earn More'
  }
}

const savings = monthlySavings([ 1000 , 2000 , 2500 ],5000)
console.log(savings)