import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 
import videosAPI from "./videosAPI";


 const initialState={
     loading:false,
      isError:false,
      error:"",
     video:{}
 }

 

    export const getVidoeByIDAsync = createAsyncThunk('/video/getVidoeByIDAsync',async(id)=>{

                  const res = await videosAPI.fetchVideoByID(id) ;
                   
                   return res.data
    })

    export const updateLikeByIDAsync= createAsyncThunk('/video/updateLikeByIDAsync',async ({id,updateValue})=>{


                    
                        const res= await videosAPI.increaseLikeByID({id,updateValue}) ;

                         return res.data
    })

    export const updateUnLikeByIDAsync= createAsyncThunk('/video/updateUnLikeByIDAsync',async ({id,updateValue})=>{


                    
        const res= await videosAPI.decreasLikeByID({id,updateValue}) ;

         return res.data
})


  const videoSlice= createSlice({
      name:"video",
      initialState,
 
      
      extraReducers:(builder)=>{ 

          builder  
                .addCase(getVidoeByIDAsync.pending,(state)=>{

                      state.error="" ;
                       state.isError= false;
                       state.loading=true ;
            
                })
                .addCase(getVidoeByIDAsync.rejected,(state,action)=>{

                    state.loading=false ;
                    state.video={}
                 
                    state.isError= true;

                    state.error= action.error?.message;
                 

                })
                .addCase(getVidoeByIDAsync.fulfilled,(state,action)=>{

                    state.loading=false ;
                    state.isError= false;
                    state.error= "" ;
                    state.video=action.payload
                })


                // for update like
                .addCase(updateLikeByIDAsync.fulfilled,(state,action)=>{
                    
                    state.loading=false ;
                    state.isError= false;
                    state.error= "" ;
                    state.video=action.payload

                })

                // update unlike 

                .addCase(updateUnLikeByIDAsync.fulfilled,(state,action)=>{
                    
                    state.loading=false ;
                    state.isError= false;
                    state.error= "" ;
                    state.video=action.payload

                })

      }

  }) ;



   export const {increaseLike}= videoSlice.actions

   export default videoSlice.reducer