import React, { useState } from "react";
import formStyles from "./item-form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearData, deleteItem } from "../../store/todoSlice";
import {toast } from 'react-toastify';


const ItemForm = () => {
  const editFormData = useSelector((state) => state.todo.formData);
  const [formData, setFormData] = useState({
    editId: 0,
    title: "",
    description: "",
  });

  const dispatch = useDispatch();

  if (editFormData.title && editFormData.description)
    setFormData((prevState) => {
      prevState.editId = editFormData.id;
      prevState.title = editFormData.title;
      prevState.description = editFormData.description;
      dispatch(clearData(editFormData));
      return prevState;
    });

  const formDataHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.editId && formData.title && formData.description) {
      dispatch(deleteItem(formData.editId));
      dispatch(
        addItem({ id: formData.editId, text: JSON.stringify(formData) })
      );
      setFormData((prevState) => {
        return { editId: 0, title: "", description: "" };
      });
      toast.success('Modified Successfully !!!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark"
        });
    } else if (formData.title && formData.description) {
      dispatch(addItem({ id: Math.random(), text: JSON.stringify(formData) }));
      setFormData((prevState) => {
        return { title: "", description: "" };
      });
      toast.success('Added Successfully !!!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark"
        });
    }
  };
  return (
    <>
      <form className={formStyles.root}>
        <input
          className={formStyles.input}
          onChange={(e) => formDataHandler(e)}
          type="text"
          name="title"
          value={formData.title}
          placeholder="Title"
        />

        <input
          className={formStyles.input}
          onChange={(e) => formDataHandler(e)}
          type="text"
          name="description"
          value={formData.description}
          placeholder="Description"
        />
      </form>
      <a
        href="#"
        role="button"
        className={formStyles.remove}
        onClick={(e) => handleSubmit(e)}
      >
        {formData.editId ? <>Update</> : <>Add</>} Item
      </a>
    </>
  );
};


export default ItemForm;
