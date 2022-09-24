import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagRemove, tagSelected } from "../RTK/features/filter/filterSlice";
 
const Tag = ({ title }) => { 

 const dispatch=useDispatch() ;


   const {tags:selectedTags}=useSelector(state=>state.filters);


      const isSelected= selectedTags.includes(title) ;


      const toggleSelected=()=>{

             if(isSelected){

                dispatch(tagRemove(title))

             }else{


                dispatch(tagSelected(title))

             }
      }



  return (
    <div onClick={toggleSelected} className={` ${isSelected? "bg-blue-600 text-white":"bg-blue-100  text-blue-600  " } px-4 py-1 rounded-full cursor-pointer`}>
      {title}
    </div>
  );
};

export default Tag;
