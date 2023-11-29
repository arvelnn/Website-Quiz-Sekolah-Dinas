let index = 0;
let attempt = 0;
let score = 0;
let wrong = 0;

let question = quiz.sort(function () {
  return 0.5 - Math.random();
});

let totalQuestion = question.length;

$(function () {
  // timer code start from here

  let totaTime = 91; // 91 second for timer
  let min = 0;
  let sec = 0;
  let counter = 0;

  let timer = setInterval(function () {
    counter++;
    min = Math.floor((totaTime - counter) / 60); //calculating min
    sec = totaTime - min * 60 - counter;

    $(".timerBox span").text(min + ":" + sec);

    if (counter == totaTime) {
      alert("Waktu Habis, Klik OK untuk melihat Hasil");
      result();

      clearInterval(timer);
    }
  }, 1000); //timer set for 1 second interval
  // timer code end here

  // print Question
  printQuestion(index);
});

// Function to print question start

function printQuestion(i) {
  $(".questionBox").text(question[i].question);
  $(".optionBox span").eq(0).text(question[i].option[0]);
  $(".optionBox span").eq(1).text(question[i].option[1]);
  $(".optionBox span").eq(2).text(question[i].option[2]);
}
// Function to print question end

// Function to check answer start

function checkAnswer(option) {
  attempt++;

  let optionClicked = $(option).data("opt");

  // console.log(question[index]);

  if (optionClicked == question[index].answer) {
    $(option).addClass("right");
    score++;
  } else {
    $(option).addClass("wrong");
    wrong++;
  }

  $(".scoreBox span").text(score);

  $(".optionBox span").attr("onclick", "");
}

// Function to check answer end

// Function for the next question start

function showNext() {
  if (index >= question.length - 1) {
    showResult(0);
    return;
  }
  index++;

  $(".optionBox span").removeClass();

  $(".optionBox span").attr("onclick", "checkAnswer(this)");
  printQuestion(index);
}

// Function for the next question end

// Function for result start

function showResult(j) {
  if (j == 1 && index < question.length - 1 && !confirm("Quiz belum selesai. Klik OK untuk melewati Quiz dan kamu mendapat Hasil")) {
    return;
  }

  $("#questionScreen").hide();
  $("#resultScreen").show();

  $("#totalQuestion").text(totalQuestion);
  $("#attemptQuestion").text(attempt);
  $("#correctQuestion").text(score);
  $("#wrongQuestion").text(wrong);
}

// Function for result end

// Result function start

function result() {
  $("#questionScreen").hide();
  $("#resultScreen").show();

  $("#totalQuestion").text(totalQuestion);
  $("#atemmptQuestion").text(attempt);
  $("#correctAnswer").text(Correct);
  $("#wrongAnswer").text(wrong);
}
// Result function end
