import * as React from 'react'
import { Color } from "./helpers/Colors"

export function useColorButton() {
  const [selectedColor, setSelectedColor] = React.useState<Color>("green")

  const handleSelectedColor = (color: Color) => {
    setSelectedColor(color)
  }

  return {
    selectedColor,
    handleSelectedColor
  }
}