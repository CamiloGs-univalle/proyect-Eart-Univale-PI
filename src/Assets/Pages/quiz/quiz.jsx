import React, { useState } from "react";
import Header from "../Header/Header";
import "./css/quiz.css";


const Home = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState([]);
  const [rewards, setRewards] = useState([]);

  const questions = [
    {
      question: "¿Qué es el manejo inadecuado de residuos?",
      options: [
        "La correcta disposición de los residuos",
        "La mala gestión y disposición de residuos",
        "Separar los residuos en orgánicos e inorgánicos",
        "Reciclar los materiales reutilizables",
      ],
      answer: 1,
    },
    {
      question: "¿Cuáles son los tipos de residuos y cómo mitigarlos?",
      options: [
        "Orgánicos e inorgánicos",
        "Sólidos y líquidos",
        "Reciclables y no reciclables",
        "Todos los anteriores",
      ],
      answer: 3,
    },
    {
      question: "¿Cómo se generan los residuos?",
      options: [
        "Por actividades humanas",
        "Por desastres naturales",
        "Por procesos industriales",
        "Todas las anteriores",
      ],
      answer: 3,
    },
    {
      question: "¿Qué es la erosión?",
      options: [
        "El desgaste de la superficie terrestre por factores naturales",
        "La acumulación de sedimentos",
        "El cambio climático",
        "La contaminación del agua",
      ],
      answer: 0,
    },
    {
      question: "¿Cuáles son los tipos de erosión?",
      options: [
        "Erosión hídrica, eólica y glacial",
        "Erosión térmica y química",
        "Erosión mecánica y biológica",
        "Ninguna de las anteriores",
      ],
      answer: 0,
    },
    {
      question: "¿Cuáles son las consecuencias de la erosión?",
      options: [
        "Pérdida de fertilidad del suelo",
        "Desertificación",
        "Daños a ecosistemas",
        "Todas las anteriores",
      ],
      answer: 3,
    },
    {
      question: "¿Cómo mitigar la erosión?",
      options: [
        "Reforestación",
        "Uso de terrazas agrícolas",
        "Control de prácticas agrícolas",
        "Todas las anteriores",
      ],
      answer: 3,
    },
  ];

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
      setRewards([...rewards, "Medalla de Conocimiento"]);
    }

    setProgress([...progress, { question: currentQuestion, correct: index === questions[currentQuestion].answer }]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Has completado el quiz con una puntuación de ${score + 1}/${questions.length}`);
    }
  };

  return (
    <>
      <Header />
      <div className="quiz-container">
        <div className="quiz-header">
          <h1 className="quiz-title">Quiz</h1>
          <div className="quiz-score">Puntaje: {score}</div>
        </div>
        <div className="quiz-content">
          {currentQuestion < questions.length ? (
            <div className="quiz-question">
              <h2>{questions[currentQuestion].question}</h2>
              <div className="quiz-options">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="quiz-option"
                    onClick={() => handleAnswer(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="quiz-summary">
              <h2>Resumen del Quiz</h2>
              <p>Tu puntuación: {score}/{questions.length}</p>
              <p>Recompensas obtenidas:</p>
              <ul>
                {rewards.map((reward, index) => (
                  <li key={index}>{reward}</li>
                ))}
              </ul>
              <p>Gracias por participar.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
