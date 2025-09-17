
//data Type in JavaScript-1.let 2.var 3.const

const accountId=12;
let accountEmail="ghodakerutuja086@gmail.com"
var accountPassword="12345"
accountCity="Goregaon"  // not a good for datatype is not declar
let accountState;           // declar variable and not asign a value javascript than javascript assign biodifalt undefined
//accountId=3        //const redeclar is not allowd

/*
Prefer is not to use var
because of issue in block scope and function scope
*/
accountEmail="ghodakerutuja9@gmail.com"
accountPassword="222222"
accountCity="Parnar"
con.table([accountId,accountEmail,accountPassword,accountCity,accountState])   //print a table format