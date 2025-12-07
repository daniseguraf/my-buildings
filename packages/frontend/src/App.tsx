import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import { MantineProvider } from '@mantine/core'
import './index.css'
import { theme } from './theme'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AppLayout } from '@/app/layouts/AppLayout'
import { BuildingsListPage } from '@/features/buildings/pages/BuildingsListPage'
import { BuildingDetailPage } from '@/features/buildings/pages/BuildingDetailPage'
import { CreateBuildingPreview } from '@/features/buildings/pages/CreateBuildingPreview'

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/buildings" element={<BuildingsListPage />} />
            <Route path="/buildings/:id" element={<BuildingDetailPage />} />
            <Route
              path="/create-building"
              element={<CreateBuildingPreview />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
