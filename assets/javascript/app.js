
// APPROACH //
// I am trying something different. Basically there are 3 regions
// representing the intro, the game Q/A, and the end of game
// I am showing and hiding these regions dynamically
// and creating the answer buttons dynamically each round
// I am not sure if this is a valid best practice, one thing that happens is there
// is a flicker at the beginning where the page loads, then, hides things
// If using this technique, it is probably better to use JS to toggle CSS
// visibility, that way, could set visibility initially with the CSS so no flicker
// Please give me feedback on this approach!

// I got the game running first, then tried to figure out how to add the timer functionality




/////////  START document ready wrapper  ////////////////
$(document).ready(function() {

var questionsArray = [
  {
    question: "Which late 80s pop act had their Grammy revoked for allegedly not singing the vocals on their album?",
    answersArray: [
      {
        answerText: "Culture Club",
        answerCorrect: 1,
      },
      {
        answerText: "Banannarama",
        answerCorrect: 1
      },
      {
        answerText: "Vanilla Ice",
        answerCorrect: 1,
      },
      {
        answerText: "Milli Vanilli",
        answerCorrect: 2,
      }
    ]
  },
  {
    question: "What was the best selling album of the 80s?",
    answersArray: [
      {
        answerText: "Bruce Springsteen - Born in the USA",
        answerCorrect: 1,
      },
           {
        answerText: "AC/DC - Back in Black",
        answerCorrect: 1,
      },
      {
        answerText: "Michael Jackson - Thriller",
        answerCorrect: 2,
      },
      {
        answerText: "Prince - Purple Rain",
        answerCorrect: 1,
      }
    ]
  },
  {
    question: "What was the highest grossing movie of the 80s?",
    answersArray: [
      {
        answerText: "Top Gun",
        answerCorrect: 1,
      },
           {
        answerText: "ET",
        answerCorrect: 2,
      },
      {
        answerText: "Star Wars - Return of the Jedi",
        answerCorrect: 1,
      },
      {
        answerText: "Raider of the Lost Ark",
        answerCorrect: 1,
      }
    ]
  },
  {
    question: "With over 50 reported casualties, what volcano erupted in 1980 that became the worst volcanic disaster in US history?",
    answersArray: [
      {
        answerText: "Mt. Saint Helens",
        answerCorrect: 2,
      },
           {
        answerText: "Mt. Rainer",
        answerCorrect: 1,
      },
      {
        answerText: "Mt. Hood",
        answerCorrect: 1,
      },
      {
        answerText: "Mt. Olympus",
        answerCorrect: 1,
      }
    ]
  },
  {
    question: "What was the first video played on MTV?",
    answersArray: [
      {
        answerText: "The Buggles - Video Killed The Radio Star",
        answerCorrect: 2,
      },
           {
        answerText: "A-Ha - Take On Me",
        answerCorrect: 1,
      },
      {
        answerText: "AC/DC - Back in Black",
        answerCorrect: 1,
      },
      {
        answerText: "Sex Pistols - Anarchy in the UK",
        answerCorrect: 1,
      }
    ]
  },
  {
    question: "What gaming console, launched in 1983, became the best selling Video Game Console of the 80s?",
    answersArray: [
      {
        answerText: "Atari 2600",
        answerCorrect: 1,
      },
           {
        answerText: "Nintendo Entertainment System",
        answerCorrect: 1,
      },
      {
        answerText: "Nintendo Game Boy",
        answerCorrect: 2,
      },
      {
        answerText: "Commodore SX-64",
        answerCorrect: 1,
      }
    ]
  },
  {
    question: "Though this toy was technically invented in 1974, it gained its massive popularity in the 1980s. With over 350 MILLION units sold, it is widely considered to be the best selling toy in history.",
    answersArray: [
      {
        answerText: "The Yo-Yo",
        answerCorrect: 1,
      },
           {
        answerText: "Etch-A-Sketch",
        answerCorrect: 1,
      },
      {
        answerText: "Pong",
        answerCorrect: 1,
      },
      {
        answerText: "Rubik’s Cube",
        answerCorrect: 2,
      }
    ]
  },
  {
    question: "This Prime Minister of the United Kingdom was the first female leader of a Western country, nicknamed 'The Iron Lady'",
    answersArray: [
      {
        answerText: "Princess Diana Spencer",
        answerCorrect: 1,
      },
           {
        answerText: "Queen Elizabeth Windsor",
        answerCorrect: 1,
      },
      {
        answerText: "Lady Margaret Sackville",
        answerCorrect: 1,
      },
      {
        answerText: "Baroness Margret Thatcher",
        answerCorrect: 2,
      }
    ]
  },
  {
    question: "What was the most famous and large-scale nuclear plant meltdown in history, occurring on April 26, 1986?",
    answersArray: [
      {
        answerText: "Chernobyl",
        answerCorrect: 2,
      },
           {
        answerText: "Three-Mile Island",
        answerCorrect: 1,
      },
      {
        answerText: "Fukushima",
        answerCorrect: 1,
      },
      {
        answerText: "Leningrad",
        answerCorrect: 1,
      }
    ]
  },
  {
    question: "What world-changing musician was murdered outside of his building in New York City on the evening of December 8th, 1980?",
    answersArray: [
      {
        answerText: "Marvin Gaye",
        answerCorrect: 1,
      },
           {
        answerText: "Johnny Cash",
        answerCorrect: 1,
      },
      {
        answerText: "John Lennon",
        answerCorrect: 2,
      },
      {
        answerText: "Sid Viscous",
        answerCorrect: 1,
      }
    ]
  },
  {
    question: "What 1980's sitcom was Tony Danza in?",
    answersArray: [
      {
        answerText: "Family Ties",
        answerCorrect: 1,
      },
           {
        answerText: "Who’s the Boss",
        answerCorrect: 2,
      },
      {
        answerText: "Different Strokes",
        answerCorrect: 1,
      },
      {
        answerText: "Full House",
        answerCorrect: 1,
      }
    ]
  }

];

var userGuessesRight = 0;
var userGuessesWrong = 0;
var userRound = -1;
var currentQuestion = []; 
var totalRounds = questionsArray.length;
var isGameOver = false; //using 1 as false, 2 as true

//global timers - timeout and page countdown display
var intervalId;
var time = 10;
var timer;



var app = {
  new_game: function () {

    // check is this the first tiem playing?
    if (userRound === -1 && !isGameOver) {
      // console.log("initial I fired");
      app.start_game();
    } 

    // check have you played through once already?
    else if (userRound === -1 && isGameOver) {
      // console.log("reset I fired");
      isGameOver = 1;
      // userRound = -1;
      app.set_nextRound();

    // otherwise load the next round  
    } else {
      // console.log("load next I fired");
      app.set_nextRound();
    };

  },


  set_nextRound: function () {
    
    // increment the round counter
    userRound++
  
    // Deleting the question and answers prior to adding new questions and answers
    // (this is necessary otherwise you will have repeat buttons)
    $("#page_question").empty();
    $("#page_answers").empty();

    //////// IS GAME OVER? No, then...  //////// 
    // grab the data object and pass it to a selector function based on rounds
    if (userRound < questionsArray.length) {
      currentQuestion = app.get_nextRoundData(questionsArray);
      // console.log(currentQuestion);
      // console.log(questionsArray[0]);

      // dynamically add question
      var questionDiv = $("#page_question");
      var questionText = $("<h4>").text(currentQuestion.question);
      questionDiv.append(questionText);

      // dynamically add answers and values
      for (var i = 0; i < currentQuestion.answersArray.length; i++) {
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var answerButton = $("<button>");
        // dynamically add all the needed attributes and classes - everything but selected_answer is bootstrap
        answerButton.addClass("selected_answer btn btn-primary mb-1 text-left");
        // add the type, not sure if needed but adding anyway
        answerButton.attr("type", "button");
        // grab true false value
        answerButton.attr("data-answervalue", currentQuestion.answersArray[i].answerCorrect);
        // set display text
        answerButton.text(currentQuestion.answersArray[i].answerText);
         // Adding the button to the page_answers div
        $("#page_answers").append(answerButton); 

        }
      // start page countdown display
      app.start_counter();
      // start timer
      timer = setTimeout(app.timeUp, 1000 * 11);
      }

      //////// IS GAME OVER? No, then...  //////// 
      else {
        app.clear_allTimers();
        app.end_game();
      }

     

  },

  // TIMERS //

  start_counter: function(arr) {
    console.log("I fired - start");
    clearInterval(intervalId);
    // DONE: Use setInterval to start the count here and set the clock to running.
    time=10;
    // print first number
    $(".page_seconds").text(time);
    intervalId = setInterval(app.loop_counter, 1000);

    },


  loop_counter: function() {
    console.log("I fired - count");
    // deccrement time by 1, remember we cant use "this" here.
    time--;

    // Get the current time, pass that into the stopwatch.timeConverter function,
    // and save the result in a variable.
    var converted = app.timeConverter(time);
    // console.log(converted);

    // Use the variable we just created to show the converted time in the correct location.
    $(".page_seconds").text(converted);

  },

  clear_allTimers: function() {
    clearTimeout(timer);
    clearInterval(intervalId);
  },

  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return seconds;
  },


  timeUp: function() {
    console.log("I fired - timeUp");
     userGuessesWrong++;
     alert("Times Up!");
     app.set_nextRound();
  },


 // END TIMERS //

  get_nextRoundData: function (arr) {
    // called from set_nextRound
    currentQuestion = arr[userRound];
    // return value to set_nextRound
    return currentQuestion;
  },

  eval_currentRound: function (userguess) {
    // if user is correct then add to wins
    // console.log("user guessed " + userguess);
    if (userguess === 1) {
      userGuessesWrong++;
      // come back and do something inline
      alert("You are wrong!");
    };
    if (userguess === 2) {
      userGuessesRight++;
      // come back and do something inline
      alert("You are right!");
    // if user is wrong then add to loses
    }; 

  },

  start_game: function () {
  // hide game caontant areas
    $("#page_questionSection").hide();
    $("#page_gameoverSection").hide();
  },

  end_game: function () {
    
    // toggle visibility
    $("#page_questionSection").hide();
    $("#page_gameoverSection").show();
    // write results to the page
    $(".page_guessesRight").text(userGuessesRight);
    $(".page_guessesWrong").text(userGuessesWrong);

    // this shouldn't work but for some reason it does, event listener in a method
  },

  reset_game: function () {
    userGuessesRight = 0;
    userGuessesWrong = 0;
    userRound = -1;
    isGameOver = true;
  }

 };
 

/////////  RUN GAME  ////////////////

  app.new_game();
  // either the intro page is loaded or the next question at this point. If intro page is loaded the funvtions land you back here
  // note: there is a button event listener for start game in start_game function
  

// Region: Instructions Content
  $(document).on("click", "#btn_startGame", function(event) {
      // toggle visibility
      $("#page_questionSection").show();
      $("#page_instructionsSection").hide();
      app.set_nextRound();
  });

// Region: Game Contant
  $(document).on("click", ".selected_answer", function(event) {
    // stop timers
    app.clear_allTimers();
    // grab true/false data value
    var isUserCorrect = parseInt(event.target.dataset.answervalue);
    // pass it to the evaluator
    app.eval_currentRound(isUserCorrect);
    app.set_nextRound();
  });

// Region: Game Over Contant
  $(document).on("click", "#btn_startNewGame", function(event) {
    $("#page_questionSection").show();
    $("#page_gameoverSection").hide();
    app.reset_game();
    app.new_game();
  });

/////////  END document ready wrapper  ////////////////
});
