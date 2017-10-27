// example of how questions are set up
var question1 = {
		questionAsked: "What is the fear of snakes called?",
		answers: {
			answers1: {
				answersText: "Somniphobia",
				answerscorrect: false,
			},
			answers2: {
				answersText: "Coulrophobia",
				answerscorrect: false,
			},
			answers3: {
				answersText: "Ophidiophobia",
				answerscorrect: true,
			},
			answers4: {
				answersText: "Omphalophobia",
				answerscorrect: false,
			},

		},
	};

//pull the value of questionAsked based on what round we are in
$("#questionText").html(questionLibrary["question" + round].questionAsked);