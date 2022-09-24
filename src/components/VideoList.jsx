/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addAuthor } from '../RTK/features/filter/filterSlice';

const VideoList = ({video}) => { 

    
//   const { author } = useSelector((state) => state.filters);

   const dispatch=useDispatch()
   
   const authorHandler=(author)=>{
    
          dispatch(
            addAuthor(author)
          )
   }
 
 
    const { id, title ,date, avatar, author,duration,views , thumbnail,   } = video

  return (
    < >

<div
                        className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]"
                    >

                     

                     <Link to={`video/${id}`}>
                     
                        
                        <div className="w-full flex flex-col">
                            <div className="relative">

                                <Link to={`video/${id}`}>
                                    <img  
                                      
                                        
                                        src={thumbnail}
                                        className="w-full h-auto"
                                        alt="Some video title"
                                    />
                                </Link>    
                                

                                <p
                                    className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                                >
                                    {duration}
                                </p>
                            </div>

                            <div className="flex flex-row mt-2 gap-2">
                                <a  className="shrink-0" >
                                    <img
                                        src={avatar}
                                        className="rounded-full h-6 w-6"
                                        alt="Learn with Sumit"
                                    />
                                </a>

                                <div className="flex flex-col">
                                    <a  >
                                        <p
                                            className="text-slate-900 text-sm font-semibold"
                                        >
                                              {title}
                                        </p>
                                    </a>
                                    <a  onClick={()=>authorHandler(author)}
                                        className="text-gray-400 cursor-pointer text-xs mt-2 hover:text-gray-600"
                                         
                                    >
                                       {author}
                                    </a>
                                    <p className="text-gray-400 text-xs mt-1">
                                        {views} views .{date}
                                    </p>
                                </div>
                            </div>
                        </div>

                        

                        </Link>
                    </div>
    </>
  )
}

export default VideoList