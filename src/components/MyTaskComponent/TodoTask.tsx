

export default function ToDoTask(){
    return (
        <ul className="flex flex-col gap-3  mt-2">
          <li className="flex pl-4 bg-white py-2">
              <input className='mr-2 w-6 h-6 mt-3 bg-green-500' type="checkbox" />
                 <div className='text-lg'>
                 <div className="flex gap-4">
                      <p className=''>Amazon</p>  
                      <button className="rounded-lg px-4 text-white bg-yellow-500">Start</button>
                    </div>
                    <p className='text-sm'>Create Mobile Responsive, let's get this project</p>
             </div>
          </li>
          <li className="flex pl-4 bg-white py-2">
            <input className='mr-2 w-6 h-6 mt-3' type="checkbox" />
                 <div className='text-lg'>
                    <div className="flex gap-4">
                      <p className=''>Amazon</p>  
                      <button className="rounded-lg px-4 text-white bg-yellow-500">Start</button>
                    </div>
                    <p className='text-sm'>Create Mobile Responsive, let's get this project</p>
                 </div>
          </li>
          <li className="flex pl-4 bg-white py-2">
             <input className='mr-2 w-6 h-6 mt-3' type="checkbox" />
                 <div className='text-lg'>
                 <div className="flex gap-4">
                      <p className=''>Amazon</p>  
                      <button className="rounded-lg px-4 text-white bg-yellow-500">Start</button>
                    </div>
                    <p className='text-sm'>Create Mobile Responsive, let's get this project</p>
                 </div>
          </li>
          <li className="flex pl-4 bg-white py-2">
          <input className='mr-2 w-6 h-6 mt-3' type="checkbox" />
                 <div className='text-lg'>
                 <div className="flex gap-4">
                      <p className=''>Amazon</p>  
                      <button className="rounded-lg px-4 text-white bg-yellow-500">Start</button>
                    </div>
                    <p className='text-sm'>Create Mobile Responsive, let's get this project</p>
                 </div>
          </li>
        </ul>
    )
}