# Remix of Music website template 26

**Use the image as inspiration**

Velvet Ruins Band Website - Product Specification

1. Product Overview

Velvet Ruins is a modern, brandable website template designed for musicians and bands to showcase their creative work and connect with fans. The platform serves as a comprehensive digital presence, featuring music releases, merchandise, video content, tour information, and band details. Built with Vite, React, Tailwind CSS, and Framer Motion, this template provides smooth animations, responsive design, and easy customization for any artist or band to make it their own. All images are sourced from Pexels to provide realistic, high-quality visuals that can be replaced with actual artist content.

2. Key Features & Requirements

Index Page - Hero Section

Requirements:





Display full-viewport hero section with artist imagery



Fixed positioning that fills entire screen (100vh/100vw)



Overlay latest additions from all categories



Provide quick access to newest content



Create immersive first impression with visual impact

Mock Data:





Hero Image: Full-screen portrait of band performing (Pexels: concert photography, stage lighting)



Latest Additions:





Music: "Silent Thunder" Single - Released Today - Listen Now



Merch: Tour 2024 Black T-Shirt - Just Dropped - Shop Now



Video: "Midnight Echo" Live Session - New Upload - Watch Now



Tour: Brooklyn, NY - March 15 - Tickets Available

Visual Requirements:





Full viewport container with h-screen w-screen fixed top-0 left-0



Background image with object-cover object-center covering entire screen



Dark overlay gradient bg-gradient-to-b from-black/40 via-black/20 to-black/60



Content positioned in bottom third with absolute bottom-0 left-0 right-0



White text with drop shadow text-white drop-shadow-lg



Latest additions grid with grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8 pb-24



Each addition card with bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20



Hover state with scale animation using Framer Motion: whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}



Addition images with aspect-square rounded-md mb-4 object-cover



CTA buttons with bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors



Framer Motion fade-in for content: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}

Global Header & Navigation

Requirements:





Persistent header across all pages



Logo/band name that links to home



Navigation menu for all main sections



Responsive mobile menu



Sticky positioning on scroll

Mock Data:





Band Name: "Velvet Ruins"



Navigation Links: Music, Merch, Videos, Tour, Info

Visual Requirements:





Header container with fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10



Inner wrapper with max-w-7xl mx-auto px-6 py-4 flex items-center justify-between



Logo text with text-2xl font-bold text-white tracking-wider hover:text-gray-300 transition-colors



Desktop navigation with hidden md:flex items-center gap-8



Navigation links with text-white/80 hover:text-white font-medium text-sm uppercase tracking-wide transition-colors



Active link state with text-white border-b-2 border-white pb-1



Mobile menu button with md:hidden text-white text-2xl



Mobile menu overlay with fixed inset-0 bg-black/95 z-40 md:hidden using Framer Motion slide-in



Mobile menu animation: initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.3 }}

Music Page - Grid Gallery

Requirements:





Display all music releases in grid format



Show album artwork, release type, and description



Link to individual music detail pages



Support multiple release types (LP, Album, Single, EP, Mixtape)



Maintain visual hierarchy and browsing ease

Mock Data:





Releases:





"Neon Shadows" - LP · 2024 - "Our latest full-length exploration of urban isolation and digital connection"



"Midnight Echo" - Album · 2023 - "Ten tracks recorded live in a single night, capturing raw emotion"



"Silent Thunder" - Single · 2024 - "A haunting meditation on unspoken words and missed moments"



"Cosmic Drift" - EP · 2022 - "Four-track journey through space and introspection"



"Lost Horizon" - Mixtape · 2023 - "Experimental collection featuring collaborations and remixes"



"Electric Dreams" - Album · 2021 - "Debut album that launched our sonic exploration"

Visual Requirements:





Page container with min-h-screen bg-black pt-24 pb-16 px-6



Page title with text-4xl md:text-5xl font-bold text-white mb-12 max-w-7xl mx-auto



Grid container with max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7



Release cards as links with group block



Album artwork with aspect-square w-full rounded-lg overflow-hidden mb-4



Image hover effect using Framer Motion: whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}



Artwork overlay on hover with absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300



Release type with text-sm font-semibold text-white/60 uppercase tracking-widest mb-2



Release title with text-2xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors



Description with text-white/70 line-clamp-2 text-sm leading-relaxed



