
var app = {
//global variables
userWins:0,
userLoses:0,
userRound:,
isGameOver:false,

questionsArray:[
  {
    question: "1 blah blah",
    answersArray: [
      {
        answerText: "a",
        answerCorrect: false,
      },
           {
        answerText: "b",
        answerCorrect: false,
      },
      {
        answerText: "c",
        answerCorrect: false,
      },
      {
        answerText: "d",
        answerCorrect: false,
      }
    ];
  },
  {
    question: "2 blah blah",
    answersArray: [
      {
        answerText: "a",
        answerCorrect: false,
      },
           {
        answerText: "b",
        answerCorrect: false,
      },
      {
        answerText: "c",
        answerCorrect: true,
      },
      {
        answerText: "d",
        answerCorrect: false,
      }
    ];
  },
  {
    question: "3 blah blah",
    answersArray: [
      {
        answerText: "a",
        answerCorrect: false,
      },
           {
        answerText: "b",
        answerCorrect: false,
      },
      {
        answerText: "c",
        answerCorrect: true,
      },
      {
        answerText: "d",
        answerCorrect: false,
      }
    ];
  }

];
