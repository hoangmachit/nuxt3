<template>
  <div
    class="modal modal-blur fade show"
    id="modal-report"
    tabindex="-1"
    role="dialog"
    aria-modal="true"
    style="display: block"
  >
    <div class="modal-dialog modal-lg" role="document">
      <form
        action="https://user.haweb.vn/dashboard/hostings"
        method="POST"
        role="form"
      >
        <input
          type="hidden"
          name="_token"
          value="e1dnqyFiwHesFguQmRAYQCfqpS1sjWOrmxGiX3cM"
        />
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Tạo mới Hosting</h5>
            <button
              v-on:click="$emit('clickClose()')"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
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
                  <textarea
                    class="form-control"
                    name="note"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a
              href="#"
              class="btn btn-default link-secondary"
              data-bs-dismiss="modal"
            >
              Hủy bỏ
            </a>
            <button htype="submit" class="btn btn-primary ms-auto">
              <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
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
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickClose() {
      console.log("close 1");
    },
  },
};
</script>
