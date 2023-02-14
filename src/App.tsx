import './App.css'
import { ActionButton } from './components/ActionButton'
import { Cell } from './components/Cell'
import { CollorButton } from './components/ColorButton'
import { Colors } from './helpers/Colors'
import { ITable } from './helpers/Table'
import { useColorButton } from './useColorButton'
import { useTable } from './useTable'

import { FaEraser, FaFillDrip } from 'react-icons/fa'

function App() {

  const { table, onCellClick, clearTable, handleErase, userAction, handleUserAction } = useTable()
  const { selectedColor, handleSelectedColor } = useColorButton()

  function handleCell(table: ITable) {
    const { row, cell } = table

    if (userAction === "erase") {
      return handleErase(row, cell)
    }

    return onCellClick(row, cell, selectedColor)
  }

  return (
    <main>
      <h1>Pixart 😁😁😁😁 </h1>
      <section className="color-options" >
        {Object.values(Colors).map((color) => (
          <CollorButton
            color={color}
            selectedColor={selectedColor}
            handleSelectedColor={handleSelectedColor}
            key={color}
            userAction={userAction}
          />
        ))}
      </section>
      <section className="user-action">
        <ActionButton Icon={FaFillDrip} action='fill' handleAction={handleUserAction} selectedAction={userAction} />
        <ActionButton Icon={FaEraser} action='erase' handleAction={handleUserAction} selectedAction={userAction} />
      </section>

      <p>User action:  {userAction}</p>

      <button type="button" onClick={clearTable}>Limpar</button>
      <section className="table">
        {table.map((row, index) => (
          <div key={index} className="row">
            {row.map((cell, idx) => (
              <Cell
                key={idx}
                color={cell}
                table={{
                  row: index,
                  cell: idx
                }}
                handleCell={handleCell}
              />
            ))}
          </div>
        ))}
      </section>
    </main>
  )
}

export default App
