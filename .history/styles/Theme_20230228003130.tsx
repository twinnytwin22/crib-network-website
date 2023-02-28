'use client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import dynamic from 'next/dynamic';
import 'styles/style.css'


const ThemeProvider = dynamic(
    () => {
      return import('next-themes').then(mod => mod.ThemeProvider);
    },
    { ssr: false, }
  );




export const Providers = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return ( 
  <>
         <ThemeProvider enableSystem={true} attribute="class">
          {children}
         
         </ThemeProvider> 
         <ToastContainer/> 
         </>
        
     
  )
}

export default Providers
