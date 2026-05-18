import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      <Menu />

      <main style={{ padding: '20px', width: '100%' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout