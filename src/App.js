import './App.css';
import Profile from './profile/profile';
import index from './index.jpg'
function App() {
  const handleName = (name) =>{
    alert(name)
  }
  return (
    <div className="App">
      <Profile handleName = {(e)=>handleName(e)} fullName='Hamdi' bio='fast' profession='dev'>
        <img src={index} alt="" />
      </Profile>
    </div>
  );
}

export default App;
