import React, { useState } from 'react'
import Company from '../components/Company'
import { useDispatch, useSelector } from 'react-redux'

function Companies() {
    const dispatch = useDispatch()
    const lawyers = useSelector(state => state.lawyers)

    const [a] = useState([1,2,3])
  return (
    <div>
        {lawyers.lawyers.map(res => <Company val= {res} />)}
    </div>
  )
}

export default Companies