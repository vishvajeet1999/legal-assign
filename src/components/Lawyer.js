import { Button, Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Lawyer(props) {
    const [availability, setAvailability] = useState(0)

    useEffect(() => {
        setAvailability(props.val.availability.reduce((acc, val) =>{return acc+val},0))
    },[])
  return (
    <div style={{margin: "10px"}}>
        <Card>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start",padding: '10px'}}>
                <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    
                    <img height={100} width={100} style={{borderRadius: "50%"}} src='https://cdn.pixabay.com/photo/2016/01/07/04/52/designer-1125324__340.jpg' />
                    
                    <div style={{margin: "10px"}}>
                    <h4 >{props.val.name } </h4>
                    <h5>Speciality - {props.val.speciality} </h5>
                    <p >Appointment Fee - ${props.val.costPerAppintment}</p>
                    
                    </div>
                </div>
                {/* <Button variant="contained">Book a Lawyer of Your Choice</Button> */}
                
                {!availability ? <button className='btn btn-danger'>Appointment Not Available</button>:<Button variant="contained">Book a Slot</Button>}
                {/* <Button variant="contained">Book a Lawyer of Your Choice</Button> */}
                {/* <button>Look at the Lawyers</button> */}
            </div>
            <div style={{padding: "10px"}}>
            <h4>About Us</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea expedita perferendis nemo, reprehenderit dicta tenetur sit dolore asperiores accusantium dolorum facilis ratione, libero harum commodi, inventore odio fuga doloribus! Ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quod rem accusamus fuga ipsa. Id, ullam porro ipsum dolorum nam provident praesentium, explicabo unde quia, perspiciatis debitis esse. Adipisci, officiis.</p>
            </div>
        </Card>    
    </div>
  )
}

export default Lawyer