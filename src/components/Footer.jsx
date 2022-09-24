import React from 'react'

const Footer = () => {
  return (
    < > 
        <section className="pt-6">
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400"
            >
                <div>Copyright 2022 Sheikh Antor.</div>
                <ul className='flex flex-col md:flex-row md:gap-3'>
                    <a
                        href="https://web.facebook.com/antoralways2025/"
                        target="_blank"
                        rel="noreferrer"
                        className='hover:text-green-600'
                    >
                        Facebook 
                    </a>
                     
                    <a
                        href="https://portfolio-eight-iota-86.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className='hover:text-green-600'
                    >
                        My Website 
                    </a>
                    <a
                        href="https://github.com/antoralways2025/"
                        target="_blank"
                        rel="noreferrer"


                         className='hover:text-green-600'
                    >
                        Github 
                    </a>
                </ul>
            </div>
        </section>
    </>
  )
}

export default Footer