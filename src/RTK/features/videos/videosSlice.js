import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
// import { addAllPages } from "../filter/filterSlice";
 
import videosAPI from "./videosAPI";

//   const dispatch=useDispatch() 

 const initialState={
     loading:false,
      isError:false,
      error:"",
      videos:[],
      pages:1
 } 

 
   export  const getVideosAsync = createAsyncThunk('/videos/getVideosAsync',async(pageNumber)=>{
   
                        const {videos,pages} = await videosAPI.fetchVidoe(pageNumber) ;                         

                        return {videos,pages }
               
   })


     
    

  const videosSlice= createSlice({
      name:"videos",
      initialState,
      extraReducers:(builder)=>{ 

          builder  
                .addCase(getVideosAsync.pending,(state)=>{ 

                      state.error="" ;
                       state.isError= false;
                       state.loading=true ;
            
                })
                .addCase(getVideosAsync.rejected,(state,action)=>{

                    state.loading=true ;
                    state.videos=[]
                 
                    state.isError= true;

                    state.error= action.error?.message;
                 

                })
                .addCase(getVideosAsync.fulfilled,(state,action)=>{

                    state.loading=false ;
                    state.isError= false;
                    state.error= "" ;
                    state.videos=action.payload.videos ;
                    state.pages=action.payload.pages ;
                })

      }

  }) ;



   export default videosSlice.reducer