import React, { useState } from 'react';
import { galleryData } from '../data/galleryData';
import { Camera, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const filters = ['All', 'Strength', 'Conditioning', 'Recovery', 'Atmosphere'];

  const filteredPhotos = activeFilter === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter);

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#0D1017] border-b border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Facility Photography</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight">
              Facility <span className="text-amber-400">Gallery</span>
            </h2>
            <p className="mt-3 text-gray-400 text-base max-w-xl">
              An inside look into our barbell stations, functional turf lanes, infrared recovery pods, and athletic architecture.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                  activeFilter === filter
                    ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                    : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer bg-gray-900 border border-gray-800 hover:border-amber-500/50 transition-all duration-300 shadow-lg"
            >
              <img
                src={photo.image}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4">
                <div className="self-end p-2 rounded-lg bg-black/60 backdrop-blur-md text-amber-400">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                    {photo.category}
                  </span>
                  <h4 className="text-white font-bold text-sm leading-tight mt-0.5">
                    {photo.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Attribution Notice */}
        <div className="mt-6 text-center text-xs text-gray-500">
          Photographic assets licensed via Unsplash for demonstration portfolio presentation.
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 p-3 rounded-full bg-gray-900/80 text-white hover:text-amber-400 hover:bg-gray-800 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={prevPhoto}
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-900/80 text-white hover:text-amber-400 hover:bg-gray-800 transition-colors z-50 hidden sm:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextPhoto}
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-900/80 text-white hover:text-amber-400 hover:bg-gray-800 transition-colors z-50 hidden sm:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredPhotos[selectedPhotoIndex].image}
              alt={filteredPhotos[selectedPhotoIndex].alt}
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-gray-800"
            />
            <div className="mt-4 text-center">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                {filteredPhotos[selectedPhotoIndex].category}
              </span>
              <h3 className="text-white text-lg font-bold">
                {filteredPhotos[selectedPhotoIndex].title}
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                {filteredPhotos[selectedPhotoIndex].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
