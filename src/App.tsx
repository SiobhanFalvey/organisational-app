import React from "react";
import MealPlan from "./components/mealPlan/mealPlan";
import ToDoList from "./components/toDoList/toDoList";
import ShoppingList from "./components/shoppingList/shoppingList";
import "./App.css";
import Bills from "./components/bills/bills";
import Header from "./components/header/header";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Organise Me </header>
      <Header />
      <MealPlan />
      <ToDoList />
      <ShoppingList />
      <Bills />
    </div>
  );
};

export default App;
