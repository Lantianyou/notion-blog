import '../styles/global.css'
import 'katex/dist/katex.css'
import { SiteLayout } from '@/components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </>
  )
}
