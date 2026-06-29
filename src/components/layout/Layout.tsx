import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { MobileBottomBar } from './MobileBottomBar'

export function Layout() {
  return (
    <div className="min-h-screen bg-brand-blue text-white">
      <Header />
      <main className="pb-14 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  )
}
