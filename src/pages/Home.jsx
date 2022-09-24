import React from 'react'
import Filter from '../components/Filter'
import Paginations from '../components/Paginations'
import Tags from '../components/Tags'
import Videos from '../components/Videos'


const Home = () => {
  return (
      <>     
       
       <div >
         
         <Tags/> 
         <Filter/>
         </div>
         
         <Videos/> 
        <Paginations/>
      </>
  )
}

export default Home 

