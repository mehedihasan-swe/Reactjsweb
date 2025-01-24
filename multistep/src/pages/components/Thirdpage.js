import React from 'react'
import { Btnsection, Card, CardSection, Typography } from '../../styles/Common.Styled'
import { thirdpagedata } from './data'
export default function Thirdpage({setpage, surveyData, setsurveyData}) {
  return (
           <>
              <Typography>
                  <h2>This is your Third Page//</h2>
                  <h2>Which Programming Chanel do you love</h2>
              </Typography>
        
              <CardSection>
                {
                    thirdpagedata.map((item,index)=>(
                    <Card style={{border:surveyData.favouritechanel.includes(item.name) ? "2px solid gray":""}} key={index} onClick={()=> setsurveyData({...surveyData,favouritechanel:[...surveyData.favouritechanel, item.name]})}>
                      <h2>{item.name}</h2>
                    </Card>
                    ))
                }
              </CardSection>
              <Btnsection>
              <button className='prev' onClick={()=>setpage(prevPage=>prevPage-1)}>Previous</button>
              <button className='next' onClick={()=>setpage(4)}>Next</button>
              </Btnsection>
           </>
  )
}