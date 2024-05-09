import './App.css';
import MyRouter from './myredux/myroutes/Myindex';
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux';
import store from './myredux/mystore/MyStore';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <MyRouter/>
    </div>
    </Provider>
  );
}

export default App;