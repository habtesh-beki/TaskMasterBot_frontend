
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import MyTask from "./pages/MyTask";
import CreateTask from "./pages/CreateTask";
import DoingTask from "./components/MyTaskComponent/TaskDoing";
import ToDoTask from "./components/MyTaskComponent/TodoTask";
import TaskDone from "./components/MyTaskComponent/TaskDone";
// import HomePage from "./pages/HomePage"



function App() {

  return <div className="text-4xl">
    <BrowserRouter>
    <Header/>
    
    <Routes>
      <Route index element={<Home/>}/>
       <Route path="/mytask" element={<MyTask/>} >
         <Route index element={<ToDoTask/>}/>
         <Route path="doing" element={<DoingTask/>}/>
         <Route path="done" element={<TaskDone/>}/>
      </Route> 
      <Route path="/createtask" element={<CreateTask/>}/>
    </Routes>

    <Footer/>
    </BrowserRouter>
  </div> 
}

export default App
