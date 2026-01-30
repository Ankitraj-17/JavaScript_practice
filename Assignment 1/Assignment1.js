
// 1. Declare a variable named challenge and assign it to an initial value
let challenge = '50 Days Of JavaScript';

// 2. Print the string on the browser console
console.log(challenge);

// 3. Print the length of the string
console.log(challenge.length);

// 4. Change all characters to capital letters
console.log(challenge.toUpperCase());

// 5. Change all characters to lowercase letters
console.log(challenge.toLowerCase());

// 6. Cut (slice) out the first word using substr() or substring()
console.log(challenge.substring(3)); // "Days Of JavaScript"

// 7. Slice out the phrase 'Days Of JavaScript' from '50 Days Of JavaScript'
console.log(challenge.slice(3)); // "Days Of JavaScript"

// 8. Check if the string contains the word 'Script'
console.log(challenge.includes('Script')); // true

// 9. Split the string into an array
console.log(challenge.split()); // ['50 Days Of JavaScript']

// 10. Split the string at the space
console.log(challenge.split(' ')); // ['50', 'Days', 'Of', 'JavaScript']

// 11. Split companies string at comma and change to array
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', ')); // ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 12. Change '50 Days Of JavaScript' to '50 Days Of Python' using replace()
console.log(challenge.replace('JavaScript', 'Python')); // "50 Days Of Python"

// 13. What is character at index 15?
console.log(challenge.charAt(15)); // 'a'

// 14. What is the character code of 'J' in the string?
console.log(challenge.charCodeAt(11)); // 74 (character code for 'J')

// 15. Position of last occurrence of 'a'
console.log(challenge.lastIndexOf('a')); // 15

// 16. Find position of first occurrence of 'because'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because')); // 31

// 17. Find position of last occurrence of 'because'
console.log(sentence.lastIndexOf('because')); // 47

// 18. Use search to find first occurrence of 'because'
console.log(sentence.search('because')); 

// 18.1 Position of first occurrence of 'a' in challenge
console.log(challenge.indexOf('a')); 

// 19. Use trim() to remove trailing whitespace
let spacedString = ' 50 Days Of JavaScript ';
console.log(spacedString.trim()); 

// 20. Use startsWith() and make result true
console.log(challenge.startsWith('50')); 

// 21. Use endsWith() and make result true
console.log(challenge.endsWith('JavaScript')); 

// 22. Use match() to find all 'a's
console.log(challenge.match(/a/g)); 

// 23. Use concat() to merge strings
let str1 = '50 Days of';
let str2 = 'JavaScript';
console.log(str1.concat(' ', str2)); 

// 24. Use repeat() to print the string 2 times
console.log(challenge.repeat(2)); 
