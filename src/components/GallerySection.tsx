
import { useState } from 'react';
import { useScrollReveal } from '../utils/animationUtils';
import { Camera, Film, X } from 'lucide-react';

const GallerySection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.1);
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  
  // Sample gallery items (in a real app these would come from an API or CMS)
  const photos = [
    { id: 1, src: "https://placehold.co/600x400/121212/AF4FFE?text=TeamPhoto1&font=montserrat", title: "Team Photo 2024" },
    { id: 2, src: "https://placehold.co/600x400/121212/FFF700?text=Tournament&font=montserrat", title: "BGIS 2024 Champions" },
    { id: 3, src: "https://placehold.co/600x400/121212/AF4FFE?text=Practice&font=montserrat", title: "Boot Camp Session" },
    { id: 4, src: "https://placehold.co/600x400/121212/FFF700?text=Celebration&font=montserrat", title: "Victory Celebration" },
    { id: 5, src: "https://placehold.co/600x400/121212/AF4FFE?text=Fans&font=montserrat", title: "Fan Meet 2024" },
    { id: 6, src: "https://placehold.co/600x400/121212/FFF700?text=Announcement&font=montserrat", title: "New Lineup Announcement" },
  ];
  
  const videos = [
    { id: 1, src: "https://placehold.co/600x400/121212/AF4FFE?text=Match+Highlights&font=montserrat", title: "BGIS Finals Highlights", duration: "12:45" },
    { id: 2, src: "https://placehold.co/600x400/121212/FFF700?text=Interview&font=montserrat", title: "Exclusive Team Interview", duration: "08:32" },
    { id: 3, src: "https://placehold.co/600x400/121212/AF4FFE?text=Training&font=montserrat", title: "Training Montage", duration: "05:17" },
    { id: 4, src: "https://placehold.co/600x400/121212/FFF700?text=Behind+The+Scenes&font=montserrat", title: "Behind The Scenes", duration: "15:08" },
  ];
  
  const openGalleryItem = (src: string) => {
    setSelectedItem(src);
  };
  
  const closeGalleryItem = () => {
    setSelectedItem(null);
  };
  
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-revenant-dark to-revenant-darker">
      <div className="section-container">
        <div 
          ref={titleRef} 
          className={`mb-16 text-center transform transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-revenant-purple/10 border border-revenant-purple/20 mb-4">
            <span className="text-sm uppercase tracking-wider text-revenant-purple-light">Media Gallery</span>
          </div>
          <h2 className="heading-lg">Our <span className="neon-text">Moments</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Relive our epic journey through photos and videos capturing our victories, team moments, and fan interactions.
          </p>
        </div>
        
        <div 
          ref={contentRef}
          className={`transform transition-all duration-700 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex justify-center mb-12">
            <div className="bg-revenant-darker p-1 rounded-lg inline-flex">
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'photos' 
                    ? 'bg-revenant-purple text-white' 
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('photos')}
              >
                <Camera size={16} />
                Photos
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'videos' 
                    ? 'bg-revenant-purple text-white' 
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('videos')}
              >
                <Film size={16} />
                Videos
              </button>
            </div>
          </div>
          
          {activeTab === 'photos' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <div 
                  key={photo.id} 
                  className="glass-card overflow-hidden hover:shadow-lg transition-all duration-300"
                  onClick={() => openGalleryItem(photo.src)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={photo.src} 
                      alt={photo.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium">{photo.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {videos.map((video) => (
                <div 
                  key={video.id} 
                  className="glass-card overflow-hidden hover:shadow-lg transition-all duration-300"
                  onClick={() => openGalleryItem(video.src)}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={video.src} 
                      alt={video.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/10 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-lg">
                        <span className="sr-only">Play Video</span>
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 text-white text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Admin upload button (in a real app would be shown conditionally based on user role) */}
          <div className="mt-12 text-center">
            <button className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2">
              <span>Admin Upload</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button 
            onClick={closeGalleryItem}
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
          >
            <X size={24} />
          </button>
          <div className="max-w-4xl max-h-[80vh] relative">
            <img 
              src={selectedItem} 
              alt="Gallery item" 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
