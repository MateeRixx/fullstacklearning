function makeTea(typeoftea){
    const teaOrder=`Making ${typeoftea} tea`;
    console.log(teaOrder);
}

makeTea("Rose");


// fucntion -2 

function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for ${teaType} `;
    }

    return confirmOrder()

}

console.log(orderTea("Masala Chai "));



//arrow function

const calculateTotoal=(price , quantity)=>price*quantity;


console.log(calculateTotoal(12,230));


//arrow fucntion does have the ability to pass "this"