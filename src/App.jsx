import './App.css';
import bgImg from './assets/bg.png';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="container mt-3">
     <div className="row">
       <div className="col-md-5">
         <Signup />
       </div>
       <div className="col-md-7 my-auto">
         <img className='img-fluid w-100' src={bgImg} alt="" />
       </div>
     </div>
    </div>
  );
}

export default App;
