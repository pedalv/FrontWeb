<MyComponent foo={1 + 2 + 3 + 4} />
//
function NumberDescriber(props) {
    let description;
    if (props.number % 2 == 0) {
      description = <strong>even</strong>;
    } else {
      description = <i>odd</i>;
    }
    return <div>{props.number} is an {description} number</div>;
  }
//
<MyComponent message="hello world" />
<MyComponent message={'hello world'} />
//
<MyComponent message="&lt;3" />
<MyComponent message={'<3'} />
//
//the ES6 object shorthand {foo} which is short for
// {foo: foo} rather than {foo: true}.
<MyTextBox autocomplete />
<MyTextBox autocomplete={true} /> //BEST
//
function App1() {
    return <Greeting firstName="Ben" lastName="Hector" />;
  }
  
  function App2() {
    const props = {firstName: 'Ben', lastName: 'Hector'};
    return <Greeting {...props} />;
  }
//
// This JSX only renders a <Header /> 
// if showHeader is true
  <div>
  {showHeader && <Header />}
  <Content />
</div>
//
//if you want a value like false, true, null, 
// or undefined to appear in the output, 
// you have to convert it to a string first:
<div>
  My JavaScript variable is {String(myVariable)}.
</div>
//
// false, null, undefined, and true 
// are valid children. 
// They simply don’t render. 
// These JSX expressions will all render 
// to the same thing:
<div />
<div></div>
<div>{false}</div>
<div>{null}</div>
<div>{undefined}</div>
<div>{true}</div>


