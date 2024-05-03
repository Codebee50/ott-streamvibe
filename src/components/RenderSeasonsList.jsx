import SeasonCard from "./SeasonCard";

const RenderSeasonsList = (props) => {
  return (
    <div className="flex flex-col mt-7 gap-3">
      {props.seasonsList.map((season) => {
        return (
          <SeasonCard
            key={season.id}
            season={season}
            seriesId={props.seriesId}
          />
        );
      })}
    </div>
  );
};

export default RenderSeasonsList;
