-- ====================================================================
-- DATABASE SCHEMA DDL: GYM-YOGA AI RECOMMENDATION & RBAC SYSTEM (3NF)
-- Designed by: Đỗ Minh Nhật (DB & QA Lead)
-- ====================================================================

-- 1. USERS & AUTH
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    phone_number VARCHAR(20),
    is_active BOOLEAN DEFAULT TRUE,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. RBAC (ROLES & PERMISSIONS)
CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS permissions (
    id SERIAL PRIMARY KEY,
    code VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    module VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_roles (
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    role_id INT REFERENCES roles(id) ON DELETE CASCADE,
    assigned_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, role_id)
);

CREATE TABLE IF NOT EXISTS role_permissions (
    role_id INT REFERENCES roles(id) ON DELETE CASCADE,
    permission_id INT REFERENCES permissions(id) ON DELETE CASCADE,
    PRIMARY KEY (role_id, permission_id)
);

-- 3. USER HEALTH & FITNESS PROFILES
CREATE TABLE IF NOT EXISTS user_profiles (
    id SERIAL PRIMARY KEY,
    user_id INT UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    gender VARCHAR(10) CHECK (gender IN ('MALE', 'FEMALE', 'OTHER')),
    birth_date DATE,
    height_cm NUMERIC(5,2) NOT NULL,
    weight_kg NUMERIC(5,2) NOT NULL,
    bmi NUMERIC(4,2),
    fitness_goal VARCHAR(50) NOT NULL, -- WEIGHT_LOSS, MUSCLE_GAIN, FLEXIBILITY, ENDURANCE
    experience_level VARCHAR(20) DEFAULT 'BEGINNER', -- BEGINNER, INTERMEDIATE, ADVANCED
    health_conditions TEXT,
    available_equipment TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. EXERCISE CATALOG
CREATE TABLE IF NOT EXISTS muscle_groups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS equipments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS exercises (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    category VARCHAR(20) CHECK (category IN ('GYM', 'YOGA')),
    muscle_group_id INT REFERENCES muscle_groups(id) ON DELETE SET NULL,
    equipment_id INT REFERENCES equipments(id) ON DELETE SET NULL,
    difficulty_level VARCHAR(20) CHECK (difficulty_level IN ('EASY', 'MEDIUM', 'HARD')),
    instructions TEXT NOT NULL,
    estimated_minutes INT DEFAULT 15,
    calories_burned_approx INT DEFAULT 100,
    image_url VARCHAR(500),
    video_url VARCHAR(500),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS exercise_ratings (
    id SERIAL PRIMARY KEY,
    exercise_id INT REFERENCES exercises(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (exercise_id, user_id)
);

-- 5. AI WORKOUT RECOMMENDATIONS & LOGS
CREATE TABLE IF NOT EXISTS ai_recommendation_logs (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    prompt_payload JSONB NOT NULL,
    response_payload JSONB NOT NULL,
    model_name VARCHAR(50) DEFAULT 'gemini-1.5-flash',
    is_fallback_used BOOLEAN DEFAULT FALSE,
    response_time_ms INT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS workout_plans (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    target_goal VARCHAR(50),
    duration_weeks INT DEFAULT 4,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS workout_plan_items (
    id SERIAL PRIMARY KEY,
    workout_plan_id INT REFERENCES workout_plans(id) ON DELETE CASCADE,
    exercise_id INT REFERENCES exercises(id) ON DELETE CASCADE,
    day_of_week INT CHECK (day_of_week BETWEEN 1 AND 7), -- 1=Monday, 7=Sunday
    sets INT DEFAULT 3,
    reps INT DEFAULT 12,
    duration_seconds INT DEFAULT 60,
    order_index INT DEFAULT 1
);

-- INDEXES FOR PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_exercises_category ON exercises(category);
CREATE INDEX IF NOT EXISTS idx_exercises_muscle ON exercises(muscle_group_id);
CREATE INDEX IF NOT EXISTS idx_exercises_difficulty ON exercises(difficulty_level);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
