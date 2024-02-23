// Exporting Images from images folder
import { Asset } from 'expo-asset';

// @ts-ignore
const banner = Asset.fromModule(require('./Banner.jpg')).uri;
const home = Asset.fromModule(require('./home.jpg')).uri;
const disburyLogo = Asset.fromModule(require('./disbury-logo.jpg')).uri;
const topAngelLogo = Asset.fromModule(require('./topangel-logo.png')).uri;



const ImageCollection = {
   banner,
   home,
   disburyLogo,
   topAngelLogo,
}

export { ImageCollection };
