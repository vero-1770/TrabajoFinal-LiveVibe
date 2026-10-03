import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { bandInfo } from "@/data/mockData";
import heroBg from "@/assets/livevibe-hero-bg.svg";

const InfoPage = () => (
  <div className="min-h-screen bg-background pt-24 pb-16 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Text */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
        <h1 className="text-5xl font-bold text-foreground">Info</h1>
        <p className="text-foreground/80 leading-relaxed text-lg">{bandInfo.bio}</p>

        <div>
          <h3 className="label-uppercase mb-4">Members</h3>
          <div className="space-y-2">
            {bandInfo.members.map((m) => (
              <div key={m.name}>
                <span className="text-foreground font-medium">{m.name}</span>
                <span className="text-foreground/60 text-sm ml-2">— {m.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 space-y-4">
          <h3 className="label-uppercase">Contact</h3>
          <div className="space-y-2">
            <a href={`mailto:${bandInfo.contact.management}`} className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors">
              <Mail className="w-4 h-4" /> {bandInfo.contact.management}
            </a>
            <a href={`mailto:${bandInfo.contact.press}`} className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors">
              <Mail className="w-4 h-4" /> {bandInfo.contact.press}
            </a>
          </div>
        </div>

        <div>
          <h3 className="label-uppercase mb-4">Social</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bandInfo.socials.map((s) => (
              <a key={s.name} href={s.url} className="glass-card p-4 text-center text-foreground font-medium hover:bg-[hsl(var(--glass-hover))] transition-colors">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Photo */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="lg:sticky lg:top-24">
        <div className="rounded-lg overflow-hidden aspect-[3/4]">
          <img src={heroBg} alt="Cassidy Lane artist photo" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </div>
  </div>
);

export default InfoPage;
