import { useEffect, useRef } from 'react';

export default function SmartVideo({ src, poster, className = '' }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Wajib untuk Safari: paksa muted & playsinline di level atribut HTML
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.muted = true;

    // Muat ulang sumber video & paksa play
    video.load();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback jika Safari menahan autoplay
      });
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
