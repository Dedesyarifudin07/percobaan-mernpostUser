import React from 'react';
import {useState} from 'react';
import axios from 'axios';

const SignUp = () => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    const handlesubmit = () => {
        console.log(`nama : ${name} \n sandi:${password}`);
        axios.post('http://localhost:3001/register',{
            name,
            password
        }).then(res => {
          console.log(res)
            
        }).catch (error => {
            alert(error)
        })
    }

  return (
    <div>
        
        <p>atur nama</p>
        <input type="text" name="name" onChange={(e) => {
            setName(e.target.value)
        }} value={name}/>

        <p>atur sandi</p>
        <input type="password" name="password" onChange={(e) => {
            setPassword(e.target.value)
        }} value={password}/>
        <button type="submit" onClick={handlesubmit}>kirim</button>
    </div>
  )
}

export default SignUp
