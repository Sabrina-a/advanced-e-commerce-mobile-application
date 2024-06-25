import { Platform } from "react-native"

const fonts = {
    JosefinSans: Platform?.OS === "android" ? "JosefinSansRegular": "Josefin Sans Regular",
    JosefinSansBold: Platform?.OS === "android" ? "JosefinSansBold": "Josefin Sans Bold"

}

export default fonts