import { AppShell, NavLink } from '@mantine/core'
import { BuildingIcon } from '@phosphor-icons/react/dist/csr/Building'
import { HouseIcon } from '@phosphor-icons/react/dist/csr/House'
import { CalendarIcon } from '@phosphor-icons/react/dist/csr/Calendar'
import { useLocation, useNavigate } from 'react-router'

const menuItems = [
  {
    label: 'Dashboard',
    icon: HouseIcon,
    path: '/',
    description: 'Vista general y estadísticas',
  },
  {
    label: 'Buildings',
    icon: BuildingIcon,
    path: '/buildings',
    description: 'Gestión de edificios',
  },
  {
    label: 'Reservations',
    icon: CalendarIcon,
    path: '/reservations',
    description: 'Reservas de áreas comunes',
  },
]

export const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <AppShell.Navbar p="md">
      <AppShell.Section grow>
        {menuItems.map(item => {
          const Icon = item.icon
          const isActive = location.pathname === item.path

          return (
            <NavLink
              key={item.path}
              active={isActive}
              label={item.label}
              description={item.description}
              leftSection={<Icon size={20} />}
              onClick={() => navigate(item.path)}
              mb="xs"
              style={{
                borderRadius: '8px',
              }}
            />
          )
        })}
      </AppShell.Section>
    </AppShell.Navbar>
  )
}
