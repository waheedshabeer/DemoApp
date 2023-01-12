import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import React from "react"

const AuthButton = (props) => {
  const { onPress, title, customContainer, customTitle } = props
  return (
    <TouchableOpacity onPress={onPress} style={[$container, customContainer]}>
      <Text style={[$title, customTitle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AuthButton

const $container: ViewStyle = {}
const $title: TextStyle = {}
