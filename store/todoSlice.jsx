import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [],
  formData: {
    id: 0,
    title: "",
    description: "",
  },
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    hydrate: (state, action) => {
      state.items = [...action.payload];
    },
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
      localStorage.setItem(action.payload.id, action.payload.text);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(
        (item, index) => item.id !== action.payload
      );
      localStorage.removeItem(action.payload);
     
    },
    editItem: (state, action) => {
      const obj = JSON.parse(localStorage.getItem(action.payload));
      state.formData.id = action.payload;
      state.formData.title = obj.title;
      state.formData.description = obj.description;
    },
    clearData: (state, action) => {
      state.formData.id = 0;
      state.formData.title = "";
      state.formData.description = "";
    },
  },
});

export const { hydrate, addItem, deleteItem, editItem, clearData } =
  todoSlice.actions;
export default todoSlice.reducer;
