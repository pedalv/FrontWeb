import React from 'react';
import ReactDOM from 'react-dom';

  //= root8

  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

  /*
  function UserLoginStatus(isLoggedIn) {
    return (
      <div>
        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
      </div>
    );
  }
  */

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    //return UserLoginStatus(isLoggedIn);
    
    //{return isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
   
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;

    

  }



  //= root8

  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

  class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {
        isLoggedIn: false
      };
    }
  
    handleLoginClick() {
      this.setState({
        isLoggedIn: true
      });
    }
  
    handleLogoutClick() {
      this.setState({
        isLoggedIn: false
      });
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
  
      let button = null;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }

      let buttonconditionaloparation = (
        <div>
          {isLoggedIn ? 
            (<LogoutButton onClick={this.handleLogoutClick} />)
            :
            (<LoginButton onClick={this.handleLoginClick} />)
          }  
        </div>
      );
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
          {buttonconditionaloparation}
          <hr />
        </div>

      );
    }
  }


  //= root9

  function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
        <hr />
      </div>
    );
  }
  
  //const messages = ['React', 'Re: React', 'Re:Re: React'];
  const messages = ['React'];
  //const messages = [];
  
  //= root10

  /*
    Returning null from a component’s render method does not affect the firing
     of the component’s lifecycle methods. 
     For instance, componentWillUpdate and componentDidUpdate will still 
     be called.
  */
  function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        Warning!
      </div>
    );
  }
  
  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showWarning: true
      }
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(prevState => ({
        showWarning: !prevState.showWarning
      }));
    }
  
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
          <hr />
        </div>
      );
    }
  }


   // ========================================


  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    //<Greeting isLoggedIn={true} />,
    <LoginControl />,
    document.getElementById('root8')
  );

  ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root9')
  );

  ReactDOM.render(
    <Page />,
    document.getElementById('root10')
  );