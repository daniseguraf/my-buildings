import { useColorScheme } from '@hooks/useColorScheme'
import { ActionIcon, Tooltip } from '@mantine/core'
import { MoonIcon } from '@phosphor-icons/react/dist/csr/Moon'
import { SunIcon } from '@phosphor-icons/react/dist/csr/Sun'

export const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  const isDark = colorScheme === 'dark'

  return (
    <Tooltip label={isDark ? 'Modo claro' : 'Modo oscuro'}>
      <ActionIcon
        variant="subtle"
        size="lg"
        onClick={toggleColorScheme}
        aria-label="Cambiar tema"
      >
        {isDark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
      </ActionIcon>
    </Tooltip>
  )
}
