export const actions = {
  erase: 'erase',
  fill: 'fill'
} as const

export type Actions = keyof typeof actions