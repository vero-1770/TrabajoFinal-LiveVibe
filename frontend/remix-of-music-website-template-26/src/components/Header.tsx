import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Artistas", path: "/music" },
  { label: "Merch", path: "/merch" },
  /*  { label: "Videos", path: "/videos" }, */
  { label: "Eventos", path: "/tour" },
  /*  { label: "Info", path: "/info" }, */
  { label: "Comunidad", path: "/comunidad" },
];

const PillLabel = ({
  children,
  href,
  onClick,
  accent = true,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  accent?: boolean;
}) => {
  const classes =
    "inline-flex items-center gap-2 border border-foreground/15 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.18em] font-medium text-foreground/50 hover:text-foreground/80 hover:border-foreground/30 transition-all duration-200 cursor-pointer";

  const inner = (
    <>
      {accent && <span className="w-1.5 h-1.5 bg-foreground/40 rounded-sm" />}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {inner}
    </button>
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${!isHome ? "bg-background/80 backdrop-blur-sm" : ""}`}
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          {/* Left cluster */}
          <div className="flex items-center gap-2">
            <PillLabel onClick={() => setMobileOpen(true)}>Menu</PillLabel>
            <div className="hidden lg:flex items-center gap-2">
              <PillLabel href="https://instagram.com/livevibe">
                Instagram: @livevibe
              </PillLabel>
            </div>
          </div>

          {/* Center — Logo */}
          <Link
            to="/"
            className="font-display text-base md:text-lg text-foreground/70 tracking-[0.2em] hover:text-foreground transition-colors"
          >
            LiveVibe
          </Link>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <PillLabel href="mailto:booking@livevibe.com">
                Contacto: contacto@livevibe.com
              </PillLabel>
            </div>
            <PillLabel href="https://twitter.com/livevibe" accent={false}>
              <span className="w-1.5 h-1.5 bg-foreground/40 rounded-sm" />
              TW
            </PillLabel>
          </div>
        </div>
      </header>

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-[60] flex flex-col items-center justify-center"
          >
            <div className="absolute top-4 right-4 md:right-8">
              <PillLabel onClick={() => setMobileOpen(false)}>Close</PillLabel>
            </div>
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => {
                const active = location.pathname.startsWith(link.path);
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`font-display text-4xl md:text-6xl tracking-[0.1em] transition-colors ${
                        active
                          ? "text-foreground"
                          : "text-foreground/40 hover:text-foreground/80"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <div className="absolute bottom-10 flex gap-6">
              {["Spotify", "YouTube", "Instagram", "SoundCloud"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="label-uppercase text-[10px] text-foreground/30 hover:text-foreground/60 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 bg-foreground/30 rounded-sm" />
                  {s}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
