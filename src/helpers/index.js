import PrivateRoute from './PrivateRoute';

const getImageDimensionsByUrl = url => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = function() {
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = reject;
  });
};

export { PrivateRoute, getImageDimensionsByUrl };
