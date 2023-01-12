import React, { FC } from "react"
import { View, Text } from "react-native"

import { AppStackScreenProps } from "../../navigators"

export const SignUp: FC<AppStackScreenProps<"SignUp">> = () => {
  return (
    <View>
      <Text>Sign Up</Text>
    </View>
  )
}
