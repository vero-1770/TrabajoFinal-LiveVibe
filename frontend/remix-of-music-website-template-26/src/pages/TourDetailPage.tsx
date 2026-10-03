import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Clock, MapPin } from "lucide-react";
import { tourDates } from "@/data/mockData";

const TourDetailPage = () => {
  const { id } = useParams();
  const event = tourDates.find((t) => t.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-background pt-24 px-6 flex items-center justify-center">
        <p className="text-foreground/60">Event not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/tour" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Tour
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <div>
            <p className="text-6xl font-bold text-foreground mb-2">{event.day}</p>
            <p className="text-foreground/60 text-2xl uppercase tracking-wide">{event.month} 2024</p>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">{event.eventName}</h1>
            <div className="flex flex-wrap items-center gap-6 text-foreground/70">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {event.venue} — {event.city}, {event.state}</span>
              {event.doors && <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Doors {event.doors}</span>}
              {event.showTime && <span>Show {event.showTime}</span>}
            </div>
          </div>

          {event.description && (
            <p className="text-foreground/80 leading-relaxed text-lg">{event.description}</p>
          )}

          {event.prices && (
            <div>
              <h3 className="label-uppercase mb-4">Tickets</h3>
              <div className="space-y-3">
                {event.prices.map((p) => (
                  <div key={p.tier} className="platform-link">
                    <span className="text-foreground font-medium">{p.tier}</span>
                    <span className="text-foreground font-bold">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {event.status === "available" && event.ticketUrl && (
            <a href={event.ticketUrl} className="btn-primary inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer">
              Get Tickets <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {event.status === "sold-out" && <span className="status-sold-out inline-block">Sold Out</span>}
          {event.status === "presale" && <span className="status-presale inline-block">Presale Coming Soon</span>}
        </motion.div>
      </div>
    </div>
  );
};

export default TourDetailPage;
