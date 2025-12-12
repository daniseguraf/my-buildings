import { Header } from '@components/layout/appShell/Header'
import { Navbar } from '@components/layout/appShell/Navbar'
import { AppShell } from '@mantine/core'
import { Outlet } from 'react-router'

export const AppLayout = () => {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 280, breakpoint: 'sm' }}
      padding="md"
    >
      <Header />
      <Navbar />

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
