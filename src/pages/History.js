import { Button, Card } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function History() {
  const history = useSelector((state) => state.history);

  return (
    <div style={{ margin: "10px" }}>
      <h3>History of Appointments</h3>
      <Card style={{ marginTop: "10px" }}>
        {history.history.map((res) => (
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
                <h4>{res.name} </h4>
                <h5>Speciality - {res.speciality} </h5>
                <p>Appointment Fee - ${1000}</p>
              </div>
            </div>
            <Button variant="contained">{res.index + 1}th SLOT</Button>/
          </div>
        ))}
      </Card>
    </div>
  );
}

export default History;
