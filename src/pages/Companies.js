import { useEffect, useState } from "react";
import Company from "../components/Company";
import { useSelector } from "react-redux";

function Companies() {
  const lawyers = useSelector((state) => state.lawyers);
  const [lawyersArr, setLawyersArr] = useState([]);
  useEffect(()=>{
    setLawyersArr(lawyers.lawyers);
  },[lawyers])
  return (
    <div>
      {lawyersArr.map((res) => (
        <Company val={res} />
      ))}
    </div>
  );
}

export default Companies;
