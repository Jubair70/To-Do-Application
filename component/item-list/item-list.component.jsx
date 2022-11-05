import React from "react";
import listStyles from "./item-list.module.css";

const TodoList = ({ title, children, handlerRemoveCompleted }) => {
  return (
    <>
      {children && (
        <section className={listStyles.root}>
          {title && <h4 className={listStyles.title}>{title}</h4>}
          <div className={listStyles.items}>{children}</div>
        </section>
      )}
    </>
  );
};

export default TodoList;
