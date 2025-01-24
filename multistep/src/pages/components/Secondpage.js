
import React from 'react'
import { Btnsection, CardSection, Typography } from '../../styles/Common.Styled'

export default function Secondpage({setpage, surveyData, setsurveyData}) {
  console.log(' :', surveyData );
  return (
      <>
          <Typography>
          <h2>This is your Second Page//</h2>
          <h2>Your Experince</h2>
          </Typography>
    
          <CardSection>
          
          <input type="number" value={surveyData.experince} onChange={e=>setsurveyData({...surveyData, experince: e.target.value})}/>

         
          </CardSection>
          <Btnsection>
          <button className='prev' onClick={()=>setpage(prevPage=>prevPage-1)}>Previous</button>
          <button className='next' onClick={()=>setpage(3)}>Next</button>
          </Btnsection>
       </>
  )
}
