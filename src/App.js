import './App.css';
import ClickCounter from './component/ClickCounter'
import HoverCounter from './component/HoverCounter'
import TestMemo from './component/TestMemo'
// import TestRef from './component/TestRef'
function App() {
  return (
    <div className="App">
      <ClickCounter/>
      <HoverCounter/>
     <TestMemo/>
     {/* <TestRef/> */}
    </div>
  );
}

export default App;
