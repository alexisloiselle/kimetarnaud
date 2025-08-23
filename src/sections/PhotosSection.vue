<script setup lang="ts">
import SectionLayout from './SectionLayout.vue'
import SectionContent from './SectionContent.vue'
import SpinnerComponent from '../components/atoms/SpinnerComponent.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { uploadPhoto, listPhotos, getPhotoUrl } from '../services/supabase'
import type { FileObject } from '@supabase/storage-js'

type Props = {
  id: string
}

defineProps<Props>()

const files = ref<File[]>([])
const uploading = ref(false)
const photos = ref<FileObject[]>([])
const error = ref<string | null>(null)

// --- Infinite Scroll State ---
const limit = 10
const offset = ref(0)
const hasMorePhotos = ref(true)
const loadingMore = ref(false)
const observerTarget = ref<Element | null>(null)
let observer: IntersectionObserver | null = null

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    files.value = Array.from(target.files)
    error.value = null
  }
}

async function handleUpload() {
  if (files.value.length === 0) {
    return
  }
  uploading.value = true
  error.value = null
  try {
    await Promise.all(files.value.map((file) => uploadPhoto(file)))
    files.value = [] // Reset file input
    await fetchInitialPhotos() // Refresh photo list
  } catch (e: unknown) {
    error.value = 'Il y a eu une erreur lors du téléversement des photos.'
    console.error(e)
  } finally {
    uploading.value = false
  }
}

async function fetchInitialPhotos() {
  photos.value = []
  offset.value = 0
  hasMorePhotos.value = true
  await loadMorePhotos()
}

async function loadMorePhotos() {
  if (loadingMore.value || !hasMorePhotos.value) {
    return
  }
  loadingMore.value = true
  try {
    const photoList = await listPhotos(limit, offset.value)
    if (photoList) {
      photos.value.push(...photoList)
      offset.value += limit
      if (photoList.length < limit) {
        hasMorePhotos.value = false
      }
    }
  } catch (e) {
    console.error(e)
    error.value = 'Impossible de charger les photos.'
  } finally {
    loadingMore.value = false
  }
}

function setupObserver() {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        loadMorePhotos()
      }
    },
    { threshold: 0.1 }
  )

  if (observerTarget.value) {
    observer.observe(observerTarget.value)
  }
}

onMounted(() => {
  fetchInitialPhotos()
  setupObserver()
})

onUnmounted(() => {
  if (observer && observerTarget.value) {
    observer.unobserve(observerTarget.value)
  }
})
</script>

<template>
  <SectionLayout :id="id">
    <SectionContent>
      <h2>Photos</h2>
      <p class="mb-4">Partagez ici vos photos de l'événement!</p>

      <div class="upload-form">
        <input
          type="file"
          @change="onFileChange"
          accept="image/*"
          class="file-input"
          id="file-upload"
          multiple
        />
        <label for="file-upload" class="file-label">
          {{ files.length > 0 ? `${files.length} photo(s) sélectionnée(s)` : 'Choisir des photos' }}
        </label>
        <button @click="handleUpload" :disabled="files.length === 0 || uploading" class="upload-button">
          {{ uploading ? 'Partage...' : 'Partager' }}
        </button>
      </div>
      <p v-if="error" class="error-message">{{ error }}</p>

      <div v-if="photos.length > 0" class="photo-gallery">
        <div v-for="photo in photos" :key="photo.id" class="photo-item">
          <img :src="getPhotoUrl(photo.name)" :alt="photo.name" />
        </div>
      </div>
      <div v-else-if="!loadingMore" class="empty-gallery">
        <p>Aucune photo pour le moment. Soyez le premier à en partager une!</p>
      </div>

      <div ref="observerTarget" class="observer-target"></div>

      <div v-if="loadingMore" class="loading-indicator">
        <SpinnerComponent />
      </div>
    </SectionContent>
  </SectionLayout>
</template>

<style scoped>
.upload-form {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.file-input {
  display: none;
}

.file-label {
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-right: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-label:hover {
  background-color: #e0e0e0;
}

.upload-button {
  background-color: #4caf50;
  color: white;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.upload-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error-message {
  color: red;
  margin-bottom: 1rem;
}

.photo-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.photo-item img {
  height: 200px;
  width: auto;
  border-radius: 8px;
}

.empty-gallery {
  text-align: center;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 8px;
}

.loading-indicator {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.observer-target {
  height: 20px;
}
</style>
