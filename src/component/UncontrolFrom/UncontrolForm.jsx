import React, { useRef } from 'react';

const UncontrolForm = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const handlerRef= e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        console.log(email,pass)
    }

    
    return (
        <div>
            <form onSubmit={handlerRef}>
                <input ref={emailRef} type="email" name="email" />
                <br />
                <input ref={passRef} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolForm;