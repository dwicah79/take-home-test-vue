<template>
  <div class="navbar bg-base-100 shadow-sm md:px-56 font-semibold">
    <div class="flex-1">
      <router-link to="/">
        <img src="../assets/images/logo.png" class="w-24" alt="" />
      </router-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 font-poppins">
        <li>
          <details>
            <summary>Our Services</summary>
            <ul class="bg-base-100 rounded-t-none p-2 w-[32rem] grid grid-cols-2 gap-4">
              <div>
                <li class="menu-title">
                  <router-link
                    to="/it-outsourcing"
                    class="text-secondary-100 text-xl hover:text-primary-100 hover:cursor-pointer font-bold"
                  >
                    IT Outsourcing
                  </router-link>
                </li>
                <ol class="list-disc pl-10 text-black">
                  <li class="list-item">
                    <router-link
                      to="/independent-staff-augmentation"
                      class="hover:bg-white hover:text-primary-100"
                    >
                      Independent Staff Augmentation
                    </router-link>
                  </li>
                  <li class="list-item">
                    <router-link
                      to="/team-augmentation"
                      class="hover:bg-white hover:text-primary-100"
                    >
                      Team Augmentation
                    </router-link>
                  </li>
                  <li class="list-item">
                    <router-link
                      to="/it-managed-services"
                      class="hover:bg-white hover:text-primary-100"
                    >
                      IT Managed Services Software Development
                    </router-link>
                  </li>
                </ol>
              </div>
              <div>
                <li class="menu-title">
                  <router-link
                    to="/digital-transformation"
                    class="font-bold text-secondary-100 text-xl hover:text-primary-100 hover:cursor-pointer"
                  >
                    Digital Transformation
                  </router-link>
                </li>
                <ol class="list-disc pl-10">
                  <li class="list-item">
                    <router-link to="/digitisation" class="hover:bg-white hover:text-primary-100">
                      Digitisation
                    </router-link>
                  </li>
                  <li class="list-item">
                    <router-link to="/digitalisation" class="hover:bg-white hover:text-primary-100">
                      Digitalisation
                    </router-link>
                  </li>
                </ol>
              </div>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>About</summary>
            <ul class="bg-base-100 rounded-t-none px-5 w-36">
              <li>
                <router-link
                  to="/about-mgs"
                  class="bg-white hover:text-primary-100 text-secondary-100"
                >
                  About mgs
                </router-link>
              </li>
              <li>
                <router-link
                  to="/case-study"
                  class="bg-white hover:text-primary-100 text-secondary-100"
                >
                  Case Study
                </router-link>
              </li>
              <li>
                <router-link to="/blog" class="bg-white hover:text-primary-100 text-secondary-100">
                  Blog
                </router-link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <router-link to="/career" class="hover:text-primary-100"> Career </router-link>
        </li>
        <li>
          <details>
            <summary>EN</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
              <li>
                <router-link to="/en" class="hover:text-primary-100"> English </router-link>
              </li>
              <li>
                <router-link to="/id" class="hover:text-primary-100">
                  Bahasa Indonesia
                </router-link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply text-primary-100;
}
</style>
