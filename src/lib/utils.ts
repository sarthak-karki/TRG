// Returns the correct image URL for a news item, supporting local assets by filename
export function getNewsImage(item: { image?: string }) {
  const localImages = import.meta.glob('../assets/*', { eager: true, as: 'url' });
  if (item.image && !item.image.startsWith('http')) {
    const filename = item.image.split('/').pop();
    if (filename) {
      for (const path in localImages) {
        if (path.endsWith(filename)) {
          return localImages[path];
        }
      }
    }
  }
  return item.image;
}
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
