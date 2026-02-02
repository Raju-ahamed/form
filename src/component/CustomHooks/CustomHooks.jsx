import React from 'react';
import useInputFieldValue from '../CoustomHooks/Hooks';

const CustomHooks = () => {
    const [name, nameOnChange] = useInputFieldValue('');
    const [email,emailOnChange]=useInputFieldValue('');
    const handleSunmit = e => {
        e.preventDefault()
        console.log(name,email)
    }
    return (
        <div>
            <form onSubmit={handleSunmit}>
                <input type="text" name="name" onChange={nameOnChange} defaultValue={name} />
                <br />
<input type="email" name="email" onChange={emailOnChange} />
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CustomHooks;