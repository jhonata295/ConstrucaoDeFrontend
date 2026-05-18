import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

function Layout() {
  return (
<<<<<<< HEAD
    <div style={{ display: 'flex' }}>
      <Menu />

      <main style={{ padding: '20px', width: '100%' }}>
=======
    <div className="container">
      <Menu />

      <main className="content">
>>>>>>> develop
        <Outlet />
      </main>
    </div>
  )
}

export default Layout