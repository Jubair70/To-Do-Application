import React, { useState } from 'react';
import PropTypes from 'prop-types';
import formStyles from './item-form.module.css';
import { useDispatch } from 'react-redux';
import {addItem } from '../../store/todoSlice';


const ItemForm = () => {
  const [formData,setFormData] = useState({
    title:'',
    description:''
  })
  const dispatch = useDispatch();

  const formDataHandler = (e) =>{
    setFormData((prevState)=>{return {...prevState,[e.target.name]:e.target.value}})
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
    
    if (formData.title && formData.description) {
      dispatch(addItem({id:Math.random(),text:JSON.stringify(formData)}))
      setFormData((prevState)=>{return {title:'',description:''}})
    }
    
  }
  return (
    <>
    <form className={formStyles.root}>
      <input className={formStyles.input} onChange={(e)=>formDataHandler(e)} type="text" name="title" value={formData.title} placeholder="Title" />
      <input className={formStyles.input} onChange={(e)=>formDataHandler(e)} type="text" name="description" value={formData.description} placeholder="Description" />
    </form>
    <a href="#" role="button" className={formStyles.remove} onClick={(e)=>handleSubmit(e)}>
    Add Item
    </a>
    
    </>
    
    
  ); 
}

// itemForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

export default ItemForm;
