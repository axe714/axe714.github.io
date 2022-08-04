import React from 'react'

export default function Hero() {
  return (
    <div class="bg-white py-12 md:py-24">
    <div class="w-full max-w-screen-xl mx-auto px-12 py-12">
      <div class="md:flex md:flex-col md:items-center md:justify-between">
        <div class="flex-1 min-w-0 lg:pb-12">
          <h2 id="hero-title" class="flex justify-center text-2xl font-['Paytone One'] text-blue-900 leading-tight mb-3">
            <span class="text-center text-5xl font-black">Aspiring Full Stack Developer</span>
          </h2>
          <p id="hero-sub-text" class="flex justify-center pt-3 font-black">
            <span class="font-['Poppins'] text-2xl font-black text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus in quaerat itaque fugit repellendus aut!</span>
          </p>
        </div>
        <div id="hero-img" class="flex-1 px-12 pt-24 pb-8 lg:pt-8 lg:pb-12">
          <img class="flex justify-center min-w-s min-h-sm rounded-full md:max-w-md md:rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1696&q=80" />
        </div>
      </div>
    </div>
  </div>
  )
}
