import type { MantineColorScheme } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useLocalStorage<MantineColorScheme>({
    key: 'color-scheme',
    defaultValue: 'light',
  })

  const toggleColorScheme = () => {
    setColorScheme(current => (current === 'dark' ? 'light' : 'dark'))
  }

  return { colorScheme, toggleColorScheme }
}
