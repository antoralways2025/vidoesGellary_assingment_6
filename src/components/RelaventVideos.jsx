/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRelavantVideosAsync } from "../RTK/features/videos/relavantVideosSlice";
import Error from "./Error";

import { Link } from "react-router-dom";
import { addAuthor } from "../RTK/features/filter/filterSlice";


const RelaventVideos = ({ tags = [], id }) => {
  const dispatch = useDispatch();

  // http://localhost:9000/videos?tags_like=NextJS&tags_like=Redux




  const queryString = tags?.reduce((prev, presentTag) => {
    return `${prev}tags_like=${presentTag}&`;
  }, "?");


  

  const limit= 5;

     let query= `${queryString}id_ne=${id}&_limit=${limit} `

    //  console.log(query)

  useEffect(() => {
    dispatch(getRelavantVideosAsync(query));
  }, [dispatch,  query]);



  const { similarVideos ,filters } = useSelector((state) => state);

  const { error  ,loading,videos} = similarVideos ;  

  const { author }=filters
    
   const authorHandler=(author)=>{
    
          dispatch(
            addAuthor(author)
          )
   }

    if(loading) return null

     if(!loading && error) return <Error/>

     if(!loading && !error&& videos.length===0) return <h1 className="text-5xl text-center">There is no Relevent Videos Thank you!</h1>

     if(!loading && !error&& videos?.length>0)

  return (
    <>
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
             
        {
            videos.filter(video=> author.length ? video.author === author :true)
  
            .map(item=>{

                return(
                    <div key={item.id} className="w-full flex flex-row gap-2 mb-4">
                    <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
                      <Link to={`/video/${item.id}`}>
                        <img
                          src={item.thumbnail}
                          className="object-cover"
                          alt="Some video title"
                        />
                      </Link>
                      <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                       {item.duration}
                      </p>
                    </div>
          
                    <div className="flex flex-col w-full">
                      <a href="#">
                        <p className="text-slate-900 text-sm font-semibold">
                          {item.title}
                        </p>
                      </a>
                      <a
                        className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                        href="#"

                        onClick={()=>authorHandler(item.author)}
                      >
                        {item.author}
                      </a>
                      <p className="text-gray-400 text-xs mt-1">
                          {item.views} {item.views>=1000 &&"K"} views .{item.date}
                      </p>
                    </div>
                    </div>
                )
            })
        }
      </div>
    </>
  );
};

export default RelaventVideos;
