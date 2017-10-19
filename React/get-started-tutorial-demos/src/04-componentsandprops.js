import React from 'react';
import ReactDOM from 'react-dom';


//= root5


function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
  
    );
  }
  
  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }
  
  function Comment(props) {
    return (
      <div className="Comment separator-bottom">
        <div className="UserInfo">
          <UserInfo user={props.author} />
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };
 


//= root4
  
class ShoppingList extends React.Component {
    render() {
      return (
        <div>
          <h1>Shopping List for {this.props.firstname} {this.props.lastname}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
          <hr />
        </div>
      );
    }
  }

// ========================================
  
  ReactDOM.render(
    <ShoppingList firstname="Pedro" lastname="Alves" />,
    document.getElementById('root4')
  );

  ReactDOM.render(
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author} />,
    document.getElementById('root5')
  );