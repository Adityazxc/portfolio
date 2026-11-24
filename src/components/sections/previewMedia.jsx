import { useEffect, useRef } from 'react';

export default function PreviewMedia({ image, videoUrl, alt, isHovered }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      video.muted = true;
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-black/5">
      {/* Gambar WebP Default */}
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover object-top transition-opacity duration-300 ${
          isHovered && videoUrl ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Video Muncul Saat Kartu Di-Hover */}
      {isHovered && videoUrl && (
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      )}
    </div>
  );
}
