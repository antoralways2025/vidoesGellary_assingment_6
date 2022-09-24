/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import likeImg from '../assets/like.svg';
import unlikeImg from '../assets/unlike.svg';
import { getVidoeByIDAsync, updateLikeByIDAsync, updateUnLikeByIDAsync } from '../RTK/features/videos/videoSlice';
import Error from './Error';
import RelaventVideos from './RelaventVideos';

const Video = () => {


   const dispatch= useDispatch() ;

    const {videID } = useParams()  

     useEffect(()=>{ 

        dispatch(

            getVidoeByIDAsync(videID)

        )

     },[dispatch,videID])

   

      const {video ,loading,isError,}=useSelector(state=> state.video) ;

      const {id, title ,date,link, unlikes,likes, description,tags } = video ; 

        
          

 

      const handleLikeIncrement=()=>{  
        dispatch(
            updateLikeByIDAsync({id,updateValue:likes+1})
        )
          
      }


    //   unlike handler
     const unlikeHandlerDecrement=()=>{
         dispatch(
            updateUnLikeByIDAsync({id,updateValue:unlikes - 1})
         )
     }

      if(loading) return null

      if(!loading && isError) return <Error />
   
      if(!loading && !isError && video.length === 0 ) return <h2> Video is Emty.</h2>
   
//    if(!loading && !isError && videos.length >0 )

  return (
    <>

<section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        
                        <iframe
                            width="100%"
                            className="aspect-video"
                            src={link}
                            title={title}
                            frameBorder=""
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>

 
                        <div>
                            <h1
                                className="text-lg font-semibold tracking-tight text-slate-800"
                            >
                                {title}
                            </h1>
                            <div
                                className="pb-4 flex items-center space-between border-b"
                            >
                                <h2
                                    className="text-sm leading-[1.7142857] text-slate-600 w-full"
                                >
                                    Uploaded on {date}
                                </h2>

                       
                                <div className="flex gap-10 w-48">
                                    <div className="flex gap-1">
                                        <div className="shrink-0 cursor-pointer">
                                            <img 
                                                 onClick={handleLikeIncrement}
                                                className="w-5 block"
                                                src={likeImg}
                                                alt="Like"
                                            />
                                        </div>
                                        <div

                                         
                                            className="text-sm leading-[1.7142857] text-slate-600"
                                        >
                                          {likes}  { likes >=1000 && 'K'}
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="shrink-0 cursor-pointer">
                                            <img
                                             onClick={unlikeHandlerDecrement}
                                                className="w-5 block"
                                                src={unlikeImg}
                                                alt="Unlike"
                                            />
                                        </div>
                                        <div 
                                             
                                            className="text-sm leading-[1.7142857] text-slate-600"
                                        >
                                            {unlikes} {unlikes >=1000 && "K"  }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="mt-4 text-sm text-[#334155] dark:text-slate-400"
                            >
                               {description}
                            </div>
                        </div>
                    </div>
 
                    {/* Relavent  */} 

                    <RelaventVideos tags={tags} id={id}/>
                </div>
            </div>
        </section>

    </ >
  )
}

export default Video