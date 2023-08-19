import noImage from '../assets/no-image-placeholder.webp';

export const getCroppedImageUrl = (url: string) => {
  
  if (!url) return noImage;
  
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}


export const getProfileImageUrl = (imagePath: string) => {
  const baseUrl = 'http://localhost:8001'; // 这是您的开发服务器的基本URL
  return `${baseUrl}${imagePath}`;
}

