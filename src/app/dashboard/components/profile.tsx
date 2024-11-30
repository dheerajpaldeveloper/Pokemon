import { FaBell } from 'react-icons/fa';  // Import the bell icon

export default function Profile() {
  return (
    <div className='flex items-center space-x-2'>
      {/* Bell Icon with Notification Badge */}
      <div className='relative w-7 h-7 bg-gray-300 rounded-full flex justify-center items-center'>
        {/* Bell Icon */}
        <FaBell className='text-white text-xl' />
        
        {/* Notification Badge */}
        <div className='absolute top-0 right-0 w-3 h-3 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>
          3
        </div>
      </div>

      {/* Profile Image */}
      <div className='w-7 h-7 bg-gray-300 rounded-full overflow-hidden'>
        <img src="/profile.jpeg" alt="Profile" className='w-full h-full object-cover' />
      </div>

      {/* Profile Name */}
      <div className='text-white'>
        <span className='text-xs'>Dheeraj</span>
      </div>
    </div>
  );
}
