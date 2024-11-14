import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck , faBell ,faEllipsis } from '@fortawesome/free-solid-svg-icons';

export default function Header(){

    return (
        <div className='border-b-2 p-2 pr-4 flex justify-between'>
            <FontAwesomeIcon className='text-xl cursor-pointer pl-4' icon = {faListCheck} />
            <div className='flex gap-3'>
             <FontAwesomeIcon className='text-xl cursor-pointer' icon={faBell}/>
             <FontAwesomeIcon className='text-xl cursor-pointer' icon={faEllipsis}/>
            </div>
        </div>
    )
}