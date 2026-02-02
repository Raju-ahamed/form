import React, { useState } from 'react';


const DefaultFrom = () => {
    const handleFrom=(e)=>{
        e.preventDefault();
        console.log(name, email,password)
        if (password.length < 6) {
            setError("Password must be at 6 carectar")
        }
        else {
            setError('');
        }
    }
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
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
    const [email,setEmail]=useState('');
    const handleEmail =e=>{
        e.preventDefault();
        setEmail(e.target.value);
    }
    const [name,setName]= useState('')
    const handleName =e=>{
        e.preventDefault();
        setName(e.target.value);

    }
    return (
        <div>
            <form onSubmit={handleFrom}>
                <input type="text" name="name"
                placeholder='Your name' required
                onChange={handleName}
                defaultValue={name}
                />
                <br />
                <input type="email" name="email"  
                placeholder='Email' required
                onChange={handleEmail}
                defaultValue={email}
                />
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