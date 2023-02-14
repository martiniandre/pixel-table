import { Actions } from "../helpers/Action"
import { Color } from "../helpers/Colors"

interface ICollorButton {
  color: Color
  selectedColor: Color
  handleSelectedColor: (color: Color) => void
  userAction: Actions
}

export function CollorButton({ color, selectedColor, handleSelectedColor, userAction }: ICollorButton) {
  const activeClass = selectedColor === color ? "active" : ""
  const disabled = userAction === "erase"

  console.log(disabled)

  return (
    <button type="button" className={`choose-button ${color} ${activeClass}`} disabled={disabled} key={color} onClick={() => handleSelectedColor(color)} />
  )
}