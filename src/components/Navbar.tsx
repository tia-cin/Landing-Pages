import React from 'react'

export const Navbar: () => JSX.Element = () => {
  return (
    <nav className='fixed top-0 flex items-center justify-between w-full px-5 mt-5'>
        <div className='text-xl italic'>Landing Pages</div>
        <div className='w-1/2'>
            <ul className='flex justify-around'>
                <li><a href='#home'>home</a></li>
                <li><a href='#projects'>projects</a></li>
                <li><a href='#about-us'>about us</a></li>
                <li><a href='#contact'>contact</a></li>
            </ul>
        </div>
    </nav>
  )
}
