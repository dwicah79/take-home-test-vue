<template>
  <div class="flex flex-wrap w-full items-start">
    <div class="w-full lg:w-1/2 h-full px-6 lg:px-10 space-y-6">
      <div class="space-y-2">
        <h1 class="text-primary-100 text-lg font-semibold md:text-3xl">Contact Us</h1>
        <h1 class="text-2xl font-bold md:text-5xl">Haven't gotten what you want yet?</h1>
      </div>
      <div class="space-y-6 mt-8">
        <div class="flex items-center gap-3">
          <div class="p-4 rounded-lg bg-white">
            <img src="../assets/images/call.png" alt="Call" class="w-4 h-4 md:h-6 md:w-6 mt-1" />
          </div>
          <div>
            <h3 class="font-semibold text-gray-800">Call</h3>
            <a href="tel:+628123456789" class="text-gray-600 hover:text-primary-100"
              >+62 812 3456 789</a
            >
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="p-4 rounded-lg bg-white">
            <img src="../assets/images/mail.png" alt="Email" class="w-4 h-4 md:h-6 md:w-6 mt-1" />
          </div>
          <div>
            <h3 class="font-semibold text-gray-800">Email</h3>
            <a href="mailto:info@megagiga.co.id" class="text-gray-600 hover:text-primary-100"
              >info@megagiga.co.id</a
            >
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="p-4 rounded-lg bg-white">
            <img
              src="../assets/images/location.png"
              alt="Email"
              class="w-4 h-4 md:h-6 md:w-6 mt-1"
            />
          </div>
          <div>
            <h3 class="font-semibold text-gray-800">Location</h3>
            <p class="text-gray-600 md:w-1/2">
              Pondok Permai Wirosaban B10, Jl. Ki Ageng Pemanahan Bantul Yogyakarta 55191
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-md mb-10 mt-10 md:mt-0 md:mb-0">
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <input
          v-model="form.name"
          type="text"
          required
          placeholder="Name"
          class="w-full p-2 bg-gray-100 rounded-md focus:border-primary-100 focus:ring-1 focus:ring-primary-100 outline-none transition duration-200"
        />
        <input
          v-model="form.email"
          type="email"
          required
          placeholder="Email"
          class="w-full p-2 bg-gray-100 rounded-md focus:border-primary-100 focus:ring-1 focus:ring-primary-100 outline-none transition duration-200"
        />
        <input
          v-model="form.phone"
          type="tel"
          required
          placeholder="Phone"
          class="w-full p-2 bg-gray-100 rounded-md focus:border-primary-100 focus:ring-1 focus:ring-primary-100 outline-none transition duration-200"
        />
        <textarea
          v-model="form.message"
          rows="5"
          required
          placeholder="Your Message"
          class="w-full p-2 bg-gray-100 rounded-md focus:border-primary-100 focus:ring-1 focus:ring-primary-100 outline-none transition duration-200"
        ></textarea>
        <button
          type="submit"
          class="w-fit py-2 px-5 rounded-md hover:transition duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"
          :class="{
            'bg-primary-100 text-white hover:bg-primary-80': !isLoading && !submitError,
            'bg-secondary-100 text-white hover:bg-secondary-80': submitError,
            'opacity-50 cursor-not-allowed': isLoading,
          }"
          :disabled="isLoading"
        >
          <span v-if="!isLoading">Send</span>
          <span v-else class="flex items-center justify-center">
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const errors = ref({})
const isLoading = ref(false)
const submitError = ref('')

watch(
  form,
  (newValue) => {
    Object.keys(errors.value).forEach((key) => {
      if (newValue[key]) errors.value[key] = ''
    })
  },
  { deep: true },
)

const validateForm = () => {
  let isValid = true
  errors.value = {}

  if (!form.value.name || form.value.name.trim() === '') {
    errors.value.name = 'Full name is required'
    isValid = false
  }

  if (!form.value.email || !/^\S+@\S+\.\S+$/.test(form.value.email.trim())) {
    errors.value.email = 'Valid email is required'
    isValid = false
  }

  if (!form.value.message || form.value.message.trim() === '') {
    errors.value.message = 'Message is required'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isLoading.value = true
  submitError.value = ''

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/contact-uses`,
      {
        data: {
          name: form.value.name,
          email: form.value.email,
          phone: form.value.phone,
          message: form.value.message,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your message has been sent successfully.',
      confirmButtonColor: '#ED1C25',
      iconColor: '#ED1C25',
      background: '#ffffff',
      buttonsStyling: true,
      customClass: {
        confirmButton:
          'bg-primary-100 hover:bg-primary-80 text-white font-medium py-2 px-4 rounded-md',
      },
    })

    form.value = {
      name: '',
      email: '',
      phone: '',
      message: '',
    }
  } catch (error) {
    console.error('Submit error:', error.response?.data || error)
    submitError.value = 'Failed to send message. Please try again later.'

    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: submitError.value,
      confirmButtonColor: '#EC4899',
      background: '#ffffff',
      buttonsStyling: true,
      customClass: {
        confirmButton:
          'bg-secondary-100 hover:bg-secondary-80 text-white font-medium py-2 px-4 rounded-md',
      },
    })
  } finally {
    isLoading.value = false
  }
}
</script>
