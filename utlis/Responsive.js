import { Dimensions, PixelRatio } from "react-native";
const { width, height } = Dimensions.get("window");
const ratio = width / 768;


//change width to dp
const widthToDp = number => {
    let givenWidth = typeof number === 'number' ? number : parseFloat(number)
    return PixelRatio.roundToNearestPixel((width * givenWidth) / 100)
}
//change height to dp
const heightToDp = number => {
    let givenHeight = typeof number === 'number' ? number : parseFloat(number)
    return PixelRatio.roundToNearestPixel((height * givenHeight) / 100)
}


const Dimension = size => {
    return size * ratio;
};

export { Dimension, widthToDp, heightToDp };