import { useState, useEffect } from "react";
import "modern-normalize";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

function App() {
  const [feedbackData, setFeedbackData] = useState(() => {
    const savedFeedbackData = window.localStorage.getItem("saved-FeedbackData");
    if (!savedFeedbackData) {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
    return JSON.parse(savedFeedbackData);
  });

  useEffect(() => {
    window.localStorage.setItem(
      "saved-FeedbackData",
      JSON.stringify(feedbackData)
    );
  }, [feedbackData]);

  const updateFeedback = (feedbackType) => {
    setFeedbackData({
      ...feedbackData,
      [feedbackType]: feedbackData[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedbackData({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback =
    feedbackData.good + feedbackData.neutral + feedbackData.bad;

  const totalPositive =
    totalFeedback > feedbackData.neutral
      ? Math.round(
          (feedbackData.good / (totalFeedback - feedbackData.neutral)) * 100
        )
      : 0;
  return (
    <div className="container">
      <div className="cont">
        <Description />
        <Options
          onUpdate={updateFeedback}
          onReset={resetFeedback}
          total={totalFeedback}
        />
        {totalFeedback ? (
          <Feedback
            amount={feedbackData}
            total={totalFeedback}
            totalPositive={totalPositive}
          />
        ) : (
          <Notification />
        )}
      </div>
    </div>
  );
}

export default App;
