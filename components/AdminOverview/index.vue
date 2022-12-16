<template>
  <div class="page-header d-print-none">
    <div class="container-xl">
      <div class="row g-2 align-items-center">
        <div class="col">
          <div class="page-pretitle">Tổng quan</div>
          <slot name="title"></slot>
        </div>
        <div class="col-auto ms-auto d-print-none">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>