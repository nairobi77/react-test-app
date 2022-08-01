import React, {useState} from 'react';

const NameForm = () => {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        alert("You send " + this.state.value)
        event.preventDefault()
    }

    return  (
        <form onSubmit={handleSubmit}>
            <label>
                Имя:
                <input type={"text"} value={value} onChange={handleChange}/>
            </label>
            <input type={"submit"} value={"Send"}/>
        </form>
    );
};

export default NameForm;