import './App.css';
import SideMenu from './components/sideMenu';
import BrowserBreadcrumb from './components/browserBreadcrumb';
import ServerContent from './components/serverContent';
function App() {

  return (
    <>
      <div className='bg-darker'></div>
      <SideMenu />
      <hr className="side-menu-line"/>

      <div className="mid-section">
        <BrowserBreadcrumb />
        <ServerContent />
      </div>
    </>
  )
}

export default App;
