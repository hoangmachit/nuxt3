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
  <AdminBody>
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Danh sách tên miền</h3>
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
                <th>Tên</th>
                <th>Tên Miền</th>
                <th>Đơn vị sản xuất</th>
                <th>common..price</th>
                <th>Giá giảm</th>
                <th>Ngày thanh toán</th>
                <th>Thời hạn (Năm)</th>
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
                    href="#"
                    class="text-decation-none domain_edit"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-edit"
                    data-id="13"
                    data-status="public"
                    data-domain_name="usananian.com"
                    data-name="PHẠM NGỌC LUYẾN ( CHỊ NGỌC )"
                    data-production_unit="pavietnam.vn"
                    data-note="Thông Tin Tên Miền
Tên miền	usananian.com
Mật khẩu	fu24A9Kv7YPt"
                    data-date_payment="2023-06-24"
                    data-address="27 WINNMA AVE VIC3976"
                    data-year="1_years"
                    data-action="https://user.haweb.vn/dashboard/domains/13"
                    data-delete="https://user.haweb.vn/dashboard/domains/13"
                    data-price="241000"
                    data-price_special="0"
                  >
                    <h3 class="title-name">PHẠM NGỌC LUYẾN ( CHỊ NGỌC )</h3>
                  </a>
                </td>
                <td>
                  <span class="domain_name">usananian.com</span>
                </td>
                <td>
                  <span class="production_unit"> pavietnam.vn</span>
                </td>
                <td>
                  <span class="domain_name">241.000 <sup>đ</sup></span>
                </td>
                <td>
                  <span class="domain_name">0 <sup>đ</sup></span>
                </td>
                <td>2023/06/24 12:00:AM</td>
                <td>
                  <span class="label_year">1 years</span>
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
                  <a
                    href="#"
                    class="text-decation-none domain_edit"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-edit"
                    data-id="12"
                    data-status="public"
                    data-domain_name="BellaPermanent-Makeup.com"
                    data-name="NGUYỄN TUẤN HƯNG"
                    data-production_unit="Pavietnam.vn"
                    data-note="Thông Tin Tên Miền
Tên miền	bellapermanent-makeup.com
Mật khẩu	Hu527raRdP6C"
                    data-date_payment="2023-05-31"
                    data-address="4/23 Phạm Ngọc Thạch, Phường 9, Thành Phố Vũng Tàu, Bà Rịa-Vũng Tàu"
                    data-year="1_years"
                    data-action="https://user.haweb.vn/dashboard/domains/12"
                    data-delete="https://user.haweb.vn/dashboard/domains/12"
                    data-price="241000"
                    data-price_special="0"
                  >
                    <h3 class="title-name">NGUYỄN TUẤN HƯNG</h3>
                  </a>
                </td>
                <td>
                  <span class="domain_name">BellaPermanent-Makeup.com</span>
                </td>
                <td>
                  <span class="production_unit"> Pavietnam.vn</span>
                </td>
                <td>
                  <span class="domain_name">241.000 <sup>đ</sup></span>
                </td>
                <td>
                  <span class="domain_name">0 <sup>đ</sup></span>
                </td>
                <td>2023/05/31 12:00:AM</td>
                <td>
                  <span class="label_year">1 years</span>
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
                <td><span class="text-muted">3</span></td>
                <td>
                  <a
                    href="#"
                    class="text-decation-none domain_edit"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-edit"
                    data-id="11"
                    data-status="public"
                    data-domain_name="xaydungmiennam.com.vn"
                    data-name="ĐẶNG TẤN XUÂN"
                    data-production_unit="nina.vn"
                    data-note="http://domain.nina.vn
Domain : xaydungmiennam.com.vn
Mat khau moi: phdQ541NFw7M"
                    data-date_payment="2025-05-31"
                    data-address="Hồ Tràm, Phước Thuận, Xuyên Mộc, Bà Rịa - Vũng Tàu"
                    data-year="3_years"
                    data-action="https://user.haweb.vn/dashboard/domains/11"
                    data-delete="https://user.haweb.vn/dashboard/domains/11"
                    data-price="0"
                    data-price_special="0"
                  >
                    <h3 class="title-name">ĐẶNG TẤN XUÂN</h3>
                  </a>
                </td>
                <td>
                  <span class="domain_name">xaydungmiennam.com.vn</span>
                </td>
                <td>
                  <span class="production_unit"> nina.vn</span>
                </td>
                <td>
                  <span class="domain_name">0 <sup>đ</sup></span>
                </td>
                <td>
                  <span class="domain_name">0 <sup>đ</sup></span>
                </td>
                <td>2025/05/31 12:00:AM</td>
                <td>
                  <span class="label_year">3 years</span>
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
                  <a
                    href="#"
                    class="text-decation-none domain_edit"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-edit"
                    data-id="10"
                    data-status="public"
                    data-domain_name="otovuhung.vn"
                    data-name="CÔNG TY TNHH MỘT THÀNH VIÊN THƯƠNG MẠI Ô TÔ VŨ HÙNG"
                    data-production_unit="inet.vn"
                    data-note="otovuhung.com.vn 
