import {
  Button,
  Drawer,
  Group,
  NumberInput,
  Select,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import type {
  BuildingFormProps,
  BuildingFormValues,
} from '../types/building.types'
import type { FC } from 'react'
import { PropertyTypeValues } from '@my-buildings/shared/index'
import { useBuildings } from '@features/buildings/hooks/useBuildings'

export const BuildingForm: FC<BuildingFormProps> = ({ opened, onClose }) => {
  const { create } = useBuildings()

  const form = useForm<BuildingFormValues>({
    initialValues: {
      name: '',
      address: '',
      district: '',
      city: '',
      province: '',
      postalCode: '',
      managerId: undefined,
      propertyType: PropertyTypeValues.RESIDENTIAL,
      yearBuilt: undefined,
      floors: undefined,
      phoneNumber: '',
      email: '',
      description: '',
    },
  })

  const handleClose = () => {
    onClose()
    form.reset()
  }

  const handleCreate = () => {
    create.mutate(form.values)
  }

  return (
    <Drawer
      opened={opened}
      onClose={handleClose}
      title="Crear Nuevo Edificio"
      position="right"
      size="lg"
      padding="xl"
    >
      <Stack gap="md">
        <TextInput
          label="Nombre del Edificio"
          placeholder="Ej: Torre Residencial Los Pinos"
          required
          {...form.getInputProps('name')}
        />

        <TextInput
          label="Dirección"
          placeholder="Ej: Av. Principal 123"
          required
          {...form.getInputProps('address')}
        />

        <Group grow>
          <TextInput
            label="Distrito"
            placeholder="Ej: San Isidro"
            required
            {...form.getInputProps('district')}
          />

          <TextInput
            label="Ciudad"
            placeholder="Ej: Lima"
            required
            {...form.getInputProps('city')}
          />
        </Group>

        <Group grow>
          <TextInput
            label="Provincia"
            placeholder="Ej: Lima"
            required
            {...form.getInputProps('province')}
          />

          <TextInput
            label="Código Postal"
            placeholder="Ej: 15001"
            {...form.getInputProps('postalCode')}
          />
        </Group>

        <NumberInput
          label="Gerente del Edificio"
          placeholder="Ej: 1"
          required
          min={1}
          hideControls
          {...form.getInputProps('managerId')}
        />

        <Select
          label="Tipo de Propiedad"
          placeholder="Selecciona el tipo"
          required
          data={[
            { value: PropertyTypeValues.RESIDENTIAL, label: 'Residencial' },
            { value: PropertyTypeValues.COMMERCIAL, label: 'Comercial' },
            { value: PropertyTypeValues.MIXED, label: 'Mixto' },
          ]}
          {...form.getInputProps('propertyType')}
        />

        <Group grow>
          <NumberInput
            label="Año de Construcción"
            placeholder="Ej: 2020"
            required
            min={1800}
            max={new Date().getFullYear()}
            hideControls
            {...form.getInputProps('yearBuilt')}
          />

          <NumberInput
            label="Número de Pisos"
            placeholder="Ej: 10"
            required
            min={1}
            max={200}
            hideControls
            {...form.getInputProps('floors')}
          />
        </Group>

        <Group grow>
          <TextInput
            label="Teléfono"
            placeholder="Ej: +51 987 654 321"
            {...form.getInputProps('phoneNumber')}
          />

          <TextInput
            label="Email"
            placeholder="Ej: contacto@edificio.com"
            type="email"
            {...form.getInputProps('email')}
          />
        </Group>

        <Textarea
          label="Descripción"
          placeholder="Descripción del edificio (opcional)"
          rows={3}
          {...form.getInputProps('description')}
        />

        <Group justify="flex-end" mt="md">
          <Button variant="light" size="sm" onClick={handleClose}>
            Cancelar
          </Button>
          <Button size="sm" onClick={handleCreate}>
            Crear Edificio
          </Button>
        </Group>
      </Stack>
    </Drawer>
  )
}
