var panel = $("#play-area");

$(document).on("click", "#start", function(event){
  game.start();
});

$(document).on("click", "#done", function(event){
  game.done();
});

var questions = [{
	question: "What is time?",
	choices: ["The flow of a river", "The concept of time is self-evident", "Time is what a clock reads", "All of the above"],
	correctAnswer: "All of the above"

}, {	

	question: "Does time exist as a thing in itself?",
	choices: ["Yes", "No", "Maybe", "Doubtfully"],
	correctAnswer: "Doubtfully"

}, {

	question: "In which direction does time pass?",
	choices: ["This is relative", "Forwards => one second per second", "Both of the above", "None of the above"],
	correctAnswer: "Both of the above"

}, {

	question: "When was the beginning of time?",
	choices: ["15 billion years ago", "In 1847 when the timescale, GMT, was adopted", "Time is cyclical", "In the beginning..."],
	correctAnswer: "In the beginning..."

}, {

	question: "When will time end?",
	choices: ["In Five Billion Years", "Time is an illusion", "Not with a bang but a whimper", "Time will end at a place called future timelike infinity"],
	correctAnswer: "Time is an illusion"

}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,

  countdown: function() {
  	game.counter--;
  	$("#counter-number").html(game.counter);

  	if (game.counter === 0) {
  		alert("TIME'S UP");
  		game.done();

  	}
  },

  start: function() {
  	timer = setInterval(game.countdown, 1000);
  	$('#subcontainer').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
  	$("#start").remove();

  	for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].choices.length; j++){
        panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
        }
  		}
  		panel.append("<button id='done'>DONE</button>");
      
  	},

  	done: function() {

  		$.each($("input[name='question-0']:checked"), function() {
  			if ($(this).val() == questions[0].correctAnswer) {
  				console.log(this);
  				  game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-1']:checked"), function() {
  			if ($(this).val() == questions[1].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-2']:checked"), function() {
  			if ($(this).val() == questions[2].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-3']:checked"), function() {
  			if ($(this).val() == questions[3].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-4']:checked"), function() {
  			if ($(this).val() == questions[4].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});

  		this.results();
  	},


  	  results:function() {
  	  	clearInterval(timer);

  	  	$("#subcontainer h2").remove();
  	   panel.html("<h2>End.</h2>");
  	   panel.append("<h3>Arguably correct: " + this.correct + "</h3>");
  	   panel.append("<h3>Possibly wrong: " + this.incorrect + "</h3>");
  	   panel.append("<h3>You failed to answer this many: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  	  
  	  }

  };
