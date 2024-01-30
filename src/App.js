import WelcomeMessage from "./components/welcome"; 
import StudentInfo from "./components/student-info"; 
function App() { 
  return ( 
    <div className="App">
      <div class="container-fluid">
        <WelcomeMessage/> 
        <StudentInfo/>
      </div>
      <h3>Skills:</h3>
      <ol>
        <li>python</li>
        <li>java</li>
        <li>Data structures</li>
      </ol>
    </div>
  ); 
} 
export default App; 