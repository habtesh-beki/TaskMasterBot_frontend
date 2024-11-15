export default function DoingTask(){
    return (
        <ul className="flex flex-col gap-3  mt-2">
          <li className="flex pl-4 bg-white py-2">
              <input className='mr-2 w-6 h-6 mt-3 bg-green-500' type="checkbox" />
                 <div className='text-lg'>
                      <p className=''>Amazon</p>  
                      <p className='text-sm'>Create Mobile Responsive, let's get this project</p>
             </div>
          </li>
          <li className="flex pl-4 bg-white py-2">
            <input className='mr-2 w-6 h-6 mt-3' type="checkbox" />
                 <div className='text-lg'>
                      <p className=''>Amazon</p>  
                    <p className='text-sm'>Create Mobile Responsive, let's get this project</p>
                 </div>
          </li>
          <li className="flex pl-4 bg-white py-2">
             <input className='mr-2 w-6 h-6 mt-3' type="checkbox" />
                 <div className='text-lg'>
                      <p className=''>Amazon</p>  
                    <p className='text-sm'>Create Mobile Responsive, let's get this project</p>
                 </div>
          </li>
          <li className="flex pl-4 bg-white py-2">
          <input className='mr-2 w-6 h-6 mt-3' type="checkbox" />
                 <div className='text-lg'>
                      <p className=''>Amazon</p>  
                    <p className='text-sm'>Create Mobile Responsive, let's get this project</p>
                 </div>
          </li>
        </ul>
    )
}