import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import { videos } from "@/data/mockData";

const VideoDetailPage = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);

  if (!video) {
    return (
      <div className="min-h-screen bg-background pt-24 px-6 flex items-center justify-center">
        <p className="text-foreground/60">Video not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/videos" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Videos
        </Link>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="aspect-video w-full rounded-lg overflow-hidden bg-secondary relative mb-8">
          <img src={video.image} alt={video.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-foreground/20 backdrop-blur-sm border-2 border-foreground flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-foreground ml-1" fill="currentColor" />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h1 className="text-3xl font-bold text-foreground mb-2">{video.title}</h1>
          <div className="flex items-center gap-4 text-foreground/60 text-sm mb-6">
            <span>{video.type}</span>
            <span>{video.duration}</span>
            {video.date && <span>{video.date}</span>}
            {video.director && <span>Dir. {video.director}</span>}
          </div>
          {video.description && (
            <p className="text-foreground/80 leading-relaxed">{video.description}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default VideoDetailPage;
