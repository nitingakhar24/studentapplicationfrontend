import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Home from './Home';
import StudentView from './component/student/StudentView';

function App() {
  return (
    <div className="App">
     <h2>Welcome to Student Application</h2>
     <Home />
     <StudentView />
    </div>
  );
}

export default App;
