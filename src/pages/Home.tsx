import React from 'react'

export const Home: React.FC = () => {
  return (
    <div id='home' className='pt-28 flex justify-around items-center'>
        <div className='w-2/6'>
            <h2 className='text-4xl mb-2'>Welcome to our wide selection of web template designs!</h2>
            <p>Whether you're a web designer looking for inspiration or a business owner in need of a website, we've got you covered. Our templates are designed to be modern, responsive, and user-friendly, so you can create a website that not only looks great but also performs well. From sleek corporate designs to fun and creative layouts, our templates are fully customizable to suit your needs. Take a look at our collection and find the perfect template for your next project.</p>
        </div>
        <div>
            <img className='w-80 h-100' src="https://imgs.search.brave.com/m12pmftub6_bD2q5MhSJ8THWFuIUb3qRmCyZq2HraD0/rs:fit:768:1000:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNhLzIz/LzcyLzNhMjM3MjQw/NTk1OGVhMWM3OGNm/NDNlN2FkODdiMDM2/LnBuZw" alt="abstact-faces" />
        </div>
    </div>
  )
}
