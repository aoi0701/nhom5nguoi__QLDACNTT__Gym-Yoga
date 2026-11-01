# BÁO CÁO PHÁT BIỂU VỀ PHẠM VI (SCOPE STATEMENT)

> **Người lập:** Nguyễn Phan Ngọc Trưởng (PM)  
> **Người phê duyệt:** Lê Quốc Anh (PO)  
> **Dự án:** Hệ thống quản lý phân quyền tích hợp AI hỗ trợ gợi ý bài tập Gym/Yoga  

---

## 1. PHẠM VI TRONG DỰ ÁN (IN-SCOPE)
* **Module 1: Authentication & User Profile**
  * Đăng ký, đăng nhập tài khoản an toàn với JWT và bcrypt.
  * Quản lý hồ sơ thể trạng: chiều cao, cân nặng, chỉ số BMI tự động, mục tiêu tập luyện, tiền sử chấn thương, thiết bị sẵn có.
* **Module 2: Quản trị phân quyền RBAC & Dashboard Admin**
  * Cơ chế Role-Based Access Control ngăn chặn triệt để Privilege Escalation.
  * Phân chia rõ 3 vai trò: Quản trị viên (Admin), Huấn luyện viên (PT/Coach), Học viên (Member).
  * Dashboard quản trị thống kê người dùng, vai trò và ma trận quyền trực quan.
* **Module 3: Thư viện bài tập Gym & Yoga**
  * CRUD danh mục bài tập (tiêu đề, hướng dẫn kỹ thuật, hình ảnh/video minh họa, nhóm cơ chính/phụ, độ khó, dụng cụ).
  * Bộ lọc tìm kiếm đa tiêu chí thời gian thực.
  * Hệ thống chấm điểm đánh giá (1-5 sao) và nhận xét từ người tập.
* **Module 4: Tích hợp Trí tuệ nhân tạo (AI Recommendation Engine)**
  * Biểu mẫu khảo sát nhu cầu thông minh (AI Wizard multi-step).
  * Tối ưu Prompt Engineering cá nhân hóa theo thể trạng và mục tiêu.
  * Kiểm định cấu trúc JSON Schema đầu ra nghiêm ngặt.
  * Thuật toán Fallback Rule dự phòng bài tập chuẩn từ DB khi AI quá tải hoặc lỗi kết nối.
  * Lưu trữ lịch sử các lần gợi ý và lộ trình tập luyện tuần.
* **Module 5: Kiểm thử & Triển khai**
  * 150+ Test Cases bao quát chức năng, bảo mật RBAC và kiểm định AI.
  * Triển khai hệ thống trên máy chủ Cloud qua Docker và HTTPS.

---

## 2. PHẠM VI NGOÀI DỰ ÁN (OUT-OF-SCOPE)
* Không chẩn đoán bệnh lý y khoa hoặc kê đơn dinh dưỡng điều trị y tế chuyên sâu.
* Không sử dụng Camera / Computer Vision để chấm điểm tư thế thời gian thực.
* Không tích hợp đồng bộ dữ liệu phần cứng với Smartwatch / thiết bị IoT ngoài.
* Không tích hợp cổng thanh toán trực tuyến (e-commerce / payment gateway).
* Không tự huấn luyện mô hình Large Language Model (LLM) từ đầu (tận dụng OpenAI/Gemini API).

---

## 3. TIÊU CHÍ CHẤP NHẬN BÀN GIAO (ACCEPTANCE CRITERIA)
1. Người dùng đăng ký/đăng nhập thành công và hệ thống phân quyền chính xác tuyệt đối theo Role.
2. Quản trị viên thao tác gán quyền trên giao diện có hiệu lực ngay lập tức.
3. Người dùng hoàn tất khảo sát nhận được gợi ý lịch tập trong vòng dưới 5 giây.
4. 100% bài tập do AI gợi ý khớp với dữ liệu thực tế và có cơ sở khoa học.
5. Tỷ lệ ca kiểm thử đạt (Passed Test Cases) vượt trên 95% trước khi bàn giao.
