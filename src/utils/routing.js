import { browserHistory } from 'react-router'

export function navigateTo (path) {
  browserHistory.push(path)
}
