import React from 'react'

export default function Topbar() {
  return (
    <div>
      <div class="flex items-center justify-between h-16 bg-white text-white px-3 card-shadow-lite2 w-screen">

  <div class="flex items-center space-x-3">
    <img src="/logo.png" alt="Logo" class="w-[120px]" />
  </div>


  <div class="flex items-center space-x-4">

    <button class="relative">
    <img src="\dashboards\candidate\bell.svg" alt="My Task Icon" className="w-[30px]" />
  
      <span class="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 bg-red-600 text-xs text-white rounded-full">3</span>
    </button>

  
    <div class="relative">
      <button class="flex items-center space-x-2 focus:outline-none" onclick="toggleDropdown()">
        <img src="path-to-your-avatar.png" alt="Profile" class="h-8 w-8 rounded-full border-2 border-gray-500" />
        <svg width="30px" className='rotate-180' height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 15L12 9L6 15" stroke="#000000" stroke-width="2"></path> </g></svg>
      </button>

      
      <div id="dropdownMenu" class="hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 text-gray-800">
        <a href="#profile" class="block px-4 py-2 hover:bg-gray-100">My Profile</a>
        <a href="#settings" class="block px-4 py-2 hover:bg-gray-100">Settings</a>
        <a href="#logout" class="block px-4 py-2 hover:bg-gray-100">Logout</a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
