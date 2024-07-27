// 100 Days Of Coding Challenge!

/** Question 6
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, " " and " ", at least once. Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white spaces. */

//----------------------------------------------------------------------------------------------------------------------------------------------

// Store the person's name with whitespace characters
const personNameWithWhitespace: string = "\t  Sam White\n";

// Print the name with the whitespace
console.log(`Name with whitespace: "${personNameWithWhitespace}"`);

// Remove the leading and trailing spaces
const trimmedName: string = personNameWithWhitespace.trim();

// Print the name after stripping the white spaces
console.log(`Name without whitespace: "${trimmedName}"`);
