import { LastfmChart } from "../components/LastfmChart";

export default function Top100Page() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Top 100 Global (Last.fm)
        </h1>
        <LastfmChart />
      </div>
    </div>
  );
}
