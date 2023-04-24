import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Company(props) {
    console.log(props)
  return (
    <div style={{margin: "10px"}}>
        <Card>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start",padding: '10px'}}>
                <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                    <img height={100} width={100} style={{borderRadius: "50%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyna4qJ29tOe_fSBcAVV_3_29BPp5A887-Ch1-ocotQ&s' />
                    <h4 style={{margin: "10px"}}>{props.val.companyName } </h4>
                </div>
                {/* <Button variant="contained">Book a Lawyer of Your Choice</Button> */}
                <Link to={`/companies/${props.val.id}/lawyers`}>
                    <Button variant="contained">Book a Lawyer of Your Choice</Button>
                </Link>
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

export default Company