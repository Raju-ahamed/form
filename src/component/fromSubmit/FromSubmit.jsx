import React from 'react';

const FromSubmit = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        console.log(name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your name" name='name' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>


    );
};

export default FromSubmit;