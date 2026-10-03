import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { videos } from "@/data/mockData";

const VideosPage = () => (
  <div className="min-h-screen bg-background pt-24 pb-16 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-foreground mb-12">
        Videos
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <motion.div key={video.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
            <Link to={`/videos/${video.id}`} className="group block">
              <div className="aspect-video rounded-lg overflow-hidden relative">
                <img src={video.image} alt={video.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm border-2 border-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 bg-background/80 text-foreground text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mt-3">{video.title}</h3>
              <p className="text-foreground/60 text-sm uppercase tracking-wide">{video.type}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default VideosPage;
