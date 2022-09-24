import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideosAsync } from "../RTK/features/videos/videosSlice";

const Paginations = () => {
  

  const paginationListRef=useRef( )

  const dispatch = useDispatch();
    const {  pages ,isError}= useSelector(state=> state.videos)
 

 

  const addPageHandler = (pageNumber ,index) => {

    
    let items=[...paginationListRef.current.children] 

    



      items.forEach((item,idx)=>{

      if ( idx === index ) {
				item.classList.remove('bg-blue-100') 
				item.classList.add('bg-blue-600')
			} else {
				item.classList.remove('bg-blue-600')
				item.classList.add('bg-blue-100')
			}
     })


   dispatch(
    getVideosAsync(pageNumber)
)

  };

   

     let content;


       if( !isError && pages >0){ 

         content =  new Array(pages).fill('').map((item, idx) => { 
              
          let pageCount= idx+1
      return (
        <div
          onClick={() => addPageHandler(pageCount,idx)}
          key={idx}
					className={`${
						idx === 0 ? 'bg-blue-600' : 'bg-blue-100'
					} text-white px-4 py-1 rounded-full cursor-pointer`}
        > 
        
          {pageCount}
        </div>
      )
        })

       }else{
           content=null
       }





  
   
   return (
    <>
       <section className="pt-2"   >  
        <div  ref={paginationListRef} className='max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end' >
             {content}
        </div>
        </section>
     
    </>
    )

};

export default Paginations;
