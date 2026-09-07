# QUY CHẾ LÀM VIỆC NHÓM & QUY TRÌNH GITFLOW CHUẨN

## 1. CẤU TRÚC NHÁNH GITFLOW

* **`production`** *(hoặc `main`)*:
  * Nhánh sản phẩm chính thức.
  * Chỉ nhận merge từ `develop` khi kết thúc mỗi Sprint (Milestone Release).
  * Nghiêm cấm push trực tiếp.
* **`develop`**:
  * Nhánh tích hợp trung tâm của cả nhóm.
  * Mọi tính năng sau khi hoàn tất trên các nhánh `role/*` sẽ tạo Pull Request (PR) và có ít nhất 1 thành viên review trước khi merge.
* **5 Nhánh Vai trò (`role/*`)**:
  * `role/pm`: Dành riêng cho Nguyễn Phan Ngọc Trưởng (PM).
  * `role/po`: Dành riêng cho Lê Quốc Anh (PO).
  * `role/frontend`: Dành riêng cho Nguyễn Chí Nhân (Frontend).
  * `role/backend`: Dành riêng cho Bùi Nguyễn Công Nghiệp (Backend).
  * `role/database-qa`: Dành riêng cho Đỗ Minh Nhật (DB & QA).

---

## 2. QUY ƯỚC COMMIT (CONVENTIONAL COMMITS)

Mọi commit phải tuân thủ nghiêm ngặt cú pháp:
`<loại>(<phạm_vi>): <mô_tả_ngắn> (#<mã_issue>)`

* **Các loại commit (Types):**
  * `feat`: Tính năng mới cho người dùng.
  * `fix`: Sửa lỗi phát hiện trong quá trình kiểm thử.
  * `docs`: Cập nhật tài liệu kỹ thuật, WBS, SRS, báo cáo.
  * `style`: Cải thiện giao diện, CSS, định dạng mã nguồn.
  * `refactor`: Tái cấu trúc mã nguồn mà không thay đổi chức năng.
  * `test`: Bổ sung hoặc chỉnh sửa bộ test cases, unit tests.
  * `chore`: Cấu hình build, dependencies, docker, git.

* **Ví dụ chuẩn:**
  * `docs(pm): update project charter and scope statement (#1)`
  * `docs(srs): add 200 user stories with acceptance criteria (#25)`
  * `feat(auth): implement jwt authentication and refresh token (#102)`
  * `feat(rbac): create rbac middleware and permission matrix (#107)`
  * `style(ui): design responsive exercise card grid layout (#172)`
  * `test(qa): add security test cases for rbac authorization (#68)`
