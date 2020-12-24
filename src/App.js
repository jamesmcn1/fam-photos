import logo from './logo.svg';
import './App.css';
import GDImageViewer, { required_fields_object } from './components/GDImageViewer';
import NormalImageList from './components/NormalImageList';
import './components/GDImageViewer.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>McNamara fam photos</h1>
        <NormalImageList />
      </header>
    </div>
  );
}

export default App;
