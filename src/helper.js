import {Dimensions} from 'react-native';
import {isNull, omitBy} from 'lodash';


export const omitNulls = d => omitBy(d, isNull);


const dims = Dimensions.get('window');
export const DEVICE_WIDTH = dims.width;
export const DEVICE_HEIGHT = dims.height;

const [shortDimension, longDimension] = DEVICE_WIDTH < DEVICE_HEIGHT ? [DEVICE_WIDTH, DEVICE_HEIGHT] : [DEVICE_HEIGHT, DEVICE_WIDTH];

const guidelineBaseWidth = 320;
const guidelineBaseHeight = 480;

export const normalizeSize = size => shortDimension / guidelineBaseWidth * size;
export const verticalScale = size => longDimension / guidelineBaseHeight * size;
