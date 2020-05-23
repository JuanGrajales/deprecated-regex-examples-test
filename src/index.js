import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Regex Examples!</h1>
<div>
  Open the console below to see the regex examples
</div>
`;

let testString = "Coolboy is dating coolgirl";

// Example 1
// matches any string that has the text 'the'
let regex = /the/;
testString = testString.replace(regex, "");
console.log(testString);

// Example 2
// matches any string that starts with 'the'
let regexBeg = /^the/;
testString = testString.replace(regexBeg, "");
console.log(testString);

// Example 3
// matches any string that starts with 'the' regardless of case
let regexCase = /^the/i;
testString = testString.replace(regexCase, "");
console.log(testString);

// Example 4
// matches any string that ends with 'the' regardless of case
let regexEnd = /the$/i;
testString = testString.replace(regexEnd, "");
console.log(testString);

// Example 5
// When you do a range in regex it is based on the order of ASCII charaters
// matches any string that has any letter within a-z
let regexRange = /[a-z]/;
testString = testString.replace(regexRange, "");
console.log(testString);

// Example 6
// matches any string that has any letter within a-z and numbers within 0-9
let regexRange2 = /[a-z0-9]/;
let regexRange3 = /[!-`{-~]/g;
let regex3 = /[^a-z]/g;
testString = testString.replace(regex3, "");
console.log(testString);
