import React from "react";
import ReactDOM from "react-dom";

class WillMount extends React.Component {
  componentWillMount() {
    // nope. Use componentDidMount instead
  }
  render() {
    return null
  }
}

class WillReceiveProps extends React.Component {
  componentWillReceiveProps() {
    // nope. Use static getDerivedStateFromProps
  }
  render() {
    return null
  }
}

class WillUpdate extends React.Component {
  componentWillUpdate() {
    // nope. Use componentDidUpdate instead
  }
  render() {
    return null
  }
}

class StringRef extends React.Component {
  render() {
    // nope. Use React.createRef instead
    return <div ref="myDiv" />
  }
}

class FindDOMNode extends React.Component {
  componentDidMount() {
    // nope. Use React.createRef instead
    ReactDOM.findDOMNode(this)
  }
  render() {
    return <div />
  }
}

const StrictMode = () => {
  return (
    <div>
      <React.StrictMode>
        <WillMount />
        <WillReceiveProps />
        <WillUpdate />
        <StringRef />
        <FindDOMNode />
      </React.StrictMode>
    </div>
  );
}

export default StrictMode;
