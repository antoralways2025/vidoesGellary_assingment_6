import axios from '../../../utils/axios';

 

// http://localhost:9000/videos?_start=2&_limit=1

 const videosAPI={


     fetchVidoe: async(pageNumber=1)=>{   

                 let limitPerPageNumber= 8; 
                
                      const  {data}= await axios.get(`/videos`) 

                        const  res= await axios.get(`/videos?_page=${pageNumber}&_limit=${limitPerPageNumber}`) 


                        return  { 
                           videos:res.data,
                           pages: Math.ceil(data?.length / limitPerPageNumber)
                            
                         }

                         
                 

          //  const     res=   await axios.get(`/videos?_page=1&_limit=4`) ;

             
              
              //  return res

     },
    fetchVideoByID:async(id)=>{
         const res= await axios.get(`/videos/${id}`) ;

          return res
    },

    increaseLikeByID:async({id ,updateValue})=>{

       const res = await axios.patch(`/videos/${id}`,{
         likes:updateValue
       })
   
       return res

    },
    decreasLikeByID:async({id ,updateValue})=>{

      const res = await axios.patch(`/videos/${id}`,{
        unlikes:updateValue
      })
  
      return res

   }
    ,

   fetchRelaventVideos:async(query)=>{

                const res= await axios.get(`/videos${query}`) ;

                 return res ;
   },    
 }


 export default videosAPI 