const labalBalance=document.querySelector('.balance-value');
const containerMovements=document.querySelector('.movements')
const SumIn=document.querySelector('.value-in')
const Sumout=document.querySelector('.value-out');
const Interest=document.querySelector('.value-intrest')
const account1={
    owner:"vivek bindra",
    movements:[232,1200,-2300,320,340,-4560,-3240,4500],
    intrestrate:1.2,//%
    pin:4444
}
const account2={
    owner:"arjun daksh",
    movements:[2320,1300,-2300,320,3409,4560,-3240],
    intrestrate:2.2,//%
    pin:5555
}
const account3={
    owner:"ankit",
    movements:[2320,1200,-200,320,340,-460,-3240],
    intrestrate:1.7,//%
    pin:3333
}
const account4={
    owner:" bindra",
    movements:[450,560,-340,445,-120],
    intrestrate:1.5,//%
    pin:7777
}
const account=[account1,account2,account3,account4];
const  movements = [2320,1200,-200,320,340,-460,-3240];
function displaySummary(movement){
    const income=movement.filter((ele)=>{
        if(ele>0){
            return ele;
        }
    }).reduce((acc,ele)=>{
        return acc+ele;
    },0)
    SumIn.textContent= `${income}.Rs`;
    const out=movement.filter((ele)=>{
        if(ele<0){
            return ele;
        }
    }).reduce((acc,ele)=>{
        return acc+ele
    },0)
    Sumout.textContent=`${out}.Rs`;
    const interest = movement
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i) => {
      return int > 1;
    })
    .reduce((acc, int) => acc + int, 0);

    Interest.textContent = `${interest}₹`;
}
displaySummary(account2.movements);
movements.forEach((ele,i)=>{
    if(ele>0){
        console.log(`you deposited ${ele}`)
    }
    else{
        console.log(`you withdraw from account ${ele}`)
    }
});
const displayMovements=function(movement){
    //empting a movement div 
    containerMovements.innerHTML="";
    //creating movement row
    movement.forEach((mov,i)=>{
        const type=mov>0?"deposit":"withdraw";
        const html=`<div class="mevements-row">
        <div class="movements-type movements-type-${type}">${i+1} ${type}</div>
        <div class="movements-value">${mov}.Rs</div>
    </div>`;
    containerMovements.insertAdjacentHTML("afterbegin",html)
    })
};
const createUserName= accs=>{
    accs.forEach(function (acc){
        acc.username = acc.owner
        .toLowerCase().split(" ").map(function(name){
            return name[0]
        }).join("")
    })
}
displayMovements(account1.movements);
// const createUserName = (user)=>{
//     const username=user.toLowerCase().split(" ").map((name)=>{
//         return name[0];
//     }).join("");
//     return username;
// }
// const user="Vijay Kumar yadav";
 createUserName(account)
console.log(account);
const calsDisplayBalance= movements =>{
    const balance=movements.reduce((acc,mov)=> acc+mov,0);
    labalBalance.textContent= `Rs.${balance}`;
};
const bal=calsDisplayBalance(account1.movements);