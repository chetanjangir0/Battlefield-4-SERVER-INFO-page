import './App.css';
import SideMenu from './components/sideMenu';
import BrowserBreadcrumb from './components/browserBreadcrumb';

function App() {

  return (
    <>
      <div className='bg-darker'></div>
      <SideMenu />
      <hr className="side-menu-line"/>

      <div className="mid-section">
        <BrowserBreadcrumb />

      </div>
    </>
  )
}

export default App;
