import { h, patch } from 'snabbdom';

interface State {
  count: number;
}

let state: State = {
  count: 0
};

function updateState(newState: Partial<State>): void {
  state = { ...state, ...newState };
  render();
}

function view(): any {
  return h('div', [
    h('h1', state.count.toString()),
    h('button', { on: { click: incrementCount } }, 'Add')
  ]);
}

function incrementCount(): void {
  updateState({ count: state.count + 1 });
}

function render(): void {
  patch(document.getElementById('app')!, view());
}

render();
