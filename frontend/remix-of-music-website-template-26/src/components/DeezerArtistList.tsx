import DeezerArtist from "./DeezerArtist";

interface Props {
  nombres: string[];
}

const DeezerArtistList = ({ nombres }: Props) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {nombres.map((nombre) => (
        <DeezerArtist key={nombre} nombre={nombre} />
      ))}
    </div>
  );
};

export default DeezerArtistList;