import AbcComponent from './AbcComponent';
import './App.css';
import  MyComponent from './MyComponent'
import XyzComponent from './XyzComponent';
import Messenger from './Messenger';
import GreetUser from './GreetUser';
import Calc from './Calc'
function App() {
  return (
    <div>
      <Calc/>
      <h1>This is my React Js App</h1>
      <AbcComponent/>
       {AbcComponent()}
      <XyzComponent/>
      <MyComponent/>
      <Messenger/>
      <GreetUser/>
    </div>
  );
}

export default App;
