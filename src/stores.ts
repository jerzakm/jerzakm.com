import { writable } from 'svelte/store'

export const physicsDomElements: IDomBody[] = []
export const physicsActive = writable(false)

interface IDomBody {
  element: HTMLElement
  body?: any //MatterjS body
  initialLoc: DOMRect
  id: string
}
