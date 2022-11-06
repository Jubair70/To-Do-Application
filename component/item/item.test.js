import { render, cleanup } from "@testing-library/react";
import Item from "./item.component";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("Item", () => {
  const renderApp = () =>
    render(
      <Provider store={store}>
        <Item
          item={{
            id: Math.random(),
            text: JSON.stringify({ title: "name", description: "work to do" }),
          }}
        />
      </Provider>
    );
  afterEach(() => {
    cleanup();
  });
  beforeEach(() => {});

  test("renders a item with title", () => {
    let { getByTestId } = renderApp();
    const title = getByTestId("title");
    expect(title).toHaveTextContent("name");
  });

  test("renders a item with description", () => {
    let { getByTestId } = renderApp();
    const description = getByTestId("description");
    expect(description).toHaveTextContent("work to do");
  });
});
