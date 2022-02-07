import { ITrack, ITracks } from "../core/track/entities";
import SongItem from "./SongItem";
import Title from "./Title";

interface SectionProps {
  title: string;
  more: string;
  tracks: { tracks: ITracks };
}
const Section: React.FC<SectionProps> = ({ title, more, tracks }) => {
  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid md:grid-cols-6 grid-cols-2 md:gap-x-6 gap-x-3">
        {tracks.tracks.track.map((item: ITrack) => (
          <SongItem item={item} key={item.name} />
        ))}
      </div>
    </section>
  );
};

export default Section;
