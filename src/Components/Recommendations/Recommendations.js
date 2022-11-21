import React from "react";
import recommendations from "../../Assets/Recommendations.json";
import "./Recommendations.scss";
import softrain from "../../Assets/documents/softrain-letter.pdf";

const recommendationLetters = [{ name:"softrain", file: softrain },{name:"name", file:"file"}];

const Recommendations = () => {
  return (
    <>
      {recommendations.map((recommendation) => (
        <div key={recommendation.id} className="recommendation-container">
          <h4>{recommendation.name}</h4>
          <p>{recommendation.position}</p> <br />
          <p className="email">{recommendation.email}</p> <br />
          <a
            className="letter-link"
            href={recommendationLetters.find(letter=>letter.name===recommendation.letterName)?.file}
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            {recommendationLetters.find(letter=>letter.name===recommendation.letterName)? "Letter Of Recommendation":null}
          </a>
        </div>
      ))}
    </>
  );
};
export default Recommendations;
