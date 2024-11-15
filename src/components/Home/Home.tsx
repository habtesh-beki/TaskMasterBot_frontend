import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare ,faClock , faFolderPlus , faBullseye , faIdCard} from '@fortawesome/free-solid-svg-icons';

export default function Home(){
    return (
        <div>
            <div className='p-3 text-sm bg-white flex flex-col justify-center'>
                <div className='mb-2'>
                <p className='text-xl font-medium'>Recently Opened</p>
               </div>
               <div className='flex gap-1 justify-between'>
                <div className='border p-2 w-40 h-32 rounded-lg'>
                    <FontAwesomeIcon className='text-xl p-2 rounded-lg bg-blue-500 text-white' icon={faPenToSquare}/>
                    <p className='text-base mb-2 mt-5'>NodeJs-Project</p>
                    <p className='text-sm'><FontAwesomeIcon className='text-blue-500 mr-2' icon={faClock}/>10/10 Completed</p>
                </div>
                 <div className='border  p-2 w-40 h-32 rounded-lg'>
                     <FontAwesomeIcon className='p-2 rounded-lg text-xl bg-green-500 text-white' icon={faPenToSquare}/>
                     <p className='text-base mb-2 mt-5'>React-Project</p>
                     <p className='text-sm'><FontAwesomeIcon className='mr-2' icon={faClock}/> 10/20 progress</p>
                </div>
               </div>
            </div>
            <div className='mt-3 '>
                <p className='text-lg font-medium ml-3'>Create New Board</p>
                <div className='mt-3 flex flex-col gap-3'>
                    <div className='flex cursor-pointer items-center bg-white pl-3 py-2'>
                     <FontAwesomeIcon className='text-white rounded-lg p-2 text-lg bg-purple-500 mr-2' icon={faFolderPlus}/>
                     <div>
                        <p className='text-base font-bold'>Create project</p>
                        <p className='text-sm'>You can create new project task</p>
                     </div>
                    </div>
                    <div className='flex cursor-pointer items-center bg-white pl-3 py-2'>
                    <FontAwesomeIcon className='text-white rounded-lg p-2 text-lg bg-blue-500 mr-2' icon={faBullseye}/>
                     <div>
                        <p className='text-base font-bold'>Create Goals</p>
                        <p className='text-sm'>You can create new goals bord</p>
                     </div>
                    </div>
                    <div className='flex cursor-pointer items-center bg-white pl-3 py-2'>
                    <FontAwesomeIcon className='text-white rounded-lg p-2 text-lg bg-green-500 mr-2' icon={faIdCard}/>
                     <div>
                        <p className='text-base font-bold'>Create portifolio</p>
                        <p className='text-sm'>You can create new portifolio task</p>
                     </div>
                    </div>
                </div>
            </div>
            <div className='ml-3 text-lg font-medium mt-2'>Assign to me</div>  
            <div className='flex flex-col mb-20 mt-3 gap-2'>
               <div className='flex pl-3 bg-white py-2'>
                 <input className='mr-2 text-purple-500 w-6 h-6 mt-3' type="checkbox" />
                 <div className='text-lg'>
                    <p className=''>Amazon</p>
                    <p className='text-sm'>Create Mobile Responsive, let's get this project</p>
                 </div>
                </div>
                <div className='flex pl-3 bg-white py-2'>
                 <input className='mr-2 w-6 h-6 mt-3' type="checkbox" />
                 <div className='text-lg'>
                    <p className=''>Amazon</p>
                    <p className='text-sm'>Create Mobile Responsive, let's get this project</p>
                 </div>
                </div>
            </div>
        </div>
    )
}