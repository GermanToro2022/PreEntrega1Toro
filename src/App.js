import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const greeting = 'Bienvenido a E-commerce Products!';


  return ( 
  <div className='App'>
  <NavBar />
  <ItemListContainer name={greeting} />;
  </div>  
  );
};

export default App;
