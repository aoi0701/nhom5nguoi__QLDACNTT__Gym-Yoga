# TÔN CHỈ DỰ ÁN (PROJECT CHARTER)

## 1. THÔNG TIN CHUNG
* **Tên dự án:** Hệ thống quản lý phân quyền tích hợp AI hỗ trợ gợi ý bài tập Gym/Yoga
* **Tên tiếng Anh:** AI-Integrated Role-Based Gym/Yoga Exercise Recommendation System
* **Thời gian thực hiện:** 07/09/2026 – 26/10/2026 (8 tuần theo kế hoạch)
* **Quy mô nhóm:** 05 thành viên
* **Phương pháp quản lý:** Agile/Scrum kết hợp quản lý theo Sprint (4 Sprint)
* **Giám đốc dự án (PM):** Nguyễn Phan Ngọc Trưởng (hnhoa494@gmail.com)

## 2. DỰ TOÁN KINH PHÍ (BUDGET INFORMATION)
* **Tổng kinh phí dự kiến:** 90.000.000 VNĐ
  1. Nhân sự / phụ cấp nhóm: 60.000.000 VNĐ
  2. Hạ tầng máy chủ & tên miền (Cloud VPS, SSL, Domain): 12.000.000 VNĐ
  3. Công cụ & Giấy phép phần mềm (OpenAI API, Figma Pro, Tooling): 10.000.000 VNĐ
  4. Chi phí dự phòng rủi ro (10%): 8.000.000 VNĐ

## 3. MỤC TIÊU DỰ ÁN (PROJECT OBJECTIVES)
1. Xây dựng hệ thống đăng ký, đăng nhập và quản lý tài khoản người dùng bảo mật cao với JWT.
2. Xây dựng cơ chế Role-Based Access Control (RBAC) để phân quyền chặt chẽ giữa Admin, PT (Coach) và Member.
3. Quản lý danh mục bài tập Gym/Yoga đa dạng theo nhóm cơ, độ khó, thời lượng và dụng cụ.
4. Quản lý hồ sơ thể trạng người dùng (chiều cao, cân nặng, BMI, mục tiêu, chấn thương, thiết bị).
5. Tích hợp AI (OpenAI/Gemini API) để gợi ý lịch tập cá nhân hóa kèm cơ chế Fallback an toàn.
6. Cho phép đánh giá, chấm sao bài tập và cung cấp Dashboard quản trị toàn diện.
7. Triển khai hoàn thiện phiên bản Live Demo trực tuyến trên Internet.

## 4. ĐỘI NGŨ DỰ ÁN & PHÂN CÔNG TRÁCH NHIỆM
| Vai trò | Họ tên | MSSV | Email | Trách nhiệm chính |
| :--- | :--- | :--- | :--- | :--- |
| **Project Manager (PM)** | Nguyễn Phan Ngọc Trưởng | 2380602415 | hnhoa494@gmail.com | Quản lý phạm vi, tiến độ, rủi ro, chi phí; điều phối Sprint, theo dõi và báo cáo. |
| **Product Owner (PO)** | Lê Quốc Anh | 2380600052 | lequocanh125@gmail.com | Thu thập yêu cầu, Product Backlog, 200 User Stories, Acceptance Criteria, nghiệm thu. |
| **Frontend UI/UX** | Nguyễn Chí Nhân | 2380601523 | chinhan15102005@gmail.com | Thiết kế Figma, xây dựng giao diện Responsive, kết nối API và xử lý tương tác. |
| **Backend & AI** | Bùi Nguyễn Công Nghiệp | 2380601460 | buinguyencongnghiep04@gmail.com | Xây dựng RESTful API, Authentication JWT, RBAC Middleware, tích hợp AI & Prompt. |
| **Database & QA/Tester** | Đỗ Minh Nhật | 2380614792 | thcs.dominhnhat.lop9a1@gmail.com | Thiết kế ERD 3NF, seed data, Master Test Plan, 150+ Test Cases, Postman test, Bug Report. |
