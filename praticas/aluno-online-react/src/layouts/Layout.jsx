import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

function Layout() {
  return (
    <div className="container">
      <Menu />

      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout