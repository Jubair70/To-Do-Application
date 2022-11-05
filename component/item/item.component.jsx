import React from "react";
import itemStyles from "./item.module.css";
import { useDispatch } from "react-redux";
import { deleteItem, editItem } from "../../store/todoSlice";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  const handleEdit = (itemId) => {
    dispatch(editItem(itemId));
  };

  return (
    <div className={itemStyles.root}>
      <label className={itemStyles.label}>
        <div className={itemStyles.break}>{JSON.parse(item.text).title}</div>
        <div className={itemStyles.break}>
          {JSON.parse(item.text).description}
        </div>
      </label>
      <div>
        <div className={itemStyles.tooltip}>
            <span className={itemStyles.tooltiptext}>Edit</span>
            <button
          className={itemStyles.remove}
          onClick={() => handleEdit(item.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.72"
            height="16.21"
            viewBox="0 0 512 512"
          >
            <path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z" />
          </svg>
        </button>
        </div>
        <div className={itemStyles.tooltip}>
            <span className={itemStyles.tooltiptext}>Delete</span>
        <button
          className={itemStyles.remove}
          onClick={() => handleRemove(item.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14.72" height="16.21">
            <path d="M14.068 2.98H.655a.655.655 0 100 1.31h13.413a.655.655 0 100-1.31z" />
            <path d="M12.575 2.98a.655.655 0 00-.655.655v10.43a.836.836 0 01-.835.835h-7.45a.836.836 0 01-.835-.835V3.635a.655.655 0 10-1.31 0v10.43a2.147 2.147 0 002.145 2.145h7.45a2.147 2.147 0 002.145-2.145V3.635a.655.655 0 00-.655-.655z" />
            <path d="M8.85 0H5.87a2.147 2.147 0 00-2.145 2.145v1.49a.655.655 0 001.31 0v-1.49a.836.836 0 01.835-.835h2.98a.836.836 0 01.835.835v1.49a.655.655 0 101.31 0v-1.49A2.147 2.147 0 008.85 0zM5.87 6.705a.655.655 0 00-.655.655v4.47a.655.655 0 001.31 0V7.36a.655.655 0 00-.655-.655zM8.85 6.705a.655.655 0 00-.655.655v4.47a.655.655 0 001.31 0V7.36a.655.655 0 00-.655-.655z" />
          </svg>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
