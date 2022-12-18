<template>
  <TheSEO :seo="seo" />
  <AdminOverview>
    <template #title>
      <h2 class="page-title">Hosting</h2>
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
          <AdminIconPlus />
          Tạo mới hợp đồng
        </a>
        <a
          href="#"
          class="btn btn-primary d-sm-none btn-icon"
          data-bs-toggle="modal"
          data-bs-target="#modal-contract_index"
          aria-label="Create new report"
        >
          <AdminIconPlus />
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
        Tạo Hosting
      </button>
    </template>
  </ModalAdmin>
  <AdminBody>
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Danh sách Hosting</h3>
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
                <th>Tên Gói</th>
                <th>GB</th>
                <th>RAM</th>
                <th>Giá</th>
                <th>Chú thích</th>
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
                  <a
                    href=""
                    class="text-reset hostings_edit"
                  >
                    <h3 class="title-name">LƯƠNG YẾN PHƯƠNG</h3>
                  </a>
                </td>
                
                <td>20GB</td>
                <td>1GB</td>
                <td>
                  <span><AdminIconEyeSlash /></span>
                </td>
                <td>Hết hạn : 16/06/2023</td>
                <td class="d-none">700.000<sup>đ</sup></td>
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
                  <a
                    href=""
                    class="text-reset hostings_edit"
                  >
                    <h3 class="title-name">PHẠM NGỌC LUYẾN ( CHỊ NGỌC )</h3>
                  </a>
                </td>
                
                <td>5GB</td>
                <td>1GB</td>
                <td>
                  <span><AdminIconEyeSlash /></span>
                </td>
                <td>Hết hạn : 01/06/2022</td>
                <td class="d-none">700.000<sup>đ</sup></td>
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
                <td><span class="text-muted">3</span></td>
                <td>
                  <a
                    href=""
                    class="text-reset hostings_edit"
                  >
                    <h3 class="title-name">ĐẶNG TẤN XUÂN</h3>
                  </a>
                </td>
                
                <td>10GB</td>
                <td>1GB</td>
                <td>
                  <span><AdminIconEyeSlash /></span>
                </td>
                <td>Hết hạn : 20/05/2023</td>
                <td class="d-none">700.000<sup>đ</sup></td>
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
                  <a
                    href=""
                    class="text-reset hostings_edit"
                  >
                    <h3 class="title-name">
                      CÔNG TY TNHH MÁY CHẾ BIẾN GỖ CHÍNH XÁC MUSTANG
                    </h3>
                  </a>
                </td>
                
                <td>2GB</td>
                <td>1GB</td>
                <td>
                  <span><AdminIconEyeSlash /></span>
                </td>
                <td>Hết hạn : 10/05/2023</td>
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
                <td><span class="text-muted">5</span></td>
                <td>
                  <a
                    href=""
                    class="text-reset hostings_edit"
                  >
                    <h3 class="title-name">HÀ THỊ MINH NGUYỆT</h3>
                  </a>
                </td>
                
                <td>2GB</td>
                <td>1GB</td>
                <td>
                  <span><AdminIconEyeSlash /></span>
                </td>
                <td>Hết hạn: 24/04/2023</td>
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
                <td><span class="text-muted">6</span></td>
                <td>
                  <a
                    href=""
                    class="text-reset hostings_edit"
                   
                  >
                    <h3 class="title-name">
                      CÔNG TY TNHH THƯƠNG MẠI DỊC VỤ CÔNG NGHỆ PHỐ XANH
                    </h3>
                  </a>
                </td>
                
                <td>5GB</td>
                <td>1GB</td>
                <td>
                  <span><AdminIconEyeSlash /></span>
                </td>
                <td>Tặng Host năm đầu Hết hạn : 13/04/2023</td>
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
                <td><span class="text-muted">7</span></td>
                <td>
                  <a
                    href=""
                    class="text-reset hostings_edit"
                  >
                    <h3 class="title-name">NGUYỄN THỊ THANH</h3>
                  </a>
                </td>
                
                <td>2GB</td>
                <td>1GB</td>
                <td>
                  <span><AdminIconEyeSlash /></span>
                </td>
                <td>Hết hạn 23/04/2023</td>
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
                <td><span class="text-muted">8</span></td>
                <td>
                  <a
                    href=""
                    class="text-reset hostings_edit"
                  >
                    <h3 class="title-name">DƯƠNG VĂN CẢNH</h3>
                  </a>
                </td>
                
                <td>2GB</td>
                <td>1GB</td>
                <td>
                  <span><AdminIconEyeSlash /></span>
                </td>
                <td>Hết hạn 07/04/3023</td>
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
                <td><span class="text-muted">9</span></td>
                <td>
                  <a
                    href=""
                    class="text-reset hostings_edit"
                  >
                    <h3 class="title-name">NGUYỄN HỒNG LONG</h3>
                  </a>
                </td>
                
                <td>5GB</td>
                <td>1GB</td>
                <td>
                  <span><AdminIconEyeSlash /></span>
                </td>
                <td>Hết hạn 30/03/2023</td>
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
                <td><span class="text-muted">10</span></td>
                <td>
                  <a
                    href=""
                    class="text-reset hostings_edit"
                  >
                    <h3 class="title-name">VŨ ĐỨC VIỆT</h3>
                  </a>
                </td>
                
                <td>2GB</td>
                <td>1GB</td>
                <td>
                  <span><AdminIconEyeSlash /></span>
                </td>
                <td>Hết hạn 16/03/2022</td>
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
                <td><span class="text-muted">11</span></td>
                <td>
                  <a
                    href=""
                    class="text-reset hostings_edit"
                  >
                    <h3 class="title-name">Default</h3>
                  </a>
                </td>
                <td>1GB</td>
                <td>1GB</td>
                <td>
                  <span><AdminIconEyeSlash /></span>
                </td>
                <td>Default</td>
                <td>
                  <span class="label_year private">private</span>
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
  title: "Admin - Hosting",
  keyword: "Keyword on Admin - Hosting",
  desciption: "Description on Admin - Hosting",
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
