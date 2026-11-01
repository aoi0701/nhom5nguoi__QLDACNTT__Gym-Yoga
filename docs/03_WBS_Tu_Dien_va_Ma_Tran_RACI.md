# CẤU TRÚC PHÂN RÃ CÔNG VIỆC (WBS) & MA TRẬN TRÁCH NHIỆM RACI

## 1. CẤU TRÚC PHÂN RÃ CÔNG VIỆC (WBS 6 CẤP)

* **1.0 Quản lý dự án xuyên suốt (Tuần 1–8)**
  * 1.1 Khởi tạo dự án, Project Charter & Scope Statement
  * 1.2 Lập kế hoạch WBS, phân công RACI & Quản lý rủi ro
  * 1.3 Điều phối Sprint, Daily Standup & Giám sát tiến độ
  * 1.4 Đóng dự án, Báo cáo tổng kết & Tổ chức nghiệm thu
* **2.0 Sprint 1: Khảo sát, Yêu cầu & Thiết kế hệ thống, UI/UX (Tuần 1–2)**
  * 2.1 Thu thập yêu cầu bài tập Gym/Yoga & Tài liệu SRS
  * 2.2 Product Backlog, 200 User Stories & Permission Matrix
  * 2.3 Thiết kế kiến trúc 3-tier & CSDL quan hệ (ERD 3NF, DDL)
  * 2.4 Thiết kế Wireframe, UI High-Fidelity & Prototype Figma
* **3.0 Sprint 2: Nền tảng CSDL, Xác thực (Auth) & Phân quyền RBAC (Tuần 3–4)**
  * 3.1 Khởi tạo Git, Docker, Migration CSDL & Seed Data bài tập
  * 3.2 API & Giao diện Đăng ký, Đăng nhập (JWT Auth), Hồ sơ cá nhân
  * 3.3 Xây dựng Middleware RBAC, API CRUD User/Role/Permission
  * 3.4 Xây dựng Admin Dashboard & Ma trận phân quyền trực quan
* **4.0 Sprint 3: Quản lý bài tập Gym/Yoga & AI Recommendation Engine (Tuần 5–6)**
  * 4.1 API CRUD bài tập, bộ lọc đa tiêu chí (cơ, độ khó) & Feedback
  * 4.2 Giao diện Thư viện bài tập (Catalog), Bộ lọc & Chi tiết bài tập
  * 4.3 Tích hợp AI API, Prompt Engineering, sinh lịch tập cá nhân
  * 4.4 Giao diện AI Wizard, hiển thị lịch tập gợi ý & Lịch sử tập
* **5.0 Sprint 4: Kiểm thử tích hợp E2E, Triển khai Cloud & Nghiệm thu (Tuần 7–8)**
  * 5.1 Kiểm thử tích hợp hệ thống (E2E), kiểm thử bảo mật RBAC & Bug Fix
  * 5.2 Triển khai hệ thống lên máy chủ Cloud VPS, cấu hình SSL & Smoke Test
  * 5.3 Kiểm thử hồi quy (Regression), hoàn thiện User Manual & Video Demo
  * 5.4 Chuẩn bị Slide thuyết trình, kịch bản Demo & Báo cáo bảo vệ dự án
* **6.0 Dự phòng phí phát sinh (10%) (Tuần 1–8)**

---

## 2. MA TRẬN PHÂN CÔNG TRÁCH NHIỆM RACI

> **Quy ước:**  
> **R** (Responsible): Người trực tiếp thực hiện  
> **A** (Accountable): Người chịu trách nhiệm phê duyệt cuối cùng  
> **C** (Consulted): Người được tham vấn chuyên môn  
> **I** (Informed): Người được thông báo kết quả  

| Mã WBS | Hạng mục công việc chính | PM (Trưởng) | PO (Anh) | BE (Nghiệp) | FE (Nhân) | QA/DB (Nhật) |
| :-: | :--- | :-: | :-: | :-: | :-: | :-: |
| **1.1** | Khởi tạo Project Charter, Scope Statement | **A / R** | C | I | I | I |
| **1.2** | Lập kế hoạch WBS, RACI, Quản lý rủi ro | **A / R** | C | C | C | C |
| **2.1** | Khảo sát nghiệp vụ & Viết tài liệu SRS | A | **R** | C | C | C |
| **2.2** | Product Backlog & 200 User Stories | A | **R** | C | C | C |
| **2.3** | Thiết kế CSDL quan hệ (ERD 3NF, DDL) | A | C | C | I | **R** |
| **2.4** | Thiết kế Wireframe, UI/UX Prototype Figma | A | C | I | **R** | I |
| **3.1** | Setup Docker, DB Migration & Seed Data | A | I | C | I | **R** |
| **3.2** | Module Auth (JWT) & Quản lý Profile | A | C | **R** | **R** | C |
| **3.3** | RBAC Middleware & Admin Permissions | A | C | **R** | **R** | C |
| **4.1** | Quản lý Bài tập Gym/Yoga & Bộ lọc | A | C | **R** | **R** | C |
| **4.2** | AI Recommendation & Lịch tập Wizard | A | C | **R** | **R** | C |
| **5.1** | Master Test Plan & Bộ 150+ Test Cases | A | C | I | I | **R** |
| **5.2** | Kiểm thử chức năng, bảo mật RBAC & E2E | A | C | C | C | **R** |
| **5.3** | Triển khai Cloud Server, Nginx & HTTPS | A | I | **R** | C | C |
| **5.4** | Tài liệu bàn giao, Video Demo & Slide bảo vệ | **A / R** | R | R | R | R |
