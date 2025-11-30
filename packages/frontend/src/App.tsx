import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import { MantineProvider } from '@mantine/core'
import './index.css'
import { theme } from './theme'

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </MantineProvider>
  )
}

export default App
