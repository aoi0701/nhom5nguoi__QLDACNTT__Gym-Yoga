-- WBS 3.04 / SCRUM-95: Exercise Catalog Schema
CREATE TABLE IF NOT EXISTS catalog_muscle_groups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    body_part VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS catalog_exercises (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    category VARCHAR(20) CHECK (category IN ('gym', 'yoga')),
    difficulty VARCHAR(20) CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
    muscle_group_id INT REFERENCES catalog_muscle_groups(id),
    equipment VARCHAR(100),
    instructions TEXT,
    image_url VARCHAR(255),
    is_deleted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
