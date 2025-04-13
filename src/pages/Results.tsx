
import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Download, ChevronLeft, ChevronRight, X, Share2, Heart } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

// Placeholder images for the AI-generated photos
const placeholderImage = "/placeholder.svg";
const resultPhotos = [
  {
    id: 1,
    src: placeholderImage,
    style: "Office Professional",
    prompt: "Professional headshot of person, office style, neutral background",
    created: "4/12/2025"
  },
  {
    id: 2,
    src: placeholderImage,
    style: "Office Professional",
    prompt: "Professional portrait, formal attire, corporate setting",
    created: "4/12/2025"
  },
  {
    id: 3,
    src: placeholderImage,
    style: "Business Casual",
    prompt: "Business casual portrait, relaxed office environment",
    created: "4/12/2025"
  },
  {
    id: 4,
    src: placeholderImage,
    style: "Business Casual",
    prompt: "Approachable business portrait, smart casual attire",
    created: "4/12/2025"
  }
];

const Results = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof resultPhotos[0] | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  
  const downloadAllPhotos = () => {
    // In a real app, this would trigger downloading all photos as a zip
    console.log("Downloading all photos");
  };
  
  const downloadPhoto = (photo: typeof resultPhotos[0]) => {
    // In a real app, this would download the specific photo
    console.log("Downloading photo", photo.id);
  };
  
  const openPhotoDetails = (photo: typeof resultPhotos[0]) => {
    setSelectedPhoto(photo);
  };
  
  const goToNextPhoto = () => {
    if (!selectedPhoto) return;
    
    const currentIndex = resultPhotos.findIndex(p => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % resultPhotos.length;
    setSelectedPhoto(resultPhotos[nextIndex]);
  };
  
  const goToPrevPhoto = () => {
    if (!selectedPhoto) return;
    
    const currentIndex = resultPhotos.findIndex(p => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + resultPhotos.length) % resultPhotos.length;
    setSelectedPhoto(resultPhotos[prevIndex]);
  };
  
  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        return prev.filter(photoId => photoId !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50">
      <Header showBackButton email="spencerkier@gmail.com" />
      
      <div className="container max-w-7xl py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-studio-purple to-studio-blue bg-clip-text text-transparent">Here are your pictures!</h1>
            <p className="text-gray-600 mt-2">We created 4 professional photos based on your selections</p>
          </div>
          <Button 
            variant="outline"
            className="flex items-center gap-2 border-studio-purple text-studio-purple hover:bg-studio-purple/5" 
            onClick={downloadAllPhotos}
          >
            <Download className="h-4 w-4" />
            Download All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resultPhotos.map(photo => (
            <div 
              key={photo.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
              onClick={() => openPhotoDetails(photo)}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={photo.src}
                  alt={`AI generated photo ${photo.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium">{photo.style}</p>
                    <p className="text-white/80 text-sm">{photo.created}</p>
                  </div>
                </div>
                
                {/* Quick actions */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(photo.id);
                    }}
                    className={`p-2 rounded-full bg-white/80 hover:bg-white transition-colors ${
                      favorites.includes(photo.id) ? "text-red-500" : "text-gray-600"
                    }`}
                  >
                    <Heart className="h-4 w-4" fill={favorites.includes(photo.id) ? "currentColor" : "none"} />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadPhoto(photo);
                    }}
                    className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors text-gray-600"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-studio-purple">{photo.style}</span>
                  <button 
                    className="text-gray-400 hover:text-gray-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Share functionality
                    }}
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-white rounded-xl overflow-hidden border-0">
          <DialogClose className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-1.5 text-white hover:bg-black/80 transition-colors">
            <X className="h-4 w-4" />
          </DialogClose>
          
          <div className="flex flex-col md:flex-row h-full">
            {/* Photo view */}
            <div className="relative flex-1 bg-gray-50 min-h-[300px] md:min-h-[600px] flex items-center justify-center">
              {selectedPhoto && (
                <img 
                  src={selectedPhoto.src}
                  alt={`AI generated photo ${selectedPhoto.id}`}
                  className="max-w-full max-h-full object-contain"
                />
              )}
              
              <button 
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 rounded-full p-2.5 shadow-md hover:bg-white transition-colors"
                onClick={goToPrevPhoto}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <button 
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/90 rounded-full p-2.5 shadow-md hover:bg-white transition-colors"
                onClick={goToNextPhoto}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            
            {/* Details panel */}
            <div className="w-full md:w-96 p-6 border-t md:border-t-0 md:border-l">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-center bg-gradient-to-r from-studio-purple to-studio-blue bg-clip-text text-transparent">Image Details</DialogTitle>
              </DialogHeader>
              
              {selectedPhoto && (
                <div className="mt-6 space-y-5">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500">Prompt</h3>
                    <p className="text-sm mt-1 font-medium">{selectedPhoto.prompt}</p>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Style</h3>
                      <p className="text-sm mt-1 font-medium">{selectedPhoto.style}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Created</h3>
                      <p className="text-sm mt-1 font-medium">{selectedPhoto.created}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-studio-purple to-studio-blue hover:opacity-90 transition-opacity flex items-center justify-center gap-2" 
                      onClick={() => downloadPhoto(selectedPhoto)}
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-studio-purple text-studio-purple hover:bg-studio-purple/5 flex items-center justify-center gap-2"
                      onClick={() => toggleFavorite(selectedPhoto.id)}
                    >
                      <Heart className="h-4 w-4" fill={favorites.includes(selectedPhoto.id) ? "currentColor" : "none"} />
                      {favorites.includes(selectedPhoto.id) ? "Favorited" : "Favorite"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Results;
