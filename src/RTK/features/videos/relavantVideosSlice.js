import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 
import videosAPI from "./videosAPI";


 const initialState={
     loading:false,
      isError:false,
      error:"",
     videos:[]
 }

 
   export  const getRelavantVideosAsync = createAsyncThunk('/relaventVideos/getRelavantVideosAsync',async(query)=>{
   
                        const res = await videosAPI.fetchRelaventVideos(query);
                          
                         return  res.data;

                
   })


    



   const relavantVideosSlice= createSlice({
      name:"relaventVideos",
      initialState,
      extraReducers:(builder)=>{ 

          builder  
                .addCase(getRelavantVideosAsync.pending,(state)=>{

                      state.error="" ;
                       state.isError= false;
                       state.loading=true ;
            
                })
                .addCase(getRelavantVideosAsync.rejected,(state,action)=>{

                    state.loading=true ;
                    state.videos=[]
                 
                    state.isError= true;

                    state.error= action.error?.message;
                 

                })
                .addCase(getRelavantVideosAsync.fulfilled,(state,action)=>{

                    state.loading=false ;
                    state.isError= false;
                    state.error= "" ;
                    state.videos=action.payload
                })

      }

  }) ;



   export default relavantVideosSlice.reducer