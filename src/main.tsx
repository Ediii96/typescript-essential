namespace app {

  const App = () => (
    <Clicker/>
  );

  export const main = () => ReactDOM.render(<App/>, document.querySelector('#mount-point'));

} // namespace app
