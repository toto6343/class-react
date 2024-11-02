import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { results } from "../data/questions";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mbtiResult, scores } = location.state || {};
  
  if (!mbtiResult) {
    navigate('/');
    return null;
  }

  const result = results[mbtiResult];

  const calculatePercentage = (type1, type2) => {
    const total = scores[type1] + scores[type2];
    return Math.round((scores[type1] / total) * 100);
  };

  const percentages = {
    E: calculatePercentage('E', 'I'),
    I: calculatePercentage('I', 'E'),
    S: calculatePercentage('S', 'N'),
    N: calculatePercentage('N', 'S'),
    T: calculatePercentage('T', 'F'),
    F: calculatePercentage('F', 'T'),
    J: calculatePercentage('J', 'P'),
    P: calculatePercentage('P', 'J')
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-cafe24surround mb-12 text-center">
            당신의 선재 팬 MBTI는...
          </h1>
          
          <div className="mb-12 text-center">
            <h2 className="text-6xl font-cafe24surround text-mbti-pink mb-6">
              {mbtiResult}
            </h2>
            <h3 className="text-2xl font-cafe24surround mb-6">
              {result.title}
            </h3>
            <p className="text-lg leading-relaxed mb-8 px-4">
              {result.description}
            </p>
          </div>

          {/* MBTI 지표별 분석 */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h4 className="text-xl font-cafe24surround mb-6 text-center">
              성향 분석
            </h4>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="w-24 text-sm">외향({percentages.E}%)</span>
                <div className="flex-1 mx-4 h-4 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-mbti-pink rounded-full transition-all"
                    style={{ width: `${percentages.E}%` }}
                  ></div>
                </div>
                <span className="w-24 text-sm text-right">내향({percentages.I}%)</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-24 text-sm">감각({percentages.S}%)</span>
                <div className="flex-1 mx-4 h-4 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-mbti-pink rounded-full transition-all"
                    style={{ width: `${percentages.S}%` }}
                  ></div>
                </div>
                <span className="w-24 text-sm text-right">직관({percentages.N}%)</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-24 text-sm">사고({percentages.T}%)</span>
                <div className="flex-1 mx-4 h-4 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-mbti-pink rounded-full transition-all"
                    style={{ width: `${percentages.T}%` }}
                  ></div>
                </div>
                <span className="w-24 text-sm text-right">감정({percentages.F}%)</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="w-24 text-sm">판단({percentages.J}%)</span>
                <div className="flex-1 mx-4 h-4 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-mbti-pink rounded-full transition-all"
                    style={{ width: `${percentages.J}%` }}
                  ></div>
                </div>
                <span className="w-24 text-sm text-right">인식({percentages.P}%)</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/')}
              className="px-8 py-4 bg-mbti-pink text-white rounded-xl font-bold hover:bg-pink-600 transition-colors"
            >
              다시 테스트하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
