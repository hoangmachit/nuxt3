<template>
  <TheSEO :seo="seo" />
  <AdminOverview>
    <template #title>
      <h2 class="page-title">Hợp Đồng</h2>
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
      <h5 class="modal-title">Tạo mới hợp đồng</h5>
    </template>
    <template #content>
      <div class="row">
        <div class="col-lg-6 p-0">
          <div class="modal-body border-right">
            <div class="mb-3">
              <label class="form-label">Tên</label>

              <input
                type="text"
                class="form-control"
                value=""
                name="name"
                required=""
              />
            </div>

            <div>
              <label class="form-label">Code</label>

              <input
                type="text"
                class="form-control"
                value=""
                name="code"
                required=""
              />
            </div>
          </div>

          <div class="modal-body border-right">
            <div class="row">
              <div class="col-lg-6">
                <div>
                  <label class="form-label">Ngày kí</label>

                  <input
                    type="date"
                    name="signing_date"
                    value=""
                    class="form-control"
                    required=""
                  />
                </div>
              </div>

              <div class="col-lg-6">
                <div>
                  <label class="form-label">Ngày hoàn thành</label>

                  <input
                    type="date"
                    name="date_of_delivery"
                    value=""
                    class="form-control"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="modal-body border-right">
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label">Tên Miền</label>

                  <select
                    name="domain_id"
                    class="form-control contract_domain contract_domain_create"
                  >
                    <option value="1" data-price="0" data-price_special="0">
                      Default
                    </option>

                    <option
                      value="3"
                      data-price="241000"
                      data-price_special="0"
                    >
                      VŨ ĐỨC VIỆT
                    </option>

                    <option value="4" data-price="0" data-price_special="0">
                      NGUYỄN HỒNG LONG
                    </option>

                    <option
                      value="5"
                      data-price="241000"
                      data-price_special="0"
                    >
                      DƯƠNG VĂN CẢNH
                    </option>

                    <option
                      value="6"
                      data-price="550000"
                      data-price_special="0"
                    >
                      NGUYỄN THỊ THANH
                    </option>

                    <option
                      value="7"
                      data-price="241000"
                      data-price_special="0"
                    >
                      CÔNG TY TNHH THƯƠNG MẠI DỊC VỤ CÔNG NGHỆ PHỐ XANH
                    </option>

                    <option
                      value="8"
                      data-price="241000"
                      data-price_special="0"
                    >
                      HÀ THỊ MINH NGUYỆT
                    </option>

                    <option
                      value="9"
                      data-price="241000"
                      data-price_special="0"
                    >
                      CÔNG TY TNHH MÁY CHẾ BIẾN GỖ CHÍNH XÁC MUSTANG
                    </option>

                    <option value="10" data-price="0" data-price_special="0">
                      CÔNG TY TNHH MỘT THÀNH VIÊN THƯƠNG MẠI Ô TÔ VŨ HÙNG
                    </option>

                    <option value="11" data-price="0" data-price_special="0">
                      ĐẶNG TẤN XUÂN
                    </option>

                    <option
                      value="12"
                      data-price="241000"
                      data-price_special="0"
                    >
                      NGUYỄN TUẤN HƯNG
                    </option>

                    <option
                      value="13"
                      data-price="241000"
                      data-price_special="0"
                    >
                      PHẠM NGỌC LUYẾN ( CHỊ NGỌC )
                    </option>
                  </select>
                </div>

                <input
                  type="text"
                  name="price_domain"
                  value="0"
                  class="form-control format-price price_dommain_create"
                  readonly=""
                />
              </div>

              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label">Hosting</label>

                  <select
                    name="hosting_id"
                    class="form-control contract_hosting contract_hosting_create"
                  >
                    <option value="1" data-price="0" data-price_special="0">
                      Default
                    </option>

                    <option
                      value="3"
                      data-price="2388000"
                      data-price_special="0"
                    >
                      VŨ ĐỨC VIỆT
                    </option>

                    <option
                      value="4"
                      data-price="4872000"
                      data-price_special="0"
                    >
                      NGUYỄN HỒNG LONG
                    </option>

                    <option
                      value="5"
                      data-price="2388000"
                      data-price_special="0"
                    >
                      DƯƠNG VĂN CẢNH
                    </option>

                    <option
                      value="6"
                      data-price="2388000"
                      data-price_special="0"
                    >
                      NGUYỄN THỊ THANH
                    </option>

                    <option
                      value="7"
                      data-price="4872000"
                      data-price_special="0"
                    >
                      CÔNG TY TNHH THƯƠNG MẠI DỊC VỤ CÔNG NGHỆ PHỐ XANH
                    </option>

                    <option
                      value="8"
                      data-price="2388000"
                      data-price_special="0"
                    >
                      HÀ THỊ MINH NGUYỆT
                    </option>

                    <option
                      value="9"
                      data-price="2388000"
                      data-price_special="0"
                    >
                      CÔNG TY TNHH MÁY CHẾ BIẾN GỖ CHÍNH XÁC MUSTANG
                    </option>

                    <option
                      value="10"
                      data-price="7200000"
                      data-price_special="0"
                    >
                      ĐẶNG TẤN XUÂN
                    </option>

                    <option
                      value="11"
                      data-price="4872000"
                      data-price_special="0"
                    >
                      PHẠM NGỌC LUYẾN ( CHỊ NGỌC )
                    </option>

                    <option
                      value="12"
                      data-price="12000000"
                      data-price_special="10000000"
                    >
                      LƯƠNG YẾN PHƯƠNG
                    </option>
                  </select>
                </div>

                <input
                  type="text"
                  name="price_hosting"
                  value="0"
                  class="form-control format-price price_hosting_create"
                  readonly=""
                />
              </div>
            </div>
          </div>

          <div class="modal-body">
            <div class="col-lg-12">
              <div>
                <label class="form-label">Giá cũ</label>

                <input
                  type="text"
                  class="form-control format-price price_create"
                  value=""
                  name="price"
                  required=""
                />
              </div>
            </div>
          </div>

          <div class="modal-body">
            <div class="row">
              <label class="form-label">Thanh toán</label>

              <div class="form-selectgroup-boxes row">
                <div class="col-lg-6">
                  <label class="form-selectgroup-item">
                    <input
                      type="radio"
                      name="payment_1st"
                      value="1"
                      class="form-selectgroup-input"
                      checked=""
                    />

                    <span
                      class="form-selectgroup-label d-flex align-items-center p-3"
                      id="payment_1st"
                    >
                      <span class="me-3">
                        <span class="form-selectgroup-check"></span>
                      </span>

                      <span class="form-selectgroup-label-content">
                        <span class="form-selectgroup-title strong mb-1"
                          >Đợt 1</span
                        >

                        <span class="d-block text-muted"
                          >50% Thanh toán đợt 1</span
                        >
                      </span>
                    </span>
                  </label>

                  <input
                    type="date"
                    name="date_payment_1st"
                    class="form-control mt-3"
                    required=""
                  />

                  <input
                    type="text"
                    name="price_1st"
                    id="price_1st"
                    class="form-control format-price mt-3 price_1st_create"
                    required=""
                    value="0"
                  />
                </div>

                <div class="col-lg-6">
                  <label class="form-selectgroup-item">
                    <input
                      type="radio"
                      name="payment_2st"
                      id=""
                      disabled=""
                      value="0"
                      class="form-selectgroup-input"
                    />

                    <span
                      class="form-selectgroup-label d-flex align-items-center p-3"
                      id="payment_2st"
                    >
                      <span class="me-3">
                        <span class="form-selectgroup-check"></span>
                      </span>

                      <span class="form-selectgroup-label-content no-drop">
                        <span class="form-selectgroup-title strong mb-1"
                          >Thanh toán đợt 2</span
                        >

                        <span class="d-block text-muted"
                          >50% Thanh toán đợt 2</span
                        >
                      </span>
                    </span>
                  </label>

                  <input
                    type="date"
                    name="date_payment_2st"
                    class="form-control mt-3 no-drop"
                    readonly=""
                  />

                  <input
                    type="text"
                    name="price_2st"
                    id="price_2st"
                    class="form-control format-price mt-3 price_2st_create"
                    required=""
                    readonly=""
                    value="0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <div>
                  <label class="form-label">Tổng tiền hợp đồng</label>

                  <input
                    type="text"
                    class="form-control format-price price_total_create"
                    value=""
                    name="price_total"
                    readonly=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="modal-body border-right border-bottom">
            <div class="row">
              <div class="col-lg-12">
                <div>
                  <label class="form-label">Thông tin thêm</label>

                  <textarea
                    class="form-control"
                    name="note"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 p-0">
          <div class="modal-body">
            <label class="form-label">Chọn khách hàng</label>

            <div class="form-selectgroup-boxes row mb-3">
              <div class="col-lg-6">
                <label class="form-selectgroup-item">
                  <input
                    type="radio"
                    name="avaiable"
                    checked=""
                    value="1"
                    class="form-selectgroup-input"
                  />

                  <span
                    class="form-selectgroup-label d-flex align-items-center p-3"
                    id="avaiable"
                  >
                    <span class="me-3">
                      <span class="form-selectgroup-check"></span>
                    </span>

                    <span class="form-selectgroup-label-content">
                      <span class="form-selectgroup-title strong mb-1"
                        >Có sẳn</span
                      >
                    </span>
                  </span>
                </label>
              </div>

              <div class="col-lg-6">
                <label class="form-selectgroup-item">
                  <input
                    type="radio"
                    name="avaiable"
                    value="0"
                    class="form-selectgroup-input"
                  />

                  <span
                    class="form-selectgroup-label d-flex align-items-center p-3"
                    id="unavaiable"
                  >
                    <span class="me-3">
                      <span class="form-selectgroup-check"></span>
                    </span>

                    <span class="form-selectgroup-label-content">
                      <span class="form-selectgroup-title strong mb-1"
                        >Không có sẳn</span
                      >
                    </span>
                  </span>
                </label>
              </div>

              <div class="col-lg-12 mt-3 rowCustomer">
                <div>
                  <label class="form-label">Khách hàng</label>

                  <select
                    class="form-control"
                    name="customer_id"
                    id="customer_id"
                  >
                    <option value="0">Choice customer</option>

                    <option value="1">Her King Man</option>

                    <option value="2">A Nguyen Văn</option>

                    <option value="3">Văn Đỗ Văn</option>

                    <option value="4">Lâm Nguyễn Văn</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Họ</label>

                  <input
                    type="text"
                    class="form-control"
                    name="first_name"
                    required=""
                    placeholder=""
                  />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Tên</label>

                  <input
                    type="text"
                    class="form-control"
                    name="last_name"
                    required=""
                    value=""
                    placeholder=""
                  />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">CCCD/CMND</label>

                  <input
                    type="text"
                    class="form-control"
                    name="identity_card"
                    value=""
                    required=""
                    placeholder=""
                  />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Ngày sinh</label>

                  <input
                    type="date"
                    class="form-control"
                    name="birth_day"
                    value=""
                    required=""
                    placeholder=""
                  />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Email</label>

                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    value=""
                    placeholder=""
                  />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Điện thoại</label>

                  <input
                    type="text"
                    class="form-control"
                    name="phone"
                    required=""
                    placeholder=""
                  />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Zalo</label>

                  <input
                    type="text"
                    class="form-control"
                    name="zalo"
                    value=""
                    placeholder=""
                  />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">fax</label>

                  <input
                    type="text"
                    class="form-control"
                    name="fax"
                    value=""
                    placeholder=""
                  />
                </div>
              </div>

              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Địa chỉ</label>

                  <textarea
                    class="form-control"
                    rows="4"
                    name="address"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-body border-bottom">
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Tên công ty</label>

                  <input
                    type="text"
                    class="form-control"
                    name="company_name"
                    value=""
                    placeholder=""
                  />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Mã số thuế</label>

                  <input
                    type="text"
                    class="form-control"
                    name="company_tax_code"
                    value=""
                    placeholder=""
                  />
                </div>
              </div>

              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Địa chỉ công ty</label>

                  <textarea
                    class="form-control"
                    rows="4"
                    name="company_address"
                  ></textarea>
                </div>
              </div>
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

      <div class="mt-2">
        <select class="form-select" name="status">
          <option value="public">Public</option>
          <option value="pending">Pending</option>
          <option value="private">Private</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary ms-auto">
        <AdminIconPlus />
        Tạo mới hợp đồng
      </button>
    </template>
  </ModalAdmin>
  <AdminBody>
    <div class="col-12">
      <div class="row row-cards">
        <div class="col-sm-12 col-lg-12">
          <div class="card card-sm">
            <form
              action="https://user.haweb.vn/dashboard/contracts"
              method="GET"
            >
              <input type="hidden" name="search" value="true" />
              <div class="card-body">
                <div class="row">
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label class="form-label">Tên</label>
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label class="form-label">Code</label>
                      <input
                        type="text"
                        class="form-control"
                        name="code"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label class="form-label">Ngày kí</label>
                      <input
                        type="date"
                        class="form-control"
                        name="signing_date"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label class="form-label">Ngày hoàn thành</label>
                      <input
                        type="date"
                        class="form-control"
                        value=""
                        name="date_of_delivery"
                      />
                    </div>
                  </div>
                  <div class="show-content-search">
                    <div class="row">
                      <div class="col-md-3">
                        <div class="mb-3">
                          <label class="form-label">Giá thấp nhất</label>
                          <input
                            type="text"
                            class="form-control format-price"
                            min="0"
                            max="100000000"
                            name="price_min"
                            value=""
                            placeholder="0đ"
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="mb-3">
                          <label class="form-label">Giá cao nhât</label>
                          <input
                            type="text"
                            class="form-control format-price"
                            min="0"
                            name="price_max"
                            max="100000000"
                            value=""
                            placeholder="10.000.000đ"
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="row">
                          <div class="col-lg-6 col-ms-12">
                            <div class="mb-3">
                              <label class="form-label">TT Đợt 1</label>
                              <input
                                type="text"
                                class="form-control"
                                name="payment_1st"
                              />
                            </div>
                          </div>
                          <div class="col-lg-6 col-sm-2">
                            <div class="mb-3">
                              <label class="form-label">TT Đợt 2</label>
                              <input
                                type="text"
                                class="form-control"
                                name="payment_2st"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="mb-3">
                          <label class="form-label">Trạng thái</label>
                          <select class="form-select" name="status">
                            <option value="public">Public</option>
                            <option value="pending">Pending</option>
                            <option value="private">Private</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="show" value="false" />
                  <div class="col-lg-12">
                    <div class="row">
                      <div class="col-md-3">
                        <div class="mb-3">
                          <button
                            class="btn btn-search btn-info form-control"
                            type="submit"
                          >
                            <AdminIconSearch /> Tìm kiếm
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Danh sách hợp đồng</h3>
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
          <table
            class="table card-table table-vcenter text-nowrap datatable"
            id="table_contracts"
          >
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

                <th>Code</th>

                <th>Tên</th>

                <th>Ngày kí</th>

                <th>T/Toán đợt 1</th>

                <th>T/Toán đợt 2</th>

                <th>Tên Miền</th>

                <th>Hosting</th>

                <th>Khách hàng</th>

                <th>Trạng thái</th>

                <th>Giá</th>
              </tr>
            </thead>

            <tbody>
              <tr
                data-contract_id="5"
                data-action="https://user.haweb.vn/dashboard/contracts/5"
              >
                <td>
                  <input
                    class="form-check-input m-0 align-middle"
                    type="checkbox"
                    aria-label="Select invoice"
                  />
                </td>

                <td><span class="text-muted">#5</span></td>

                <td>
                  <h3 class="contract-code">021022W</h3>
                </td>

                <td>
                  <a class="text-reset" tabindex="-1">
                    <h3 class="title-name">
                      CÔNG TY TNHH XÂY DỰNG PHÁT TRIỂN ĐĂNG KHÔI
                    </h3>
                  </a>
                </td>

                <td>
                  <span>16/10/2022</span>
                </td>

                <td>
                  <div class="icon-svg">
                    <span class="svg active">
                      <AdminIconTick />
                    </span>
                  </div>
                </td>

                <td>
                  <div class="icon-svg">
                    <span class="svg">
                      <AdminIconTick />
                    </span>
                  </div>
                </td>

                <td>
                  <span class="label_year public"> Default </span>
                </td>

                <td>
                  <span class="label_year public"> Default </span>
                </td>

                <td>
                  <span class="label_year public"> Nguyễn Văn Lâm </span>
                </td>

                <td>
                  <span class="label_year public"> public </span>
                </td>

                <td>
                  <span><AdminIconEyeSlash /></span>
                </td>
              </tr>

              <tr
                data-contract_id="4"
                data-action="https://user.haweb.vn/dashboard/contracts/4"
              >
                <td>
                  <input
                    class="form-check-input m-0 align-middle"
                    type="checkbox"
                    aria-label="Select invoice"
                  />
                </td>

                <td><span class="text-muted">#4</span></td>

                <td>
                  <h3 class="contract-code">011022W</h3>
                </td>

                <td>
                  <a class="text-reset" tabindex="-1">
                    <h3 class="title-name">Đỗ Văn Văn</h3>
                  </a>
                </td>

                <td>
                  <span>05/10/2011</span>
                </td>

                <td>
                  <div class="icon-svg">
                    <span class="svg active">
                      <AdminIconTick />
                    </span>
                  </div>
                </td>

                <td>
                  <div class="icon-svg">
                    <span class="svg active">
                      <AdminIconTick />
                    </span>
                  </div>
                </td>

                <td>
                  <span class="label_year public"> Default </span>
                </td>

                <td>
                  <span class="label_year public"> Default </span>
                </td>

                <td>
                  <span class="label_year public"> Đỗ Văn Văn </span>
                </td>

                <td>
                  <span class="label_year public"> public </span>
                </td>

                <td>
                  <span><AdminIconEyeSlash /></span>
                </td>
              </tr>

              <tr
                data-contract_id="3"
                data-action="https://user.haweb.vn/dashboard/contracts/3"
              >
                <td>
                  <input
                    class="form-check-input m-0 align-middle"
                    type="checkbox"
                    aria-label="Select invoice"
                  />
                </td>

                <td><span class="text-muted">#3</span></td>

                <td>
                  <h3 class="contract-code">code003</h3>
                </td>

                <td>
                  <a class="text-reset" tabindex="-1">
                    <h3 class="title-name">Khách hàng 003</h3>
                  </a>
                </td>

                <td>
                  <span>18/06/2022</span>
                </td>

                <td>
                  <div class="icon-svg">
                    <span class="svg active">
                      <AdminIconTick />
                    </span>
                  </div>
                </td>

                <td>
                  <div class="icon-svg">
                    <span class="svg">
                      <AdminIconTick />
                    </span>
                  </div>
                </td>

                <td>
                  <span class="label_year public"> Default </span>
                </td>

                <td>
                  <span class="label_year public"> Package 2GB </span>
                </td>

                <td>
                  <span class="label_year public"> Bich Tram Ha Thi </span>
                </td>

                <td>
                  <span class="label_year private"> private </span>
                </td>

                <td>
                  <span><AdminIconEyeSlash /></span>
                </td>
              </tr>

              <tr
                data-contract_id="2"
                data-action="https://user.haweb.vn/dashboard/contracts/2"
              >
                <td>
                  <input
                    class="form-check-input m-0 align-middle"
                    type="checkbox"
                    aria-label="Select invoice"
                  />
                </td>

                <td><span class="text-muted">#2</span></td>

                <td>
                  <h3 class="contract-code">code 001</h3>
                </td>

                <td>
                  <a class="text-reset" tabindex="-1">
                    <h3 class="title-name">Khách hàng 001</h3>
                  </a>
                </td>

                <td>
                  <span>17/06/2022</span>
                </td>

                <td>
                  <div class="icon-svg">
                    <span class="svg active">
                      <AdminIconTick />
                    </span>
                  </div>
                </td>

                <td>
                  <div class="icon-svg">
                    <span class="svg">
                      <AdminIconTick />
                    </span>
                  </div>
                </td>

                <td>
                  <span class="label_year public"> Domain A </span>
                </td>

                <td>
                  <span class="label_year public"> Default </span>
                </td>

                <td>
                  <span class="label_year public"> Hoang Mach Van </span>
                </td>

                <td>
                  <span class="label_year private"> private </span>
                </td>

                <td>
                  <span><AdminIconEyeSlash /></span>
                </td>
              </tr>

              <tr
                data-contract_id="1"
                data-action="https://user.haweb.vn/dashboard/contracts/1"
              >
                <td>
                  <input
                    class="form-check-input m-0 align-middle"
                    type="checkbox"
                    aria-label="Select invoice"
                  />
                </td>

                <td><span class="text-muted">#1</span></td>

                <td>
                  <h3 class="contract-code">code001</h3>
                </td>

                <td>
                  <a class="text-reset" tabindex="-1">
                    <h3 class="title-name">Khách hàng 001</h3>
                  </a>
                </td>

                <td>
                  <span>17/06/2022</span>
                </td>

                <td>
                  <div class="icon-svg">
                    <span class="svg active">
                      <AdminIconTick />
                    </span>
                  </div>
                </td>

                <td>
                  <div class="icon-svg">
                    <span class="svg">
                      <AdminIconTick />
                    </span>
                  </div>
                </td>

                <td>
                  <span class="label_year public"> Domain A </span>
                </td>

                <td>
                  <span class="label_year public"> Package 2GB </span>
                </td>

                <td>
                  <span class="label_year public"> Bich Tram Ha Thi </span>
                </td>

                <td>
                  <span class="label_year private"> private </span>
                </td>
                <td>
                  <span><AdminIconEyeSlash /></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </AdminBody>
</template>
<script setup>
definePageMeta({
  layout: "admin",
});
const seo = {
  title: "Admin - Contract",
  keyword: "Keyword on Admin - Contract",
  desciption: "Description on Admin - Contract",
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
