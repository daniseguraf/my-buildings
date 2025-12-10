import { useBuildings } from '@features/buildings/hooks/useBuildings'
import {
  Button,
  Card,
  Grid,
  Group,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { Link } from 'react-router'

export const BuildingsListPage = () => {
  const { data: buildings, isLoading, error } = useBuildings()

  console.log('buildings', buildings)
  return (
    <>
      <Group justify="space-between" align="center" w="100%">
        <Title order={2}>Buildings List</Title>

        <Button component={Link} to="/create-building">
          Crear nuevo edificio
        </Button>
      </Group>

      <Grid>
        {isLoading && (
          <Grid.Col span={12}>
            <Skeleton height={100} />
          </Grid.Col>
        )}

        {buildings?.map(({ id, name, address, city, province }) => (
          <Grid.Col span={4} key={id}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Stack gap="md" h="100%">
                <div>
                  <Title order={4} mb="xs">
                    {name}
                  </Title>
                  <Text size="sm" c="dimmed" mb="xs">
                    {address}
                  </Text>
                  <Text size="sm" c="dimmed">
                    {city}, {province}
                  </Text>
                </div>

                <div style={{ flex: 1 }}>
                  <Text size="sm" fw={500} mb={4}>
                    Administrador:
                  </Text>
                  <Text size="sm" c="dimmed">
                    No asignado
                  </Text>
                </div>

                <Button
                  component={Link}
                  to={`/buildings/${id}`}
                  variant="light"
                  fullWidth
                  mt="auto"
                >
                  Ver más
                </Button>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}
