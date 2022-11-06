import { render, cleanup,screen } from "@testing-library/react";
import TodoList from "./item-list.component";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("Testing ItemForm", () => {
    const renderApp = () =>
      render(
        <Provider store={store}>
          <TodoList 
          title='To Do List'
          children = {[]}
          />
        </Provider>
      );
    afterEach(() => {
      cleanup();
    });
    beforeEach(() => {});
  
    test("renders header", () => {
        renderApp();
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument();
    });

    test("renders header name", () => {
      renderApp();
      const header = screen.getByTestId('header')
      expect(header).toHaveTextContent("To Do List");
  });
  
  });