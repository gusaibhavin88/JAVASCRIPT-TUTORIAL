// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll
const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection
console.log(navItems);
console.log(navItems[1]);
console.log(Array.isArray(navItems));
const navItems1 = document.querySelectorAll(".nav-item"); // NodeList
console.log(navItems1);
console.log(navItems1[1]);
