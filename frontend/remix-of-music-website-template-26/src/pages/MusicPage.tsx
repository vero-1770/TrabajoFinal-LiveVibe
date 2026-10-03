import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { releases } from "@/data/mockData";

const MusicPage = () => (
  <div className="min-h-screen bg-background pt-24 pb-16 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-foreground mb-12"
      >
        Music
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
        {releases.map((release, index) => (
          <motion.div
            key={release.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/music/${release.id}`} className="group block">
              <div className="aspect-square w-full rounded-lg overflow-hidden mb-4 relative">
                <motion.img
                  src={release.image}
                  alt={release.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
              </div>
              <p className="label-uppercase text-xs mb-2">
                {release.type} · {release.year}
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-muted-foreground transition-colors">
                {release.title}
              </h2>
              <p className="text-foreground/70 line-clamp-2 text-sm leading-relaxed">
                {release.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default MusicPage;
