/**
 * Cloudinary integration utilities.
 * Configure NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in .env.local.
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export function getCloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: string;
  } = {}
): string {
  const { width, height, quality = 80, format = "auto" } = options;

  const transforms: string[] = [`q_${quality}`, `f_${format}`];
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms.join(",")}/${publicId}`;
}

export function getOptimizedImageUrl(publicId: string, width: number): string {
  return getCloudinaryUrl(publicId, {
    width,
    quality: 80,
    format: "auto",
  });
}
