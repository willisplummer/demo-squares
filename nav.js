import Rx from 'rxjs/Rx'

const PAGE_IDS = ['home', 'about', 'signup']

const navButtonClick$ = PAGE_IDS.map(id =>
  Rx.Observable.fromEvent(document.getElementById(`${id}-bttn`), 'click')
    .map(e => id)
)

const mergedNavClicks$ = Rx.Observable.merge(...navButtonClick$)

const setUrl = id => {
  window.location.href = id === 'home' ? '' : `/#${id}`
}

const displayContent = hash => {
  const id = hash ? hash.substr(1) : 'home'
  document.getElementById(id).classList.remove('hide')
  PAGE_IDS
    .filter(i => i !== id)
    .forEach(i => document.getElementById(i).classList.add('hide'))
}

const setUrlAndDisplayContent = id => {
  setUrl(id);
  // displayContent(id);
}

mergedNavClicks$.subscribe(setUrlAndDisplayContent)

const hashChanges$ = Rx.Observable.fromEvent(window, 'hashchange')
  .startWith(1);
hashChanges$.subscribe(() => displayContent(window.location.hash))
