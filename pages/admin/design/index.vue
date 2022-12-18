<template>
  <TheSEO :seo="seo" />
  <AdminOverview>
    <template #title>
      <h2 class="page-title">Thiết kế</h2>
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
          Tạo thiết kế ngay
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
      <h5 class="modal-title">Tạo mới thiết kế</h5>
    </template>
    <template #content>
      <div class="modal-body">
        <div class="mb-3">
          <label class="form-label">Hợp đồng</label>

          <select class="form-select" name="contract_id" required="">
            <option value="0" selected="">Null</option>

            <option value="4">Đỗ Văn Văn</option>

            <option value="5">
              CÔNG TY TNHH XÂY DỰNG PHÁT TRIỂN ĐĂNG KHÔI
            </option>
          </select>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Họ</label>

              <div class="input-group input-group-flat">
                <input
                  type="text"
                  class="form-control ps-2"
                  value=""
                  name="first_name"
                  required=""
                />
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Tên</label>

              <div class="input-group input-group-flat">
                <input
                  type="text"
                  class="form-control ps-2"
                  value=""
                  name="last_name"
                  required=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-body">
        <div class="row">
          <div class="col-lg-12">
            <label class="form-label">Upload image</label>

            <div class="col mb-2">
              <div class="row">
                <div class="col-lg-8">
                  <div class="progress progress_file_img" style="display: none">
                    <div
                      class="
                        progress-bar progress-bar-striped progress-bar-animated
                      "
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>

                  <div
                    id="upload-zone_file_img"
                    class="media py-5 border-ec-dashed mb-2 rounded"
                  >
                    <div class="media-body">
                      <i
                        class="
                          fa fa-cloud-upload fa-3x
                          text-ec-lightGray
                          mx-3
                          align-middle
                        "
                        aria-hidden="true"
                      ></i>

                      <input
                        type="file"
                        id="file_img"
                        name="image"
                        multiple=""
                        accept="image/*"
                        style="display: none"
                        class="form-control-file"
                      />

                      <a
                        class="btn btn-ec-regular mr-2 click_button"
                        data-type="file_img"
                      >
                        Chọn tệp tin
                      </a>
                    </div>
                  </div>
                  <input
                    type="hidden"
                    name="photo"
                    id="photo_file_img"
                    value=""
                  />
                </div>

                <div class="col-lg-4">
                  <div
                    class="
                      c-form__fileUploadThumbnails
                      clearfix
                      ui-sortable
                      classThumb
                      thumbFileImage thumbFileImage_file_img
                    "
                  >
                    <div
                      class="c-form__fileUploadThumbnail"
                      style="background-image: url('')"
                    >
                      <a class="delete-image" data-type="file_img"
                        ><i class="fa fa-times" aria-hidden="true"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-body">
        <div class="row">
          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label">Url thiết kế</label>

              <input
                type="text"
                class="form-control"
                name="url"
                value=""
                required=""
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <div class="mb-3">
              <label class="form-label">Ngày bắt đầu</label>

              <input
                type="date"
                name="date_start"
                required=""
                value=""
                class="form-control"
              />
            </div>
          </div>

          <div class="col-lg-4">
            <div class="mb-3">
              <label class="form-label">Ngày hoàn thành</label>

              <input
                type="date"
                name="date_finish"
                value=""
                class="form-control"
              />
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

          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label">Đường dẫn mẫu</label>

              <textarea
                class="form-control"
                name="url_example"
                rows="3"
              ></textarea>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label">Font Family</label>

              <textarea
                class="form-control"
                name="font_family"
                rows="3"
              ></textarea>
            </div>
          </div>

          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label">Thông tin thêm</label>

              <textarea class="form-control" name="note" rows="3"></textarea>
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

      <button tyle="submit" class="btn btn-primary ms-auto">
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
        Tạo thiết kế
      </button>
    </template>
  </ModalAdmin>
  <AdminBody>
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Danh sách thiết kế</h3>
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
                  <AdminIconArrowDown />
                </th>
                <th>Hợp đồng</th>
                <th>Họ &amp; tên</th>
                <th>Đường dẫn</th>
                <th>Bắt đầu</th>
                <th>Hoàn thành</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    class="form-check-input m-0 align-middle"
                    type="checkbox"
                    aria-label="Select invoice" />
                </td>
                <td><span class="text-muted">1</span></td>
                <td>
                  <span></span>
                </td>
                <td>
                  <a
                    href=""
                    class="text-reset designs_edit"
                  >
                    <h3 class="title-name">Ngọc Trân Wedding</h3>
                  </a>
                </td>
                <td>
                  <a
                    href="https://user.haweb.vn/design/FoARGkIpox/5"
                    target="_blank"
                  >
                    <AdminIconEyeSlash />
                  </a>
                </td>
                <td>2022/11/25</td>
                <td>2022/11/10</td>
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
  title: "Admin - Design",
  keyword: "Keyword on Admin - Design",
  desciption: "Description on Admin - Desing",
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