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

        <div className="side-menu-exit">
          <div className='side-menu-misc'>
            <div><img src="/side-menu-help.svg" alt="" /></div>
            <div><img src="/side-menu-quit.svg" alt="" /></div>
          </div>
        </div>
        {/* <hr className="vertical-line"/> */}
      </div>
    )
  }