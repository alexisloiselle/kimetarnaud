import { generatePseudoRandomString } from './random'

export const generateUniqueFileName = (file: File): string => {
  const fileExt = file.name.split('.').pop()
  const randomString = generatePseudoRandomString(10)
  return `${Date.now()}-${randomString}.${fileExt}`
}
