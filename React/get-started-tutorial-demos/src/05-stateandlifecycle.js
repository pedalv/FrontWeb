import React from 'react';
import ReactDOM from 'react-dom';

 //= root6

 // Converting a Function to a Class

 /*
 function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
*/

 class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            posts: [],
            comments: [],
        };

        /*
        //correct
        this.setState(
            (prevState, props) => ({
                counter: prevState.counter + props.increment
            })
        );

        //correct
        this.setState(function(prevState, props) {
            return {
                counter: prevState.counter + props.increment
            };
        });
        */
    
    }

    /*
        These methods are called “lifecycle hooks”.

        The componentDidMount() hook runs after 
        the component output has been rendered to the DOM. 
        This is a good place to set up a timer:
    */
    componentDidMount() {
        
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

        /*
            // Exemple how to use
        fetchPosts().then(response => {
            this.setState({
              posts: response.posts
            });
          });
      
          fetchComments().then(response => {
            this.setState({
              comments: response.comments
            });
          });

        */
    }

    /*
        While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store something that is not used for the visual output.
        
        If you don’t use something in render(), it shouldn’t be in the state.

        it’s important to cancel your interval when you don’t need it anymore to save memory.
    */    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <FormattedDate date={this.state.date} />
          <hr />
        </div>
      );
    }
  }

  function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
  }

function App() {
    return (
      <div className="separator-bottom">
        <Clock />
        <Clock />
        <Clock />
      </div>
    );
  }
  

  

 // ========================================

 ReactDOM.render(
    //<Clock />,
    <App />,
    document.getElementById('root6')
);  


/*
Mounting
- These methods are called when an instance of 
a component is being created and 
inserted into the DOM:
1. constructor()
2. componentWillMount() — Fired before the component will mount
3. render()
4. componentDidMount() — Fired after the component mounted

Updating
- An update can be caused by changes to props 
or state. 
- These methods are called when a component 
is being re-rendered:
1. componentWillReceiveProps() — Fired whenever there is a change to props
2. shouldComponentUpdate()
3. componentWillUpdate()
4. render()
5. componentDidUpdate()

Unmounting
- This method is called when a component 
is being removed from the DOM:
1. componentWillUnmount() — Fired before the component will unmount

Error Handling
- This method is called when there 
is an error during rendering, 
in a lifecycle method, or 
in the constructor of any child component.
1. componentDidCatch()

Other APIs
- Each component also provides some other APIs:
1. setState()
2. forceUpdate()

Class Properties
1. defaultProps
2. displayName

Instance Properties
1. props
2. state
*/
