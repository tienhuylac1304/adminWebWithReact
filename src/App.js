import anhDaiDien from './images/anh_dai_dien.jpg';
import eLaptop from './images/logo_E-Laptop_complete.png';
import Navigation from './component/Navigation';
import Header from './component/Header';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div className="App">
      <Header logo={eLaptop}></Header>
       <Navigation proImg={anhDaiDien} userName="Huy"></Navigation>
       <div className="page_content">
        <Dashboard img={eLaptop}></Dashboard>
       </div>
    </div>
  );
}
export default App;
