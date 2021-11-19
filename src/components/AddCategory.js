import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setcategories}) => {

const [state, setstate] = useState('');

const hanlerInputChange = (e)=>{
    setstate(e.target.value);
};

const hanlerSubmit = (e) =>{
    e.preventDefault();

    if(state.trim().length>2)
    {
        setcategories(sc=> [state,...sc]);
        setstate('');
    }

}

    return (
        <form onSubmit={ hanlerSubmit }>
            <input 
                value ={state}
                onChange = { hanlerInputChange }
            type='text'/>
            
        </form>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}


