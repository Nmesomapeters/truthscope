import React, { useState, useEffect, useCallback } from "react";
import { Container, Button, Form, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const QuizPage = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(30);
  const [showConfetti, setShowConfetti] = useState(false);

  const questions = [
    {
      question: "What is a common trait of fake news articles?",
      options: [
        "Well-researched facts and citations",
        "Neutral and balanced tone",
        "Sensational headlines with little evidence",
      ],
      correctAnswer: "Sensational headlines with little evidence",
      explanation: "Fake news often uses clickbait headlines to provoke emotional reactions.",
    },
    {
      question: "Which of the following is a verified tactic used in disinformation campaigns?",
      options: ["Using memes to spread misinformation", "Banning all media outlets", "Removing all content online"],
      correctAnswer: "Using memes to spread misinformation",
      explanation: "Memes are a powerful tool in spreading falsehoods quickly and virally.",
    },
    {
      question: "Deepfake videos are often used to:",
      options: [
        "Improve video quality",
        "Alter people’s appearance realistically",
        "Spread misleading content by mimicking real people",
      ],
      correctAnswer: "Spread misleading content by mimicking real people",
      explanation: "Deepfakes can impersonate public figures and spread disinformation.",
    },
    {
      question: "Which platform has been linked to the rapid spread of conspiracy theories?",
      options: ["LinkedIn", "Facebook", "Spotify"],
      correctAnswer: "Facebook",
      explanation: "Facebook’s algorithm has been exploited to amplify conspiracy content.",
    },
    {
      question: "What is confirmation bias?",
      options: [
        "Believing only what experts say",
        "Rejecting all online news",
        "Preferring information that supports your existing beliefs",
      ],
      correctAnswer: "Preferring information that supports your existing beliefs",
      explanation: "Confirmation bias makes people more likely to believe fake news that aligns with their views.",
    },
    {
      question: "How can you verify if an image shared online is real?",
      options: ["Check reverse image search", "Trust the caption", "Look at the number of likes"],
      correctAnswer: "Check reverse image search",
      explanation: "Reverse image search helps identify manipulated or reused images.",
    },
    {
      question: "What makes satire different from fake news?",
      options: [
        "It’s meant to deceive",
        "It’s created for humor or criticism, not deception",
        "It’s always shared anonymously",
      ],
      correctAnswer: "It’s created for humor or criticism, not deception",
      explanation: "Satire may resemble fake news but its purpose is entertainment or critique, not deception.",
    },
    {
      question: "Which of these is a red flag for disinformation?",
      options: [
        "Citations from reliable sources",
        "Multiple spelling errors and ALL CAPS",
        "Author’s bio and credentials listed",
      ],
      correctAnswer: "Multiple spelling errors and ALL CAPS",
      explanation: "Poor grammar, spelling, and excessive capitalization are typical red flags.",
    },
    {
      question: "Which of these actions helps fight misinformation?",
      options: [
        "Sharing news without reading",
        "Reporting false content to platforms",
        "Blocking fact-checking websites",
      ],
      correctAnswer: "Reporting false content to platforms",
      explanation: "Reporting helps platforms take down harmful false information.",
    },
    {
      question: "What should you do before sharing a shocking news article?",
      options: [
        "Assume it’s true if it supports your view",
        "Verify it with trusted sources",
        "Share it immediately for awareness",
      ],
      correctAnswer: "Verify it with trusted sources",
      explanation: "Verifying before sharing prevents the spread of disinformation.",
    },
  ];

  const finishQuiz = useCallback(() => {
    setQuizCompleted(true);
    if (score === questions.length) {
      setShowConfetti(true);
    }
  }, [score, questions.length]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0 && !quizCompleted) {
        setTimer((prevTimer) => prevTimer - 1);
      } else if (timer === 0) {
        finishQuiz();
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, quizCompleted, finishQuiz]);

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentQuestion = questions[currentQuestionIndex];

    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setAnswer("");

    if (currentQuestionIndex === questions.length - 1) {
      finishQuiz();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const renderResultMessage = () => {
    if (score === questions.length) {
      return "Amazing! You are a fake news expert!";
    } else if (score >= questions.length / 2) {
      return "Good job! You are on the right track.";
    } else {
      return "Keep learning! You'll get better at spotting fake news!";
    }
  };

  return (
    <Container style={{ maxWidth: "600px", marginTop: "50px" }}>
      {showConfetti && <Confetti />}

      <h2 className="text-center mb-4">Can You Spot the Fake News?</h2>
      <p className="text-center mb-4">Test your knowledge about disinformation!</p>

      {!quizCompleted ? (
        <>
          <ProgressBar now={(currentQuestionIndex / questions.length) * 100} />
          <h4 className="mt-3 text-center">
            {questions[currentQuestionIndex].question}
          </h4>

          <Form onSubmit={handleSubmit}>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <Form.Check
                key={index}
                type="radio"
                label={option}
                value={option}
                checked={answer === option}
                onChange={handleAnswerChange}
                style={{ marginBottom: "10px" }}
              />
            ))}
            <Button
              type="submit"
              className="w-100"
              style={{ background: "#BE58CF", border: "none" }}
            >
              Submit Answer
            </Button>
          </Form>

          <p className="text-center mt-3">Time Left: {timer}s</p>
        </>
      ) : (
        <div className="text-center">
          <h3>{renderResultMessage()}</h3>
          <p>
            Your final score is: {score}/{questions.length}
          </p>
          <Button
            onClick={() => navigate("/education")}
            style={{ background: "#BE58CF", border: "none" }}
          >
            Back to Education
          </Button>
        </div>
      )}
    </Container>
  );
};

export default QuizPage;
