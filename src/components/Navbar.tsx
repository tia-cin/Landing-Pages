import React from 'react'

export const Navbar: () => JSX.Element = () => {
  return (
    <nav className='fixed top-0 flex items-center justify-between w-full px-5 mt-5'>
        <div className='text-xl italic'>Landing Pages</div>
        <div className='w-1/2'>
            <ul className='flex justify-around'>
                <li>Home</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>
    </nav>
  )
}
