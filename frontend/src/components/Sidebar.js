export default function Sidebar({close}){
    return <div className="sidebar">
        <span onClick={close} >X</span>
     <div ><a className="sidebar-item" href="">Book</a></div>
     <div ><a className="sidebar-item" href="">Book</a></div>
     <div ><a className="sidebar-item" href="">Book</a></div>
     <div ><a className="sidebar-item" href="">Book</a></div>
     
    </div>
    }