import Header from './components/Header'
import Navbar from './components/Navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className='bg-body-color h-100'>
        <Header/>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
