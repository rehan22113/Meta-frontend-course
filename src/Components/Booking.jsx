import React, {useState } from 'react'
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom';
import {validateYupSchema} from '../Middleware/FormValidation'
// import {fetchApi,submitApi} from ''
const Booking = ({time,updateTimes}) => {
  const [send,setSend] = useState(false)
  const Navigate = useNavigate()

  const {values,handleSubmit,handleChange,handleBlur,errors,touched}=useFormik({
    initialValues:{
      date:"",
      time:"",
      guest:"",
      occasion:"",
    },
    validationSchema:validateYupSchema,
    validateOnChange:true,
    validateOnBlur:true,
    onSubmit:(values,action)=>{
      console.log(values);
      action.resetForm()
    //   const res =  await submitApi(data)
    // if (res){
    //   setSend(false)
      Navigate('/booking-confirmed')
    // }
    }
  })

  const DataHandler =async(e)=>{
      const {name,value} = e.target;
      if(name==='date'){
        // const time = await fetchApi(value)
        updateTimes()
      }
      return values.time
  }
  const submitQuery =async(e)=>{
    e.preventDefault();
    // const res =  await submitApi(data)
    // if (res){
    //   setSend(false)
    //   Navigate('/booking-confirmed')
    // }
  }

  return (
    <section style={{display:'flex',alignItems:'center',gap:10,justifyContent:'center',height:'100vh',color:'black'}}>
    <div id="sidebar">
        <h2 data-test-id="book">Book a Table</h2>

        <div>
        <form onSubmit={handleSubmit} style={{display: 'grid', maxWidth: 400, gap: 20}}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={values.date} onChange={(e)=>{handleChange(e);DataHandler(e)}} name='date' />
            <p className='para'>{errors.date}</p>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={handleChange} value={values.time} name="time">
            {time.map((item)=><option key={item} value={item}>{item}</option>)} 
            </select>
            <p className='para'>{errors.time}</p>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" value={values.guest} placeholder={1} min={1} max={10} id="guests" onChange={handleChange} name='guest' />
            <p className='para'>{errors.guest}</p>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={values.occasion} onChange={handleChange} name='occasion'>
            <option value='Birthday'>Birthday</option>
            <option value='anniversary'>Anniversary</option>
            </select>
            <p className='para'>{errors.occasion}</p>
            <input type="submit" disabled={send} value={"Make your reservation"} />
        </form>

        </div>
      </div>
        <div>
          <img src='https://dummyimage.com/600x500' alt='' />
        </div>

        </section>
  )
}


export default Booking