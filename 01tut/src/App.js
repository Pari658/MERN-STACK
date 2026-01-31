import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  // return jsx...
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {handleNameChange()} !</p>
        <p>{name} {1} {[1,2,3]} [1,2,3] {true === false}</p>
      </header>
       */}
       <Header />
       <Content />
       <Footer />
    </div>
  );
}

export default App;
