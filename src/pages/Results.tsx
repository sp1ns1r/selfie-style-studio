
import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Download, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

// Placeholder images for the AI-generated photos
const placeholderImage = "public/placeholder.svg";
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
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header showBackButton email="spencerkier@gmail.com" />
      
      <div className="container max-w-7xl py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Here are your pictures!</h1>
          <Button 
            className="flex items-center gap-2" 
            onClick={downloadAllPhotos}
          >
            <Download className="h-4 w-4" />
            Download All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {resultPhotos.map(photo => (
            <div 
              key={photo.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow cursor-pointer group"
              onClick={() => openPhotoDetails(photo)}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={photo.src}
                  alt={`AI generated photo ${photo.id}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-medium">{photo.style}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-white rounded-xl overflow-hidden">
          <DialogClose className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-1">
            <X className="h-4 w-4 text-white" />
          </DialogClose>
          
          <div className="flex flex-col md:flex-row h-full">
            {/* Photo view */}
            <div className="relative flex-1 bg-gray-100 min-h-[300px] md:min-h-[500px]">
              {selectedPhoto && (
                <img 
                  src={selectedPhoto.src}
                  alt={`AI generated photo ${selectedPhoto.id}`}
                  className="w-full h-full object-contain"
                />
              )}
              
              <button 
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-sm hover:bg-white"
                onClick={goToPrevPhoto}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <button 
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-sm hover:bg-white"
                onClick={goToNextPhoto}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            
            {/* Details panel */}
            <div className="w-full md:w-80 p-6 border-t md:border-t-0 md:border-l">
              <DialogHeader>
                <DialogTitle>Image Details</DialogTitle>
              </DialogHeader>
              
              {selectedPhoto && (
                <div className="mt-4 space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Prompt:</h3>
                    <p className="text-sm mt-1">{selectedPhoto.prompt}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Style:</h3>
                    <p className="text-sm mt-1">{selectedPhoto.style}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Created:</h3>
                    <p className="text-sm mt-1">{selectedPhoto.created}</p>
                  </div>
                  
                  <Button 
                    className="w-full flex items-center gap-2 mt-4" 
                    onClick={() => downloadPhoto(selectedPhoto)}
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
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