Stagger animation for cards: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}

Music Detail Page

Requirements:





Display comprehensive album information



Show album artwork and related imagery



Provide streaming platform links



Include merchandise purchase options



Use sticky text section for easy access to links while browsing images



Indicate future releases vs available releases

Mock Data:





Album: "Neon Shadows"



Type: LP



Release Date: March 1, 2024



Status: Available Now



Streaming Platforms:





Apple Music - https://music.apple.com/...



Spotify - https://spotify.com/...



Bandcamp - https://bandcamp.com/...



SoundCloud - https://soundcloud.com/...



YouTube Music - https://music.youtube.com/...



Merch Options:





Vinyl (Black, Limited Edition) - $29.99



CD (Digipak) - $14.99



Digital Download (WAV/MP3) - $9.99



Vinyl + T-Shirt Bundle - $49.99



Images: Album cover, vinyl close-up, band holding vinyl, alternative artwork, studio session photos

Visual Requirements:





Page container with min-h-screen bg-black pt-24 pb-16 px-6



Two-column layout with max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12



Sticky text section with lg:sticky lg:top-24 lg:self-start space-y-8 order-2 lg:order-1



Album title with text-4xl md:text-5xl font-bold text-white mb-2



Release info with text-white/60 text-lg mb-8 format: "LP · March 1, 2024"



Section headings with text-sm font-semibold text-white/60 uppercase tracking-widest mb-4



Platform links list with space-y-3



Each platform link with flex items-center justify-between bg-white/5 hover:bg-white/10 rounded-lg p-4 border border-white/10 transition-colors group



Platform info div with flex items-center gap-3



Platform logo/icon placeholder with w-8 h-8 text-white



Platform name with text-white font-medium



External link icon with w-5 h-5 text-white/40 group-hover:text-white transition-colors



Merch section similar styling with price display text-white/80 font-semibold text-sm



Image gallery section with space-y-4 order-1 lg:order-2



Gallery images with rounded-lg overflow-hidden and varying aspect ratios



First image (album cover) with aspect-square



Additional images with aspect-video or aspect-[3/4]



Image hover effect: whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}



Fade-in animation for images: initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}

Merch Page - Grid Gallery

Requirements:





Display all merchandise in grid format



Show product images, names, and descriptions



Link to individual merch detail pages



Support various product types (vinyl, CD, apparel, accessories)



Enable quick browsing and discovery

Mock Data:





Products:





"Neon Shadows" Vinyl (Black, Limited Edition) - "180g black vinyl with exclusive poster insert"



"Midnight Echo" CD (Digipak) - "Enhanced packaging with 12-page booklet and bonus track"



Tour 2024 T-Shirt (Black) - "100% cotton tee with tour dates on back"



Band Logo Hoodie (Black/Grey) - "Premium heavyweight hoodie with embroidered logo"



"Cosmic Drift" Limited Edition Poster - "18x24 hand-numbered art print, signed by band"



"Electric Dreams" Cassette (Clear) - "Limited run of 500, includes digital download code"

Visual Requirements:





Same grid structure as Music page: max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7



Product images with aspect-square for consistent grid



Product category badge with inline-block bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-full mb-3



Product title with text-2xl font-bold text-white mb-2



Product description with text-white/70 text-sm leading-relaxed line-clamp-3



Hover state with scale and brightness increase



Price preview (if applicable) with text-white font-semibold text-lg mt-3

Merch Detail Page

Requirements:





Display detailed product information



Show multiple product images



Provide purchase links to external platforms



Display pricing information clearly



Include product specifications and details

Mock Data:





Product: "Neon Shadows" Vinyl (Black, Limited Edition)



Price: $29.99



Purchase Options:





Bandcamp - $29.99 - https://bandcamp.com/...



Official Store - $29.99 - https://store.velvetruins.com/...



Amazon - $29.99 - https://amazon.com/...



Product Info: "180g black vinyl pressed at Optimal Media. Includes exclusive 18x24 poster featuring alternate artwork by Sarah Chen. Limited to 1,000 copies worldwide. Comes with digital download card featuring WAV and MP3 files."



Images: Product flat lay, vinyl close-up, packaging details, poster artwork

Visual Requirements:





Same layout structure as Music Detail page



Sticky section with product info, purchase links, and details



