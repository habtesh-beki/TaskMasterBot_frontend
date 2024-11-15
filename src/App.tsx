
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import TaskDone from "./components/MyTaskComponent/TaskDone"
import CreateTask from "./pages/CreateTask"
import HomePage from "./pages/HomePage"
import MyTask from "./pages/MyTask"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MyTask/>,
//     children: [
//       {
//         path: "contacts/:contactId",
//         element: <TaskDone/>,
//       },
//     ],
//   },
// ]);

function App() {

  return <div className="text-4xl">
    <Header/>
    <HomePage/>
   {/* <BrowserRouter>
   <Routes>
    <Route index element={<HomePage />} />
    <Route path='/mytask' element={<MyTask />}/>
    <Route path='/createtask' element={<CreateTask />}/>
   </Routes>
   </BrowserRouter> */}
    <Footer/>
  </div> 
}

export default App
