import React from 'react'
import {  Btnsection, Cardp, CardSectionp, Typography } from '../../styles/Common.Styled'

export default function Previewpage({setpage,surveyData}) {
  return (
    <>
        <Typography>
          <h2>This is your Preview  Page//</h2>
        </Typography>

      <CardSectionp>
        <Cardp>
          <h2>Which Programming Language do you love?</h2>
          <span>{surveyData.language}</span>
        </Cardp>
        <Cardp>
        <h2>You Experince</h2>
        <p>Answere:{surveyData.experince}</p>
        </Cardp>
  
        <Cardp>
        <h2>Your Favourite youtube chanel</h2>
        <p>Answere:{surveyData.favouritechanel}</p>
        </Cardp>
      </CardSectionp>
      <Btnsection>
          <button className='prev' onClick={()=>setpage(prevPage=>prevPage-1)}>Previous</button>
          <button className='next' onClick={()=>setpage(4)}>Next</button>
      </Btnsection>
    </>
  )
}