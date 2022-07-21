import React from 'react'
import recommendations from '../../Assets/Recommendations.json'
import './Recommendations.scss'


const Recommendations = () => {
  return (

    <>
      <div className='section-title'><h2 >References</h2></div>
      <div className='recommendations-container'>
        {recommendations.map((recommendation)=>(
            <div key={recommendation.id} className="recommendation-container">
                <h3>{recommendation.name}</h3>
                <p>{recommendation.position}</p> <br />
                <p className='email'>{recommendation.email}</p> <br />
                <p>{recommendation.letter}</p>
            </div>
        ))}

      
    </div>
    </>
    
  )
}

export default Recommendations
