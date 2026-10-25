# ĐẶC TẢ USER STORIES & ACCEPTANCE CRITERIA (AC) — SPRINT 5
**Tác giả:** Lê Quốc Anh (Product Owner / Business Analyst — SV2)  
**Ngày lập:** 08/10/2026  
**Dự án:** Quản lý dự án CNTT — Hệ thống Gym & Yoga kết hợp AI  

---

## 1. User Story US09: Theo dõi lịch sử và tiến độ bài tập
* **Mã Jira:** `SCRUM-85` (PO-44)
* **User Story:** "Là một **Hội viên (Member)**, tôi muốn **xem lại lịch sử các bài tập đã hoàn thành trong tuần**, để **tôi có thể theo dõi tiến độ rèn luyện và duy trì động lực tập luyện cá nhân**."
* **Acceptance Criteria (AC):**
  1. Hệ thống tự động ghi nhận thời điểm hoàn thành bài tập ngay khi người dùng bấm "Hoàn tất".
  2. Bảng lịch sử hiển thị đầy đủ: Ngày tập, tên bài tập, loại hình (Gym/Yoga), tổng số phút tập và lượng calories ước tính.
  3. Cho phép lọc lịch sử theo tuần, tháng và theo thể loại bài tập.

---

## 2. User Story US10: Đánh giá chất lượng và chấm sao bài tập
* **Mã Jira:** `SCRUM-86` (PO-45)
* **User Story:** "Là một **Hội viên**, tôi muốn **chấm điểm sao (1-5 sao) và để lại bình luận cho bài tập**, để **giúp cộng đồng và HLV nâng cao chất lượng giáo án**."
* **Acceptance Criteria (AC):**
  1. Người dùng chỉ được đánh giá các bài tập mà mình đã hoàn thành ít nhất một lần.
  2. Thang điểm đánh giá từ 1 đến 5 sao, kèm ô nhập nội dung cảm nhận (tối đa 500 ký tự).
  3. Điểm trung bình của bài tập được cập nhật tức thời (Real-time recalculation) ngay sau khi gửi thành công.
