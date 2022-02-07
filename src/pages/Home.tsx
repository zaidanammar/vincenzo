import { useEffect } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { isEmpty } from "lodash";

import { getTopTrack } from "../store/actions/track/action";
import Loading from "../components/Loading";
import Section from "../components/Section";
import { ITracks } from "../core/track/entities";
import ArtistSection from "../components/ArtistSection";

interface IHomeProps {
  tracks: { tracks: ITracks };
  getTopTrack: () => void;
}

interface IStateProps {
  track: { tracks: ITracks };
}

interface IDispatchProps {
  getTopTrack: () => void;
}

const Home: React.FC<IHomeProps> = ({ tracks, getTopTrack }) => {
  useEffect(() => {
    getTopTrack();
  }, [getTopTrack]);

  if (isEmpty(tracks.tracks.track)) {
    return (
      <div className="w-full my-20 flex justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="grid gap-y-8">
      <ArtistSection title="Top Artists" more="/top-artists" />
      <Section title="Top Songs" more="/top-songs" tracks={tracks} />
    </div>
  );
};

const mapStateToProps = (state: IStateProps) => ({
  tracks: state.track,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): IDispatchProps => ({
  getTopTrack: () => dispatch(getTopTrack()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
