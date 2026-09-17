# ĐỒ ÁN MÔN HỌC: QUẢN LÝ DỰ ÁN CÔNG NGHỆ THÔNG TIN
### KHOA CÔNG NGHỆ THÔNG TIN - ĐẠI HỌC CÔNG NGHỆ TP.HCM (HUTECH)
**Lớp:** 23DTHC3 | **Nhóm:** Nhóm 4 (Nhóm 5 người)  
**Đề tài 798 (Mã LV08-098):** **HỆ THỐNG PHÂN QUYỀN VAI TRÒ CÓ GỢI Ý AI: GỢI Ý BÀI TẬP CHO PHÒNG GYM/YOGA**

---

## 📌 1. BẢNG PHÂN CÔNG THÀNH VIÊN VÀ VAI TRÒ DỰ ÁN

| STT | Họ và tên | MSSV | Vai trò PMBOK / Scrum | Nhiệm vụ chính phụ trách |
| :---: | :--- | :---: | :--- | :--- |
| **1** | **Nguyễn Phan Ngọc Trưởng** *(Trưởng nhóm)* | **2380602415** | **Project Manager (PM) / Scrum Master & Integration** | Điều phối toàn diện dự án, lập Project Charter, WBS & Ngân sách (90M), Risk Register, quản lý Jira & Git. |
| **2** | **Lê Quốc Anh** | **2380600127** | **Business Analyst (BA) / Requirements & QA Lead** | Khảo sát nghiệp vụ gym/yoga, viết SRS v1, Use Cases chi tiết, lập Kế hoạch QA và tiêu chuẩn chấp nhận nghiệm thu. |
| **3** | **Nguyễn Chí Nhân** | **2380601557** | **UI/UX Designer & Frontend Lead** | Thiết kế Wireframe, UI/UX trên Figma, xây dựng giao diện ứng dụng web/mobile cho Hội viên, PT và Quản lý. |
| **4** | **Bùi Nguyễn Công Nghiệp** | **2380601509** | **Backend Lead & AI Integration** | Thiết kế kiến trúc Backend, xây dựng RESTful API, phân quyền vai trò (RBAC), tích hợp module AI gợi ý bài tập. |
| **5** | **Đỗ Minh Nhật** | **2380601582** | **Database Administrator (DBA) & Tester** | Thiết kế mô hình CSDL ERD, Data Dictionary, tối ưu truy vấn SQL, lập Test Cases và thực thi kiểm thử hệ thống. |

---

