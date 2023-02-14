import * as React from 'react'
import { Actions, actions } from './helpers/Action'
import { Color } from './helpers/Colors'




export function useTable() {
  const columns = 25
  const rows = 25


  const [userAction, setUserAction] = React.useState<Actions>(actions.fill)

  const matriz: Color[][] = Array.from(
    { length: columns },
    () => Array.from({ length: rows }, () => "white")
  )

  const [table, setTable] = React.useState<Color[][]>(matriz)

  const onCellClick = (row: number, cell: number, color: Color) => {
    let newTable = [...table]
    newTable[row][cell] = color
    setTable(newTable)
  }

  const clearTable = () => {
    setTable(matriz)
  }

  const handleErase = (row: number, cell: number) => {
    let newTable = [...table]
    newTable[row][cell] = "white"
    setTable(newTable)
  }

  const handleUserAction = () => {
    const newAction: Actions = userAction === "erase" ? "fill" : "erase"
    setUserAction(newAction)
  }

  return {
    table,
    onCellClick,
    clearTable,
    userAction,
    handleErase,
    handleUserAction
  }
}