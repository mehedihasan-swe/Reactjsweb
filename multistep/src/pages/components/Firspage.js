import React from 'react'
import { Btnsection, Card, CardSection, Typography } from '../../styles/Common.Styled'
import { firstpagedata } from './data'
export default function Firspage({setpage, surveyData, setsurveyData}) {
    
  return (
    <>
     <Typography>
      <h2>Which Programming language do you like??</h2>
     </Typography>

     <CardSection>

        {
            firstpagedata.map((item,index)=>(
                <Card style={{border: surveyData.language===item.name ? "2px solid gray":""}} key={index} onClick={()=> setsurveyData({...surveyData, language:item.name})}>
                    <h2>{item.name}</h2>
                </Card>
            ))
        }
     
      
     </CardSection>
     <Btnsection>
      <button className='prev'onClick={()=>setpage(1)}>Previous</button>
      <button className='next' onClick={()=>setpage(2)}>Next</button>
     </Btnsection>
    </>
  )
}