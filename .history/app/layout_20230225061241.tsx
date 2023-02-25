import 'styles/style.css'
import Nav from 'ui/Navigation/Nav'
import Foot from 'ui/Navigation/Foot'

export const metadata = {
  title: 'Crib Network',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className=''>
        <div className='grid grid-cols-1 h-screen bg-red-200 dark:bg-gray-900 content-center mx-auto'>
        <div className='mt-20'>
        <Nav/></div>
        {children}
        <div className=''>
        <Foot/></div>
        </div>
        </body>
    </html>
  )
}