otovuhung.vn
User: otovuhung898@gmail.com
Pw: Otovuhung@123!@#
Link: inet.vn"
                    data-date_payment="2023-02-23"
                    data-address="114 Nguyễn Cửu Đàm, Phường Tân Sơn Nhì, Quận Tân Phú, tp. Hồ Chí Minh"
                    data-year="1_years"
                    data-action="https://user.haweb.vn/dashboard/domains/10"
                    data-delete="https://user.haweb.vn/dashboard/domains/10"
                    data-price="0"
                    data-price_special="0"
                  >
                    <h3 class="title-name">
                      CÔNG TY TNHH MỘT THÀNH VIÊN THƯƠNG MẠI Ô TÔ VŨ HÙNG
                    </h3>
                  </a>
                </td>
                <td>
                  <span class="domain_name">otovuhung.vn</span>
                </td>
                <td>
                  <span class="production_unit"> inet.vn</span>
                </td>
                <td>
                  <span class="domain_name">0 <sup>đ</sup></span>
                </td>
                <td>
                  <span class="domain_name">0 <sup>đ</sup></span>
                </td>
                <td>2023/02/23 12:00:AM</td>
                <td>
                  <span class="label_year">1 years</span>
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
                <td><span class="text-muted">5</span></td>
                <td>
                  <a
                    href="#"
                    class="text-decation-none domain_edit"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-edit"
                    data-id="9"
                    data-status="public"
                    data-domain_name="cncmustang.com"
                    data-name="CÔNG TY TNHH MÁY CHẾ BIẾN GỖ CHÍNH XÁC MUSTANG"
                    data-production_unit="pavietnam.vn"
                    data-note="Thông Tin Tên Miền
Tên miền	cncmustang.com
Mật khẩu	4aS3s2EhtZ8R"
                    data-date_payment="2023-05-13"
                    data-address="Thửa Đất Số 136, TBDD8, Tổ 4, KP4, P.Uyên Hưng, TX. Tân Uyên, T.Bình Dương"
                    data-year="1_years"
                    data-action="https://user.haweb.vn/dashboard/domains/9"
                    data-delete="https://user.haweb.vn/dashboard/domains/9"
                    data-price="241000"
                    data-price_special="0"
                  >
                    <h3 class="title-name">
                      CÔNG TY TNHH MÁY CHẾ BIẾN GỖ CHÍNH XÁC MUSTANG
                    </h3>
                  </a>
                </td>
                <td>
                  <span class="domain_name">cncmustang.com</span>
                </td>
                <td>
                  <span class="production_unit"> pavietnam.vn</span>
                </td>
                <td>
                  <span class="domain_name">241.000 <sup>đ</sup></span>
                </td>
                <td>
                  <span class="domain_name">0 <sup>đ</sup></span>
                </td>
                <td>2023/05/13 12:00:AM</td>
                <td>
                  <span class="label_year">1 years</span>
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
                <td><span class="text-muted">6</span></td>
                <td>
                  <a
                    href="#"
                    class="text-decation-none domain_edit"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-edit"
                    data-id="8"
                    data-status="public"
                    data-domain_name="mutxopdonggoi.com"
                    data-name="HÀ THỊ MINH NGUYỆT"
                    data-production_unit="pavietnam.vn"
                    data-note="Thông Tin Tên Miền
