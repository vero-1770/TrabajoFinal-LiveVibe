import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { releases } from "@/data/mockData";

const MusicDetailPage = () => {
  const { id } = useParams();
  const release = releases.find((r) => r.id === id);

  if (!release) {
    return (
      <div className="min-h-screen bg-background pt-24 px-6 flex items-center justify-center">
        <p className="text-foreground/60">Release not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/music" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Music
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sticky info */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-8 order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{release.title}</h1>
              <p className="text-foreground/60 text-lg mb-8">
                {release.type} · {release.date}
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">{release.description}</p>
            </motion.div>

            {release.platforms && (
              <div>
                <h3 className="label-uppercase mb-4">Listen</h3>
                <div className="space-y-3">
                  {release.platforms.map((p) => (
                    <a key={p.name} href={p.url} className="platform-link group" target="_blank" rel="noopener noreferrer">
                      <span className="text-foreground font-medium">{p.name}</span>
                      <ExternalLink className="w-5 h-5 text-foreground/40 group-hover:text-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {release.merchOptions && (
              <div>
                <h3 className="label-uppercase mb-4">Merch</h3>
                <div className="space-y-3">
                  {release.merchOptions.map((m) => (
                    <div key={m.name} className="platform-link cursor-pointer">
                      <span className="text-foreground font-medium">{m.name}</span>
                      <span className="text-foreground/80 font-semibold text-sm">{m.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Image gallery */}
          <div className="space-y-4 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-lg overflow-hidden"
            >
              <img src={release.image} alt={release.title} className="w-full aspect-square object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicDetailPage;
