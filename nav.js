import { forEach, fromEvent, map, filter, pipe, concat, fromIter } from 'callbag-basics';
import startWith from 'callbag-start-with';

const PAGE_IDS = ['home', 'about', 'signup']
const pageButtonClasses = PAGE_IDS.map(id => `${id}-bttn`)

const setHash = id => {
  window.location.hash = id
}

const displayContent = hash => {
  const id = hash ? hash.substr(1) : 'home'
  document.getElementById(id).classList.remove('hide')
  PAGE_IDS
    .filter(i => i !== id)
    .forEach(i => document.getElementById(i).classList.add('hide'))
}

pipe(
  fromEvent(document, 'click'),
  filter(ev => pageButtonClasses.includes(ev.target.id)),
  map(ev => ev.target.id.split('-')[0]),
  forEach(setHash)
)

pipe(
  fromEvent(window, 'hashchange'),
  // we startWith an init event so that the correct content is displayed
  // based on the initial window.location.hash at page load
  // otherwise all routes would display the homepage until the hash was changed
  startWith('init'),
  forEach(() => displayContent(window.location.hash))
)
