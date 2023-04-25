import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Lawyer from "../components/Lawyer";

function Lawyers() {
  const { compId } = useParams();
  const lawyers = useSelector((state) => state.lawyers);
  const [lawyersArr, setLawyersArr] = useState([]);
  useEffect(() => {
    setLawyersArr(lawyers.lawyers.filter((res) => res.id === +compId));
  }, [lawyers]);
  return (
    <div>
      {lawyersArr.map((res) => {
        let content = res.lawyers.map((res) => (
          <Lawyer companyId={compId} val={res} />
        ));
        return content;
      })}
      
    </div>
  );
}

export default Lawyers;
