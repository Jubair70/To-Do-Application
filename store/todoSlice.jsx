import {createSlice} from '@reduxjs/toolkit';


const initialState = {
items: [
        // { id: Math.random(), text: JSON.stringify({title:'hello',description:'what the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hell'}) },
        // { id: Math.random(), text: JSON.stringify({title:'nice',description:'to meet you'}) },
        // { id: Math.random(), text: JSON.stringify({title:'name',description:'Jubair you shit'}) },
        // { id: Math.random(), text: JSON.stringify({title:'shut up',description:'fuck up'}) },
        ]
}



const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        hydrate:(state, action) => {
            state.items = [...action.payload]
            },
        addItem:(state,action)=>{
            state.items = [...state.items,action.payload]
            localStorage.setItem(action.payload.id,action.payload.text)
        },
        deleteItem:(state,action)=>{
         state.items = state.items.filter((item,index)=>item.id!==action.payload)
         localStorage.removeItem(action.payload)
        },
        editItem:(state,action)=>{

        }
    }
});




export const {hydrate,addItem,deleteItem,editItem} = todoSlice.actions;
export default todoSlice.reducer;