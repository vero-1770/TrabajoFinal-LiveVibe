import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { tourDates } from "@/data/mockData";

const TourPage = () => (
  <div className="min-h-screen bg-background pt-24 pb-16 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-foreground mb-12">
        Tour
      </motion.h1>
      <div className="space-y-4">
        {tourDates.map((date, index) => (
          <motion.div
            key={date.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              to={`/tour/${date.id}`}
              className="glass-card p-6 flex flex-col md:flex-row md:items-center md:justify-between hover:bg-[hsl(var(--glass-hover))] transition-colors group block"
            >
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                <p className="text-3xl font-bold text-foreground">{date.day}</p>
                <p className="text-foreground/60 text-sm uppercase tracking-wide">{date.month}</p>
              </div>
              <div className="flex-grow">
                <p className="text-foreground/60 text-sm uppercase tracking-widest mb-1">
                  {date.city}, {date.state}
                </p>
                <p className="text-xl font-semibold text-foreground mb-1">{date.eventName}</p>
                <p className="text-foreground/80 text-sm">{date.venue}</p>
              </div>
              <div className="flex-shrink-0 mt-4 md:mt-0">
                {date.status === "available" && (
                  <span className="status-available inline-flex items-center gap-2 text-sm">
                    Tickets <ExternalLink className="w-4 h-4" />
                  </span>
                )}
                {date.status === "sold-out" && (
                  <span className="status-sold-out text-sm">Sold Out</span>
                )}
                {date.status === "presale" && (
                  <span className="status-presale text-sm">Presale</span>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default TourPage;
