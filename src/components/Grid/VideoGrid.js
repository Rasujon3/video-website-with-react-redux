import React, { useEffect } from "react";
import VideoGridItem from "./VideoGridItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchvideos } from "../../features/videos/vidoesSlice";
import Loading from "../UI/Loading";

const VideoGrid = () => {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );
  const { tags, search } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchvideos({ tags, search }));
  }, [dispatch, tags, search]);

  // decide what to render
  let content;

  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isError && !isLoading && videos?.length === 0) {
    content = <div className="col-span-12">No videos found!</div>;
  }

  if (!isError && !isLoading && videos?.length > 0) {
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
  }

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
};

export default VideoGrid;
