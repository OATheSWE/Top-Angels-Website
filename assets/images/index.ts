// Exporting Images from images folder
import { Asset } from 'expo-asset';

// @ts-ignore
const banner = Asset.fromModule(require('./Banner.jpg')).uri;
const home = Asset.fromModule(require('./home.jpg')).uri;
const disburyLogo = Asset.fromModule(require('./disbury-logo.png')).uri;
const topAngelLogo = Asset.fromModule(require('./topangel-logo.png')).uri;
const schoolVideo = Asset.fromModule(require('./school-video.mp4')).uri;



const ImageCollection = {
   banner,
   home,
   disburyLogo,
   topAngelLogo,
   schoolVideo,
}

export { ImageCollection };
