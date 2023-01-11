import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ViewStyle, View } from "react-native"
import { Button, Screen, Text } from "../components"
import { spacing } from "../theme"
import CounterStore from "../stores/TestStore"
import { AppStackScreenProps } from "../navigators"

interface TestScreenProps extends AppStackScreenProps<"TestScreen"> {}

export const TestScreen: FC<TestScreenProps> = observer(function TestScreen(_props) {
  function increment() {
    CounterStore.increment()
  }

  function decrement() {
    CounterStore.decrement()
  }
  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <Button
        testID="Test-button"
        tx="TestScreen.increment"
        style={$tapButton}
        preset="reversed"
        onPress={increment}
      />
      <View style={$TextView}>
        <Text>{CounterStore.count}</Text>
      </View>

      <Button
        testID="Test-button"
        tx="TestScreen.decrement"
        style={$tapButton}
        preset="reversed"
        onPress={decrement}
      />
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.extraSmall,
}

const $TextView: ViewStyle = {
  alignSelf: "center",
}
// @demo remove-file
