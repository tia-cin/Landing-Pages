import React from 'react'

export const Footer: () => JSX.Element = () => {
  return (
    <footer className='bottom-0 flex justify-between items-center w-full h-40 px-5'>
        <div className='w-1/4 flex flex-col justify-around h-full'>
            <div><p className='text-xl italic'>Landing Pages</p></div>
            <div><p className='text-sm'>Copyright © 2024 Landing Pages. All rights reserved.</p></div>
        </div>
        <div className='flex flex-col justify-around h-full w-3/4'>
            <p className='text-center'><span className='italic'>"Design is thinking made visual."</span> - Saul Bass</p>
            <ul className='flex justify-around'>
                <li><a href='#about-us'>about us</a></li>
                <li><a href='#contact'>contact</a></li>
                <li><a href='#projects'>projects</a></li>
                <li><a href='#home'>back to top</a></li>
            </ul>
        </div>
    </footer>
  )
}
