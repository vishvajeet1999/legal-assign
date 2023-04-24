import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Lawyer from '../components/Lawyer'

function Lawyers() {
    const {compId} = useParams()
    const dispatch = useDispatch()
    const lawyers = useSelector(state => state.lawyers)
    const [lawyersArr, setLawyersArr] = useState([])
    useEffect(() =>{
        // console.log(lawyers, 'from lawyers')
        console.log(lawyers.lawyers.filter(res => res.id === +compId), 'from lawyer')
        setLawyersArr(lawyers.lawyers.filter(res => res.id === +compId))  
    },[])
  return (
    <div>
        {lawyersArr.map(res => {
            let content = res.lawyers.map(res => <Lawyer companyId={compId} val={res} />)
            return content
        })}
        {/* {lawyersArr[0].lawyers.map(res => <Lawyer val={res} />)} */}
    </div>
  )
}

export default Lawyers