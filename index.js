import Rx from 'rxjs/Rx'

const SQUARE_IDS = ["square-1", "square-2", "square-3", "square-4", "square-5", "square-6", "square-7", "square-8", "square-9", "square-10", "square-11", "square-12"]

const COLORS = ["teal", "red", "green", "blue", "orange", "yellow"]

const squareMouseOver$ = SQUARE_IDS.map(id =>
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
