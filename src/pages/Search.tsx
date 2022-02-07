import { useEffect, useRef, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { isEmpty } from "lodash";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";

import { getSearchTrack } from "../store/actions/track/action";
import { ITrack } from "../core/track/entities";
import { categories } from "../data/categories";
import { favoriteCategories } from "../data/favoriteCategories";

import Title from "../components/Title";
import { Icon } from "../components/Icons";
import WideCategory from "../components/WideCategoryItem";
import Category from "../components/CategoryItem";
import SongItem from "../components/SongItem";
import Loading from "../components/Loading";

interface ISearchProps {
  tracks: { searchValue: string; searchTracks: ITrack[] };
  getSearchTrack: (value: string) => void;
}

const Search: React.FC<ISearchProps> = ({ getSearchTrack, tracks }) => {
  const favoritesRef = useRef<any>();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (favoritesRef.current) {
      const scrollHandle = () => {
        const isEnd =
          favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth ===
          favoritesRef.current.scrollWidth;
        const isBegin = favoritesRef.current.scrollLeft === 0;
        setPrev(!isBegin);
        setNext(!isEnd);
      };

      scrollHandle();
      favoritesRef.current.addEventListener("scroll", scrollHandle);

      return () => {
        favoritesRef?.current?.removeEventListener("scroll", scrollHandle);
      };
    }
  }, [favoritesRef]);

  const slideFavoritesNext = () => {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300;
  };
  const slideFavoritesPrev = () => {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300;
  };

  useEffect(() => {
    if (tracks.searchValue) {
      getSearchTrack(tracks.searchValue);
    }
  }, [tracks.searchValue]);

  if (isEmpty(tracks.searchTracks) && tracks.searchValue.length > 0) {
    return (
      <div className="w-full my-20 flex justify-center">
        <Loading />
      </div>
    );
  } else if (!isEmpty(tracks.searchTracks) && tracks.searchValue.length > 0) {
    return (
      <section>
        <Title title="Top Results" />
        <div className="grid md:grid-cols-8 grid-cols-2 md:gap-6 gap-3">
          {tracks.searchTracks.map((track: ITrack, index: number) => (
            <SongItem key={index} item={track} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <main>
      <section className="mb-8">
        <Title title="Favorites" />
        <div className="relative">
          {prev && (
            <button
              className="w-12 absolute -left-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 rounded-full bg-white text-black flex items-center justify-center"
              onClick={slideFavoritesPrev}
            >
              <Icon name="prev" size={24} />
            </button>
          )}
          {next && (
            <button
              className="w-12 absolute -right-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 rounded-full bg-white text-black flex items-center justify-center"
              onClick={slideFavoritesNext}
            >
              <Icon name="next" size={24} />
            </button>
          )}
          <ScrollContainer
            innerRef={favoritesRef}
            className="flex scrollable overflow-x gap-x-6"
          >
            {favoriteCategories.map((category: any, index: number) => (
              <WideCategory key={index} category={category} />
            ))}
          </ScrollContainer>
        </div>
      </section>

      <section>
        <Title title="Browse All" />
        <div className="grid md:grid-cols-8 grid-cols-2 md:gap-6 gap-3">
          {categories.map((category: any, index: number) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = (state: any) => ({
  tracks: state.track,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  getSearchTrack: (search: string) => dispatch(getSearchTrack(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
