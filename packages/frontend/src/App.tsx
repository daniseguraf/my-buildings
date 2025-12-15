import { MantineProvider } from '@mantine/core'
import './index.css'
import { theme } from './theme'
import { BrowserRouter } from 'react-router'
import { AppRoutes } from '@app/routes/AppRoutes'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '@lib/queryClient'

import '@mantine/core/styles.css'
import { useColorScheme } from '@hooks/useColorScheme'

export const App = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={theme}
        defaultColorScheme={colorScheme}
        forceColorScheme={colorScheme}
      >
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
