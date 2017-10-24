var age = prompt("Please enter your age");

if (age < 0) {
    alert("Please enter a valid age");
}
else if( Number(age) === 21){
    alert("Happy Fucking Birthday to you");
}
else if ((Number(age) % 2) !== 0) {
    alert("your age is odd");
}

else if (Math.sqrt(Number(age))%1 == 0) {
    alert("This is a perfect square");
}

else{
    alert("My Brain hurts");
}