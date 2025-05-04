// let keyword
// declare variable with let keyword

let firstName = "harshit";
firstName = "Mohit";
console.log(firstName);

// block scope vs funtion scope (covered later in this video)

function test() {
  if (true) {
    var x = 10;
  }
  if (true) {
    let y = 20;
    const z = 30;
  }
  console.log(y); // ❌ ReferenceError
  console.log(z); // ❌ ReferenceError
}
test();
