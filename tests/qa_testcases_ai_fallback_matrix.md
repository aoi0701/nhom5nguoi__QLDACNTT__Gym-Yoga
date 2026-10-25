# MA TRẬN TEST CASES KIỂM THỬ CƠ CHẾ DỰ PHÒNG AI FALLBACK
**Tác giả:** Đỗ Minh Nhật (QA Lead / DBA — SV5)  
**Mã WBS:** 3.28 | **Mã Jira:** `SCRUM-115` (QA-74)  
**Ngày kiểm thử:** 08/10/2026  

---

| Test Case ID | Mục tiêu kiểm thử | Đầu vào (Input) | Kết quả mong đợi (Expected Output) | Trạng thái |
| :--- | :--- | :--- | :--- | :---: |
| **TC-AI-FB-01** | Kiểm thử Timeout > 5s | Request khảo sát thể trạng khi server Gemini bị nghẽn mạng | Backend tự động kích hoạt Rule-based Fallback, trả về lịch tập mẫu chuẩn theo BMI trong < 1.5s, không crash lỗi 500 | **PASS** |
| **TC-AI-FB-02** | Kiểm thử Hết hạn mức Quota (429 Too Many Requests) | Cố tình spam 30 request/phút vượt rate limit | Hệ thống chuyển sang lấy dữ liệu cache từ CSDL cục bộ, hiển thị thông báo "Đang dùng giáo án dự phòng" | **PASS** |
| **TC-AI-FB-03** | Ràng buộc Schema JSON sai lệch | AI trả về text thông thường thay vì JSON format | Bộ Parser bắt ngoại lệ `JSONDecodeError`, chuyển hướng sinh lịch tập từ template có sẵn | **PASS** |