Tên miền	mutxopdonggoi.com
Mật khẩu	cCR6hPwYb814"
                    data-date_payment="2023-04-24"
                    data-address="26/1A Ấp Trung Đông, Thới Tam Thôn, Hóc Môn, TP.HCM"
                    data-year="1_years"
                    data-action="https://user.haweb.vn/dashboard/domains/8"
                    data-delete="https://user.haweb.vn/dashboard/domains/8"
                    data-price="241000"
                    data-price_special="0"
                  >
                    <h3 class="title-name">HÀ THỊ MINH NGUYỆT</h3>
                  </a>
                </td>
                <td>
                  <span class="domain_name">mutxopdonggoi.com</span>
                </td>
                <td>
                  <span class="production_unit"> pavietnam.vn</span>
                </td>
                <td>
                  <span class="domain_name">241.000 <sup>đ</sup></span>
                </td>
                <td>
                  <span class="domain_name">0 <sup>đ</sup></span>
                </td>
                <td>2023/04/24 12:00:AM</td>
                <td>
                  <span class="label_year">1 years</span>
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
                <td><span class="text-muted">7</span></td>
                <td>
                  <a
                    href="#"
                    class="text-decation-none domain_edit"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-edit"
                    data-id="7"
                    data-status="public"
                    data-domain_name="congnghephoxanh.com"
                    data-name="CÔNG TY TNHH THƯƠNG MẠI DỊC VỤ CÔNG NGHỆ PHỐ XANH"
                    data-production_unit="pavietnam.vn"
                    data-note="Thông Tin Tên Miền
Tên miền	congnghephoxanh.com
Mật khẩu	WP62h3vQkJs4"
                    data-date_payment="2023-04-14"
                    data-address="27B Nguyễn Tất Thành, P. Phước Trung, Tp. Bà Rịa, Vũng Tàu"
                    data-year="1_years"
                    data-action="https://user.haweb.vn/dashboard/domains/7"
                    data-delete="https://user.haweb.vn/dashboard/domains/7"
                    data-price="241000"
                    data-price_special="0"
                  >
                    <h3 class="title-name">
                      CÔNG TY TNHH THƯƠNG MẠI DỊC VỤ CÔNG NGHỆ PHỐ XANH
                    </h3>
                  </a>
                </td>
                <td>
                  <span class="domain_name">congnghephoxanh.com</span>
                </td>
                <td>
                  <span class="production_unit"> pavietnam.vn</span>
                </td>
                <td>
                  <span class="domain_name">241.000 <sup>đ</sup></span>
                </td>
                <td>
                  <span class="domain_name">0 <sup>đ</sup></span>
                </td>
                <td>2023/04/14 12:00:AM</td>
                <td>
                  <span class="label_year">1 years</span>
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
                <td><span class="text-muted">8</span></td>
                <td>
                  <a
                    href="#"
                    class="text-decation-none domain_edit"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-edit"
                    data-id="6"
                    data-status="public"
                    data-domain_name="windhouse.vn"
                    data-name="NGUYỄN THỊ THANH"
                    data-production_unit="pavietnam.vn"
                    data-note="Thông Tin Tên Miền
Tên miền	windhouse.vn
Mật khẩu	S72b45jkATWt"
                    data-date_payment="2023-04-14"
                    data-address="Tổ 33,Khu Phố 5, Hà Khánh, Tp. Hạ Long,Quảng Ninh"
                    data-year="1_years"
                    data-action="https://user.haweb.vn/dashboard/domains/6"
                    data-delete="https://user.haweb.vn/dashboard/domains/6"
                    data-price="550000"
                    data-price_special="0"
                  >
                    <h3 class="title-name">NGUYỄN THỊ THANH</h3>
                  </a>
                </td>
                <td>
                  <span class="domain_name">windhouse.vn</span>
                </td>
                <td>
                  <span class="production_unit"> pavietnam.vn</span>
                </td>
                <td>
                  <span class="domain_name">550.000 <sup>đ</sup></span>
                </td>
                <td>
                  <span class="domain_name">0 <sup>đ</sup></span>
                </td>
                <td>2023/04/14 12:00:AM</td>
                <td>
                  <span class="label_year">1 years</span>
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
                <td><span class="text-muted">9</span></td>
                <td>
                  <a
                    href="#"
                    class="text-decation-none domain_edit"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-edit"
                    data-id="5"
                    data-status="public"
                    data-domain_name="quangcaocanhduong.com"
                    data-name="DƯƠNG VĂN CẢNH"
                    data-production_unit="pavietnam.vn"
                    data-note="Thông Tin Tên Miền
