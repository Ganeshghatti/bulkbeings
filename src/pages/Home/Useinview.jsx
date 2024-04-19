import React, { Component } from 'react';

class UseInView extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      isInView: false,
    };
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          this.setState({ isInView: true });
          this.props.onChange(true); // Pass true to parent when in view
        } else {
          this.setState({ isInView: false });
          this.props.onChange(false); // Pass false to parent when not in view
        }
      },
      {
        threshold: 0.1 // Adjust this value based on needs
      }
    );
    if (this.ref.current) {
      this.observer.observe(this.ref.current);
    }
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    return (
      <div ref={this.ref} className="w-full h-full" style={{ border: "20px solid green" }}>
        <h1 className="relative z-0 text-3xl font-black uppercase">
          Show me on scroll
        </h1>
      </div>
    );
  }
}

export default UseInView;
