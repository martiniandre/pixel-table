import { Actions } from "../helpers/Action"
import type { IconType } from 'react-icons/'

interface IActionButton {
  Icon: IconType
  selectedAction: Actions
  action: Actions
  handleAction: (action: Actions) => void
}

export function ActionButton({ Icon, action, selectedAction, handleAction }: IActionButton) {
  const activeClass = selectedAction === action ? "button-active" : ""

  return (
    <button className={`action-button ${activeClass}`} disabled={!!activeClass} key={action} onClick={() => handleAction(action)}>
      <Icon size={24} />
    </button>
  )
}