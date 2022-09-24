import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";

const initialState={
    loading:false,
      isError:false,
      error:"",
    tags:[]
}


 export  const getTagsAsync = createAsyncThunk('tags/getTagsAsync',async()=>{
       
                  const res= await axiosInstance.get('/tags') 

                   return res.data
  })


  const tagsSlice = createSlice({
    name:'tags',
    initialState,
    extraReducers:(builder)=>{ 

        builder  
              .addCase(getTagsAsync.pending,(state)=>{

                    state.error="" ;
                     state.isError= false;
                     state.loading=true ;
          
              })
              .addCase(getTagsAsync.rejected,(state,action)=>{

                  state.loading=false ;
                  state.tags=[]
               
                  state.isError= true;

                  state.error= action.error?.message;
               

              })
              .addCase(getTagsAsync.fulfilled,(state,action)=>{

                  state.loading=false ;
                  state.isError= false;
                  state.error= "" ;
                  state.tags=action.payload
              })

    }
})


export default tagsSlice.reducer