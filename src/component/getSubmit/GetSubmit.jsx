import React from 'react';

const GetSubmit = () => {
    const handleSubmit=(sub)=>{
        console.log(sub.get('email'));
        console.log(sub.get('name'));
        
    }
    return (
        <div>
            <form action={handleSubmit}>
                <input type="text" name="name" placeholder='Name' /> 
                <br />
                <input type="email" name='email' placeholder='email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default GetSubmit;