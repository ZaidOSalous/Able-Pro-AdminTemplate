# حل مشكلة Firebase API Key Error

## المشكلة
```
FirebaseError: Firebase: Error (auth/invalid-api-key)
```

## السبب
مفتاح Firebase API المستخدم في ملف `.env` غير صحيح أو لم يتم إعداده بشكل صحيح.

## الحل السريع

### 1. إنشاء مشروع Firebase جديد
1. اذهب إلى [Firebase Console](https://console.firebase.google.com/)
2. انقر على "Add project" أو "إضافة مشروع"
3. أدخل اسم المشروع (مثل: my-app-auth)
4. اختر إعدادات Google Analytics (اختياري)
5. انقر "Create project"

### 2. إعداد Authentication
1. في لوحة تحكم Firebase، اذهب إلى "Authentication"
2. انقر على "Get started"
3. اذهب إلى تبويب "Sign-in method"
4. فعّل "Google" كطريقة تسجيل دخول
5. أدخل بريدك الإلكتروني في "Project support email"

### 3. الحصول على إعدادات Firebase
1. اذهب إلى "Project Settings" (أيقونة الترس)
2. في تبويب "General"، انزل إلى "Your apps"
3. انقر "Add app" واختر "Web" (أيقونة </>
4. أدخل اسم التطبيق وانقر "Register app"
5. انسخ إعدادات Firebase Config

### 4. تحديث ملف .env
استبدل القيم في ملف `src/.env` بالقيم الفعلية:

```env
VITE_APP_FIREBASE_API_KEY=your-actual-api-key
VITE_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_APP_FIREBASE_PROJECT_ID=your-actual-project-id
VITE_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_APP_FIREBASE_APP_ID=your-app-id
```

### 5. إضافة Authorized Domains
1. في Firebase Console، اذهب إلى Authentication > Settings
2. في "Authorized domains"، أضف:
   - `localhost` (للتطوير المحلي)
   - نطاق موقعك الفعلي (للإنتاج)

### 6. إعادة تشغيل التطبيق
```bash
npm start
```

## ملاحظات مهمة
- تأكد من أن جميع القيم في `.env` صحيحة
- لا تشارك مفاتيح Firebase مع أحد
- تأكد من تفعيل Google Sign-in في Firebase Console
- تأكد من إضافة النطاقات المصرح بها

## إذا استمرت المشكلة
1. تحقق من أن المشروع نشط في Firebase Console
2. تأكد من أن Authentication مفعل
3. تحقق من أن Google Sign-in مفعل
4. امسح cache المتصفح وأعد تحميل الصفحة