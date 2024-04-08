import { AppProvider } from './providers/AppProvider'
import { AppRoutes } from '@/routes'
import './App.css'

export default function App() : JSX.Element {

    return (
        
       <AppProvider>
            <AppRoutes />
       </AppProvider>
    )
}

