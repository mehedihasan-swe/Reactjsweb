import styled from 'styled-components'

export const Section= styled.section`
 background-color: red;
`
export const Container=styled.div`
  max-width: 1450px;
  padding: 20px;
  margin: 0 auto;
`
export const CardSection=styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  margin: 0 auto;
  gap: 50px;


input{
    width: 431px;
    padding: 16px;
    border-radius: 8px;
}
`
export const CardSectionp=styled.div`

display: flex;
  justify-content: center;
  flex-direction:column;
  width: 1200px;
  margin: 0 auto;
  gap: 50px;
`
export const Card=styled.div`
  width: 400px;
  background-color: antiquewhite;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content:center;
  border: 1px solid red;
  cursor: pointer;
`
export const Cardp=styled.div`
  width: 100%;
  background-color: antiquewhite;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  cursor: pointer;
  padding: 20px 0;
  h2{
    margin: 0;
  }
  p{
    margin:10px;
  }
`
export const Typography=styled.div`
margin-top: 150px;
margin-bottom: 150px;
 
 h2{
  text-align: center;
 }
`
export const Btnsection=styled.div`
margin: 40px 0;
 display: flex;
 justify-content: center;
 gap: 40px;

 .next{
  width: 200px;
  background-color: azure;
  padding: 10px 25px;
  border-radius: 8px;
  color: black;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
 }
 .prev{
  width: 200px;
  background-color: azure;
  padding: 10px 25px;
  border-radius: 8px;
  color: black;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
 }
`