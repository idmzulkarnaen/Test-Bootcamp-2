// Create a function that receive input and will give output:

// Reverse each word of these:

// jsx
// "I am A Great human"
// into
// "I ma A Taerg namuh"

// note: observe the Capital word behavior*

function reverseWords(words) {
  const allWords = words.split(" ");
  // return  allWords;
  return allWords.map((item) => item.split("").reverse().join("")).join(" ");
}

console.log(reverseWords("I am A Great human"));
