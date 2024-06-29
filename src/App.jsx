
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, rangeChange, reset } from './redux/counterSlice';
import { useState } from 'react';

function App() {
  const [range, setRange] = useState(0)
  const count = useSelector((state) => state.counterReducer.value)
  // console.log(count);

  const dispatch = useDispatch()

  // console.log(range);

  const handleRange=()=>{
    if (!range) {
      alert('please enter an Input')
    } 
    else {
      dispatch(rangeChange(Number(range)))
    }
  }

  return (
    <>
      <div className='main d-flex align-items-center justify-content-center p-4'>
        <div className='bg-light px-5 py-4 rounded '>
          <h1 className='text-center' style={{color:'darkblue', fontWeight:"bolder"}}>Counter Application</h1>
          <h1 className='mt-4 fw-bolder text-center' style={{fontSize:"60px"}}>{count}</h1>
          <div className='d-flex mt-5 w-100 justify-content-evenly '>           
            <Button  variant="warning" onClick={()=>dispatch(decrement())}>Decrement</Button>
            <Button className='ms-auto' variant="danger" onClick={()=>dispatch(reset())}>Reset</Button>
            <Button className='ms-auto' variant="success" onClick={()=>dispatch(increment())}>Increment</Button>
          </div>

          <div className='d-flex mt-5 mb-4'>
            <input type="text" className='form-control' placeholder='Range' onChange={(e)=>setRange(e.target.value)} />
            <Button variant="primary ms-2" onClick={handleRange}>Click</Button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
