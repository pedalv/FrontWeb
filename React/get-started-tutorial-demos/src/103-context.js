//Referencing Context in Lifecycle Methods

If contextTypes is defined within a component, 
the following lifecycle methods will receive an additional parameter, 
the context object:
- constructor(props, context)
- componentWillReceiveProps(nextProps, nextContext)
- shouldComponentUpdate(nextProps, nextState, nextContext)
- componentWillUpdate(nextProps, nextState, nextContext)

Note: As of React 16, componentDidUpdate no longer receives prevContext.

