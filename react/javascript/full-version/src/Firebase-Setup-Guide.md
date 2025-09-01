# دليل إعداد Firebase ومصادقة Google

## الخطوة 1: إنشاء مشروع Firebase

### 1.1 إنشاء المشروع
1. اذهب إلى [Firebase Console](https://console.firebase.google.com/)
2. انقر على "Add project" أو "إضافة مشروع"
3. أدخل اسم المشروع (مثل: "able-pro-admin")
4. اختياري: قم بتفعيل Google Analytics
5. انقر على "Create project"

### 1.2 إضافة تطبيق الويب
1. في صفحة المشروع، انقر على أيقونة الويب `</>`
2. أدخل اسم التطبيق (مثل: "Able Pro Admin Web")
3. اختياري: قم بتفعيل Firebase Hosting
4. انقر على "Register app"

## الخطوة 2: الحصول على إعدادات Firebase

بعد تسجيل التطبيق، ستحصل على كود التكوين مثل:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef",
  measurementId: "G-XXXXXXXXXX"
};
```

## الخطوة 3: تفعيل مصادقة Google

### 3.1 تفعيل Authentication
1. في Firebase Console، اذهب إلى "Authentication"
2. انقر على "Get started"
3. اذهب إلى تبويب "Sign-in method"

### 3.2 تفعيل Google Sign-in
1. انقر على "Google" من قائمة مقدمي الخدمة
2. قم بتفعيل "Enable"
3. أدخل اسم المشروع وعنوان البريد الإلكتروني للدعم
4. انقر على "Save"

## الخطوة 4: تحديث ملف .env

قم بنسخ القيم من Firebase Console وضعها في ملف `.env`:

```env
# Firebase Configuration
VITE_APP_FIREBASE_API_KEY=your_api_key_here
VITE_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_APP_FIREBASE_PROJECT_ID=your_project_id
VITE_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_FIREBASE_APP_ID=your_app_id
VITE_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## الخطوة 5: إعداد النطاقات المصرح بها

### 5.1 إضافة النطاقات
1. في Firebase Console، اذهب إلى "Authentication" > "Settings"
2. في قسم "Authorized domains"، أضف:
   - `localhost` (للتطوير المحلي)
   - نطاق موقعك الفعلي (للإنتاج)

## الخطوة 6: اختبار التكامل

### 6.1 التحقق من التكوين
1. تأكد من أن الخادم يعمل: `npm start`
2. اذهب إلى صفحة تسجيل الدخول
3. انقر على زر "Google" للتسجيل
4. يجب أن تظهر نافذة Google للمصادقة

### 6.2 استكشاف الأخطاء
إذا واجهت مشاكل:

1. **خطأ "Invalid API Key"**:
   - تحقق من صحة `VITE_APP_FIREBASE_API_KEY`
   - تأكد من عدم وجود مسافات إضافية

2. **خطأ "Unauthorized domain"**:
   - أضف `localhost:3000` إلى Authorized domains
   - تأكد من صحة `VITE_APP_FIREBASE_AUTH_DOMAIN`

3. **خطأ "Google Sign-in not configured"**:
   - تأكد من تفعيل Google Sign-in في Firebase Console
   - تحقق من إعدادات OAuth 2.0

## الخطوة 7: الميزات الإضافية

### 7.1 تخصيص رسائل البريد الإلكتروني
1. في "Authentication" > "Templates"
2. قم بتخصيص رسائل التحقق وإعادة تعيين كلمة المرور

### 7.2 إعداد قواعد الأمان
1. في "Firestore Database" > "Rules"
2. قم بإعداد قواعد الوصول للبيانات

## ملاحظات مهمة

- احتفظ بمفاتيح Firebase آمنة ولا تشاركها
- استخدم متغيرات البيئة للإعدادات الحساسة
- قم بتفعيل Multi-Factor Authentication للأمان الإضافي
- راجع حدود الاستخدام في خطة Firebase المجانية

## الدعم والمساعدة

- [وثائق Firebase Authentication](https://firebase.google.com/docs/auth)
- [دليل Google Sign-in](https://firebase.google.com/docs/auth/web/google-signin)
- [مجتمع Firebase](https://firebase.google.com/support)