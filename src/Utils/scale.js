
import ActualDimensions from './deviceDimensions';
const { width, height } = ActualDimensions;

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */
const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;

export {scale, verticalScale};