Purchase links with flex items-center justify-between showing platform, price, and link icon



Price displayed prominently with text-xl font-bold text-white



Product info paragraph with text-white/70 leading-relaxed text-sm



Image gallery showing product from multiple angles



Buy button styling with bg-white text-black hover:bg-gray-100

Videos Page - Grid Gallery

Requirements:





Display video thumbnails in grid layout



Show play icon overlay on thumbnails



Display video titles below thumbnails



Link to individual video detail pages



Support various video types (music videos, live sessions, behind-the-scenes)

Mock Data:





Videos:





"Silent Thunder" (Official Music Video) - 3:45



"Midnight Echo" (Live Session at Sunset Studios) - 4:12



"Electric Dreams" (Behind the Scenes) - 6:20



"Neon Shadows" (Lyric Video) - 3:58



"Tour Diary 2023" (Documentary) - 12:45



"Cosmic Drift" (Live at Red Rocks) - 18:30

Visual Requirements:





Grid layout with grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6



Video thumbnail container with aspect-video rounded-lg overflow-hidden relative group



Thumbnail image with object-cover w-full h-full



Dark overlay with absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors



Play icon with absolute inset-0 flex items-center justify-center



Play button circle with w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform



Play triangle icon with w-6 h-6 text-white ml-1



Video duration badge with absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded



Video title with text-lg font-semibold text-white mt-3



Video type label with text-white/60 text-sm uppercase tracking-wide

Videos Detail Page

Requirements:





Display video player with controls



Show video information and description



Provide related content links



Include share functionality



Use modal/overlay for video playback

Mock Data:





Video: "Silent Thunder" (Official Music Video)



Duration: 3:45



Release Date: January 15, 2024



Director: Alex Morgan



Description: "Our latest single explores the weight of unspoken emotions. Filmed on location in Iceland, this video captures the raw beauty of isolation and connection. Starring local dancers and featuring practical effects, we pushed our visual storytelling to new heights."



Related Content:





Listen on Spotify



Download on Apple Music



Buy "Neon Shadows" Vinyl



View Tour Dates

Visual Requirements:





Video player container with aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden bg-black



Player overlay with fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 using Framer Motion



Player animation: initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}



Close button with absolute top-6 right-6 text-white text-3xl hover:text-gray-400 cursor-pointer



Video details section below player with max-w-4xl mx-auto mt-8 px-6



Title with text-3xl font-bold text-white mb-2



Metadata with flex items-center gap-4 text-white/60 text-sm mb-6



Description with text-white/80 leading-relaxed mb-8



Related content grid with grid grid-cols-2 md:grid-cols-4 gap-4

Tour Page - Date List

Requirements:





Display upcoming tour dates chronologically



Show date, location, venue, and ticket links



Highlight sold-out shows



Differentiate past and future shows



Enable quick ticket purchasing

Mock Data:





Tour Dates:





March 15, 2024 - Brooklyn, NY - "Spring Awakening Tour at Brooklyn Steel" - Tickets Available



March 22, 2024 - Los Angeles, CA - "West Coast Sessions at The Wiltern" - Tickets Available



April 5, 2024 - Chicago, IL - "Midwest Thunder at Metro Chicago" - Tickets Available



April 12, 2024 - Austin, TX - "Southern Nights at Mohawk Austin" - Sold Out



April 20, 2024 - Seattle, WA - "Pacific Northwest Run at The Showbox" - Presale



May 3, 2024 - Portland, OR - "Rose City Show at Crystal Ballroom" - Tickets Available

Visual Requirements:





Page container with min-h-screen bg-black pt-24 pb-16 px-6



Tour list with max-w-4xl mx-auto space-y-4



Each tour date as flex flex-col md:flex-row md:items-center md:justify-between bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors group



Date section with flex-shrink-0 mb-4 md:mb-0 md:mr-8



Date display with text-3xl font-bold text-white mb-1



Month with text-white/60 text-sm uppercase tracking-wide



Event details section with flex-grow



Location with text-white/60 text-sm uppercase tracking-widest mb-2



Event name with text-xl font-semibold text-white mb-1



Venue with text-white/80 text-sm



Ticket button with flex-shrink-0 mt-4 md:mt-0 flex items-center gap-2



Available tickets with bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100



