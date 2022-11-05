import Head from "next/head";
import List from "../component/item-list/item-list.component";
import Item from "../component/item/item.component";
import { useSelector } from "react-redux";
import ItemForm from "../component/item-form/item-form.component";
import { PaginatedList } from "react-paginated-list";
import { ControlContainer, ControlItem } from "./pagination.styles";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const items = useSelector((state) => state.todo.items);
  return (
    <>
      <Head>
        <title>Nextjs - Todo App</title>
      </Head>
      <div className="container">
        <List title="To Do list">
          <ItemForm />
          <PaginatedList
            list={items}
            itemsPerPage={3}
            currentPage={1}
            displayRange={2}
            leftMargin={1}
            rightMargin={1}
            controlClass={"pagination-control"}
            ControlContainer={ControlContainer}
            ControlItem={ControlItem}
            breakText={"..."}
            breakClass={"pagination-break"}
            loadingItem={() => <p>Loading...</p>}
            loopAround={true}
            nextText="Next"
            prevText="Prev"
            useMinimalControls={false}
            renderList={(list) => (
              <>
                {list.map((item) => (
                  <Item
                    key={item.id}
                    item={item}
                  />
                ))}
              </>
            )}
          />
        </List>
      </div>
      <ToastContainer
position="bottom-right"
autoClose={2000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable={false}
pauseOnHover
theme="dark"
/>
    </>
  );
};

export default Home;