Tên miền	quangcaocanhduong.com
Mật khẩu	7ht9CN3s5SEz"
                    data-date_payment="2023-03-29"
                    data-address="Tân Thanh, Cái Bè, Tiền Giang"
                    data-year="1_years"
                    data-action="https://user.haweb.vn/dashboard/domains/5"
                    data-delete="https://user.haweb.vn/dashboard/domains/5"
                    data-price="241000"
                    data-price_special="0"
                  >
                    <h3 class="title-name">DƯƠNG VĂN CẢNH</h3>
                  </a>
                </td>
                <td>
                  <span class="domain_name">quangcaocanhduong.com</span>
                </td>
                <td>
                  <span class="production_unit"> pavietnam.vn</span>
                </td>
                <td>
                  <span class="domain_name">241.000 <sup>đ</sup></span>
                </td>
                <td>
                  <span class="domain_name">0 <sup>đ</sup></span>
                </td>
                <td>2023/03/29 12:00:AM</td>
                <td>
                  <span class="label_year">1 years</span>
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
                <td><span class="text-muted">10</span></td>
                <td>
                  <a
                    href="#"
                    class="text-decation-none domain_edit"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-edit"
                    data-id="4"
                    data-status="private"
                    data-domain_name="glasus.net"
                    data-name="NGUYỄN HỒNG LONG"
                    data-production_unit="www.matbao.net"
                    data-note="No 81, Da Street, Tân Hưng Ward, District 7, Ho Chi Minh"
                    data-date_payment="2022-08-08"
                    data-address=""
                    data-year="1_years"
                    data-action="https://user.haweb.vn/dashboard/domains/4"
                    data-delete="https://user.haweb.vn/dashboard/domains/4"
                    data-price="0"
                    data-price_special="0"
                  >
                    <h3 class="title-name">NGUYỄN HỒNG LONG</h3>
                  </a>
                </td>
                <td>
                  <span class="domain_name">glasus.net</span>
                </td>
                <td>
                  <span class="production_unit"> www.matbao.net</span>
                </td>
                <td>
                  <span class="domain_name">0 <sup>đ</sup></span>
                </td>
                <td>
                  <span class="domain_name">0 <sup>đ</sup></span>
                </td>
                <td>2022/08/08 12:00:AM</td>
                <td>
                  <span class="label_year">1 years</span>
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
                <td><span class="text-muted">11</span></td>
                <td>
                  <a
                    href="#"
                    class="text-decation-none domain_edit"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-edit"
                    data-id="3"
                    data-status="public"
                    data-domain_name="lamphucphatfurniture.com"
                    data-name="VŨ ĐỨC VIỆT"
                    data-production_unit="pavietnam.vn"
                    data-note="Thông Tin Tên Miền
Tên miền	lamphucphatfurniture.com
Mật khẩu	RB93Ps5Ww7ar
Quý khách có thể đăng nhập để cấu hình Tên miền: https://access.pavietnam.vn"
                    data-date_payment="2022-02-27"
                    data-address="Kp Xuân Đồng, Phường Tân Thiện, TP. Đồng Xoài, Bình Phước"
                    data-year="1_years"
                    data-action="https://user.haweb.vn/dashboard/domains/3"
                    data-delete="https://user.haweb.vn/dashboard/domains/3"
                    data-price="241000"
                    data-price_special="0"
                  >
                    <h3 class="title-name">VŨ ĐỨC VIỆT</h3>
                  </a>
                </td>
                <td>
                  <span class="domain_name">lamphucphatfurniture.com</span>
                </td>
                <td>
                  <span class="production_unit"> pavietnam.vn</span>
                </td>
                <td>
                  <span class="domain_name">241.000 <sup>đ</sup></span>
                </td>
                <td>
                  <span class="domain_name">0 <sup>đ</sup></span>
                </td>
                <td>2022/02/27 12:00:AM</td>
                <td>
                  <span class="label_year">1 years</span>
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
                <td><span class="text-muted">12</span></td>
                <td>
                  <a
                    href="#"
                    class="text-decation-none domain_edit"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-edit"
                    data-id="1"
                    data-status="public"
                    data-domain_name="default"
                    data-name="Default"
                    data-production_unit="Default"
                    data-note="Default"
                    data-date_payment="2022-06-16"
                    data-address="Default"
                    data-year="5_years"
                    data-action="https://user.haweb.vn/dashboard/domains/1"
                    data-delete="https://user.haweb.vn/dashboard/domains/1"
                    data-price="0"
                    data-price_special="0"
                  >
                    <h3 class="title-name">Default</h3>
                  </a>
                </td>
                <td>
                  <span class="domain_name">default</span>
                </td>
                <td>
                  <span class="production_unit"> Default</span>
                </td>
                <td>
                  <span class="domain_name">0 <sup>đ</sup></span>
                </td>
                <td>
                  <span class="domain_name">0 <sup>đ</sup></span>
                </td>
                <td>2022/06/16 12:00:AM</td>
                <td>
                  <span class="label_year">5 years</span>
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
  created() {},
};
</script>