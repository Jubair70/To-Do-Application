import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import { hydrate } from '../store/todoSlice';

const TodoApp = ({ Component, pageProps }) => {
  // const todos =  [
  //   { id: Math.random(), text: JSON.stringify({title:'hello',description:'what the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hellwhat the hell'}) },
  //   { id: Math.random(), text: JSON.stringify({title:'nice',description:'to meet you'}) },
  //   { id: Math.random(), text: JSON.stringify({title:'name',description:'Jubair you shit'}) },
  //   { id: Math.random(), text: JSON.stringify({title:'shut up',description:'fuck up'}) },
  //   ]
useEffect(()=>{
  let todos  = [];
  for (var i = 0; i < localStorage.length; i++){
      let a = JSON.parse(localStorage.getItem(localStorage.key(i)))
      if(typeof a ==='object' && a.hasOwnProperty('title') && a.hasOwnProperty('description'))
      todos.push({ id:localStorage.key(i), text: JSON.stringify(a) });
    }

if(todos){
store.dispatch(hydrate(todos))
}
},[store])

 return (
  <>
    <main>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
      
    </main>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&display=swap');
      html {
        box-sizing: border-box;
        font-size: 16px;
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
      }
      body {
        font-family: 'Rubik', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
          Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        background-color: #f9fcff;
      }
      #__next {
        display: flex;
        justify-content: center;
        height: calc(100vh - 3px);
        width: 100vw;
        border-top: 3px solid #d10263;
      }
      .container {
        padding: 0 0.9375rem;
        margin: 0 auto;
        max-width: 60rem;
        padding-bottom: 200px;
      }
    `}</style>
  </>
);
}

export default TodoApp;
