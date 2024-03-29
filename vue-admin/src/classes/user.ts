import { Role } from '@/classes/role'
import { Entity } from '@/interfaces/entity'

export class User implements Entity {
  id: number
  first_name: string
  last_name: string
  email: string
  role: Role
  permission: string[]

  constructor (id = 0, first_name = '', last_name = '', role = new Role(), email = '', permission: string[] = []) {
    this.id = id
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.role = role
    this.permission = permission
  }
}
