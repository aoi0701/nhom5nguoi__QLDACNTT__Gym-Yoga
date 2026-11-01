-- WBS 3.03 / SCRUM-94: RBAC Relational Schema (3NF)
CREATE TABLE IF NOT EXISTS auth_roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS auth_permissions (
    id SERIAL PRIMARY KEY,
    code VARCHAR(100) UNIQUE NOT NULL,
    module VARCHAR(50) NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS auth_role_permissions (
    role_id INT REFERENCES auth_roles(id) ON DELETE CASCADE,
    permission_id INT REFERENCES auth_permissions(id) ON DELETE CASCADE,
    PRIMARY KEY (role_id, permission_id)
);
