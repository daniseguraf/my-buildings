import type { MantineColorScheme } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useLocalStorage<MantineColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = () => {
    setColorScheme(current => (current === 'dark' ? 'light' : 'dark'))
  }

  return { colorScheme, setColorScheme, toggleColorScheme }
}
