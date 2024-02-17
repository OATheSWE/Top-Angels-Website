// Exporting Images from images folder
import { Asset } from 'expo-asset';

// @ts-ignore
const banner = Asset.fromModule(require('./Banner.jpg')).uri;
const home = Asset.fromModule(require('./home.jpg')).uri;


const ImageCollection = {
   banner,
   home
}

export { ImageCollection };
