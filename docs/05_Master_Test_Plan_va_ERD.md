# MASTER TEST PLAN & THIẾT KẾ CSDL QUAN HỆ (ERD 3NF)

> **Người lập:** Đỗ Minh Nhật (Database Engineer & Lead QA/Tester)  
> **Phê duyệt:** Nguyễn Phan Ngọc Trưởng (PM) & Lê Quốc Anh (PO)  

---

## 1. MÔ HÌNH THỰC THỂ QUAN HỆ (ERD 3NF)

```mermaid
erDiagram
    USERS ||--o{ USER_ROLES : has
    ROLES ||--o{ USER_ROLES : assigned_to
    ROLES ||--o{ ROLE_PERMISSIONS : has
    PERMISSIONS ||--o{ ROLE_PERMISSIONS : assigned_to

    USERS ||--o| USER_PROFILES : owns
    USERS ||--o{ WORKOUT_PLANS : creates
    USERS ||--o{ EXERCISE_RATINGS : reviews
    USERS ||--o{ AI_RECOMMENDATION_LOGS : requests

    EXERCISES ||--o{ WORKOUT_PLAN_ITEMS : included_in
    WORKOUT_PLANS ||--o{ WORKOUT_PLAN_ITEMS : contains

    EXERCISES ||--o{ EXERCISE_IMAGES : has
    EXERCISES ||--o{ EXERCISE_RATINGS : receives
    MUSCLE_GROUPS ||--o{ EXERCISES : categorizes
    EQUIPMENTS ||--o{ EXERCISES : requires

    USERS {
        int id PK
        string email UK
        string password_hash
        string full_name
        boolean is_active
        datetime created_at
    }

    ROLES {
        int id PK
        string role_name UK "ADMIN, TRAINER, MEMBER"
        string description
    }

    PERMISSIONS {
        int id PK
        string permission_code UK "EXERCISE_CREATE, USER_MANAGE, etc."
        string description
    }

    USER_PROFILES {
        int id PK
        int user_id FK
        float height_cm
        float weight_kg
        float bmi
        string fitness_goal "WEIGHT_LOSS, MUSCLE_GAIN, FLEXIBILITY"
        string experience_level "BEGINNER, INTERMEDIATE, ADVANCED"
        text health_conditions
    }

    EXERCISES {
        int id PK
        string name
        string category "GYM, YOGA"
        int muscle_group_id FK
        int equipment_id FK
        string difficulty_level "EASY, MEDIUM, HARD"
        text instructions
        int estimated_minutes
    }
```

---

## 2. KẾ HOẠCH KIỂM THỬ MASTER TEST PLAN

### 2.1 Phạm vi kiểm thử
1. **Kiểm thử chức năng (Functional Testing):**
   * Đăng ký, Đăng nhập, Quản lý Token JWT.
   * Cập nhật Profile, tự động tính BMI.
   * Quản trị CRUD bài tập Gym/Yoga, bộ lọc nhóm cơ/độ khó.
2. **Kiểm thử bảo mật & Phân quyền (Security & RBAC Testing):**
   * Xác minh ma trận phân quyền: Học viên không thể truy cập API Quản trị (HTTP 403).
   * Kiểm thử chống tấn công IDOR, SQL Injection và XSS.
3. **Kiểm thử Trí tuệ nhân tạo (AI Validation):**
   * Kiểm định định dạng JSON Schema trả về từ AI.
   * Kiểm thử cơ chế Fallback: Khi ngắt kết nối AI, hệ thống tự động trả về bài tập từ CSDL cục bộ.
4. **Kiểm thử tích hợp & Hồi quy (E2E & Regression):**
   * Thực thi Postman Collection tự động.
   * Kiểm thử trải nghiệm giao diện trên trình duyệt và thiết bị di động.

### 2.2 Tiêu chí hoàn thành (Exit Criteria)
* 100% Test Cases P1 (Critical) và P2 (High) đạt trạng thái **Passed**.
* Không còn lỗi mức độ **Blocker** hoặc **Critical** chưa được khắc phục.
* Độ bao phủ kiểm thử (Test Coverage) đạt trên 85% mã nguồn.
