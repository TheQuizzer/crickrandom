var wordList = [
    'Ruturaj Gaikwad', 'Mayank Agarwal', 'Virat Kohli', 'Harbhajan Singh', 'Ishan Kishan', 'KL Rahul', 'Bhuvneshwar Kumar', 'Chetan Sakariya', 'Rohit Sharma', 'Ravindra Jadeja', 'Kuldeep Yadav', 'Rishabh Pant', 'Jasprit Bumrah', 'Yuzvendra Chahal', 'Mohammed Shami', 'Varun Chakravarthy', 'Aaron Finch', 'Matthew Wade', 'David Warner', 'Steve Smith', 'Nathan Coulter-Nile', 'Marcus Stoinis', 'Pat Cummins', 'Adam Zampa', 'Dan Christian', 'Glenn Maxwell', 'Alex Carey', 'Kane Williamson', 'Colin de Grandhomme', 'Mitchell Santner', 'Martin Guptill', 'Trent Boult', 'Lockie Ferguson', 'Tim Southee', 'Ish Sodhi', 'Chris Gayle', 'Hasan Ali', 'Imad Wasim', 'Mohammad Hafeez', 'Shaheen Afridi', 'Sarfaraz Ahmed', 'Shoaib Malik', 'Wahab Riaz', 'Fakhar Zaman', 'Sheldon Cottrell', 'Shimron Hetmyer', 'Kemar Roach', 'Fabian Allen', 'Evin Lewis', 'Shai Hope', 'Peter Handscomb', 'James Neesham', 'Joe Root', 'Ben Stokes', 'Adil Rashid', 'Chris Woakes', 'Moeen Ali', 'Sam Billings', 'Jason Roy', 'Jofra Archer', 'Jonny Bairstow', 'Jos Buttler', 'Eoin Morgan', 'Sam Curran', 'Mark Wood', 'Jason Holder', 'Shikhar Dhawan', 'Faf Du Plessis'
    ];

function words(options) {
    
      function word() {
        if (options && options.maxLength > 1) {
          return generateWordWithMaxLength();
        } else {
          return generateRandomWord();
        }
      }
    
      function generateWordWithMaxLength() {
        var rightSize = false;
        var wordUsed;
        while (!rightSize) {  
          wordUsed = generateRandomWord();
          if(wordUsed.length <= options.maxLength) {
            rightSize = true;
          }
    
        }
        return wordUsed;
      }
    
      function generateRandomWord() {
        return wordList[randInt(wordList.length)];
        return batsman[randInt(batsman.length)];
      }
    
      function randInt(lessThan) {
        return Math.floor(Math.random() * lessThan);
      }
    
      // No arguments = generate one word
      if (typeof(options) === 'undefined') {
        return word();
      }
    
      // Just a number = return that many words
      if (typeof(options) === 'number') {
        options = { exactly: options };
      }
    
      // options supported: exactly, min, max, join
      if (options.exactly) {
        options.min = options.exactly;
        options.max = options.exactly;
      }
      
      // not a number = one word par string
      if (typeof(options.wordsPerString) !== 'number') {
        options.wordsPerString = 1;
      }
    
      //not a function = returns the raw word
      if (typeof(options.formatter) !== 'function') {
        options.formatter = (word) => word;
      }
    
      //not a string = separator is a space
      if (typeof(options.separator) !== 'string') {
        options.separator = ' ';
      }
    
      var total = options.min + randInt(options.max + 1 - options.min);
      var results = [];
      var token = '';
      var relativeIndex = 0;
    
      for (var i = 0; (i < total * options.wordsPerString); i++) {
        if (relativeIndex === options.wordsPerString - 1) {
          token += options.formatter(word(), relativeIndex);
        }
        else {
          token += options.formatter(word(), relativeIndex) + options.separator;
        }
        relativeIndex++;
        if ((i + 1) % options.wordsPerString === 0) {
          results.push(token);
          token = ''; 
          relativeIndex = 0;
        }
       
      }
      if (typeof options.join === 'string') {
        results = results.join(options.join);
      }
    
      return results;
    }
    
    module.exports = words;
    // Export the word list as it is often useful
    words.wordList = wordList;