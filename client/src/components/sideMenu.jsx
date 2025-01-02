export default function SideMenu(){
    return (
      <div className='side-menu'>
        <div className='side-menu-tabs'>
          <div className="side-menu-games">
            <img src="/battlefield-5.png" alt="" />
            <img src="/battlefield-1.png" alt="" />
            <img src="/battlefield-4.png" alt="" />
            <img src="/battlefield-hardline.png" alt="" />
          </div>
  
          <div className='side-menu-other'>
            <img src="/career.png" alt="" />
            <img src="/watch.svg" alt="" />
            <img src="/news.svg" alt="" />
          </div>
  
        </div>
  
        <div className='side-menu-misc'></div>
      </div>
    )
  }