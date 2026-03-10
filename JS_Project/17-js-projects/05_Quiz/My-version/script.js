document.addEventListener("DOMContentLoaded", () => {
  // Grabbing Elements

  //Buttons

  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");

  // The containers

  const questionContainer = document.getElementById("question-container");

  const resultContainer = document.getElementById("result-container");

  // Things inside our container
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const scoreDisplay = document.getElementById("score");

  let currentQuestionIndex = 0;
  let score = 0;

  // step one user start the quiz by pressing the start button

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click",()=>{

    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
      showQuestion();

    }

    else{
      //at the end 

      showResult();

    }


  });


  // code for restart button 

  restartBtn.addEventListener("click",()=>{

    currentQuestionIndex=0;
    score=0;
    resultContainer.classList.add("hidden");
    startQuiz();
    nextBtn.classList.remove("hidden");




  })


  

 

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();

  }

  // writing a function to just show question

  function showQuestion() {
    nextBtn.classList.add("hidden");

    //show you the question
    questionText.textContent = questions[currentQuestionIndex].question;

    //showing the options list

    choicesList.innerHTML = ""; //clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;

      li.addEventListener("click", () => selectAnswer(choice));
      
      choicesList.appendChild(li);
      
    });

    
  }

  function selectAnswer(choice) {

    //grabbing the current answer:

    
  // Add "selected" to the clicked one
  

    const correctAnswer=questions[currentQuestionIndex].answer
    if( choice === correctAnswer ){

      score++;
    }

    nextBtn.classList.remove("hidden");

   



  }


  function showResult(){

    questionContainer.classList.add("hidden");
    
    resultContainer.classList.remove("hidden");

    scoreDisplay.textContent=`${score} out of ${questions.length}`






  }



  const questions = [
    // Question as object
    {
      question: "What is the capital of France ?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },

    {
      question: "What planet is knows as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },

    {
      question: "Who wrote Hamlet ?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];
});
