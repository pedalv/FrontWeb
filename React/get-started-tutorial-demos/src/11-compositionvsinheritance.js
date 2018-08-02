import React from 'react';
import ReactDOM from 'react-dom';


function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }
  
  function Dialog(props) {
    return (
        <div>
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                  {props.title}
                </h1>
                <p className="Dialog-message">
                    {props.message}
                </p>
                {props.children}
            </FancyBorder>
            <App />
        </div>      
    );
  }

  class SignUpDialog extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
      this.state = {
        login: '',
        title: "Welcome - Mars Exploration Program",
        message: "Thank you for visiting our spacecraft! \n How should we refer to you?"
        };
    }
  
    render() {
      return (
        <Dialog
            title={this.state.title}
            //message={this.state.message} >
            message={this.state.message.split('\n').map((item, key) => {
                return <span key={key}>{item}<br/></span>
                })} >
          <input value={this.state.login}
                 onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>
            Sign Me Up!
          </button>
        </Dialog>
      );
    }
  
    handleChange(e) {
      this.setState({login: e.target.value});
    }
  
    handleSignUp() {
      alert(`Welcome aboard, ${this.state.login}!`);
    }
  }

  function Contacts() {
    return <div className="Contacts" />;
  }
  
  function Chat() {
    return <div className="Chat" />;
  }
  
  function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    );
  }
  
  function App() {
    return (
      <SplitPane
        left={
          <Contacts />
        }
        right={
          <Chat />
        } />
    );
  }


  // ========================================

  
  ReactDOM.render(
    <SignUpDialog />,
    document.getElementById('root14')
  );
  