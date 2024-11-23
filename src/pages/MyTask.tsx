import { Outlet } from "react-router";
import MyTaskHeader from "../components/MyTaskComponent/myTaskHeader";
// import TaskDone from "../components/MyTaskComponent/TaskDone";

import ToDoTask from "../components/MyTaskComponent/TodoTask";


export default function MyTask(){
    return (
        <>
        <MyTaskHeader/>
        <Outlet/>
        </>
    )
}