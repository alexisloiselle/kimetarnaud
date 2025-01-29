import { createClient } from '@supabase/supabase-js'

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
  const { data: formSubmission, error } = await supabase.from('form_submissions').insert([data])
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
