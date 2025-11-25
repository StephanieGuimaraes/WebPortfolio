import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='scroll-my-20 pt-16 pb-8 bg-indigo-600 px-4 md:px-8 lg:px-64'>
        <div className='w-full mx-auto'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-white mb-4'>Get In Touch</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              <div className='space-y-8'>
                <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
                <div className='space-y-6 justify-center'>
                  <div className='flex items-center space-x-4'>
                    <div className='p-3 rounded-full bg-primary/10'>
                      
                    </div>
                  </div>
                </div>
              </div>

            </div>

        </div>
      </section>
  )
}

export default Contact