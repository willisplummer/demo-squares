import {forEach, fromEvent, map, filter, pipe} from 'callbag-basics';

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

const rgbToHex = (rgb) => {
  if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}


const setBackgroundColor = (id, random = Math.random()) => {
  const el = document.getElementById(id)
  const backgroundColor = rgbToHex(el.style.backgroundColor || COLORS[0])
  const otherColors = COLORS.filter(c => c !== backgroundColor)
  
  const newColor = otherColors[Math.floor(random * otherColors.length)]

  el.style.backgroundColor = newColor;
}

pipe(
  fromEvent(document, 'mouseover'),
  filter(ev => squareIds.includes(ev.target.id)),
  map(ev => ev.target.id),
  forEach(setBackgroundColor)
)

