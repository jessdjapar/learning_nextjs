import '@/styles/globals.css'
//import '@/styles/Home.module.css'
import MainLayout from '@/components/layout/main-layout'

export default function App({ Component, pageProps }) {
  return (
    <> 
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
    </>
  )
}
