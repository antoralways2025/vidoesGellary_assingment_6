import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
 
import { Link } from 'react-router-dom';
 
import nameLogo from '../assets//nameLogo.png';
import logoImg from "../assets/logo2.png";
import searchImg from '../assets/search.svg';
import { searched } from '../RTK/features/filter/filterSlice';

const Navbar = () => {

 
 
     const dispatch=useDispatch() ;

     const [searchValue,setSearchValue]=useState('')
       
    // const myDebounce=(myF,deley=3500)=>{ 

    //       let timerId;

    //           return(...args)=>{ 

    //             if(timerId){
    //                 clearTimeout(timerId)
    //              }

    //               timerId= setTimeout(()=>myF(...args),deley)
    //           }
    // }

    //  const handleChange=(e)=>{



    //       dispatch(
    //         searched(
    //             e.target.value
    //         )
    //       )

    //         // setSearchQuery(e.target.value) ;
    //  }

  

    const handleSubmit=(e)=>{

         e.preventDefault() ; 



         dispatch(
             searched(searchValue)
         )


    }

      
     

  return (
    < > 
        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex items-center justify-between py-3"
            >
                <Link to="/">
                     
                      <div className='flex gap-0 justify-center items-center '>
                          
                     <img
                        className="h-14   m-0 p-0  border-2 border-red-600 rounded-full "
                        src={logoImg}
                        alt="Learn with Sumit"
                    /> 

                   <img
                        className=" m-0 p-0 border-2 border-green-600 h-[120px] rounded-full    hidden md:block  "
                        src={nameLogo}
                        alt="Learn with Sumit"
                    /> 

<img
                        className="h-14   m-0 p-0  border-2 border-red-600 rounded-full   hidden md:block "
                        src={logoImg}
                        alt="Learn with Sumit"
                    /> 
                      </div>
 
                     
                </Link>
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                  
                    <form onSubmit={ handleSubmit}  >
                        <input  
                           onChange={(e)=> setSearchValue(e.target.value)}
                        //   onKeyUp={myDebounce(e=> handleChange(e))}
                            className="outline-none border-none mr-2"
                            type="search"
                            name="search"
                            placeholder="Search"
                        />

                         <button type='submit'>
                         <img    
                     className="inline h-4 cursor-pointer"
                     src={searchImg}
                     alt="Search"
                     />
                            </button> 
                    </form>

                </div>
            </div>
        </nav>




        {/* tags and  filter */}


        

    </>
  )
}

export default Navbar