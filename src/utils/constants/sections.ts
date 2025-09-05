/* eslint-disable @typescript-eslint/no-explicit-any */
import InfoSection from '@/sections/InfoSection.vue'
import QuizSection from '@/sections/QuizSection.vue'
import StorySection from '@/sections/StorySection.vue'
import FaqSection from '@/sections/FaqSection.vue'
import ScheduleSection from '@/sections/ScheduleSection.vue'
import MenuSection from '@/sections/MenuSection.vue'
import PhotosSection from '@/sections/PhotosSection.vue'
import type { DefineComponent } from 'vue'

// biome-ignore lint/suspicious/noExplicitAny: lib typing
type SectionComponent = DefineComponent<{ id: string }, object, any>

type Section = {
  id: string
  Component: SectionComponent
  label: string
  shouldHide?: boolean
}

const weddingCeremonyDateTime = new Date('2025-09-06T18:45:00-04:00')

const ALL_SECTIONS = [
  { id: 'info', Component: InfoSection, label: 'Information' },
  {
    id: 'quiz',
    Component: QuizSection,
    label: 'Connaissez-vous les mariés ?',
    shouldHide: new Date() < weddingCeremonyDateTime,
  },
  { id: 'story', Component: StorySection, label: 'Histoire' },
  { id: 'faq', Component: FaqSection, label: 'FAQ' },
  { id: 'schedule', Component: ScheduleSection, label: 'Déroulement' },
  { id: 'menu', Component: MenuSection, label: 'Menus' },
  { id: 'photos', Component: PhotosSection, label: 'Photos' },
] satisfies Section[]

export const SECTIONS = ALL_SECTIONS.filter((section) => !section.shouldHide)
