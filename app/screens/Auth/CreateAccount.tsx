import {
  Image,
  ImageBackground,
  ImageStyle,
  ScrollView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import React, { FC } from "react"
import { AppStackScreenProps } from "../../navigators"
import { spacing } from "../../theme/spacing"
import Images from "../../constants/Images"
import { colors } from "../../theme"
import Swiper from "react-native-swiper"

const CreateAccount: FC<AppStackScreenProps<"CreateAccount">> = () => {
  return (
    <View style={$container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={$topImgContainer}>
          <ImageBackground
            source={Images.backgroundIllustration}
            resizeMode="cover"
            style={$topBgImg}
          >
            <View style={$logoContainer}>
              <Image source={Images.miniLogo} />
              <TouchableOpacity style={$skipButton}>
                <Text style={$skipText}>Skip Login</Text>
                <Image source={Images.arrowRight1} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <Swiper style={$wrapper} activeDotColor={colors.white}>
          <View style={$slide1}>
            <Image source={Images.illustrations1} />
            <Text style={$slideBoldText}>Invest Responsibly</Text>
            <Text style={$slideBottomText}>Responsible investing for social impact.</Text>
          </View>
          <View style={$slide2}>
            <Image source={Images.illustrations2} />
            <Text style={$slideBoldText}>ESG Fund Screener</Text>
            <Text style={$slideBottomText}>Find your tailored investment strategy.</Text>
          </View>
          <View style={$slide3}>
            <Image source={Images.illustrations3} />
            <Text style={$slideBoldText}>Data Driven Analytics</Text>
            <Text style={$slideBottomText}>Your all in one research partner.</Text>
          </View>
        </Swiper>
      </ScrollView>
    </View>
  )
}

export default CreateAccount

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background.lightBlack,
}

const $topImgContainer: ViewStyle = {
  height: spacing.hp("30%"),
  width: spacing.wp("100%"),
}
const $topBgImg: ImageStyle = {
  height: "100%",
  width: "100%",
}
const $logoContainer: ViewStyle = {
  height: "15%",
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: spacing.wp("2%"),
  justifyContent: "space-between",
}
const $skipButton: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}
const $skipText: TextStyle = {
  color: colors.text.lightBlue,
  marginHorizontal: spacing.wp("1%"),
}

const $wrapper: ViewStyle = {
  height: spacing.hp("40%"),
}
const $slide1: ViewStyle = {
  flex: 1,
  alignItems: "center",
}
const $slideBoldText: TextStyle = {
  fontWeight: "bold",
  color: colors.white,
  fontSize: spacing.hp("2.5%"),
  marginTop: spacing.hp("5%"),
}
const $slideBottomText: TextStyle = {
  color: colors.text.gray,
  fontSize: spacing.hp("2%"),
  marginTop: spacing.hp("1%"),
}
const $slide2: ViewStyle = {
  flex: 1,
  alignItems: "center",
}
const $slide3: ViewStyle = {
  flex: 1,
  alignItems: "center",
}
