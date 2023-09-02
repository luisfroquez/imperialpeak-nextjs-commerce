import clsx from 'clsx'

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 40 41"
      {...props}
      className={clsx('h-4 w-4 fill-black dark:fill-white', props.className)}
    >
      <path
        d="M40 0.644806V40.6448H28.0732L22.5518 35.125L26.4649 31.2119L34.0107 38.7576H38.1128V2.53048H1.88567V38.7576H5.9878L15.4192 29.3262L26.7378 40.6448H0V0.644806H40Z"
        fill="#D4D4DE"
      />
    </svg>
  )
}
