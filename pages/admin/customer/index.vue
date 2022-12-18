<template>
  <TheSEO :seo="seo" />
  <AdminOverview>
    <template #title>
      <h2 class="page-title">Khách hàng</h2>
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
          <AdminIconPlus />
          Tạo khách hàng
        </a>
        <a
          href="#"
          class="btn btn-primary d-sm-none btn-icon"
          data-bs-toggle="modal"
          data-bs-target="#modal-report"
          aria-label="Create new report"
        >
          <AdminIconPlus />
        </a>
      </div>
    </template>
  </AdminOverview>
  <ModalAdmin v-if="showModal" @close-modal="closeModal()">
    <template #header>
      <h5 class="modal-title">Tạo mới khách hàng</h5>
    </template>
    <template #content>
      <div class="modal-body">
        <div class="row mb-3">
          <div class="col-lg-6">
            <div>
              <label class="form-label">Họ</label>
              <div class="input-group input-group-flat">
                <input
                  type="text"
                  class="form-control ps-2"
                  name="first_name"
                  required=""
                  value=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div>
              <label class="form-label">Tên</label>
              <div class="input-group input-group-flat">
                <input
                  type="text"
                  class="form-control ps-2"
                  name="last_name"
                  required=""
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-lg-12">
            <div>
              <label class="form-label">Địa chỉ</label>
              <input
                type="text"
                class="form-control ps-2"
                name="address"
                required=""
                value=""
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Ngày sinh</label>
              <div class="input-group input-group-flat">
                <input
                  type="date"
                  class="form-control ps-2"
                  name="birth_day"
                  required=""
                  value=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">CCCD/CMND</label>
              <div class="input-group input-group-flat">
                <input
                  type="text"
                  class="form-control ps-2"
                  name="identity_card"
                  required=""
                  value=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Email</label>
              <div class="input-group input-group-flat">
                <input
                  type="email"
                  class="form-control ps-2"
                  name="email"
                  value=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Điện thoại</label>
              <div class="input-group input-group-flat">
                <input
                  type="text"
                  class="form-control ps-2"
                  name="phone"
                  required=""
                  value=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div>
              <label class="form-label">Zalo</label>
              <div class="input-group input-group-flat">
                <input
                  type="text"
                  class="form-control ps-2"
                  name="zalo"
                  value=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div>
              <label class="form-label">fax</label>
              <div class="input-group input-group-flat">
                <input
                  type="text"
                  class="form-control ps-2"
                  name="fax"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label">Tên công ty</label>
              <input
                type="text"
                class="form-control"
                name="company_name"
                value=""
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label">Địa chỉ công ty</label>
              <input
                type="text"
                class="form-control"
                name="company_address"
                value=""
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div>
              <label class="form-label">Mã số thuế</label>
              <input
                type="text"
                class="form-control"
                name="company_tax_code"
                value=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label">Trạng thái</label>
              <select class="form-select" name="status">
                <option value="private">Private</option>
                <option value="pending">Pending</option>
                <option value="public">Public</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <a
        href="#"
        class="btn btn-default link-secondary"
        data-bs-dismiss="modal"
      >
        Hủy bỏ
      </a>
      <button type="submit" class="btn btn-primary ms-auto">
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
        Tạo khách hàng
      </button>
    </template>
  </ModalAdmin>
  <AdminBody>
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Danh sách khách hàng</h3>
        </div>
        <div class="card-body border-bottom py-3">
          <div class="d-flex">
            <div class="text-muted">
              Hiện
              <div class="mx-2 d-inline-block">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  readonly=""
                  value="20"
                  size="3"
                  aria-label="Invoices count"
                />
              </div>
              mục
            </div>
            <div class="ms-auto text-muted">
              Tìm kiếm:
              <div class="ms-2 d-inline-block">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  aria-label="Search invoice"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table card-table table-vcenter text-nowrap datatable">
            <thead>
              <tr>
                <th class="w-1">
                  <input
                    class="form-check-input m-0 align-middle"
                    type="checkbox"
                    aria-label="Select all invoices"
                  />
                </th>
                <th class="w-1">
                  No.
                  <!-- Download SVG icon from http://tabler-icons.io/i/chevron-up -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-sm text-dark icon-thick"
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
                    <polyline points="6 15 12 9 18 15"></polyline>
                  </svg>
                </th>
                <th>Họ &amp; tên</th>
                <th>Điện thoại</th>
                <th>Email</th>
                <th>Ngày sinh</th>
                <th>CCCD/CMND</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    class="form-check-input m-0 align-middle"
                    type="checkbox"
                    aria-label="Select invoice"
                  />
                </td>
                <td><span class="text-muted">1</span></td>
                <td>
                  <a href="" class="text-reset customers_edit">
                    <h3 class="title-name">Lâm Nguyễn Văn</h3>
                  </a>
                </td>
                <td>
                  <span class="title-name">0815143089</span>
                </td>
                <td>
                  <span class="title-name">Nguyenlamabc9@gmail.com</span>
                </td>
                <td>1980/10/01</td>
                <td>
                  <span class="label_year pending">0815143089</span>
                </td>
                <td>
                  <span class="label_year public">public</span>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    class="form-check-input m-0 align-middle"
                    type="checkbox"
                    aria-label="Select invoice"
                  />
                </td>
                <td><span class="text-muted">2</span></td>
                <td>
                  <a href="" class="text-reset customers_edit">
                    <h3 class="title-name">Văn Đỗ Văn</h3>
                  </a>
                </td>
                <td>
                  <span class="title-name">096 238 23 23</span>
                </td>
                <td>
                  <span class="title-name"></span>
                </td>
                <td>1075/01/01</td>
                <td>
                  <span class="label_year pending">096 238 23 23</span>
                </td>
                <td>
                  <span class="label_year private">private</span>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    class="form-check-input m-0 align-middle"
                    type="checkbox"
                    aria-label="Select invoice"
                  />
                </td>
                <td><span class="text-muted">3</span></td>
                <td>
                  <a href="" class="text-reset customers_edit">
                    <h3 class="title-name">A Nguyen Văn</h3>
                  </a>
                </td>
                <td>
                  <span class="title-name">0918456441</span>
                </td>
                <td>
                  <span class="title-name">phamvanchieu@gmail.com</span>
                </td>
                <td>2002/09/09</td>
                <td>
                  <span class="label_year pending">123456789</span>
                </td>
                <td>
                  <span class="label_year public">public</span>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    class="form-check-input m-0 align-middle"
                    type="checkbox"
                    aria-label="Select invoice"
                  />
                </td>
                <td><span class="text-muted">4</span></td>
                <td>
                  <a href="" class="text-reset customers_edit">
                    <h3 class="title-name">Her King Man</h3>
                  </a>
                </td>
                <td>
                  <span class="title-name">0987654321</span>
                </td>
                <td>
                  <span class="title-name">kingman_her@gmail.com</span>
                </td>
                <td>1996/07/18</td>
                <td>
                  <span class="label_year pending">0987654321</span>
                </td>
                <td>
                  <span class="label_year public">public</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer d-flex align-items-center"></div>
      </div>
    </div>
  </AdminBody>
</template>
<script setup>
definePageMeta({
  layout: "admin",
});
const seo = {
  title: "Admin - Customer",
  keyword: "Keyword on Admin - Customer",
  desciption: "Description on Admin - Customer",
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
  created() {},
};
</script>
