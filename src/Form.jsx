import React from 'react'
import { useState } from 'react'
import { toast } from "react-toastify";



function Form({ addItem }) {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text){
            toast.error("Empty input")
            return;
        }
        addItem(text);
        setText('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <h4>Grocery List</h4>
            <div className='form-control'>
                <input type="text" className='form-input' value={text} onChange={(e) => { setText(e.target.value) }} />
                <button type='submit' className='btn' >Submit</button>
            </div>
        </form>
    )
}

export default Form;