const accountId=14559;
let accountEmail="abc123@gmail.com";
var accountPassword="12345";
accountCity="Ahmedabad";
let accountState;

//accountId=2;

accountEmail="xyz123@gmail.com";
accountPassword="456321";
accountCity="Surat";

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
