import { Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default function resp(fontSize) {
	if (fontSize == undefined) return fontSize;

	const ratioX = width < 375 ? (width < 320 ? 0.75 : 0.875) : 1;
	return ratioX * fontSize;
}