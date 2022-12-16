<template>
  <TheSEO :seo="seo" />
  <AdminOverview>
    <template #title>
      <h2 class="page-title">Tên miền</h2>
    </template>
    <template #content>
      <div class="btn-list">
        <a
          v-on:click="openModal()" 
          href="#"
          class="btn btn-primary d-none d-sm-inline-block"
          data-bs-toggle="modal"
          data-bs-target="#modal-report"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Tạo tên miền
        </a>
        <a
          href="#"
          class="btn btn-primary d-sm-none btn-icon"
          data-bs-toggle="modal"
          data-bs-target="#modal-report"
          aria-label="Create new report"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </a>
      </div>
    </template>
  </AdminOverview>
  <ModalAdmin v-if="showModal" @close-modal="closeModal()">
    <template #header>
      <h5 class="modal-title">Tạo tên miền</h5>
    </template>
    <template #content>
      <div class="modal-body">
        <div class="mb-3">
          <label class="form-label">Tên</label>
          <input
            type="text"
            class="form-control"
            name="name"
            placeholder="Name"
            value=""
            required=""
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Tên miền</label>
          <input
            type="text"
            class="form-control"
            name="domain_name"
            value=""
            required=""
            placeholder="example.com"
          />
          <small class="mt-2 d-block alert-domains d-none text-red"
            >Domain name already in use !!!</small
          >
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="mb-3">
              <label class="form-label">Đơn vị sản xuất</label>
              <div class="input-group input-group-flat">
                <input
                  type="text"
                  class="form-control ps-2"
                  value=""
                  required=""
                  name="production_unit"
                  placeholder="inet.vn"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="mb-3">
              <label class="form-label">Thời hạn</label>
              <select class="form-select" name="year" required="">
                <option value="1_years">1 years</option>
                <option value="2_years">2 years</option>
                <option value="3_years">3 years</option>
                <option value="5_year">5 years</option>
                <option value="10_year">10 years</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-lg-6">
            <div class="">
              <label class="form-label">Giá cũ</label>
              <input
                type="text"
                name="price"
                value="0"
                class="form-control format-price"
                required=""
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="">
              <label class="form-label">Giá giảm</label>
              <input
                type="text"
                name="price_special"
                value="0"
                class="form-control format-price"
                required=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Trạng thái</label>
              <select class="form-select" name="status">
                <option value="private">Private</option>
                <option value="pending">Pending</option>
                <option value="public">Public</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Ngày thanh toán</label>
              <input
                type="date"
                name="date_payment"
                value=""
                class="form-control"
                required=""
              />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label">Địa chỉ</label>
              <input type="text" class="form-control" value="" name="address" />
            </div>
          </div>
          <div class="col-lg-12">
            <div>
              <label class="form-label">Thông tin thêm</label>
              <textarea class="form-control" name="note" rows="3"></textarea>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <a href="#" class="btn btn-link link-secondary" data-bs-dismiss="modal">
        Hủy bỏ
      </a>
      <button
        type="submit"
        id="submit-domain-create"
        class="btn btn-primary ms-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Tạo tên miền
      </button>
    </template>
  </ModalAdmin>
</template>
<script setup>
definePageMeta({
  layout: "admin",
});
const seo = {
  title: "Admin - Domain",
  keyword: "Keyword on Admin - Domain",
  desciption: "Description on Admin - Domain",
};
</script>
<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = !this.showModal;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  created() {
  },
};
</script>