## 🔗 2. LIÊN KẾT HỆ THỐNG QUẢN LÝ DỰ ÁN
- **Jira Cloud (Scrum Board & Backlog 8 Sprints):**  
  👉 [https://hnhoa494.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog](https://hnhoa494.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog)
- **GitHub Repository chính thức:**  
  👉 [https://github.com/aoi0701/nhom5nguoi__QLDACNTT__Gym-Yoga](https://github.com/aoi0701/nhom5nguoi__QLDACNTT__Gym-Yoga)
- **Hồ sơ Quản lý Dự án (PM Documentation trong thư mục `docs/`):**
  - `docs/Nhom_5_nguoi-Ton_Chi_Du_An.docx`: Tôn chỉ dự án (Project Charter), Tuyên bố phạm vi (Scope Statement), Cấu trúc phân chia công việc (WBS 34 nhiệm vụ) và Ngân sách cơ sở (Cost Baseline 90.000.000 VNĐ).
  - `docs/ms_project_tasks_gym_yoga.xlsx`: Bảng tiến độ Gantt, giờ công và chi phí theo từng thành viên.
  - `docs/QLRR_GymYoga_Nhom5.xlsx`: Bảng Quản lý 10 Rủi ro thực tế, Ma trận rủi ro 5x5 và Kế hoạch Mua sắm (Make-or-Buy).

---

## 📂 3. CẤU TRÚC THƯ MỤC DỰ ÁN (PROJECT REPOSITORY STRUCTURE)

```text
nhom5nguoi__QLDACNTT__Gym-Yoga/
├── .gitignore              # Bỏ qua file rác, cache, build artifacts
├── README.md               # Giới thiệu dự án, phân công và hướng dẫn làm việc
├── docs/                   # Thư mục tài liệu Quản lý dự án & Phân tích nghiệp vụ
│   ├── Nhom_5_nguoi-Ton_Chi_Du_An.docx   # Hồ sơ PMBOK (Charter, Scope, WBS)
│   ├── ms_project_tasks_gym_yoga.xlsx   # Tiến độ và chi phí công việc
│   └── QLRR_GymYoga_Nhom5.xlsx          # Bảng Quản lý Rủi ro & Kế hoạch Mua sắm
├── database/               # Thiết kế CSDL, script SQL (Phụ trách: Đỗ Minh Nhật)
│   ├── README.md
│   └── schema.sql          # (Sắp cập nhật Tuần 2)
├── backend/                # Mã nguồn API & Logic hệ thống (Phụ trách: Bùi Nguyễn Công Nghiệp)
│   └── README.md
└── frontend/               # Mã nguồn giao diện người dùng (Phụ trách: Nguyễn Chí Nhân)
    └── README.md
```

---

## ⚙️ 4. QUY TRÌNH LÀM VIỆC GIT & COMMIT CONVENTION (BẮT BUỘC)

Nhằm đảm bảo tính minh bạch, đúng chuẩn quy trình Quản lý Dự án CNTT và đáp ứng tiêu chí đánh giá của Giảng viên (tất cả 5 thành viên đều có lịch sử đóng góp code/tài liệu trên Git):

### 4.1. Quy tắc phân nhánh (Branching Strategy)
- `main`: Nhánh bản phát hành chính thức (Release). Chỉ PM (Nguyễn Phan Ngọc Trưởng) có quyền merge sau khi nghiệm thu.
- `dev`: Nhánh phát triển và tích hợp chung của toàn nhóm.
- Nhánh tính năng cá nhân: Mỗi thành viên khi làm task được giao trên Jira cần tạo một nhánh riêng từ `dev`:
  ```bash
  git checkout dev
  git pull origin dev
  git checkout -b feat/SCRUM-<MãTask>-<TênNgắnGọn>
  ```
  *Ví dụ:*
  - SV2 (Quốc Anh): `feat/SCRUM-14-srs-usecase`
  - SV3 (Chí Nhân): `feat/SCRUM-15-ui-wireframe`
  - SV4 (Công Nghiệp): `feat/SCRUM-17-backend-init`
  - SV5 (Minh Nhật): `feat/SCRUM-16-db-schema`

### 4.2. Quy chuẩn Commit Message (Gắn mã Jira)
Mỗi commit bắt buộc phải có mã task Jira ở đầu câu để hệ thống tự động ghi nhận minh chứng:
```text
[SCRUM-<MãTask>] <Mô tả ngắn gọn công việc thực hiện>
```
*Ví dụ:*
- `[SCRUM-14] Add SRS document v1 with 8 detailed use cases for Gym/Yoga`
- `[SCRUM-16] Add initial database ERD and schema.sql for 8 tables`
- `[SCRUM-15] Add Figma wireframe flow for Member workout recommendation`

### 4.3. Quy trình Nộp bài & Merge (Pull Request - PR)
1. Thành viên hoàn thành công việc trên nhánh tính năng cá nhân -> `git push origin feat/SCRUM-xx-...`
2. Truy cập GitHub tạo **Pull Request (PR)** vào nhánh `dev`.
3. Gán PM (**aoi0701**) làm Reviewer.
4. PM kiểm tra nội dung, duyệt (Approve) và Merge PR vào nhánh `dev`.
5. Thành viên vào Jira chuyển trạng thái công việc sang **Done**.

---

## 🚀 5. TECH STACK DỰ KIẾN (KIẾN TRÚC CÔNG NGHỆ)
- **Frontend:** React.js / Next.js / TailwindCSS (Web Responsive tối ưu cho Mobile & Desktop).
- **Backend:** Node.js (Express/NestJS) hoặc Python (FastAPI).
- **Database:** PostgreSQL / MySQL (Mô hình CSDL quan hệ chuẩn 3NF).
- **AI Recommendation Module:** Tích hợp mô hình AI (Google Gemini API / Machine Learning Engine) phân tích chỉ số thể trạng (BMI, mục tiêu giảm cân/tăng cơ, thói quen sinh hoạt) để gợi ý lộ trình bài tập Gym/Yoga phù hợp cho từng cá nhân.
- **Authentication & Authorization:** JWT (JSON Web Token) kết hợp kiểm soát truy cập dựa trên vai trò (Role-Based Access Control - RBAC: Admin phòng tập, Huấn luyện viên cá nhân - PT, Hội viên Gym/Yoga).

---
*Bản quyền dự án thuộc về Nhóm 4 (Nhóm 5 người) - Lớp 23DTHC3 - Khoa CNTT HUTECH (Năm học 2026).*