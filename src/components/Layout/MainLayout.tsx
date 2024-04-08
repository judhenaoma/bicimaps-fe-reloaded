import {type ReactNode} from 'react'

type MainLayoutProps = {
    children : ReactNode
}

export const MainLayout = ({ children } : MainLayoutProps) => {
  return (
    <div className='min-h-full min-w-full bg-slate-300'>
        {children}
    </div>
  )
}
