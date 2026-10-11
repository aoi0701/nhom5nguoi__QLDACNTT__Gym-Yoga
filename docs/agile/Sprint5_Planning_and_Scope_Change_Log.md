# KẾ HOẠCH CHI TIẾT SPRINT 5 & NHẬT KÝ KIỂM SOÁT THAY ĐỔI (CHANGE CONTROL)
**Người lập:** Nguyễn Phan Ngọc Trưởng (Project Manager / Scrum Master — SV1)  
**Thời gian Sprint 5:** 05/10/2026 – 11/10/2026  
**Mục tiêu Sprint (Sprint Goal):** Hoàn thiện Module Đánh giá bài tập, Tích hợp Google Gemini AI sinh lịch tập tuần, xây dựng kịch bản kiểm thử tự động Postman và phòng ngừa lỗi AI Fallback.  

---

## 1. Nhật ký Kiểm soát Thay đổi (Scope Change Log)
* **Mã yêu cầu (CR-05):** Điều chỉnh tích hợp SDK AI từ OpenAI sang Google Gemini API.
  * **Lý do:** Tối ưu hóa chi phí bản quyền công cụ (Gemini 1.5 Flash cung cấp quota miễn phí cao, phù hợp với đồ án sinh viên).
  * **Đánh giá tác động:** Không ảnh hưởng đến tiến độ dự án, kiến trúc Service Layer được thiết kế trừu tượng nên dễ dàng thay thế adapter.
  * **Phê duyệt:** PM Nguyễn Phan Ngọc Trưởng phê duyệt ngày 06/10/2026.
