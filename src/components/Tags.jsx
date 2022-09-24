/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTagsAsync } from '../RTK/features/tags/tagsSlice';
import Error from './Error';
import Tag from './Tag';
 

 



const Tags = () => {

     const dispatch=useDispatch() ;

    useEffect(()=>{

        dispatch(
            getTagsAsync()
        )

    },[dispatch]) 


    const {tags , loading,isError}= useSelector(state=>state.tags) ;
  



    if(!loading && isError) return <Error/>

    
   
    
    

    return (< > 
            <section className='w-full'>
                <div
                    className="   max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b  flex-wrap"
                >
                    {
                        tags.map((tag,index)=>{
                            return <Tag  key={index} title={tag}/>
                        })
                    }
                
              
                </div>
            </section>
        </>) 
  
    

          



}

export default Tags