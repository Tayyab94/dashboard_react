import './App.css'
import MainDashboard from './components/MainDashboard/MainDashboard';
import RightSidebar from './components/RightStidebar/RightSidebar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDashboard />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
