import React from 'react'
import recommendations from '../../Assets/Recommendations.json'
import './Recommendations.scss'


const Recommendations = () => {
  return (
    <>
        {recommendations.map((recommendation)=>(
            <div key={recommendation.id} className="recommendation-container">
                <h4>{recommendation.name}</h4>
                <p>{recommendation.position}</p> <br />
                <p className='email'>{recommendation.email}</p> <br />
                <p>{recommendation.letter}</p>
            </div>
        ))}
    </>
  )
}
export default Recommendations
