const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((line) => {
    const firstLetter = line.split(" ");
    const capitalizeLetter = firstLetter.map(
      (firstChar) => firstChar.charAt(0).toUpperCase() + firstChar.slice(1)
    );
    const response = capitalizeLetter.join(" ");
    return response;
  });
};



// function capitalizeWords(arr) {
//   return arr.map(element => {
//     return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
//   });
// }