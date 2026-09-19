import React, { useState } from 'react';
import { getAssetUrl } from '../../utils/assets';

export interface AppImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string | null;
  fallback?: React.ReactNode;
  wrapperClassName?: string;
}

/**
 * Universal Image Component for Portfolio
 * 
 * - Automatically resolves GitHub Pages and local paths via `getAssetUrl()`
 * - Smooth fade-in transition upon load
 * - Fallback rendering on broken images or missing URLs
 */
export const AppImage: React.FC<AppImageProps> = ({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  fallback = null,
  loading = 'lazy',
  decoding = 'async',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const resolvedUrl = getAssetUrl(src);

  if (!resolvedUrl || hasError) {
    return fallback ? <>{fallback}</> : null;
  }

  return (
    <img
      src={resolvedUrl}
      alt={alt}
      loading={loading}
      decoding={decoding}
      onLoad={(e) => {
        setIsLoaded(true);
        if (rest.onLoad) rest.onLoad(e);
      }}
      onError={(e) => {
        setHasError(true);
        if (rest.onError) rest.onError(e);
      }}
      className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      {...rest}
    />
  );
};
