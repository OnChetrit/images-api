import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ImageLoad = React.memo(({ src, alt = '' }) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(null);

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      setLoading(false);
      updateSrc(src);
    };
  }, [src]);

  return (
    <div className="container">
      {loading ? (
        <Skeleton
          height="100%"
          baseColor="#ebebeb"
          highlightColor="#afafaf"
          containerClassName="image-skeleton"
        />
      ) : (
        <img
          src={currentSrc}
          style={{
            opacity: loading ? 0.5 : 1,
            transition: 'opacity .15s linear',
          }}
          alt={alt}
        />
      )}
    </div>
  );
});
