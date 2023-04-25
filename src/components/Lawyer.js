import { Button, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveHistory } from "../state/historySlice";
import { addingAppointment } from "../state/lawyersSlice";

function Lawyer(props) {
  const [availability, setAvailability] = useState(0);
  const dispatch = useDispatch();
  const lawyers = useSelector(state=>state.lawyers)

  useEffect(() => {
    setAvailability(
      props.val.availability.reduce((acc, val) => {
        
        return acc + val;
      }, 0)
      
    );
    console.log(availability)

  }, [lawyers.lawyers]);
  const handler = (index, companyId, name, lawyerId, speciality, e) => {
    dispatch(addingAppointment({ index, companyId, lawyerId }));
    dispatch(saveHistory({ name, companyId, index, lawyerId, speciality }));
    alert('Slot is Booked')
  };
  return (
    <div style={{ margin: "10px" }}>
      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "10px",
          }}
        >
          <div
            style={{
              flex: 3,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <img
              height={100}
              width={100}
              style={{ borderRadius: "50%" }}
              src="https://cdn.pixabay.com/photo/2016/01/07/04/52/designer-1125324__340.jpg"
            />

            <div style={{ margin: "10px" }}>
              <h4>{props.val.name} </h4>
              <h5>Speciality - {props.val.speciality} </h5>
              <p>Appointment Fee - ${props.val.costPerAppintment}</p>
            </div>
          </div>
          {/* <Button variant="contained">Book a Lawyer of Your Choice</Button> */}

          <div style={{ flex: 1 }}>
            {!availability ? (
              <button className="btn btn-danger">
                Appointment Not Available
              </button>
            ) : (
              <Button variant="contained">Book a Slot</Button>
            )}
            <div style={{ marginTop: "10px" }}>
              {props.val.availability.map((res, index) =>
                res === 1 ? (
                  <Button
                    onClick={(e) =>
                      handler(
                        index,
                        props.companyId,
                        props.val.name,
                        props.val.id,
                        props.val.speciality,
                        e
                      )
                    }
                    variant="contained"
                    style={{ margin: "3px" }}
                  >
                    Avl.
                  </Button>
                ) : (
                  <Button
                    style={{ margin: "3px" }}
                    variant="contained"
                    disabled
                  >
                    NA
                  </Button>
                )
              )}
            </div>
          </div>
        </div>

        <div style={{ padding: "10px" }}>
          <h4>About the Lawyer</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
            expedita perferendis nemo, reprehenderit dicta tenetur sit dolore
            asperiores accusantium dolorum facilis ratione, libero harum
            commodi, inventore odio fuga doloribus! Ipsa! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Non quod rem accusamus fuga ipsa.
            Id, ullam porro ipsum dolorum nam provident praesentium, explicabo
            unde quia, perspiciatis debitis esse. Adipisci, officiis.
          </p>
        </div>
      </Card>
    </div>
  );
}

export default Lawyer;
