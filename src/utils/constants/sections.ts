/* eslint-disable @typescript-eslint/no-explicit-any */
import InfoSection from '@/sections/InfoSection.vue'
import StorySection from '@/sections/StorySection.vue'
import FaqSection from '@/sections/FaqSection.vue'
import ScheduleSection from '@/sections/ScheduleSection.vue'
import MenuSection from '@/sections/MenuSection.vue'
import PhotosSection from '@/sections/PhotosSection.vue'
import type { DefineComponent } from 'vue'

// biome-ignore lint/suspicious/noExplicitAny: lib typing
type SectionComponent = DefineComponent<{ id: string }, object, any>

export const SECTIONS = [
  { id: 'info', Component: InfoSection, label: 'Information' },
  { id: 'story', Component: StorySection, label: 'Histoire' },
  { id: 'faq', Component: FaqSection, label: 'FAQ' },
  { id: 'schedule', Component: ScheduleSection, label: 'Déroulement' },
  { id: 'menu', Component: MenuSection, label: 'Menu' },
  { id: 'photos', Component: PhotosSection, label: 'Photos' },
] satisfies { id: string; Component: SectionComponent; label: string }[]
