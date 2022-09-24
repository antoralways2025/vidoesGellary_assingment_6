import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "../features/filter/filterSlice";
import tagsSlice from "../features/tags/tagsSlice";
import relavantVideosSlice from "../features/videos/relavantVideosSlice";
import singleVideoSlice from "../features/videos/videoSlice";
import videosSlice from "../features/videos/videosSlice";

 const store = configureStore({
    reducer:{
       videos:videosSlice,
       video: singleVideoSlice,
       tags:tagsSlice,
       similarVideos:relavantVideosSlice,
       filters:filterSlice

    }

 })


 export default store ;