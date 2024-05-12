const questions = [
            {
                question: "What is the capital of France?",
                options: ["London", "Paris", "Berlin", "Rome"],
                answer: "B"
            },
            {
                question: "What is the largest mammal?",
                options: ["Elephant", "Whale", "Giraffe", "Horse"],
                answer: "B"
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
                answer: "B"
            }
        ];

        let currentQuestion = 0;
        let score = 0;

        function loadQuestion() {
            const q = questions[currentQuestion];
            document.getElementById("question").textContent = q.question;
            document.getElementById("optionALabel").textContent = q.options[0];
            document.getElementById("optionBLabel").textContent = q.options[1];
            document.getElementById("optionCLabel").textContent = q.options[2];
            document.getElementById("optionDLabel").textContent = q.options[3];
        }

        function checkAnswer() {
            const selectedOption = document.querySelector('input[name="answer"]:checked');
            if (!selectedOption) {
                alert("Please select an answer.");
                return;
            }

            if (selectedOption.value === questions[currentQuestion].answer) {
                score++;
            }

            currentQuestion++;
            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                document.getElementById("quizContainer").style.display = "none";
                document.getElementById("result").textContent = "Quiz completed. Your score is " + score + " out of " + questions.length + ".";
            }
        }

        loadQuestion();
        