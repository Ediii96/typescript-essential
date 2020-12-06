namespace app {

  const {
    //
  } = React;

  const {
    Scaffold,
  } = form;

  const App = () => (
    <Scaffold>
      <Router/>
    </Scaffold>
  );

  export const main = () => ReactDOM.render(<App/>, document.querySelector('#mount-point'));

} // namespace app
