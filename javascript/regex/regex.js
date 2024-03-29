
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

// Note - instead of writing [abcde], we can use character range with the help of '-' operator [a-e] will be equivalent to [abcde]
// character classes can also use range of numbers as well : [0-9]

regexTest = /[a-z0-9]/ig
string = 'itWillMatch123 123WillMatch 123WillMatch456 9833ItWillAlsoMatch43432 this is 12345 ___(also matched)))('
resultMatched = string.match(regexTest)
console.log(resultMatched)


// We can also set our regex to not match some character; for this we can use the negated character sets;
// in this, we use the operator '^' and combine it with character classes 
// [^aeiou0-9]; this regex will ignore all viowels as well as all digits and will match all other characters.
regexTest = /[^aeiou0-9]/ig
string = 'this will not match vowels and numbers googgleee'
resultMatched = string.match(regexTest)
console.log(resultMatched)


// When we want to match characters where characters can be repeated continuosly, we use the '+' operator;
// example; we have = 'aab, ab, aaaaaaaaaab' and we want to match but it can have any occurences afterwords, we will use the '+' operator
// it would return all occurences, starting with 'a' and can have any number of 'a's afterwards.
// '+' operator looks for match that is one or more times.
regexTest = /a+/gi
string = 'this is a string and it contains a lot of aaaaaas aaaaas'
resultMatched = string.match(regexTest)
console.log(`${resultMatched}`)

regexTest = /s+a+/gi
string = 'saaaasssss, sa, sssssa, ssaaaaaa, saaaaa, aaasWillNotReturnIt'
resultMatched = string.match(regexTest)
console.log(`${resultMatched}`)


// When we want to match characters to a specific regex, but we want to hit atleast zero or more hits with our regex, we use the '*' (asterisk/star) operator.
// What it basically does is that, after whichever character it is applied, it does not mandate the matching of that character i.e., zero or more times
regexTest = /so*/gi
string = 'Hello son, so what are you doing? Some random words'  //will return any character which have so as well as which only have a single 's' because o is not mandatory
resultMatched = string.match(regexTest)
console.log(`${resultMatched}`)


// Greedy match vs Lazy match :
// regexes, by default do a greedy match, i.e., by default they return the maximum possible substring matched.
// regexes can be made to do the lazy match as well, when we do the lazy match, it returns the smallest possible substring match.
// lazy regex can be used with '?' operator, it signifies that we want the smallest substring to be matched.
// example
let regexTestGreedy = /t[a-z]*i/
string = 'titanic titandsdadi'
resultMatched = string.match(regexTestGreedy)

let regextestLazy = /t[a-z]*?i/
string = 'titanic titandsdadi'
let resultMatched2 = string.match(regextestLazy)
console.log(`Greedy return ${resultMatched}, lazy returned ${resultMatched2}`)


// we used caret symbol (^) in character set ([]) to leave the characters that are included in it;
// Another way to use caret is that, when we want to search in the beginning of the string.
regexTest = /^What/i
string = 'what is your name?'
string2 = 'Why are you here?'
console.log(regexTest.test(string)) //true
console.log(regexTest.test(string2)) //false

// As we can use the '^' symbol to search in the beginning of the strings, we can also search at the ending of the strings with the help of '$' symbol.
regexTest = /end.$/
string = 'this is not the end-'
string2 = 'this is the beginning.'
console.log(regexTest.test(string))
console.log(regexTest.test(string2)) //false

// Shorthand character classes - These are some predefined shortcuts made for some regular expressions which are very common.
// example = \w(small w) which is shorthand for [A-Za-z0-9_], basically it will match all alphanumeric strings as well as an '_'
// Another shorthand is = \W (capital W), shorthand for [^A-Za-z0-9_], i.e., anything but numbers and letters;
// Another shorthand for counting only digits is = \d, which is shorthand for [0-9] and it inverse \D, will match all non-numbers
// Another shorthand for counting only whitespaces/return/tabs/form-feed/new-line-characters = \s, shorthand for [\r\t\f\n\v] , inverse for it is \S, which matches all non-whitespace chars.
regexTest = /\w/g
string = 'matchingLengthIsEqualOrNot12323123'
resultMatched = string.match(regexTest)
console.log(`${string.length === resultMatched.length}`)

regexTest = /\W/g
string = 'counting non-alphanumeric characters. Here exits, -., It counts spaces as well.'
resultMatched = string.match(regexTest)
console.log(`${resultMatched.length}`)


// Quantity specifiers ;
// Where '+' gives us the flexibility of one or more match and '*' gives us the flexibility of zero or more matches, what if we want a specif lower and upper bound for
// number of matches, this is where quantity specifiers come into place, denoted by curly brackets {lowerBound,UpperBound[optional] }
// to specify exact number of matches, only have one number in {}, example, matching required 3 = {3}
// to specift atleast some amount of matches, only have one number and a ',' with it., example = matching atleast 3 = {3,}
regexTest = /\d{2,5}/
string = 'notMatched1, matched123 , notmatched123456'
resultMatched = string.match(regexTest)
console.log(`matched are = ${resultMatched}`)


// '?' of lazy matching can also be used to ignore any character;
regexTest = /colou?r/
string = 'english color'
string2 = 'british colour'

resultMatched = string.match(regexTest)
console.log(`${resultMatched}, ${regexTest.test(string)}`)

resultMatched2 = string2.match(regexTest)
console.log(`${resultMatched2} , ${regexTest.test(string2)}`)


// Grouping of characters;
// Grouping of characters can be done with the use of parenthesis (), grouping helps to group | statements within regex;
regexTest = /n(igh|o)t/ //this will search for night as well as not
string = 'this is night'
string2 = 'this is not day'
console.log(`${regexTest.test(string)}, ${regexTest.test(string2)}`)



// Making a regex for username;
/*
conditions - 
1) Usernames can only use alpha-numeric characters.
2) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
3) Username letters can be lowercase and uppercase.
4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
 */

regexTest = /^[a-zA-z]([a-zA-z]+[0-9]*|[0-9]{2,})$/
// or regexTest = /^[a-z]([a-z]+\d*|[\d]{2,})$/i 