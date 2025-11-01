'use client';

import Image, { type ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

const DEFAULT_FALLBACK = '/images/placeholder-course.svg' as const;

type Props = ImageProps & {
  fallbackSrc?: ImageProps['src'];
};

export default function FallbackImage({
  fallbackSrc = DEFAULT_FALLBACK,
  src,
  onError,
  ...rest
}: Props) {
  const resolvedSrc: ImageProps['src'] =
    typeof src === 'string'
      ? src.trim().length > 0
        ? src
        : fallbackSrc
      : src ?? fallbackSrc;
  const [currentSrc, setCurrentSrc] = useState<ImageProps['src']>(resolvedSrc);

  useEffect(() => {
    setCurrentSrc(resolvedSrc);
  }, [resolvedSrc]);

  return (
    <Image
      {...rest}
      src={currentSrc}
      onError={(event) => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
        onError?.(event);
      }}
    />
  );
}
