/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"

export const spacing = {
  micro: wp("1%"),
  tiny: wp("1.25%"),
  extraSmall: wp("1.50%"),
  small: wp("1.75%"),
  medium: wp("2%"),
  large: wp("2.25%"),
  extraLarge: wp("2.50%"),
  huge: wp("2.75%"),
  massive: wp("3%"),
  wp,
  hp,
} as const

export type Spacing = keyof typeof spacing
