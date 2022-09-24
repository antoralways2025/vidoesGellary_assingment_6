import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter } from '../RTK/features/filter/filterSlice';

const Filter = () => {


     const {author,search,tags}=useSelector(state=>state.filters) ;

     const dispatch= useDispatch() ;


      const resetHandler=()=>{

            dispatch(
               resetFilter()
            )
      }
      
       
  if(author || search || tags.length>0)
  return (
    <div className='max-w-full p-2'> 

         
         <div className='flex gap-2 justify-between'>

            {
                author&& <h1>Author:{author}</h1> 
            }

            {
                search && <h1 className='font-bold '>Search Result  : {search}</h1>
            }

 

            {
               (author|| search|| tags) && <button onClick={resetHandler} className='px-2 py-2 bg-red-300 rounded '>Reset All</button> 
            }
         </div>
        

          
    </div>
  )


  return null;

   
}

export default Filter