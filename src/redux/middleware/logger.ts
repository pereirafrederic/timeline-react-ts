const logger = (store: any) => (next: Function) => (action: any) => {
  console.group(action.type)
  console.log('The action:', action)
  const returnValue = next(action)
  console.log('The new state:', store.getState())
  console.groupEnd()
  return returnValue
}

export default logger
