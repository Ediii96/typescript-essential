namespace app {

  /**
   * Router исполняет роль роутера
   */
  export class Router extends React.Component<any, any> {
    constructor(props) {
      super(props);
      this.state = {
        path: '/',
      };
    }
    go = (url) => this.setState({path: url});
    render() {
      if (this.state.path === '/') {
        return <HomePage go={this.go} />;
      } else if (this.state.path === '/about') {
        return <AboutPage/>;
      } else {
        return <p>404</p>;
      }
    }
  }

} // namespace app
