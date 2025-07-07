import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Image, Video, Pen } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  type: string;
  description: string;
  tools: string[];
  image?: string;
}

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters = [
    { id: "all", label: "All Work", icon: Image },
    { id: "posters", label: "Posters", icon: Pen },
    { id: "thumbnails", label: "Thumbnails", icon: Image },
    { id: "videos", label: "Videos", icon: Video }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Social Media Campaign Poster",
      category: "posters",
      type: "poster",
      description: "Designed for donations during festivals for NGO",
      tools: ["Canva", "Adobe Photoshop"],
      image: "/22.png"
    },
    {
      id: 2,
      title: "YouTube Thumbnail Design",
      category: "thumbnails",
      type: "thumbnail",
      description: "Educational content thumbnail",
      tools: ["Canva", "Adobe Photoshop"],
      image: "/1.png"
    },
    {
      id: 3,
      title: "Bhajan Video Production",
      category: "videos",
      type: "video",
      description: "Devotional music video with editing",
      tools: ["Adobe Premiere Pro", "Adobe Audition"],
      image: "/5 (2).jpg"
    },
    {
      id: 4,
      title: "Social Media Campaign Poster",
      category: "posters",
      type: "poster",
      description: "Designed for donations during festivals for NGO",
      tools: ["Canva", "Adobe Illustrator"],
      image: "/44.png"
    },
    {
      id: 5,
      title: "YouTube Thumbnail Design",
      category: "thumbnails",
      type: "thumbnail",
      description: "Educational content thumbnail",
      tools: ["Canva", "Figma"],
      image: "/4.png"
    },
    {
      id: 6,
      title: "Bhajan Video Production",
      category: "videos",
      type: "video",
      description: "Devotional music video with editing",
      tools: ["Adobe Premiere Pro", "After Effects"],
      image: "/6 (2).jpg"
    }
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const getItemIcon = (type: string) => {
    switch (type) {
      case "poster":
        return Pen;
      case "thumbnail":
        return Image;
      case "video":
        return Video;
      default:
        return Image;
    }
  };

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Creative Gallery
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of creative works including poster designs, video content, and digital art
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "gradient" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="flex items-center gap-2"
              >
                <IconComponent className="w-4 h-4" />
                {filter.label}
              </Button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const ItemIcon = getItemIcon(item.type);
            return (
              <Card
                key={item.id}
                className="group overflow-hidden shadow-elegant hover:shadow-primary transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-primary/10 relative overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-primary flex items-center justify-center shadow-primary">
                          <ItemIcon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <p className="text-sm font-medium text-primary">
                          {item.type === "poster" && "Poster Design"}
                          {item.type === "thumbnail" && "Thumbnail"}
                          {item.type === "video" && "Video Content"}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" onClick={() => setSelectedItem(item)}>
                      View Details
                    </Button>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {item.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Modal Popup */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
              {selectedItem.image && (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-auto rounded mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{selectedItem.title}</h3>
              <p className="text-gray-700 mb-3">{selectedItem.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedItem.tools.map((tool, i) => (
                  <Badge key={i} variant="outline" className="text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating on creative projects?
          </p>
          <Button variant="accent" size="lg">
            Let's Create Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
