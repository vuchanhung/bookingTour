import React, {useState, useContext} from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { BASE_URL } from '../../utils/config'

const Booking = ({tour, avgRating}) => {
  const navigate = useNavigate()
  const {price, reviews, title}= tour
  const {user} = useContext(AuthContext)
  const [booking, setBooking] = useState({
    userId:user && user._id,//later it will be dynamic
    userEmail:user && user.email,
    tourName: title,
    fullName:'',
    phone:'',
    guestSize:1,
    bookAt:''
  })

  const handleChange = e =>{
    setBooking(prev=>({...prev,[e.target.id]:e.target.value}))
  }

  const serviceFee=10
  const totalAmount= Number(price) * Number(booking.guestSize) + Number(serviceFee)

// send data to the server 
  const handleClick = async e =>{
    e.preventDefault()
    try {
      if(!user||user===undefined||user===null){
        return alert('Please sign in')
      }
      const res = await fetch(`${BASE_URL}/bookings`,{
        method:'post',
        headers:{'content-type':'application/json'},
        credentials:'include',
        body:JSON.stringify(booking)
      })
      const result = await res.json()

      if(!res.ok) {
        return alert(result.message)
      }
      navigate('/thank-you')
    } catch (err) {
      alert(err.message)
    }
    
  }

  return <div className="booking">
    <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>${price}<span> /per person</span></h3>
        <span className='tour__rating d-flex align-items-center gap-1'>
                  <i className="ri-star-fill"></i>
                  {avgRating===0?null:avgRating}
                  ({reviews?.length})
                </span>
    </div>

    {/*=============Booking form===========*/}
    <div className="booking__form" >
        <h5>Information</h5>
        <Form className='booking__input-form' onSubmit={handleClick}>
            <FormGroup>
                <input 
                type='text' 
                placeholder='Full Name' 
                id='fullName' 
                required 
                onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <input 
                type='number' 
                placeholder='Phone' 
                id='phone' 
                required 
                onChange={handleChange}/>
            </FormGroup>
            <FormGroup className='d-flex align-items-center gap-3'>
                <input 
                type='date' 
                placeholder='' 
                id='bookAt' 
                required 
                onChange={handleChange}/>

                <input 
                type='number' 
                placeholder='Guest' 
                id='guestSize' 
                required 
                onChange={handleChange}/>
            </FormGroup>
        </Form>
    </div>
    {/*=============Booking form===========*/}
    <div className='booking__bottom'>
        <ListGroup>
            <ListGroupItem className='border-0 px-0'>
                <h5 className='d-flex align-items-center gap-1'>${price}<i class="ri-close-line"></i> 1 person</h5>
                <span>${price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
                <h5>Service charge</h5>
                <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
                <h5>Total</h5>
                <span>${totalAmount}</span>
            </ListGroupItem>
        </ListGroup>
        <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
    </div>

  </div>
}

export default Booking
