<template>
  <TheSEO :seo="seo" />
  <div>
    <AdminOverview>
      <template #title>
        <h2 class="page-title">Trang Chủ</h2>
      </template>
      <template #content>
        <div class="btn-list">
          <a
            v-on:click="openModal()"
            href="#"
            class="btn btn-primary d-none d-sm-inline-block"
            data-bs-toggle="modal"
            data-bs-target="#modal-contract_index"
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
            Tạo mới hợp đồng
          </a>
          <a
            href="#"
            class="btn btn-primary d-sm-none btn-icon"
            data-bs-toggle="modal"
            data-bs-target="#modal-contract_index"
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
        <h5 class="modal-title">Tạo mới Hosting</h5>
      </template>
      <template #content>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">Tên Hostings</label>
                <div class="input-group input-group-flat">
                  <input
                    type="text"
                    class="form-control ps-2"
                    name="name"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">IP</label>
                <input
                  type="text"
                  class="form-control"
                  name="ip"
                  placeholder="168.168.168.168"
                  value=""
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="mb-3">
                <label class="form-label">GB</label>
                <select class="form-select" name="gb">
                  <option value="1" selected="">1GB</option>
                  <option value="2">2GB</option>
                  <option value="5">3GB</option>
                  <option value="5">5GB</option>
                  <option value="10">10GB</option>
                  <option value="20">20GB</option>
                  <option value="50">50GB</option>
                  <option value="100">100GB</option>
                </select>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-3">
                <label class="form-label">RAM</label>
                <select class="form-select" name="ram">
                  <option value="1" selected="">1GB</option>
                  <option value="2">2GB</option>
                  <option value="5">3GB</option>
                  <option value="5">5GB</option>
                  <option value="10">10GB</option>
                  <option value="20">20GB</option>
                </select>
              </div>
            </div>
            <div class="col-lg-4">
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
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
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
              <div class="mb-3">
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
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">Thông tin thêm</label>
                <textarea class="form-control" name="note" rows="5"></textarea>
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
        <button htype="submit" class="btn btn-primary ms-auto">
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
          Tạo mới Hợp Đồng
        </button>
      </template>
    </ModalAdmin>
    <AdminBody>
      <div class="col-12">
        <div class="card card-md">
          <div class="card-stamp card-stamp-lg">
            <div class="card-stamp-icon bg-primary">
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
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7"
                />
                <line x1="10" y1="10" x2="10.01" y2="10" />
                <line x1="14" y1="10" x2="14.01" y2="10" />
                <path d="M10 14a3.5 3.5 0 0 0 4 0" />
              </svg>
            </div>
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-10">
                <h3 class="h1">Tabler Icons</h3>
                <div class="markdown text-muted">
                  All icons come from the Tabler Icons set and are MIT-licensed.
                  Visit
                  <a href="" target="_blank" rel="noopener">tabler-icons.io</a>,
                  download any of the 2979 icons in SVG, PNG or&nbsp;React and
                  use them in your favourite design tools.
                </div>
                <div class="mt-3">
                  <a
                    href=""
                    class="btn btn-primary"
                    target="_blank"
                    rel="noopener"
                    >Download icons</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Invoices</h3>
          </div>
          <div class="card-body border-bottom py-3">
            <div class="d-flex">
              <div class="text-muted">
                Show
                <div class="mx-2 d-inline-block">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    value="8"
                    size="3"
                    aria-label="Invoices count"
                  />
                </div>
                entries
              </div>
              <div class="ms-auto text-muted">
                Search:
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-sm icon-thick"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </th>
                  <th>Invoice Subject</th>
                  <th>Client</th>
                  <th>VAT No.</th>
                  <th>Created</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th></th>
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
                  <td><span class="text-muted">001401</span></td>
                  <td>
                    <a href="" class="text-reset" tabindex="-1">Design Works</a>
                  </td>
                  <td>
                    <span class="flag flag-country-us"></span>
                    Carlson Limited
                  </td>
                  <td>87956621</td>
                  <td>15 Dec 2017</td>
                  <td><span class="badge bg-success me-1"></span> Paid</td>
                  <td>$887</td>
                  <td class="text-end">
                    <span class="dropdown">
                      <button
                        class="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href=""> Action </a>
                        <a class="dropdown-item" href=""> Another action </a>
                      </div>
                    </span>
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
                  <td><span class="text-muted">001402</span></td>
                  <td>
                    <a href="" class="text-reset" tabindex="-1"
                      >UX Wireframes</a
                    >
                  </td>
                  <td>
                    <span class="flag flag-country-gb"></span>
                    Adobe
                  </td>
                  <td>87956421</td>
                  <td>12 Apr 2017</td>
                  <td><span class="badge bg-warning me-1"></span> Pending</td>
                  <td>$1200</td>
                  <td class="text-end">
                    <span class="dropdown">
                      <button
                        class="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href=""> Action </a>
                        <a class="dropdown-item" href=""> Another action </a>
                      </div>
                    </span>
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
                  <td><span class="text-muted">001403</span></td>
                  <td>
                    <a href="" class="text-reset" tabindex="-1"
                      >New Dashboard</a
                    >
                  </td>
                  <td>
                    <span class="flag flag-country-de"></span>
                    Bluewolf
                  </td>
                  <td>87952621</td>
                  <td>23 Oct 2017</td>
                  <td><span class="badge bg-warning me-1"></span> Pending</td>
                  <td>$534</td>
                  <td class="text-end">
                    <span class="dropdown">
                      <button
                        class="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#"> Action </a>
                        <a class="dropdown-item" href="#"> Another action </a>
                      </div>
                    </span>
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
                  <td><span class="text-muted">001404</span></td>
                  <td>
                    <a href="" class="text-reset" tabindex="-1">Landing Page</a>
                  </td>
                  <td>
                    <span class="flag flag-country-br"></span>
                    Salesforce
                  </td>
                  <td>87953421</td>
                  <td>2 Sep 2017</td>
                  <td>
                    <span class="badge bg-secondary me-1"></span> Due in 2 Weeks
                  </td>
                  <td>$1500</td>
                  <td class="text-end">
                    <span class="dropdown">
                      <button
                        class="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#"> Action </a>
                        <a class="dropdown-item" href="#"> Another action </a>
                      </div>
                    </span>
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
                  <td><span class="text-muted">001405</span></td>
                  <td>
                    <a href="" class="text-reset" tabindex="-1"
                      >Marketing Templates</a
                    >
                  </td>
                  <td>
                    <span class="flag flag-country-pl"></span>
                    Printic
                  </td>
                  <td>87956621</td>
                  <td>29 Jan 2018</td>
                  <td><span class="badge bg-danger me-1"></span> Paid Today</td>
                  <td>$648</td>
                  <td class="text-end">
                    <span class="dropdown">
                      <button
                        class="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#"> Action </a>
                        <a class="dropdown-item" href="#"> Another action </a>
                      </div>
                    </span>
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
                  <td><span class="text-muted">001406</span></td>
                  <td>
                    <a href="" class="text-reset" tabindex="-1"
                      >Sales Presentation</a
                    >
                  </td>
                  <td>
                    <span class="flag flag-country-br"></span>
                    Tabdaq
                  </td>
                  <td>87956621</td>
                  <td>4 Feb 2018</td>
                  <td>
                    <span class="badge bg-secondary me-1"></span> Due in 3 Weeks
                  </td>
                  <td>$300</td>
                  <td class="text-end">
                    <span class="dropdown">
                      <button
                        class="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#"> Action </a>
                        <a class="dropdown-item" href="#"> Another action </a>
                      </div>
                    </span>
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
                  <td><span class="text-muted">001407</span></td>
                  <td>
                    <a href="" class="text-reset" tabindex="-1">Logo & Print</a>
                  </td>
                  <td>
                    <span class="flag flag-country-us"></span>
                    Apple
                  </td>
                  <td>87956621</td>
                  <td>22 Mar 2018</td>
                  <td>
                    <span class="badge bg-success me-1"></span> Paid Today
                  </td>
                  <td>$2500</td>
                  <td class="text-end">
                    <span class="dropdown">
                      <button
                        class="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#"> Action </a>
                        <a class="dropdown-item" href="#"> Another action </a>
                      </div>
                    </span>
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
                  <td><span class="text-muted">001408</span></td>
                  <td>
                    <a href="" class="text-reset" tabindex="-1">Icons</a>
                  </td>
                  <td>
                    <span class="flag flag-country-pl"></span>
                    Tookapic
                  </td>
                  <td>87956621</td>
                  <td>13 May 2018</td>
                  <td>
                    <span class="badge bg-success me-1"></span> Paid Today
                  </td>
                  <td>$940</td>
                  <td class="text-end">
                    <span class="dropdown">
                      <button
                        class="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#"> Action </a>
                        <a class="dropdown-item" href="#"> Another action </a>
                      </div>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer d-flex align-items-center">
            <p class="m-0 text-muted">
              Showing <span>1</span> to <span>8</span> of
              <span>16</span> entries
            </p>
            <ul class="pagination m-0 ms-auto">
              <li class="page-item disabled">
                <a
                  class="page-link"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  prev
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">4</a></li>
              <li class="page-item"><a class="page-link" href="#">5</a></li>
              <li class="page-item">
                <a class="page-link" href="#">
                  next
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AdminBody>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: ["auth-admin"],
});
const seo = {
  title: "Admin - Home",
  keyword: "Keyword on Admin - Home",
  desciption: "Description on Admin - Home",
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
};
</script>

<style>
</style>