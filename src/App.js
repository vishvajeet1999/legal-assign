import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import data from './data.json'
import { useEffect } from 'react';
import { assignLawyers } from './state/lawyersSlice';
import { BrowserRouter as Router,
         Routes, 
         Route, 
         Navigate, 
         Link, 
         NavLink } from 'react-router-dom'
import Home from './pages/Home';
import Companies from './pages/Companies';
import Lawyers from './pages/Lawyers';

function App() {

  const dispatch = useDispatch()
  const lawyers = useSelector(state => state.lawyers)

  useEffect(() =>{
    dispatch(assignLawyers(data))
    console.log( lawyers)
  },[])

  const handler = e =>{
    e.preventDefault()
    dispatch(assignLawyers([]))
  }
  const handler2 = e =>{
    e.preventDefault()

    dispatch(assignLawyers(data))
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to='/' className='navbar-brand'>
    Lawyer Appointment Management
    </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
          <Link to='/companies' className=' nav-link'>
            Companies
          </Link>
          </li>
        </ul>
      </div>
    </nav>

    <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>
        <Route exact path='companies' element={<Companies />}>
        </Route>
        <Route exact path='companies/:compId/lawyers' element={<Lawyers />}>
        </Route>
    </Routes>


    
    {/* <div className="App">
      <button onClick={handler}>change lawyers</button>
      <button onClick={handler2}>get the lawyers back</button>
      {lawyers.lawyers.map((res, index) => <h2 key={index}>{res.companyName}</h2>)}

    </div> */}
    </>
  );
}

export default App;
