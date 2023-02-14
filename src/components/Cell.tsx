import { Color } from "../helpers/Colors"
import { ITable } from "../helpers/Table"

interface ICell {
  color: Color
  table: ITable
  handleCell: (table: ITable) => void
}

export function Cell({ color, table, handleCell }: ICell) {
  return <div className={`cell ${color}`} onClick={() => handleCell(table)} > </div>
}