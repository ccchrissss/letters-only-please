function removeChars(s) {

  const validChars = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let cleanString = ''

  for (let i = 0; i < s.length; i++) {
    
    if ( validChars.includes(s[i]) ) cleanString+= s[i]
    
  }

  return cleanString
}

console.log(removeChars('he3llo0 the3re3'))

// parameters: s    // a string
// return: cleanString    // a string containing only letters and spaces
// e.g. removeChars('he3llo0 the3re3')
// results in 'hello there'

// declare a variable called validChars and set it to ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// declare a variable called cleanString and set it to an empty string
// loop through s
  // if validChars includes the current index of s, add and reassign s[i] to cleanString
// end loop
// return cleanString
