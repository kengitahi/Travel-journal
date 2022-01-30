import './styles.css';

import Nav from './components/Nav';
import Card from './components/Card';

import data from './data';

function App() {
  const entry = data.map(entry => {
    return (<Card
      {...entry}
    />)
  })

  return (
    <div className="main">
      <Nav />
      <div className="journal">
        {entry}
      </div>
    </div>
  );
}

export default App;
