export const speak = (text) => {
  return {
    type: 'SPEAK',
    text
  }
}