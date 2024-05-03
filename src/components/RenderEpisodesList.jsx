import EpisodeItem from "./EpisodeItem";

const RenderEpisodesList = (props) => {
  return (
    <div className="w-full flex flex-col gap-5 mt-3">
      {props.episodesList.map((episode, index) => (
        <EpisodeItem
          key={episode.id}
          episode={episode}
          index={index + 1}
          poster_path={props.poster_path}
        />
      ))}
    </div>
  );
};

export default RenderEpisodesList;
