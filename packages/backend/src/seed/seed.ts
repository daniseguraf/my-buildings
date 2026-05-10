import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@generated/prisma/client'
import * as bcrypt from 'bcrypt'
import { buildingsData, usersData } from './initialData'

const prismaService = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
})

export const seed = async () => {
  await deleteAllData()
  await seedUsers()
  await seedBuildings()
  await seedResidentUsers()

  console.log('Database seeded successfully')
}

const deleteAllData = async () => {
  console.log('Deleting existing data...')

  await prismaService.building.deleteMany()
  await prismaService.user.deleteMany()
  await prismaService.commonArea.deleteMany()
  await prismaService.reservation.deleteMany()

  // console.log('All data has been deleted')
}

const seedUsers = async () => {
  console.log('Seeding users...')
  const hashedPassword = await bcrypt.hash('1234ABCabc$', 10)

  const users = await Promise.all(
    usersData.map(user => {
      // eslint-disable-next-line unused-imports/no-unused-vars
      const { buildingId, ...userData } = user

      return prismaService.user.create({
        data: { ...userData, password: hashedPassword },
      })
    })
  )

  return users
}

const seedBuildings = async () => {
  console.log('Seeding buildings...')
  const buildings = await Promise.all(
    buildingsData.map(building =>
      prismaService.building.create({
        data: building,
      })
    )
  )

  return buildings
}

const seedResidentUsers = async () => {
  console.log('Seeding resident users...')
  const residentUsers = usersData.filter(user => user.buildingId)

  await Promise.all(
    residentUsers.map(residentUser => {
      return prismaService.user.update({
        where: { id: residentUser.id },
        data: { buildingId: residentUser.buildingId },
      })
    })
  )
}

void seed()
