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
        action="https://user.haweb.vn/dashboard/customers"
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
            <h5 class="modal-title">Tạo mới khách hàng</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
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
          <div class="modal-footer">
            <a
              href="#"
              class="btn btn-default link-secondary"
              data-bs-dismiss="modal"
            >
              Hủy bỏ
            </a>
            <button type="submit" class="btn btn-primary ms-auto">
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
              Tạo khách hàng
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
