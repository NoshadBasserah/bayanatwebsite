---
title: البدء السريع
section: /ar/docs
description: تثبيت القالب، تشغيل خادم التطوير، وتعديل أول صفحة توثيق.
priority: 2
navGroup: admin
---

## التثبيت

استنسخ المستودع وثبّت التبعيات.

```bash
git clone <your-fork-url> my-site
cd my-site
npm install
```

## تشغيل خادم التطوير

```bash
npm run dev
```

يعمل الموقع على `http://localhost:4321`.

## تعديل هذه الصفحة

كل ملف في `src/content/docs` يصبح صفحة ضمن `/docs/`. يتحكم frontmatter في الشريط الجانبي:

```yaml
---
title: البدء السريع
section: /docs
description: ملخص قصير للبحث والبطاقات الاجتماعية.
priority: 2
---
```

غيّر `priority` لإعادة ترتيب الشريط الجانبي. الأرقام الأصغر تُرتَّب أولاً.

## إضافة صفحة جديدة

أنشئ ملف Markdown جديداً في `src/content/docs` مع frontmatter كما سبق. يظهر في الشريط الجانبي تلقائياً عند إعادة التحميل.
