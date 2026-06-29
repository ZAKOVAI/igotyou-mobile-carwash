import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { ServicesPage } from '@/pages/ServicesPage'
import { ServiceAreaPage } from '@/pages/ServiceAreaPage'
import { GalleryPage } from '@/pages/GalleryPage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service-area" element={<ServiceAreaPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
