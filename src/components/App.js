import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function handleDelete(taskRemoved){
    setTasks(prevTasksData => prevTasksData.filter((task) => task !== taskRemoved))
  }

  const filtered = selectedCategory === "All"? tasks : tasks.filter(task => task.category === selectedCategory);
  
  function handleSubmit(newTask){
    setTasks([...tasks,newTask])
  }

  const formListCategories = CATEGORIES.filter((category) => category !== 'All')
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm onTaskFormSubmit = {handleSubmit} categories ={formListCategories}/>
      <TaskList tasks = {filtered} handleDelete={handleDelete}/>      
    </div>
  );
}

export default App;
