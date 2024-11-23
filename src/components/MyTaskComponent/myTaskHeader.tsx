import { Link } from "react-router-dom"

export default function MyTaskHeader(){
    return (
        <div className="flex justify-evenly text-lg mt-2 pb-2 border-b-2">
            <button className="border active-btn font-medium px-5 rounded-lg text-white py-1 bg-red-600"><Link to="">To Do</Link> </button>
            <button className="border font-medium px-5 rounded-lg text-white py-1 bg-blue-600"><Link to="doing">Doing</Link> </button>
            <button className="border font-medium px-5 rounded-lg text-white py-1 bg-green-600"><Link to="done">Done</Link>  </button>
        </div>
    )
}