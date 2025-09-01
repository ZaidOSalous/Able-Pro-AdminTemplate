# قاعدة البيانات MySQL للموقع

هذا المجلد يحتوي على ملفات قاعدة البيانات MySQL المتوافقة مع موقع Able Pro.

## الملفات المتوفرة

- `able_pro_database.sql` - ملف SQL الرئيسي لإنشاء قاعدة البيانات والجداول
- `config.json` - ملف تكوين الاتصال بقاعدة البيانات

## إعداد قاعدة البيانات

### 1. تثبيت MySQL
تأكد من تثبيت MySQL Server على جهازك.

### 2. إنشاء قاعدة البيانات
```bash
mysql -u root -p < able_pro_database.sql
```

### 3. التحقق من إنشاء قاعدة البيانات
```sql
SHOW DATABASES;
USE able_pro_db;
SHOW TABLES;
```

## هيكل قاعدة البيانات

### الجداول الرئيسية:

1. **users** - جدول المستخدمين
   - id, username, email, password, role_id, created_at, updated_at

2. **roles** - جدول الأدوار
   - id, name, description, permissions

3. **products** - جدول المنتجات
   - id, name, description, price, category_id, stock_quantity, image_url

4. **categories** - جدول فئات المنتجات
   - id, name, description, parent_id

5. **orders** - جدول الطلبات
   - id, user_id, total_amount, status, created_at

6. **order_items** - جدول عناصر الطلبات
   - id, order_id, product_id, quantity, price

7. **blog_posts** - جدول مقالات المدونة
   - id, title, content, author_id, published_at

8. **settings** - جدول إعدادات النظام
   - id, setting_key, setting_value, description

## بيانات تجريبية

تم إدراج بيانات تجريبية في الجداول التالية:
- مستخدم إداري: admin@example.com / password123
- مستخدم عادي: user@example.com / password123
- منتجات تجريبية
- فئات منتجات
- إعدادات النظام

## الاتصال بقاعدة البيانات

### معلومات الاتصال (Development):
- Host: localhost
- Port: 3306
- Database: able_pro_db
- Username: able_pro_user
- Password: AblePro2024!

### استخدام ملف التكوين:
```javascript
const config = require("./database/config.json");
const dbConfig = config.development;
```

## الأمان

- تم إنشاء مستخدم مخصص لقاعدة البيانات مع صلاحيات محدودة
- يُنصح بتغيير كلمة المرور في بيئة الإنتاج
- تم تشفير كلمات المرور باستخدام bcrypt

## الصيانة

### النسخ الاحتياطي:
```bash
mysqldump -u able_pro_user -p able_pro_db > backup.sql
```

### الاستعادة:
```bash
mysql -u able_pro_user -p able_pro_db < backup.sql
```

## ملاحظات

- قاعدة البيانات تدعم UTF-8 بالكامل للنصوص العربية
- تم إعداد المناطق الزمنية للتوقيت المحلي
- يمكن توسيع الجداول حسب احتياجات المشروع
