
// Test for a specific pattern in a string;
// Method = .test() return a boolean (true or false) depending upon pattern found or not

let regexTest = /vscode/
let string = 'The code editor, vscode, is great!'
let string2 = 'The code editor, ?, is great!'

let found = regexTest.test(string) 
console.log(`regex ${regexTest} found in string = ${string} = ${found}`)

let found2 = regexTest.test(string2)
console.log(`regex ${regexTest} found in string = ${string2} = ${found2}`)


//Test for specific pattern but multiple patterns at one; OR operator is used = |
regexTest = /is|am|are/
string = 'This is a string. There are various strings like this.'
found = regexTest.test(string)
console.log(`${found}`)


// Test for speciifc string while ignoring case; upperCase or lowerCase;
// To do this, we use the flag - i
regexTest = /vSCode/i
string = 'The code editor, vscode, is great!'
found = regexTest.test(string)
console.log(`${found}`)


// where .test() only gives the result as true or false, .match() gives the matched result back as well.
regexTest = /vscode/i
string = 'The code editor, vsCodE, is great!'
let matched = string.match(regexTest)   //matched ignore case string found;
console.log(`${matched}`)

// To get every matched occurence of the given pattern, we can use the 'g' flag;
// we can use multiple flags with /gi or /ig

regexTest = /vscode/ig  //i flag for ignorecase and g flag for returning every matched occurence
string = 'vscode, VscoDe, vsCode is great!'
let resultMatched = string.match(regexTest)
console.log(resultMatched) //returns an array of matched results
console.log(`result matched = ${resultMatched}`)

// Match anything with wildcard character; wildcard character is the '.' character;
// whenever the '.' wildcard character is used, any character can replace it within the regex
regexTest = /vscod./ig
string = 'Vscode, vScod_, vsCoDf, is great!!'
resultMatched = string.match(regexTest)
console.log(resultMatched)

regexTest = /./ig
string = 'a e some r andom string'
resultMatched = string.match(regexTest) //will return every character in the result, because every character is a single character, thus satisfies the criteria of '.'
console.log(resultMatched)

// Character classes = []
// where the wildcard character(.) matches anything that comes on it's place, character classes help us to match specific group of character
// used as [group_of_characters]
regexTest = /[aeiou]/ig
string = 'this regex will extract all vowels'
resultMatched = string.match(regexTest) //this will extract all vowels from the string
console.log(resultMatched)

regexTest = /f[au]n/ig
string = 'This regex will extract words like fan, fun. i.e., f and n will be fixed and anything from [au] can come between them'
resultMatched = string.match(regexTest)
console.log(resultMatched)

// 
