
// import React from 'react';

namespace app {

  interface IHomePageProps {
    go: (url: string) => void;
  }

  const Sample = () => <p>123</p>;

  const Example = () => {
    const [count, setCount] = React.useState(0);
    return (
      <div>
        <p>Вы кликнули {count} раз(а)</p>
        <button onClick={() => setCount(count + 1)}>
          Нажми на меня
        </button>
      </div>
    );
  };
 
  export class HomePage extends React.Component<IHomePageProps, any> {
    render() {
      return (
        <React.Fragment>
          <button onClick={() => this.props.go('/about')}>About</button>
          <Example/>
        </React.Fragment>
      )
    }
  }

} // namespace app
