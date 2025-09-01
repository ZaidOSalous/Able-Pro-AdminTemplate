# إعداد سريع لمصادقة Google

## ✅ تم إنجازه:
- ✅ تبديل نظام المصادقة إلى Firebase
- ✅ إضافة أزرار Google Sign-in إلى صفحة تسجيل الدخول
- ✅ إعداد ملفات التكوين الأساسية

## 🔧 الخطوات المتبقية:

### 1. إنشاء مشروع Firebase (5 دقائق)
1. اذهب إلى: https://console.firebase.google.com/
2. انقر "Add project" → أدخل اسم المشروع → "Create project"
3. انقر أيقونة الويب `</>` → أدخل اسم التطبيق → "Register app"

### 2. تفعيل Google Authentication (2 دقيقة)
1. في Firebase Console: "Authentication" → "Get started"
2. تبويب "Sign-in method" → انقر "Google" → "Enable" → "Save"

### 3. نسخ إعدادات Firebase (1 دقيقة)
1. في Firebase Console: "Project Settings" → "General" → "Your apps"
2. انسخ القيم واستبدلها في ملف `src/.env`:

```env
VITE_APP_FIREBASE_API_KEY=AIzaSy...
VITE_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_APP_FIREBASE_PROJECT_ID=your-project-id
# ... باقي القيم
```

### 4. إضافة النطاقات المصرح بها (1 دقيقة)
1. "Authentication" → "Settings" → "Authorized domains"
2. أضف: `localhost` و `localhost:3000`

### 5. اختبار التطبيق
1. تأكد من تشغيل الخادم: `npm start`
2. اذهب إلى صفحة تسجيل الدخول
3. انقر زر "Google" → يجب أن تظهر نافذة Google

## 🚀 النتيجة النهائية:
بعد إكمال هذه الخطوات، سيتمكن المستخدمون من:
- إنشاء حسابات جديدة باستخدام Google
- تسجيل الدخول بحساباتهم الموجودة
- الوصول إلى جميع ميزات التطبيق

## 📚 مراجع مفيدة:
- [دليل Firebase الشامل](./Firebase-Setup-Guide.md)
- [وثائق Firebase](https://firebase.google.com/docs/auth)
- [دعم Google Sign-in](https://firebase.google.com/docs/auth/web/google-signin)

---
**ملاحظة**: إذا واجهت أي مشاكل، راجع قسم "استكشاف الأخطاء" في الدليل الشامل.