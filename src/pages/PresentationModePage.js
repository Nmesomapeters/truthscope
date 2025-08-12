import React, { useEffect, useState, useCallback } from "react";

const slides = [
  {
    id: 1,
    title: "Clickbait Claim About 5G",
    description:
      "Scientists confirm 5G towers caused COVID-19 — a baseless and viral disinformation campaign.",
    imageUrl: "https://ichef.bbci.co.uk/images/ic/1200xn/p0kwssnx.jpg",
    label: "FAKE CONTENT DETECTED",
    type: "text",
    quiz: {
      question: "Is the claim about 5G causing COVID-19 true or false?",
      options: ["True", "False"],
      correct: 1,
    },
  },
  {
    id: 2,
    title: "Authentic WHO Advisory",
    description:
      "WHO clarifies there is no link between 5G and COVID-19 — a factual and verified notice from WHO.",
    imageUrl:
      "https://www.bu.edu/hic/files/2021/01/eng-mythbusting-ncov-15-636x318.png",
    label: " VERIFIED CONTENT",
    type: "text",
    quiz: {
      question: "Does WHO confirm a link between 5G and COVID-19?",
      options: ["Yes", "No"],
      correct: 1,
    },
  },
  {
    id: 3,
    title: "AI-Generated Fake Protest",
    description:
      "An AI-created image falsely circulated as protest imagery to inflame tensions.",
    imageUrl:
      "https://media.wired.com/photos/684847f683b28c3f8b593b08/4:3/w_1800,h_1350,c_limit/061025-grok-ice-protest-disinformation.jpg",
    label: " FAKE CONTENT DETECTED",
    type: "image",
    quiz: {
      question: "Is this protest image real or AI-generated?",
      options: ["Real", "AI-generated"],
      correct: 1,
    },
  },
  {
    id: 4,
    title: "Verified Climate Strike Photo",
    description:
      "A real photo from a global climate strike, verified by multiple fact-checkers.",
    imageUrl:
      "https://www.sierraclub.org/sites/default/files/styles/sierra_full_page_width/public/slideshows/SIERRA-12-Rome-WhatsApp%20Image%202021-09-25%20at%208.47.48%20AM-WB.jpg.webp?itok=w004Zw_G",
    label: " VERIFIED CONTENT",
    type: "image",
    quiz: {
      question: "Is this climate strike photo verified by fact-checkers?",
      options: ["Yes", "No"],
      correct: 0,
    },
  },
  {
    id: 5,
    title: "Deepfake Example: AI Manipulation",
    description:
      "A video demonstrating high-fidelity deepfake manipulation techniques.",
    videoUrl: "https://www.youtube.com/embed/ZJrffEfCMrs",
    label: " FAKE CONTENT DETECTED",
    type: "video",
    quiz: {
      question: "Is the video an example of deepfake manipulation?",
      options: ["Yes", "No"],
      correct: 0,
    },
  },
  {
    id: 6,
    title: "Verified News Clip: Local Investigation",
    description:
      "A fact-check investigation video by KREM 2 VERIFY team debunking viral claims.",
    videoUrl: "https://www.youtube.com/embed/9xwN5nIr6Gw",
    label: " VERIFIED CONTENT",
    type: "video",
    quiz: {
      question: "Does this video debunk viral claims?",
      options: ["Yes", "No"],
      correct: 0,
    },
  },
];

const PresentationModePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [presentationEnded, setPresentationEnded] = useState(false);

  const slide = slides[currentSlide];

  // Auto play effect
  useEffect(() => {
    if (showQuiz || presentationEnded) return; // pause autoplay if quiz or ended

    const interval = setInterval(() => {
      if (isPlaying) {
        setShowQuiz(true);
      }
    }, 10000); // 10 seconds per slide before quiz

    return () => clearInterval(interval);
  }, [isPlaying, showQuiz, presentationEnded]);

  // Handle answer selection — wrapped in useCallback with dependencies
  const handleAnswer = useCallback(
    (index) => {
      if (selectedAnswer !== null) return; // prevent multiple answers

      setSelectedAnswer(index);
      if (index === slide.quiz.correct) {
        setFeedback(" Correct!");
      } else {
        setFeedback(" Incorrect, review the slide content.");
      }
    },
    [selectedAnswer, slide.quiz.correct]
  );

  // Keyboard navigation, with handleAnswer in dependencies
  const handleKeyDown = useCallback(
    (e) => {
      if (presentationEnded) return; // disable keys after end

      if (!showQuiz) {
        if (e.key === "ArrowRight") {
          setIsPlaying(false);
          setShowQuiz(true);
        } else if (e.key === "ArrowLeft") {
          setIsPlaying(false);
          setSelectedAnswer(null);
          setFeedback("");
          setShowQuiz(false);
          setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
        }
      } else {
        // Quiz mode: Enter key to select answer if an option is focused
        if (e.key === "Enter" && selectedAnswer !== null) {
          handleAnswer(selectedAnswer);
        }
      }
    },
    [showQuiz, selectedAnswer, presentationEnded, handleAnswer]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Move to next slide or end presentation
  const nextAfterQuiz = () => {
    setSelectedAnswer(null);
    setFeedback("");
    setShowQuiz(false);

    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
      setIsPlaying(true);
    } else {
      setPresentationEnded(true);
    }
  };

  // Restart the entire presentation
  const replayPresentation = () => {
    setCurrentSlide(0);
    setIsPlaying(true);
    setShowQuiz(false);
    setSelectedAnswer(null);
    setFeedback("");
    setPresentationEnded(false);
  };

  return (
    <main
      style={{
        backgroundColor: "#fff",
        color: "#4B0082",
        padding: "30px",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
      role="main"
      aria-label="TruthScope Presentation Mode"
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#6C4AB6",
          marginBottom: "10px",
        }}
      >
        TruthScope Presentation Mode
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          maxWidth: "700px",
          margin: "0 auto 30px",
        }}
      >
        Looping visual showcase of real vs fake content — auto-play mode for
        demos, exhibitions, or classrooms.
      </p>

      <div
        style={{
          border: "2px solid #6C4AB6",
          borderRadius: "16px",
          padding: "20px",
          margin: "0 auto 40px",
          maxWidth: "800px",
          boxShadow: "0 0 10px rgba(108, 74, 182, 0.2)",
          backgroundColor: "#f8f4ff",
          textAlign: "center",
        }}
        aria-live="polite"
      >
        {/* Progress */}
        {!presentationEnded && (
          <p
            style={{
              fontWeight: "bold",
              color: "#6C4AB6",
              marginBottom: "15px",
            }}
            aria-label={`Slide ${currentSlide + 1} of ${slides.length}`}
          >
            Slide {currentSlide + 1} of {slides.length}
          </p>
        )}

        {/* Show slide or final message */}
        {!presentationEnded ? (
          <>
            {!showQuiz ? (
              <>
                <h3 style={{ marginBottom: "10px" }}>
                  {slide.type.charAt(0).toUpperCase() + slide.type.slice(1)}{" "}
                  Example
                </h3>

                {slide.type === "text" && (
                  <blockquote
                    style={{
                      fontSize: "1.3rem",
                      fontStyle: "italic",
                      borderLeft: "5px solid #6C4AB6",
                      paddingLeft: "15px",
                      marginBottom: "20px",
                      textAlign: "left",
                    }}
                    tabIndex={0}
                    aria-label={`Text description: ${slide.description}`}
                  >
                    {slide.description}
                  </blockquote>
                )}

                {slide.type === "image" && (
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "12px",
                      marginBottom: "20px",
                    }}
                  />
                )}

                {slide.type === "video" && (
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      height: 0,
                      marginBottom: "20px",
                    }}
                  >
                    <iframe
                      src={slide.videoUrl}
                      title={slide.title}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                        borderRadius: "12px",
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                <h2 style={{ marginBottom: "10px" }}>{slide.title}</h2>
                <p
                  style={{
                    maxWidth: "700px",
                    fontSize: "1.1rem",
                    margin: "10px auto",
                    textAlign: "center",
                  }}
                >
                  {slide.description}
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    color: slide.label.includes("FAKE") ? "#b30000" : "green",
                    textAlign: "center",
                  }}
                  aria-label={slide.label}
                >
                  {slide.label}
                </p>
              </>
            ) : (
              // Quiz for current slide
              <>
                <h2 id="quizHeading"> Quiz</h2>
                <p
                  style={{ fontSize: "1.2rem", marginBottom: "20px" }}
                  id="quizQuestion"
                >
                  {slide.quiz.question}
                </p>
                {slide.quiz.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={selectedAnswer !== null}
                    aria-pressed={selectedAnswer === idx}
                    style={{
                      margin: "5px",
                      padding: "10px 15px",
                      fontSize: "1rem",
                      cursor: selectedAnswer === null ? "pointer" : "default",
                      backgroundColor:
                        selectedAnswer === idx
                          ? idx === slide.quiz.correct
                            ? "#4CAF50"
                            : "#f44336"
                          : "#ddd",
                      border: "none",
                      borderRadius: "6px",
                      color: "#333",
                    }}
                    tabIndex={0}
                    aria-labelledby={`quizQuestion`}
                  >
                    {opt}
                  </button>
                ))}
                {feedback && (
                  <p
                    style={{
                      marginTop: "20px",
                      fontWeight: "bold",
                      color: feedback.includes("Correct") ? "green" : "red",
                    }}
                    aria-live="assertive"
                  >
                    {feedback}
                  </p>
                )}
                {selectedAnswer !== null && (
                  <button
                    onClick={nextAfterQuiz}
                    style={{
                      marginTop: "20px",
                      backgroundColor: "#6C4AB6",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "1rem",
                    }}
                    aria-label={
                      currentSlide < slides.length - 1
                        ? "Next Slide"
                        : "Finish Presentation"
                    }
                  >
                    {currentSlide < slides.length - 1 ? "Next Slide" : "Finish"}
                  </button>
                )}
              </>
            )}
          </>
        ) : (
          // Presentation ended
          <>
            <h2
              style={{
                color: "#6C4AB6",
                marginBottom: "20px",
                fontSize: "2rem",
                textAlign: "center",
              }}
            >
              Presentation Completed!
            </h2>
            <button
              onClick={replayPresentation}
              style={{
                backgroundColor: "#6C4AB6",
                color: "#fff",
                border: "none",
                padding: "12px 25px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "1.2rem",
                display: "block",
                margin: "0 auto",
              }}
              aria-label="Replay the entire presentation"
            >
              Replay Presentation
            </button>
          </>
        )}
      </div>

      {/* Playback Controls */}
      {!presentationEnded && (
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <button
            onClick={() => {
              setIsPlaying(!isPlaying);
              if (!isPlaying) setShowQuiz(false);
            }}
            style={{
              backgroundColor: isPlaying ? "#b30000" : "#4CAF50",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "1.1rem",
              marginRight: "15px",
            }}
            aria-label={isPlaying ? "Pause Presentation" : "Play Presentation"}
          >
            {isPlaying ? "⏸ Pause" : "▶ Play"}
          </button>
          <button
            onClick={() => {
              setShowQuiz(true);
              setIsPlaying(false);
            }}
            style={{
              backgroundColor: "#6C4AB6",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "1.1rem",
            }}
            aria-label="Show quiz for current slide"
          >
            Quiz
          </button>
        </div>
      )}
    </main>
  );
};

export default PresentationModePage;
