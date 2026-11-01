# KHUNG BỘ TÀI LIỆU NGHIỆM THU KỸ THUẬT & CHUYỂN GIAO HỆ THỐNG
**Mã công việc:** WBS 1.28 / SCRUM-60  
**Người phụ trách:** Nguyễn Phan Ngọc Trưởng (Project Manager)  
**Sprint:** Sprint 8 (Tuần 8) | **Độ ưu tiên:** P1  

---

## 1. MỤC TIÊU & PHẠM VI NGHIỆM THU
Tài liệu này xác lập khung tiêu chuẩn đánh giá kỹ thuật và quy trình nghiệm thu chuyển giao toàn diện hệ thống Nền tảng Tập luyện Gym & Yoga Tích hợp Trí tuệ Nhân tạo (Gym-Yoga AI Planner).

## 2. DANH MỤC SẢN PHẨM BÀN GIAO (DELIVERABLES)
1. **Mã nguồn hệ thống:** Đầy đủ trên nhánh `main` và `develop`, tuân thủ GitFlow và chuẩn Conventional Commits.
2. **Cơ sở dữ liệu:** Schema PostgreSQL 3NF chuẩn hóa, Migration scripts và Seed Data 50+ bài tập.
3. **Môi trường triển khai:** Cấu hình Docker multi-stage, Docker Compose và Nginx Reverse Proxy.
4. **Hồ sơ tài liệu kỹ thuật:**
   - 01_Project_Charter_Ton_Chi_Du_An.md
   - 02_Scope_Statement_Pham_Vi.md
   - 03_WBS_Tu_Dien_va_Ma_Tran_RACI.md
   - 04_Product_Backlog_200_Issues.md
   - 05_Master_Test_Plan_va_ERD.md
   - 06_GitFlow_va_Quy_Che_Lam_Viec.md
   - 07_Khung_Nghiem_Thu_va_Chuyen_Giao_He_Thong.md
   - 08_Bao_Cao_Tong_Ket_Kiem_Thu_Test_Summary_Report.md

## 3. TIÊU CHÍ ĐÁNH GIÁ NGHIỆM THU (ACCEPTANCE CRITERIA)
- Tỷ lệ hoàn thành User Stories: 100% (200/200 User Stories).
- Tỷ lệ kiểm thử tự động (Unit & Integration): 100% Pass.
- Thời gian phản hồi API AI: < 5 giây (kèm thuật toán Rule-based Fallback khi mất kết nối).
- Bảo mật hệ thống: Phân quyền RBAC 3 vai trò (Admin, PT, Member), mã hóa bcrypt, JWT Stateless.
- Giấy phép mã nguồn mở: Tuân thủ đầy đủ điều khoản AGPL-3.0.
