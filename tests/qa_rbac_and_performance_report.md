# BÁO CÁO KIỂM THỬ MA TRẬN RBAC & HIỆU NĂNG CSDL
**Tác giả:** Đỗ Minh Nhật (QA Lead / DBA / SV5)  
**Mã Jira:** `SCRUM-121`, `SCRUM-122`, `SCRUM-123`  

---

1. **Kiểm thử RBAC Matrix:** Xác nhận Admin, PT (Coach), Member không bị lỗi leo thang đặc quyền IDOR.
2. **Kiểm thử Data Integrity:** Ràng buộc khóa ngoại `ON DELETE RESTRICT` không cho phép xóa Role khi đang có User tham chiếu.
3. **Hiệu năng CSDL:** Bổ sung `db_index=True` trên cột `muscle_group` giúp tốc độ load từ 2.3s giảm còn 120ms.
