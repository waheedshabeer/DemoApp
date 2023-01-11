import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ViewStyle } from "react-native"
import { Button, Screen, Text } from "../components"
import { spacing } from "../theme"
import CounterStore from "../stores/TestStore"

export const TestScreen: FC = observer(function (_props) {
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
      <Text></Text>
      <Button
        testID="Test-button"
        tx="TestScreen.incrementTitle"
        style={$tapButton}
        preset="reversed"
        onPress={increment}
      />
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

// @demo remove-file
