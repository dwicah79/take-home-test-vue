<template>
  <footer class="bg-secondary-100 text-white py-12 px-4 md:px-16 lg:px-32">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
        <div class="w-full md:w-1/2 lg:w-2/5 lg:pr-32">
          <div class="flex items-center mb-4">
            <img src="../assets/images/footer.png" alt="logo mgs" class="w-32 h-auto" />
          </div>
          <p class="text-justify text-base md:text-lg">
            As an Information Technology Outsourcing (IT Outsourcing) company, we help your business
            to grow through qualified human resources.
          </p>
        </div>

        <div class="w-full md:w-1/2 lg:w-3/5 flex justify-between">
          <div class="w-auto lg:mt-5">
            <h2 class="font-semibold text-lg md:text-xl mb-4">Services</h2>
            <ul class="space-y-3">
              <li>
                <router-link to="/itOutsourcing" class="hover:text-primary-100 transition-colors">
                  IT Outsourcing
                </router-link>
              </li>
              <li>
                <router-link
                  to="/digitaltransformation"
                  class="hover:text-primary-100 transition-colors"
                >
                  Digital Transformation
                </router-link>
              </li>
              <li>
                <router-link to="/career" class="hover:text-primary-100 transition-colors">
                  Career
                </router-link>
              </li>
            </ul>
          </div>
          <div class="w-auto lg:mt-5">
            <h2 class="font-semibold text-lg md:text-xl mb-4">About</h2>
            <ul class="space-y-3">
              <li>
                <router-link to="/" class="hover:text-primary-100 transition-colors">
                  MGS
                </router-link>
              </li>
              <li>
                <router-link to="/history" class="hover:text-primary-100 transition-colors">
                  History
                </router-link>
              </li>
              <li>
                <router-link to="/team" class="hover:text-primary-100 transition-colors">
                  Our Team
                </router-link>
              </li>
            </ul>
          </div>
          <div class="w-auto lg:mt-5">
            <h2 class="font-semibold text-lg md:text-xl mb-4">Contact</h2>
            <ul class="space-y-3">
              <li>
                <router-link to="/call" class="hover:text-primary-100 transition-colors">
                  Call
                </router-link>
              </li>
              <li>
                <router-link to="/email" class="hover:text-primary-100 transition-colors">
                  Email
                </router-link>
              </li>
              <li>
                <router-link to="/location" class="hover:text-primary-100 transition-colors">
                  Location
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="border-white/20 my-8" />

      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 flex gap-2 justify-center md:justify-start">
          <a
            href=""
            class="p-3 rounded-lg md:text-lg bg-white text-secondary-100 hover:text-primary-100 transition-colors"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
          </a>
          <a
            href=""
            class="p-3 rounded-lg md:text-lg bg-white text-secondary-100 hover:text-primary-100 transition-colors"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
          </a>
          <a
            href=""
            class="p-3 rounded-lg md:text-lg bg-white text-secondary-100 hover:text-primary-100 transition-colors"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
          </a>
          <a
            href=""
            class="p-3 rounded-lg md:text-lg bg-white text-secondary-100 hover:text-primary-100 transition-colors"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
          </a>
        </div>
        <div
          class="md:w-1/2 w-full justify-center flex md:justify-end mt-10 md:mt-0 hover:text-primary-100 transition-colors"
        >
          <a href="" class="underline">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
