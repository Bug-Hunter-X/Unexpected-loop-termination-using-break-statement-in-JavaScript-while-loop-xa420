function myFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
    if (i === 5) {
      console.log("Loop terminated at i = 5");
      break; // Exit the loop when i is 5
    }
  }
  console.log("Loop completed");
}

myFunction();