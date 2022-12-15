<template>
  <div class="page-empty p-1">
    <ul class="d-flex justify-content-start align-items-center">
      <li>
        <nuxt-link to="/">
          <span class="btn bnt-info">Home</span>
        </nuxt-link>
      </li>
      <li class="ms-2">
        <nuxt-link to="/about">
          <span class="btn bnt-info">About</span>
        </nuxt-link>
      </li>
      <li class="ms-2">
        <nuxt-link to="/contact">
          <span class="btn bnt-info">Contact</span>
        </nuxt-link>
      </li>
      <li class="ms-2">
        <nuxt-link to="/admin">
          <span class="btn bnt-info">Admin</span>
        </nuxt-link>
      </li>
    </ul>
    <slot />
  </div>
</template>