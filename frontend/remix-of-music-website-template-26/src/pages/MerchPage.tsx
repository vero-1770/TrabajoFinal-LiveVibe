import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { merchItems } from "@/data/mockData";

const MerchPage = () => (
  <div className="min-h-screen bg-background pt-24 pb-16 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-foreground mb-12">
        Merch
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
        {merchItems.map((item, index) => (
          <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
            <Link to={`/merch/${item.id}`} className="group block">
              <div className="aspect-square w-full rounded-lg overflow-hidden mb-4 relative">
                <motion.img src={item.image} alt={item.name} className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
              </div>
              <span className="inline-block glass-card text-foreground/80 text-xs font-semibold px-3 py-1 rounded-full mb-3">{item.category}</span>
              <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-muted-foreground transition-colors">{item.name}</h2>
              <p className="text-foreground/70 text-sm leading-relaxed line-clamp-3 mb-3">{item.description}</p>
              <p className="text-foreground font-semibold text-lg">{item.price}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default MerchPage;
