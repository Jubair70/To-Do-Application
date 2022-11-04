import Head from 'next/head';
import List from '../component/item-list/item-list.component';
import Item from '../component/item/item.component';
import {  useEffect } from 'react';
import { useSelector } from 'react-redux';
import ItemForm from '../component/item-form/item-form.component';



const Home = () => {
  // const items = [
  // { id: Math.random(), text: JSON.stringify({title:'hello',description:'what the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hell'}) },
  // { id: Math.random(), text: JSON.stringify({title:'nice',description:'to meet you'}) },
  // { id: Math.random(), text: JSON.stringify({title:'name',description:'Jubair you shit'}) },
  // { id: Math.random(), text: JSON.stringify({title:'shut up',description:'fuck up'}) },
  // ];
  
  const items = useSelector(state=>state.todo.items);

  console.log(" In __Index ",items);
  return (
    <>
      <Head>
        <title>Nextjs - Todo App</title>
      </Head>
      <div className="container">
        <List title="To Do list">
          <ItemForm />
          
           
          {items.map(item => (
            <Item
              key={item.id}
              item={item}
              // handleComplete={handleCompleteItem}
              // handleRemove={handleRemoveItem}
            />
          ))}
        </List>
      </div>
    </>
  )
}

export default Home;