Sold out badge with bg-red-500/20 text-red-400 border border-red-400/30 px-6 py-3 rounded-full font-semibold



Presale badge with bg-yellow-500/20 text-yellow-400 border border-yellow-400/30 px-6 py-3 rounded-full font-semibold



External link icon with w-5 h-5



Past shows with reduced opacity opacity-50 and no hover state

Tour Detail Page

Requirements:





Display event-specific information



Show venue details and location



Provide ticket purchasing options



Include event visuals and promotional content



Show similar upcoming events

Mock Data:





Event: "Spring Awakening Tour"



Date: March 15, 2024



Venue: Brooklyn Steel



Location: Brooklyn, NY



Doors: 7:00 PM



Show: 8:30 PM



Ticket Info:





General Admission - $35



VIP Experience - $75 (includes early entry, merch, meet & greet)



Event Description: "Join us for the opening night of our 2024 Spring Awakening Tour. Performing songs from 'Neon Shadows' and fan favorites from our catalog. Special guest opener: Lunar Phase."



Attend Links:





Ticketmaster - $35-$75



Venue Box Office - $35-$75



VIP Packages - $75

Visual Requirements:





Similar layout to Music/Video detail pages



Sticky section with event info, attend options, and details



Event poster/promotional image in gallery section



Large date display with text-6xl font-bold text-white



Venue and location with prominent typography



Attend buttons styled as primary CTAs



Event details with time, doors, age restrictions



Map embed placeholder or location information

Info Page - About Section

Requirements:





Display band biography and background



Show band photos and press images



Provide contact information



Include press kit download



Feature social media links

Mock Data:





Band Bio: "Velvet Ruins emerged from Brooklyn's underground music scene in 2019, blending post-punk aesthetics with electronic experimentation. Led by vocalist Maya Chen and guitarist David Torres, the band has evolved from DIY basement shows to international tours. Their sound—characterized by atmospheric guitars, driving rhythms, and introspective lyrics—has earned critical acclaim and a devoted following. With three studio albums and countless live performances, Velvet Ruins continues to push boundaries while staying true to their raw, emotional core."



Members:





Maya Chen - Vocals, Synths



David Torres - Guitar, Production



Jordan Lee - Bass



Sam Rivera - Drums



Contact: management@velvetruins.com



Press: press@velvetruins.com



Social Media: Instagram, Twitter, Facebook, TikTok

Visual Requirements:





Two-column layout with max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start



Text section on left with space-y-8



Page title with text-5xl font-bold text-white mb-8



Bio paragraphs with text-white/80 leading-relaxed text-lg



Members list with space-y-2



Each member with text-white font-medium



Role with text-white/60 text-sm



Contact section with bg-white/5 border border-white/10 rounded-lg p-6



Contact links with text-white hover:text-gray-300 transition-colors



Social media icons grid with grid grid-cols-4 gap-4



Image section on right with sticky top-24



Band photo with rounded-lg overflow-hidden aspect-[3/4]



Additional images below with grid grid-cols-2 gap-4 mt-4



Press kit download button with w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-100

3. Design System

Color Palette

Primary Colors:





Pure Black: #000000 (bg-black, text-black)



Pure White: #FFFFFF (bg-white, text-white)

Accent Colors:





Soft White: rgba(255, 255, 255, 0.8) (text-white/80)



Muted White: rgba(255, 255, 255, 0.6) (text-white/60)



Faded White: rgba(255, 255, 255, 0.4) (text-white/40)



Subtle White: rgba(255, 255, 255, 0.05) (bg-white/5)



Ghost White: rgba(255, 255, 255, 0.1) (bg-white/10)

Status Colors:





Available: #FFFFFF (text-white, bg-white)



Sold Out: #EF4444 (text-red-400, bg-red-500/20)



Presale: #FBBF24 (text-yellow-400, bg-yellow-500/20)

Overlay Colors:





Dark Overlay: rgba(0, 0, 0, 0.8) (bg-black/80)



Medium Overlay: rgba(0, 0, 0, 0.95) (bg-black/95)



Subtle Overlay: rgba(0, 0, 0, 0.2) (bg-black/20)

Typography

Font Families:





Primary: System Font Stack (font-sans)



Display: System Font Stack (font-sans)

Font Sizes:





