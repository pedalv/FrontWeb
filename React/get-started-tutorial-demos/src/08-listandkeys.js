import React from 'react';
import ReactDOM from 'react-dom';

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}

function NumberList2(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={number.toString()}
                value={number} />
  
    );
    return (
        <ul>
          {listItems}
        </ul>
      );
  }



class NumberList extends React.Component {

    
    render() {

        const numbers = this.props.numbers;

        const doubled2 = numbers.map((number) => 
            number * 2 + ", "
        );
        console.log(doubled2);


        /*
            We don’t recommend using indexes for keys 
            if the items can reorder, as that would be slow. 
        */
        const listItems = numbers.map((number, index) =>
            <li key={index}>{number}</li>
        );
        
        return (
            <div>
                <ul className="list">{listItems}</ul> 
                <div>{doubled2}</div>
                <div>
                    <NumberList2 numbers={numbers} />
                </div>  
                <div>
                    <Blog posts={posts} />
                </div>
                <ul>
                {numbers.map((number) =>
                    <ListItem key={number.toString()}
                            value={number} />

                )}
                </ul>
                <hr />          
            </div>
        );
    }

}


const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];


function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map(
            (post) =>
                <li key={post.id}>
                    {post.title}
                </li>
        )}
      </ul>
    );
    const content = props.posts.map(
        (post) =>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
    );
    return (
      <div>
        {content}
        {sidebar}
      </div>
    );
  }



// ========================================
const numbers2 = [1, 2, 3, 4, 5];

ReactDOM.render(
    //<ul>{listItems}</ul>,
    <NumberList numbers={numbers2} />,
    document.getElementById('root11')
  );