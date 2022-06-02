import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const hanndleInputChange = (e) => {

        setInputValue(e.target.value); 

    }

    const handdleSubmmit = (e) =>{

        e.preventDefault();
        //console.log('Hecho');
        if (inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats, ]);
            setInputValue('');
        }

    }


  return (

    <form onSubmit={ handdleSubmmit }>
        <input
            type="text"
            value={ inputValue }
            onChange = { hanndleInputChange}
        />
        
    </form>
  )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}