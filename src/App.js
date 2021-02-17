import './App.css';
import ClickCounter from './component/ClickCounter'
import HoverCounter from './component/HoverCounter'
import TestMemo from './component/TestMemo'
import Animation from './component/Animation'
function App() {
  return (
    <div className="App">
      <ClickCounter/>
      <HoverCounter/>
     <TestMemo/>
     <Animation/>
    </div>
  );
}

export default App;
