import { createSlice } from "@reduxjs/toolkit";
  


 const initialState={
      tags:[],
      search:"",
      author:"" ,
      page:0,
      allPages:0,
      limit:4,
 }

  
    



  const filterSlice= createSlice({
      name:"filter",
      initialState,

      reducers:{
        tagSelected:(state,action)=>{

              state.tags.push(action.payload)
        },

        tagRemove:(state,action)=>{

            let indexToRemove= state.tags.indexOf(action.payload) ; 

             if(indexToRemove !== -1){
                state.tags.splice(indexToRemove,1)
             }

        },

        searched:(state,action)=>{
            state.search=action.payload
        },
        addAuthor:(state,action)=>{
               state.author = action.payload
        },
  
        resetFilter:(state)=>{
            state.author="" ;
            state.tags=[];
            state.search=""
        },

       addAllPages:(state,action)=>{

          state.allPages=Math.ceil(action.payload)
       },

       addPage:(state,action)=>{
          state.page=action.payload
        }
        
      }
   

  }) ;



   export const  {tagSelected,searched,tagRemove ,addAuthor  ,resetFilter,addAllPages,addPage }=filterSlice.actions
 
   export default filterSlice.reducer