import { isEmpty } from "lodash";
import { useEffect } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { IArtists, IArtist } from "../core/artist/entities";
import { getTopArtist } from "../store/actions/artist/action";
import ArtistItem from "./ArtistItem";
import Loading from "./Loading";
import Title from "./Title";

interface IArtistSectionProps {
  title: string;
  more: string;
  artists: IArtists;
  getTopArtist: () => void;
}

const ArtistSection: React.FC<IArtistSectionProps> = ({
  title,
  more,
  artists,
  getTopArtist,
}) => {
  useEffect(() => {
    getTopArtist();
  }, [getTopArtist]);

  if (isEmpty(artists.artist)) {
    return (
      <div className="w-full my-20 flex justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid md:grid-cols-6 grid-cols-2 md:gap-6 gap-3">
        {artists.artist.map((artist: IArtist) => (
          <ArtistItem key={artist.name} item={artist} />
        ))}
      </div>
    </section>
  );
};
const mapStateToProps = (state: any) => ({
  artists: state.artist.artists,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  getTopArtist: () => dispatch(getTopArtist()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSection);
