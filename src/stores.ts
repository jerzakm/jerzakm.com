export const physicsDomElements: IDomBody[] = []

interface IDomBody {
  element: HTMLElement
  body?: any //MatterjS body
  initialLoc: DOMRect
  id: string
}
