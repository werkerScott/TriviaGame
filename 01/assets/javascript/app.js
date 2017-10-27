
// get it working without timers, then add timers
/////////  START document ready wrapper  ////////////////
$(document).ready(function() {

var questionsArray = [
  {
    question: "1 blah blah",
    answersArray: [
      {
        answerText: "a",
        answerCorrect: 1,
      },
      {
        answerText: "b",
        answerCorrect: 1
      },
      {
        answerText: "c",
        answerCorrect: 1,
      },
      {
        answerText: "d",
        answerCorrect: 2,
      }
    ]
  },
  {
    question: "2 blah blah",
    answersArray: [
      {
        answerText: "a",
        answerCorrect: 1,
      },
           {
        answerText: "b",
        answerCorrect: 1,
      },
      {
        answerText: "c",
        answerCorrect: 2,
      },
      {
        answerText: "d",
        answerCorrect: 1,
      }
    ]
  },
  {
    question: "3 blah blah",
    answersArray: [
      {
        answerText: "a",
        answerCorrect: 1,
      },
           {
        answerText: "b",
        answerCorrect: 2,
      },
      {
        answerText: "c",
        answerCorrect: 1,
      },
      {
        answerText: "d",
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
// var isGameOver = false;

var app = {
  new_game: function () {
    // empty the current question


    // evaluate # rounds - if 0 then write button "play" with click event and wait
    if (userRound === -1) {
      app.start_game();
    } else {
      
      app.set_nextRound();

    };

    // evaluate # rounds - if 0 then write button "play" with click event
    // valuate # rounds - if = to arrayLength, then write button "play again"
    // set rounds to 0
  },


  set_nextRound: function () {
    // increment the round counter
    userRound++

    // check to see if this is the last round, if it is the game ends
    app.eval_gameStatus();

    // Deleting the question and answers prior to adding new questions and answers
    // (this is necessary otherwise you will have repeat buttons)
    $("#page_question").empty();
    $("#page_answers").empty();

    

    // grab the data object and pass it to a selector function based on rounds
    if (userRound < questionsArray.length) {
      currentQuestion = app.get_nextRoundData(questionsArray);
      // console.log(currentQuestion);
      // console.log(questionsArray[0]);

      // dynamically add question
      var questionDiv = $("#page_answers");
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
    }
  },

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

  eval_gameStatus: function () {
    if (userRound === questionsArray.length) {
      app.end_game();
    }
  // otherwise do nothing
    
  },

  start_game: function () {
  // hide game caontant areas
    $("#page_questionSection").hide();
    $("#page_gameoverSection").hide();

  // this shouldn't work but it does
    $("#btn_startGame").on("click", function() {
      // toggle visibility
      $("#page_questionSection").show();
      $("#page_instructionsSection").hide();
      app.set_nextRound();
    });

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

  reset: function () {
    userGuessesRight = 0;
    userGuessesWrong = 0;
    userRound = 0;
    $("#page_questionSection").show();
    $("#page_gameoverSection").hide();
  }

 };
 

/////////  RUN GAME  ////////////////

  app.new_game();
  // either the intro page is loaded or the next question at this point. If intro page is loaded the funvtions land you back here
  // note: there is a button event listener for start game in start_game function
  

  // main event listeners


  $(document).on("click", ".selected_answer", function(event) {
    // console.log(event.target.dataset.answervalue);
    // grab true/false data value
    var isUserCorrect = parseInt(event.target.dataset.answervalue);
    // pass it to the evaluator
    app.eval_currentRound(isUserCorrect);
    // console.log("Right " + userGuessesRight);
    // console.log("Wrong " + userGuessesWrong);
    app.set_nextRound();

  });

  $(document).on("click", "#btn_startNewGame", function(event) {
    app.reset();
    app.new_game();
  });


/////////  END document ready wrapper  ////////////////
});
