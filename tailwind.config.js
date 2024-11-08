/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        no: "0rem",
      },
      colors: {
        "mbti-yellow": "#F9F9CF",
        "mbti-deep-yellow": "#fff890",
        "mbti-blue": "#1898fd",
        "mbti-light-blue": "#9cd2ff",
        "mbti-purple": "#C17DD1",
        "mbti-deep-purple": "#5d62fa",
        "mbti-mint": "#8CFFEE",
        "mbti-deep-mint": "#d0e9cc",
        "mbti-pink": "#FF6B6B",
        "mbti-light-pink": "#FFE5E6",
        "mbti-red": "#FF0000",
        "mbti-mac-red": "#fa517c",

        "mbti-light-mint": "#6EFFEE",
        "mbti-deeplight-mint": "#C3FCF1",
        "mbti-brown": "#625F4E",
        "mbti-light-brown": "#AFAB99",
        "mbti-light-orange": "#FFCA8D",
        "mbti-coral": "#F98E71",
        "mbti-light-coral": "#FECCBE",
        "mbti-deep-blue": "#645CBB",
        "mbti-gray": "#E5E7EB",
      },
      fontFamily: {
        minhye: ["Minhye", "sans-serif"],
        humanbumsuk: ["Humanbumsuk", "sans-serif"],
        kyobohandwriting2021sjy: ["KyoboHandwriting2021sjy", "sans-serif"],
        cafe24shiningstar: ["Cafe24Shiningstar", "sans-serif"],
        middleschool_student: ["Middleschool_student", "sans-serif"],
        beeunhye: ["Beeunhye", "sans-serif"],
        bisang: ["Bisang", "sans-serif"],
        cafe24surround: ["Cafe24Ssurround", "sans-serif"],
        eland: ["ELAND_Nice_M", "sans-serif"],
        pretendard: ["Pretendard-Regular", "sans-serif"],
      },
      height: {
        12.5: "52px",
      },
      maxHeight: {
        12.5: "52px",
      },
      padding: {
        full: "100%",
        12.5: "52px",
      },
      borderRadius: {
        "4xl": "2.25rem",
      },
      backgroundSize: {
        "hand-heart": "34px 67px",
      },
      minWidth: {
        16: "4rem",
        20: "5rem",
      },
      maxWidth: {
        16: "4rem",
        20: "5rem",
      },
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
};
