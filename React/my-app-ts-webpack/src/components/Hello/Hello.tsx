import * as React from 'react';
import './Hello.less';

interface IProps {
   compiler: string,
   framework: string,
   bundler: string
}

class Hello extends React.Component<IProps, {}> {
   public render() {
    return (
        <div className="Hello">
            <h1>This is a {this.props.framework} application using {this.props.compiler} with {this.props.bundler}</h1>
        </div>        
    )
   }
}

export default Hello;