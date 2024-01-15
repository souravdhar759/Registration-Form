
import { useState } from 'react';
import './App.css';

function App() {
  const data ={username: "", email:"", password : ""}
  const [input, setInput] = useState(data)
  const handedata=(event)=>{
setInput({...input, [event.target.name ]: event.target.value})
  }
  const [mess, setMess] = useState(false)
  const submit=(e)=>{
    e.preventDefault();
    if(!input.username || !input.email || !input.password){
      alert("please fills All Filds")
    }else{
      setMess(true)
    }
  }
  return (
    <>
    <div className='text-center flex justify-center item-center w-[500px] h-10 relative left-[25%] top-4 rounded-[25px] text-white bg-green-600'>
      <pre>{ (mess)? <h2>Hey {input.username} You registration successfully</h2> : " "}</pre>
    </div>
    <div className='bg-zinc-900 text-white p-4 w-[500px] relative left-[25%] top-10' >
<h1 className='font-bold text-xl text-white text-center'>Registration</h1>
<form onSubmit={submit}>
<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
    <input type="text" name='username' className="form-control" value={input.username}  onChange={handedata} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={input.email} name='email'  onChange={handedata} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1"  className="form-label">Password</label>
    <input type="password" value={input.password} name='password' onChange={handedata} className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit"  className="btn btn-success">Submit</button>
</form>
    </div>
    </>
  );
}

export default App;
