import { Carousel } from 'components/carousel'
import { ThreeItemGrid } from 'components/grid/three-items'
import Footer from 'components/layout/footer'
import { Suspense } from 'react'

export const runtime = 'nodejs'

export const metadata = {
  description: 'Tienda online de Imperial Peak, la mejor calidad en ropa para hombres.',
  openGraph: {
    type: 'website',
  },
}

export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  )
}
