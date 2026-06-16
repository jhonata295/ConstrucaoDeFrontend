import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Topbar />
        {children}
      </div>
    </div>
  );
}

export default Layout;