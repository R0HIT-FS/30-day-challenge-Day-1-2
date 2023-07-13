// let money = prompt("Enter the money in Rupees :  ");
// let chocolateCost= prompt("enter the cost of the chocolate");
let money = 68;
let chocolateCost = 2;
let chocolates =0;
let wrappers = 0;
//purchase
chocolates = money/chocolateCost;
wrappers= chocolates;
// console.log(chocolates);
//first exchange
let ex1 = wrappers/3;
// console.log(`ex1 ${Math.floor(ex1)}`);
let ex2 = ex1/3;
// console.log(`ex2 ${Math.floor(ex2)}`);
let ex3 = ex2/3;
// console.log(`ex3 ${Math.floor(ex3)}`);
let ex4 = ex3/3;
// console.log(`ex3 ${Math.floor(ex3)}`);

totalChoco = chocolates+ex1+ex2+ex3+ex4
// console.log(Math.floor(totalChoco))
if(money<0 || chocolateCost<0){
    alert("invalid input")
}
else{
    console.log(`Money spent : Rs.${money}`)
    console.log(`Cost of one chocolate : Rs.${chocolateCost}`)
    console.log(`Ashi can eat ${Math.floor(totalChoco)} chocolates if she has Rs.${money} and the chocolate costs Rs.${chocolateCost}`)
}



