function password(passwordString) {
    
    let key  = Object.keys(passwordString)
    

    if ( key.length < 3 ){
        return 'invalid'
    }
        let birthYearValue = passwordString.birthYear.toString()
     if ( birthYearValue.length !== 4){
        return 'invalid'
    }
    
    let sitenamestr = passwordString.siteName
    let sitenameSTR = sitenamestr[0].toUpperCase() + sitenamestr.slice(1)
     
  let karimPass = sitenameSTR.concat('#',passwordString.name,'@',passwordString.birthYear)
   return karimPass
     
  }

   

const infoOfKarim = { name: 'rahat' , birthYear: 2002, siteName: 'Facebook' }
console.log( password(infoOfKarim))