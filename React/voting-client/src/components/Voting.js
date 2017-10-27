import React from 'react';
import ReactDOM from 'react-dom';


class Voting extends React.Component {

  getPair() {
    return this.props.pair || [];
  }
  
  render() {
      return (
        <div className="voting">
          {this.getPair().map(entry =>
            <button key={entry}>
              <h1>{entry}</h1>
            </button>
          )}
        </div>
      );
    }
}

 // ========================================
 
const pair = ['Trainspotting', '28 Days Later'];
ReactDOM.render(
  <Voting pair={pair} />,
  document.getElementById('app')
);


// The Tutorial does not use react 16 and there is compatible problems
// TODO: Check tutorials to test react version 16
/*
src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
  <Voting pair={pair} />,
  document.getElementById('app')
);

src/components/Voting.jsx
import React from 'react';

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  render: function() {
    return <div className="voting">
      {this.getPair().map(entry =>
        <button key={entry}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>;
  }
});
*/


/*
TODO: Router example

// npm install --save react-router@2.0.0

src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

const routes = <Route component={App}>
  <Route path="/results" component={Results} /> //http://localhost:8080/#/results,
  <Route path="/" component={Voting} />         
</Route>;

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);

*/