import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";

const Test = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [mbtiScores, setMbtiScores] = useState({
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  });

  const handleAnswer = (type) => {
    const newScores = { ...mbtiScores };
    newScores[type] = newScores[type] + 1;
    setMbtiScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const result = calculateMBTI(newScores);
      navigate(`/result`, { state: { mbtiResult: result, scores: newScores } });
    }
  };

  const calculateMBTI = (scores) => {
    const result = [
      scores.E > scores.I ? 'E' : 'I',
      scores.S > scores.N ? 'S' : 'N',
      scores.T > scores.F ? 'T' : 'F',
      scores.J > scores.P ? 'J' : 'P'
    ];
    return result.join('');
  };

  const calculateProgress = () => {
    return ((currentQuestion + 1) / questions.length) * 100;
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Progress Bar */}
        <div className="w-full h-6 bg-white border-2 rounded-xl border-mbti-gray relative mb-12">
          <div
            className="absolute w-11 top-1/2 transition-all transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${calculateProgress()}%` }}
          >
            <img
              src="/images/progress.png"
              className="block w-full h-auto"
              alt="progress"
            />
          </div>
          <div className="w-full h-full rounded-xl overflow-hidden">
            <span
              className="block h-full bg-mbti-pink transition-all"
              style={{ width: `${calculateProgress()}%` }}
            ></span>
          </div>
        </div>

        {/* Question Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-cafe24surround mb-8">
              Question {currentQuestion + 1}
            </h3>
            <p className="text-2xl font-cafe24surround">
              {questions[currentQuestion].question}
            </p>
          </div>

          {/* Answer Buttons */}
          <div className="space-y-4">
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(answer.type)}
                className="w-full p-4 rounded-xl bg-white border-2 border-black hover:bg-mbti-pink hover:text-white hover:border-mbti-pink transition-all duration-200 text-lg font-medium"
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>

        {/* Question Counter */}
        <div className="text-center text-gray-500">
          {currentQuestion + 1} / {questions.length}
        </div>
      </div>
    </section>
  );
};

export default Test;
