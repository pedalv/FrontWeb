import React from 'react';
import ReactDOM from 'react-dom';

 //= root1
  
 function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Pedro',
    lastName: 'Alves',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg'
  };
  
  const element = (
    <div tabIndex="0" className="separator-bottom">
      <h1> 
        Hello, {formatName(user)}!
      </h1>
      <span>
        {getGreeting()}
        <div>
         <img src={user.avatarUrl} alt={formatName(user)} height="100" />
        </div>
      </span>
    </div>
  );

// ========================================
  
  ReactDOM.render(
    element,
    document.getElementById('root1')
  );