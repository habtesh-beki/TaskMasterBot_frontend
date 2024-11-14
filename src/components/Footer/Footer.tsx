import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse ,faListCheck ,faPlus ,faMagnifyingGlass ,faUser} from '@fortawesome/free-solid-svg-icons';

export default function(){
    return (
        <div className='flex border-t-2 text-xs px-4 py-2 justify-between gap justify-center inline-block fixed bottom-0 left-0 right-0 bg-white shadow-lg'>
            <div className='flex flex-col items-center cursor-pointer'>
             <FontAwesomeIcon className='text-lg' icon={ faHouse}/>
             <p>Home</p>
            </div >
            <div className='flex flex-col items-center cursor-pointer'>
              <FontAwesomeIcon className='text-lg' icon={faListCheck}/>
              <p>My Task</p>
            </div>
            <div className='flex flex-col items-center cursor-pointer'>
            <FontAwesomeIcon className='text-2xl' icon={faPlus}/>
            <p>Create Task</p>
            </div>
            <div className='flex flex-col items-center cursor-pointer'>
             <FontAwesomeIcon className='text-lg' icon={faMagnifyingGlass}/>
             <p>Search</p>
            </div>
            <div className='flex flex-col items-center cursor-pointer'>
             <FontAwesomeIcon className='text-lg' icon={faUser}/>
             <p>Account</p>
            </div>
        </div>
    )
}