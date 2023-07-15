import React, { useReducer} from 'react'
import Booking from '../Components/Booking'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { initialValue, reducer } from '../Service/AvailableTimeReducer'

const BookingPage = () => {
  const [state,dispatch] = useReducer(reducer,initialValue)
  
  const updateTimes =(time)=>{
    
    dispatch({type:'INITIALIZE',time:time})
  }
  return (
    <>
    <Header/>
    <Booking time={state} updateTimes={updateTimes}/>
    <Footer/>
    </>
  )
}

export default BookingPage