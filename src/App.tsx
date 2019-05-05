import React from "react";
import IMealPlan from "./components/mealPlan/mealPlan";
import ToDoList from "./components/toDoList/toDoList";
import ShoppingList from "./components/shoppingList/shoppingList";
import "./App.css";
import Bills from "./components/bills/bills";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Organise Me </header>
      <IMealPlan />
      <ToDoList />
      <ShoppingList />
      <Bills />
    </div>
  );
};

export default App;
