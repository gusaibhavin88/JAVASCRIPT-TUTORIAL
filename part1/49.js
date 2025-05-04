// lexical scope
// Functions remember the variables from the environment where they were defined, not where they are called.

const myVar = "value1";

function myApp() {
  function myFunc() {
    // const myVar = "value59";
    const myFunc2 = () => {
      console.log("inside myFunc", myVar);
    };
    myFunc2();
  }

  console.log(myVar);
  myFunc();
}

myApp();
