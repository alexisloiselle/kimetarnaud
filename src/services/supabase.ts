import { createClient } from '@supabase/supabase-js'
import { generateUniqueFileName } from '../utils/files'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
)

type FormSubmission = {
  full_name: string
  menu_choice: string
  allergies: string
  special_request: string
}

export const addFormSubmission = async (data: FormSubmission) => {
  const { data: formSubmission, error } = await supabase.from('form_submissions_v2').insert([data])
  if (error) {
    throw error
  }
  return formSubmission
}

export const logError = async (error: string) => {
  try {
    await supabase.from('error_logs').insert([{ error }])
  } catch {
    // swallow
  }
}

export const uploadPhoto = async (file: File) => {
  const fileName = generateUniqueFileName(file)
  const filePath = `${fileName}`

  const { error } = await supabase.storage.from('photos').upload(filePath, file)

  if (error) {
    logError(`Photo upload error: ${error.message}`)
    throw error
  }
}

export const listPhotos = async (limit: number, offset: number) => {
  const { data, error } = await supabase.storage.from('photos').list(undefined, {
    limit,
    offset,
    sortBy: { column: 'created_at', order: 'desc' },
  })
  if (error) {
    logError(`Photo list error: ${error.message}`)
    throw error
  }

  return data.filter((item) => item.name !== '.emptyFolderPlaceholder')
}

export const getPhotoUrl = (path: string) => {
  const { data } = supabase.storage.from('photos').getPublicUrl(path)
  return data.publicUrl
}
