import Rx from 'rxjs/Rx'

const COLORS = ['#a8e6cf', '#dcedc1', '#ffd3b6', '#ffaaa5', '#ff8b94']
const SQUARE_COUNT = 50

// Add more Squares as necessary

const squares = document.getElementById("home")
const addRow = (parent, rowCount) => {
  const row = document.createElement("div")
  row.setAttribute("class", "row")

  const testSquare = document.createElement("div")
  testSquare.setAttribute("class", "square")

  Array(5).fill(undefined).forEach((_, i) => {
    const newSquare = testSquare.cloneNode()
    const idNumber = (rowCount-1)*5+i+1
    newSquare.setAttribute("id", `square-${idNumber}`)
    row.appendChild(newSquare)
  })
  parent.appendChild(row)
}

const addRows = (parent, rowsToAdd) => {
  let rowCount = 3
  Array(rowsToAdd).fill(undefined).forEach(() => {
    rowCount++
    addRow(parent, rowCount)
  })
}

const rowsToAdd = SQUARE_COUNT/5 - 3
addRows(squares, rowsToAdd)

// Random Colors

const squareIds = Array(SQUARE_COUNT).fill(undefined)
  .map((_, i) => `square-${i + 1}`)


const squareMouseOver$ = squareIds.map(id =>
  Rx.Observable.fromEvent(document.getElementById(`${id}`), 'mouseover')
    .map(e => id)
)

const mergedSquare$ = Rx.Observable.merge(...squareMouseOver$)

const setBackgroundColor = id => {
  const el = document.getElementById(id)
  const backgroundColor = el.style.backgroundColor || COLORS[0]
  const otherColors = COLORS.filter(c => c !== backgroundColor)
  
  // side-effect: ideally would inject the seed to keep this function pure
  const newColor = otherColors[Math.floor(Math.random()*otherColors.length)]

  el.setAttribute("style", `background-color: ${newColor};`)
}

mergedSquare$.subscribe(setBackgroundColor)
