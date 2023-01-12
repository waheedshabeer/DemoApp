import { Image, View, ViewStyle } from "react-native"
import React, { FC, useEffect } from "react"
import { AppStackScreenProps } from "../navigators"
import { colors } from "../theme"
import Images from "../constants/Images"
import { useNavigation } from "@react-navigation/core"

const Splash: FC<AppStackScreenProps<"Splash">> = () => {
  const navigation = useNavigation<any>()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("CreateAccount")
    }, 1500)
    return () => clearTimeout(timer)
  })
  return (
    <View style={$screenContentContainer}>
      <Image source={Images.logo} />
    </View>
  )
}

export default Splash

const $screenContentContainer: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background.lightBlack,
  justifyContent: "center",
  alignItems: "center",
}
