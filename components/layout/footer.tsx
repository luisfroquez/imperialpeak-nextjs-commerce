import Link from 'next/link'

import { COMPANY_NAME, SITE_NAME } from 'app/env-constants'
import InstagramIcon from 'components/icons/instgram'
import FooterMenu from 'components/layout/footer-menu'
import LogoSquare from 'components/logo-square'
import { getMenu } from 'lib/shopify'
import { Suspense } from 'react'

export default async function Footer() {
  const currentYear = new Date().getFullYear()
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '')
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700'
  const menu = await getMenu('next-js-frontend-footer-menu')
  const copyrightName = COMPANY_NAME || SITE_NAME || ''

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <hr className="h-px w-full border-t border-neutral-200 dark:border-neutral-700" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6  px-6 py-12 text-sm  md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div>
          <Link className="flex items-center gap-2 text-black dark:text-white md:pt-1" href="/">
            <LogoSquare size="sm" />
            <span>{SITE_NAME}</span>
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
        <div className="md:ml-auto">
          <a
            className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
            aria-label="Explora con Imperial Peak"
            href="https://instagram.com/theimperialpeak"
            target="_blank"
          >
            <span className="px-3">
              <InstagramIcon />
            </span>
            <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
            <span className="px-3">Explora con nosotros</span>
          </a>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
          {/* <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p>Designed in California</p> */}
          <p className="md:ml-auto">
            Made with 🖤 by{' '}
            <a href="https://roque.dev" className="text-black dark:text-white">
              Roque.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
