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
