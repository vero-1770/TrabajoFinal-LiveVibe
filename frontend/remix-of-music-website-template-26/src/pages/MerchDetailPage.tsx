import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { merchItems } from "@/data/mockData";

const MerchDetailPage = () => {
  const { id } = useParams();
  const item = merchItems.find((m) => m.id === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-background pt-24 px-6 flex items-center justify-center">
        <p className="text-foreground/60">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/merch" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Merch
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start space-y-8 order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block glass-card text-foreground/80 text-xs font-semibold px-3 py-1 rounded-full mb-4">{item.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{item.name}</h1>
              <p className="text-2xl font-bold text-foreground mb-6">{item.price}</p>
              <p className="text-foreground/70 leading-relaxed mb-8">{item.details || item.description}</p>
            </motion.div>

            {item.purchaseLinks && (
              <div>
                <h3 className="label-uppercase mb-4">Buy</h3>
                <div className="space-y-3">
                  {item.purchaseLinks.map((link) => (
                    <a key={link.platform} href={link.url} className="platform-link group" target="_blank" rel="noopener noreferrer">
                      <div>
                        <span className="text-foreground font-medium">{link.platform}</span>
                        <span className="text-foreground/60 text-sm ml-2">{link.price}</span>
                      </div>
                      <ExternalLink className="w-5 h-5 text-foreground/40 group-hover:text-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            <a href="#" className="btn-primary inline-block text-center w-full">Buy Now</a>
          </div>

          <div className="space-y-4 order-1 lg:order-2">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="rounded-lg overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full aspect-square object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchDetailPage;
