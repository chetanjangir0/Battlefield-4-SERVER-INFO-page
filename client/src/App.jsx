import './App.css';
import SideMenu from './components/sideMenu';
import BrowserBreadcrumb from './components/browserBreadcrumb';
import ServerContent from './components/serverContent';
import InviteMenu from './components/inviteMenu';
function App() {

  return (
    <>
      <div className='bg-darker'></div>
      <InviteMenu />
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
