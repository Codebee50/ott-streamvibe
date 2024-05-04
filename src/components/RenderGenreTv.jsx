import { Fragment } from "react";
import { ConfigProvider, Pagination } from "antd";
import TvShowCardsm from "./TvShowCardsm";

const RenderGenreTv = (props) => {
  function onPageChange(page) {
    console.log("age", page);
    props.onPageChange(page);
  }
  return (
    <Fragment>
      <section className="padding-x  bg-page-black pt-10 w-full max-container">
        <div className="w-full grid sm:grid-cols-2 items-center justify-items-center min-[920px]:grid-cols-3 xl:grid-cols-4 gap-7">
          {props.tvList.map((tv) => (
            <TvShowCardsm
              seenCount={Math.floor(tv.vote_average)}
              posterPath={tv.poster_path}
              title={tv.original_name}
              type="show"
              id={tv.id}
              key={`tv-a${tv.id}`}
              date={tv.first_air_date}
              resizable={true}
              onCardRendered={() => {}}
            />
          ))}
        </div>

        <div className="w-full flex items-center min-h-[20vh] justify-center">
          <ConfigProvider
            theme={{
              components: {
                Pagination: {
                  itemActiveBg: "#141414",
                  colorText: "#999999",
                  itemInputBg: "#141414",
                  colorBgTextActive: "#E50000",
                  colorPrimary: "#E50000",
                  colorPrimaryHover: "#E50000",
                  colorBgContainer: "#141414",

                  colorTextDisabled: "#999999",
                },
              },
            }}
          >
            <Pagination
              defaultCurrent={props.currentPage}
              total={10000}
              showSizeChanger={false}
              onChange={onPageChange}
              pageSize={20}
            />
          </ConfigProvider>
        </div>
      </section>
    </Fragment>
  );
};

export default RenderGenreTv;
