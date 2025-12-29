import { Button, Stack, Text, Title } from '@mantine/core'

import { Center } from '@mantine/core'
import { BuildingApartmentIcon, PlusIcon } from '@phosphor-icons/react'

export const BuildingsEmptyState = ({
  onCreateBuilding,
}: {
  onCreateBuilding: () => void
}) => (
  <Center py={80}>
    <Stack align="center" gap="md">
      <BuildingApartmentIcon size={64} strokeWidth={1.5} color="#adb5bd" />
      <div style={{ textAlign: 'center' }}>
        <Title order={3} mb="xs">
          No existen edificios creados
        </Title>
        <Text c="dimmed" size="sm" mb="xl">
          Comienza creando tu primer edificio para gestionar tus propiedades
        </Text>
      </div>
      <Button
        leftSection={<PlusIcon size={20} />}
        size="md"
        onClick={onCreateBuilding}
      >
        Crear Primer Edificio
      </Button>
    </Stack>
  </Center>
)
