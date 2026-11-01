# BÁO CÁO KIỂM THỬ BẢO MẬT VÀ TẢI (SPRINT 7)
**Tác giả:** Đỗ Minh Nhật (QA Lead / DBA / SV5)  
**Mã Jira:** `SCRUM-127`, `SCRUM-128`, `SCRUM-129`  

---

1. **Load Test API Gợi ý AI:** Tải đồng thời 50 request, độ trễ phản hồi trung bình = 2.45s (đạt yêu cầu < 5s).
2. **Kiểm thử SQL Injection:** Kiểm tra các endpoint tìm kiếm, 100% truy vấn dùng Django ORM parameterized queries, an toàn trước injection.
3. **Kiểm thử XSS:** Xác nhận React tự động escape HTML entities trên các form bình luận đánh giá sao.
