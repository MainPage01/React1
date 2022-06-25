import './App.css';

// import "./Classcomponent1"
  import Class1 from "./Classcomponent1";

  import ClassComponent from "./ClassComponent2"

function App() {
  return (
      <div className="App">
        <Class1  title="hello component(this is the props)"/>
        <ClassComponent text="Hello second "/>


      </div>
  );
}

export default App;
