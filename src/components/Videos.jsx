/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 
import { getVideosAsync } from "../RTK/features/videos/videosSlice";

import Error from "./Error";
import VideoList from "./VideoList";

function Videos() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getVideosAsync());

  }, [ dispatch]);

  const { videos, loading, isError } = useSelector((state) => state.videos);


 
  

  const { tags, search } = useSelector((state) => state.filters);

  const searchQuery = new RegExp(search, "ig");

  if (loading) return <h1>  Data fetching...................</h1>;

  if (!loading && isError) return <Error />;

  if (!loading && !isError && videos.length === 0)
    return <h2>Video is Emty.</h2>;

  if (!loading && !isError && videos.length > 0)
    return (
      <>
        <section className="pt-12">
          <section className="pt-12">
            <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
              {videos
                .filter((video) =>
                  tags.length
                    ? tags.every((tag) => video.tags.includes(tag))
                    : true
                )
                .filter((video) =>
                search.trim().length
                    ? video.title.match(searchQuery)
                    : true
                )

                .map((video) => (
                  <VideoList key={video.id} video={video} />
                ))}
            </div>
          </section>
        </section>
      </>
    );
}

export default Videos;
