-- قاعدة بيانات Able Pro Admin Template
CREATE DATABASE IF NOT EXISTS able_pro_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE able_pro_db;

-- جدول المستخدمين
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    phone VARCHAR(20),
    avatar VARCHAR(255),
    role ENUM('admin', 'user', 'manager', 'editor') DEFAULT 'user',
    status ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
    email_verified BOOLEAN DEFAULT FALSE,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- جدول الأدوار والصلاحيات
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    permissions JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- جدول ربط المستخدمين بالأدوار
CREATE TABLE user_roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_role (user_id, role_id)
);

-- جدول الجلسات
CREATE TABLE user_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    session_token VARCHAR(255) UNIQUE NOT NULL,
    refresh_token VARCHAR(255),
    ip_address VARCHAR(45),
    user_agent TEXT,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- جدول إعدادات النظام
CREATE TABLE system_settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value TEXT,
    setting_type ENUM('string', 'number', 'boolean', 'json') DEFAULT 'string',
    description TEXT,
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- جدول الإشعارات
CREATE TABLE notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    message TEXT,
    type ENUM('info', 'success', 'warning', 'error') DEFAULT 'info',
    is_read BOOLEAN DEFAULT FALSE,
    action_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- جدول سجل الأنشطة
CREATE TABLE activity_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50),
    entity_id INT,
    description TEXT,
    ip_address VARCHAR(45),
    user_agent TEXT,
    metadata JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- جدول الملفات المرفوعة
CREATE TABLE file_uploads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    original_name VARCHAR(255) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    file_size BIGINT,
    mime_type VARCHAR(100),
    file_hash VARCHAR(64),
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- جدول المنتجات
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    short_description TEXT,
    sku VARCHAR(100) UNIQUE,
    price DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    sale_price DECIMAL(10,2),
    stock_quantity INT DEFAULT 0,
    status ENUM('active', 'inactive', 'draft') DEFAULT 'active',
    featured BOOLEAN DEFAULT FALSE,
    weight DECIMAL(8,2),
    dimensions JSON,
    images JSON,
    category_id INT,
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
);

-- جدول فئات المنتجات
CREATE TABLE product_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    parent_id INT,
    image VARCHAR(255),
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_id) REFERENCES product_categories(id) ON DELETE SET NULL
);

-- جدول الطلبات
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    user_id INT,
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded') DEFAULT 'pending',
    total_amount DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    tax_amount DECIMAL(10,2) DEFAULT 0.00,
    shipping_amount DECIMAL(10,2) DEFAULT 0.00,
    discount_amount DECIMAL(10,2) DEFAULT 0.00,
    payment_status ENUM('pending', 'paid', 'failed', 'refunded') DEFAULT 'pending',
    payment_method VARCHAR(50),
    shipping_address JSON,
    billing_address JSON,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- جدول عناصر الطلبات
CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    unit_price DECIMAL(10,2) NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    product_snapshot JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE RESTRICT
);

-- إدراج البيانات الأساسية
INSERT INTO roles (name, description, permissions) VALUES
('admin', 'مدير النظام', '{"all": true}'),
('manager', 'مدير', '{"users": ["read", "create", "update"], "products": ["read", "create", "update", "delete"], "orders": ["read", "update"]}'),
('editor', 'محرر', '{"blog": ["read", "create", "update", "delete"], "products": ["read", "create", "update"]}'),
('user', 'مستخدم عادي', '{"profile": ["read", "update"], "orders": ["read"]}');

-- إدراج مستخدم مدير افتراضي
INSERT INTO users (username, email, password_hash, first_name, last_name, role, status, email_verified) VALUES
('admin', 'admin@ablepro.com', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'مدير', 'النظام', 'admin', 'active', TRUE);

-- ربط المستخدم المدير بدور المدير
INSERT INTO user_roles (user_id, role_id) VALUES (1, 1);

-- إدراج إعدادات النظام الأساسية
INSERT INTO system_settings (setting_key, setting_value, setting_type, description, is_public) VALUES
('site_name', 'Able Pro', 'string', 'اسم الموقع', TRUE),
('site_description', 'قالب إدارة احترافي', 'string', 'وصف الموقع', TRUE),
('default_language', 'ar', 'string', 'اللغة الافتراضية', TRUE),
('theme_direction', 'rtl', 'string', 'اتجاه النص', TRUE),
('currency', 'SAR', 'string', 'العملة الافتراضية', TRUE),
('timezone', 'Asia/Riyadh', 'string', 'المنطقة الزمنية', FALSE);

-- إدراج فئات المنتجات الأساسية
INSERT INTO product_categories (name, slug, description) VALUES
('إلكترونيات', 'electronics', 'أجهزة إلكترونية ومعدات تقنية'),
('ملابس', 'clothing', 'ملابس رجالية ونسائية وأطفال'),
('كتب', 'books', 'كتب ومراجع علمية وأدبية'),
('رياضة', 'sports', 'معدات رياضية وأدوات اللياقة البدنية');

-- إنشاء الفهارس لتحسين الأداء
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_status ON users(status);
CREATE INDEX idx_user_sessions_token ON user_sessions(session_token);
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_products_status ON products(status);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);

-- إنشاء مستخدم قاعدة البيانات للتطبيق
CREATE USER IF NOT EXISTS 'able_pro_user'@'localhost' IDENTIFIED BY 'AblePro2024!';
GRANT SELECT, INSERT, UPDATE, DELETE ON able_pro_db.* TO 'able_pro_user'@'localhost';
FLUSH PRIVILEGES;
