export default function CreateTask(){

    return (
        <div className="m-3 w-11/12 flex flex-col ">
            <div className="text-lg text-blue-500 ml-16">Create New Task</div>
            <div>
               <div className="text-lg ">Title</div>
               <input className="w-full outline-none border-1 h-10 text-base pl-2" type="text" maxLength={20}/> 
            </div>
            <div>
                <p className="text-lg pt-4">Description</p>
                <textarea name="description here" className="text-lg w-full h-40 outline-none resize-none text-base  p-2" id="desc"></textarea>
            </div>
            <div className="mt-3 flex gap-2 justify-between">
                <div>
                    <p className="text-lg ">Start-Date</p>
                    <input className=" h-12 px-2 rounded-lg text-base bg-white text-blue-500 border p-2" type="date" />
                </div>
                <div>
                    <p className="text-lg">End-Date</p>
                    <input className=" h-12 px-2 pr-2 rounded-lg text-base bg-white text-blue-500 border " type="date" />
                </div>
            </div>
            <div className="text-lg flex gap-4 ml-32 mt-5">
                <button className="px-5 py-1 bg-white rounded-lg ">Cancel</button>
                <button className="px-5 py-1 bg-blue-500 text-white rounded-lg">Save</button>
            </div>
        </div>
    )
}