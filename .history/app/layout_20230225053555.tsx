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
      <body className='h-[90vh] bg-red-100 dark:bg-gray-900 '>
        <div className='mt-20'/>
        <Nav/>
        {children}
        <Foot/>
        </body>
    </html>
  )
}
