// EDIT THIS FILE TO ADD PHOTOS OR VIDEOS. See README.md for the exact steps.
export type Photo = { src: string; alt: string; tags: string[] };
export type Video = { title: string; thumbnail: string; url: string };

export const photos: Photo[] = [
  { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=85", alt: "Colourful plated food", tags: ["F&B", "Lifestyle"] },
  { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85", alt: "Modern interior", tags: ["Interior", "Corporate"] },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85", alt: "Portrait", tags: ["People", "Fashion"] },
  { src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=85", alt: "Minimal home interior", tags: ["Interior", "Lifestyle"] },
  { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85", alt: "Watch product", tags: ["Product", "Fashion"] },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85", alt: "Mountain landscape", tags: ["Nature", "Travel"] },
  { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85", alt: "Fashion storefront", tags: ["Fashion", "Corporate"] },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85", alt: "Wedding event", tags: ["Events", "People"] },
  { src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85", alt: "Field at sunrise", tags: ["Nature", "Travel"] },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85", alt: "Restaurant interior", tags: ["F&B", "Interior"] },
  { src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85", alt: "Editorial fashion", tags: ["Fashion", "People"] },
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85", alt: "Coffee preparation", tags: ["F&B", "Lifestyle", "Product"] },
  { src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85", alt: "House exterior", tags: ["Interior", "Corporate"] },
  { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85", alt: "Traveller in landscape", tags: ["Travel", "Lifestyle", "Nature"] },
  { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=85", alt: "Team gathering", tags: ["Corporate", "People", "Events"] },
  { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85", alt: "Product checkout", tags: ["Product", "Corporate"] },
];

export const videos: Video[] = [
  { title: "The Gathering", thumbnail: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1800&q=85", url: "https://vimeo.com/76979871" },
  { title: "Across the Island", thumbnail: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1800&q=85", url: "https://vimeo.com/22439234" },
  { title: "Night Studies", thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=85", url: "https://vimeo.com/146022717" },
];
