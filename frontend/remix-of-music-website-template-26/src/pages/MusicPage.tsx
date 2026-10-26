import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { releases } from "@/data/mockData";
import DeezerArtistList from "@/components/DeezerArtistList";

const artistasDeezer = [
  "Soda Stereo",
  "Divididos",
  "Los Fabulosos Cadillacs",
  "Charly García",
  "Gustavo Cerati",
  "Babasónicos",
];

const MusicPage = () => (
  <div className="min-h-screen bg-background pt-24 pb-16 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold text-foreground mb-8">
          Artistas
        </h2>
        <DeezerArtistList nombres={artistasDeezer} />
      </motion.section>
    </div>
  </div>
);

export default MusicPage;