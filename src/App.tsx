import React, { Component } from "react";
import store from "./store";
import ToDoList from "./components/toDoList/toDoList";
import ShoppingList from "./components/shoppingList/shoppingList";
import "./App.css";
import Bills from "./components/bills/bills";
import HeaderContainer from "./container/headerContainer";
import { Provider } from "react-redux";
import MealPlanContainer from "./container/mealPlanContainer";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";


class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">Organise Me </header>
          <HeaderContainer />
          <MealPlanContainer />
          <ToDoList />
          <ShoppingList />
          <Bills />
        </div>
      </Provider>
    );
  }
}

export default App;