Extra Small: 0.75rem (text-xs)



Small: 0.875rem (text-sm)



Base: 1rem (text-base)



Large: 1.125rem (text-lg)



Extra Large: 1.25rem (text-xl)



2XL: 1.5rem (text-2xl)



3XL: 1.875rem (text-3xl)



4XL: 2.25rem (text-4xl)



5XL: 3rem (text-5xl)



6XL: 3.75rem (text-6xl)

Font Weights:





Regular: 400 (font-normal)



Medium: 500 (font-medium)



Semibold: 600 (font-semibold)



Bold: 700 (font-bold)

Line Heights:





Tight: 1.25 (leading-tight)



Normal: 1.5 (leading-normal)



Relaxed: 1.75 (leading-relaxed)

Letter Spacing:





Normal: 0 (tracking-normal)



Wide: 0.025em (tracking-wide)



Wider: 0.05em (tracking-wider)



Widest: 0.1em (tracking-widest)

Core Components

Cards:





Content Card: bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors



Image Card: rounded-lg overflow-hidden with aspect ratio classes



Interactive Card: Content card with Framer Motion scale on hover



Minimal Card: Transparent with subtle border, no background

Buttons:





Primary Button: bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors



Secondary Button: bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white/20 transition-colors



Icon Button: w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors



Link Button: text-white hover:text-gray-300 transition-colors inline-flex items-center gap-2

Links:





Navigation Link: text-white/80 hover:text-white font-medium text-sm uppercase tracking-wide transition-colors



Content Link: text-white hover:text-gray-300 transition-colors



External Link: Includes external link icon with w-5 h-5 text-white/40 group-hover:text-white



Platform Link: Full card with icon, label, and arrow

Lists:





Grid List: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7



Stacked List: space-y-4 for vertical spacing



Platform List: space-y-3 with interactive cards



Feature List: space-y-2 with minimal styling

Images:





Hero Image: object-cover object-center w-full h-full



Card Image: aspect-square rounded-lg overflow-hidden or aspect-video rounded-lg overflow-hidden



Gallery Image: Various aspect ratios (aspect-[3/4], aspect-video) with rounded corners



Thumbnail Image: aspect-square object-cover

Framer Motion Animations

Page Transitions:





Fade In: initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}



Slide Up: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}



Stagger Children: Apply delay based on index transition={{ duration: 0.5, delay: index * 0.1 }}

Hover Effects:





Scale Up: whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}



Subtle Scale: whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}



Background Change: whileHover={{ backgroundColor: "rgba(255,255,255,0.15)" }}

Modal/Overlay:





Overlay Fade: initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}



Slide In: initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.3 }}

Loading States:





Skeleton Pulse: animate-pulse utility class



Spinner Rotation: animate-spin utility class

Responsive Design Principles

Layout Grid:





Desktop (1024px+): 3-column grid for galleries, 2-column for detail pages



Tablet (768px-1023px): 2-column grid for galleries, stacked for detail pages



Mobile (<768px): Single column for all layouts

Component Behavior:





Navigation: Desktop horizontal menu becomes mobile hamburger



Grid galleries: 3 columns → 2 columns → 1 column



Detail pages: Side-by-side → stacked



Sticky elements: Active on desktop, static on mobile



Images: Maintain aspect ratios, scale proportionally

Viewport Adaptations:





Desktop (1024px+): Full featured with sticky sections, multi-column grids, hover effects



Tablet (768px-1023px): Reduced columns, simplified hover states, touch-friendly targets



Mobile (<768px): Single column, larger touch targets, simplified navigation, essential information prioritized

Touch Interactions:





Minimum touch target: 44x44px for buttons and links



Hover states translated to active states on touch



Swipe gestures for image galleries on mobile



Pull-to-refresh not implemented (static content)

Image Optimization:





Use Pexels API for high-quality images



Implement lazy loading for images below fold



Use appropriate image sizes for viewport



Apply object-cover for consistent aspect ratios

Performance Considerations:





Lazy load images using loading="lazy"



Use Framer Motion's AnimatePresence for enter/exit animations



Minimize JavaScript bundle with code splitting



Optimize Tailwind CSS with PurgeCSS in production



Avoid custom npm packages beyond tech stack

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/baf46d7e-d80e-49e0-81bd-3bb639f97a5a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
