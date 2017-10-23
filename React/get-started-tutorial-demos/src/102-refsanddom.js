// Adding a Ref to a DOM Element
class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput() {
      // Explicitly focus the text input using the raw DOM API
      this.textInput.focus();
    }
  
    render() {
      // Use the `ref` callback to store a reference to the text input DOM
      // element in an instance field (for example, this.textInput).
      return (
        <div>
          <input
            type="text"
            ref={(input) => { this.textInput = input; }} />
  
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }
  // Adding a Ref to a Class Component
  class AutoFocusTextInput extends React.Component {
    componentDidMount() {
      this.textInput.focusTextInput();
    }
  
    render() {
      return (
        <CustomTextInput
          ref={(input) => { this.textInput = input; }} />
  
      );
    }
  }
  class CustomTextInput extends React.Component {
    // ...
  }
  // Refs and Functional Components
  function MyFunctionalComponent() {
    return <input />;
  }
  
  class Parent extends React.Component {
    render() {
      // This will *not* work!
      return (
        <MyFunctionalComponent
          ref={(input) => { this.textInput = input; }} />
      );
    }
  }
  // OKAY
  function CustomTextInput(props) {
    // textInput must be declared here so the ref callback can refer to it
    let textInput = null;
  
    function handleClick() {
      textInput.focus();
    }
  
    return (
      <div>
        <input
          type="text"
          ref={(input) => { textInput = input; }} />
  
        <input
          type="button"
          value="Focus the text input"
          onClick={handleClick}
        />
      </div>
    );  
  }
  // Exposing DOM Refs to Parent Components
  // This works both for classes and for functional components.
  function CustomTextInput(props) {
    return (
      <div>
        <input ref={props.inputRef} />
      </div>
    );
  }
  
  class Parent extends React.Component {
    render() {
      return (
        <CustomTextInput
          inputRef={el => this.inputElement = el}
        />
      );
    }
  }
  //
  function CustomTextInput(props) {
    return (
      <div>
        <input ref={props.inputRef} />
      </div>
    );
  }
  
  function Parent(props) {
    return (
      <div>
        My input: <CustomTextInput inputRef={props.inputRef} />
      </div>
    );
  }
  
  
  class Grandparent extends React.Component {
    render() {
      return (
        <Parent
          inputRef={el => this.inputElement = el}
        />
      );
    }
  }
  // Note: use findDOMNode(), but it is discouraged.
  

//---The Power Of Not Mutating Data <=> some reference to obj---

  function App1() {
    return <Greeting firstName="Ben" lastName="Hector" />;
  }
  
  function App2() {
    const props = {firstName: 'Ben', lastName: 'Hector'};
    return <Greeting {...props} />;
  }

  // 
  handleClick() {
    this.setState(prevState => ({
      words: prevState.words.concat(['marklar'])
    }));
  }
//ES6
  handleClick() {
    this.setState(prevState => ({
      words: [...prevState.words, 'marklar'],
    }));
  };

  //updateColorMap now returns a new object, 
  //rather than mutating the old one. 
  //Object.assign is in ES6 and requires a polyfill.
  function updateColorMap(colormap) {
    return Object.assign({}, colormap, {right: 'blue'});
  }

  function updateColorMap(colormap) {
    return {...colormap, right: 'blue'};
  }

  // to update objects without mutation - get same reference to object
  function updateColorMap(colormap) {
    colormap.right = 'blue';
  }

  // FIX object to be mutation
  // 1. Immutable: once created, a collection cannot be altered at another point in time.
  const SomeRecord = Immutable.Record({ foo: null });
  const x = new SomeRecord({ foo: 'bar' });
  const y = x.set('foo', 'baz');
  const z = x.set('foo', 'bar');
  x === y; // false
  x === z; // true

  // 2. shouldComponentUpdate method
