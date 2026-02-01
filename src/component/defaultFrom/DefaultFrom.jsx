import React, { useState } from 'react';


const DefaultFrom = () => {
    const handleFrom=(e)=>{
        e.preventDefault();
        console.log(password)
    }
    const [password, setPassword] = useState('')
    const [error,setError] = useState('');
    const handlePassOnChange=e=>{
      const pass =  e.target.value;
      setPassword(pass)
      if(password.length<6){
        setError("Password must be at 6 carectar")
      }
      else{
        setError('');
      }
    }
    return (
        <div>
            <form onSubmit={handleFrom}>
                <input type="email" name="email"  
                placeholder='Email' required/>
                <br />
                <input type="password" name="password"
                defaultValue={password} onChange={handlePassOnChange}
                placeholder='password' required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{
                color:"red"
            }}>
                {error}
            </p>
        </div>
    );
};

export default DefaultFrom;