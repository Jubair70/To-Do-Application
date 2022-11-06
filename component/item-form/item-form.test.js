import { render, cleanup,screen } from "@testing-library/react";
import ItemForm from "./item-form.component";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("Testing ItemForm", () => {
    const renderApp = () =>
      render(
        <Provider store={store}>
          <ItemForm/>
        </Provider>
      );
    afterEach(() => {
      cleanup();
    });
    beforeEach(() => {});
  
    test("renders a item form with title field", () => {
        renderApp();
        const title = screen.getByTestId('title')
        expect(title).toBeInTheDocument();
      
    });
  
    test("renders a item form with description field", () => {
        renderApp();
        const description = screen.getByTestId('description')
        expect(description).toBeInTheDocument();
    });
  });