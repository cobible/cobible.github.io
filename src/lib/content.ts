import s1 from "@/assets/shot1.png.asset.json";
import s2 from "@/assets/shot2.png.asset.json";
import s3 from "@/assets/shot3.png.asset.json";
import s4 from "@/assets/shot4.png.asset.json";
import s5 from "@/assets/shot5.png.asset.json";
import s6 from "@/assets/shot6.png.asset.json";
import s7 from "@/assets/shot7.png.asset.json";
import s8 from "@/assets/shot8.png.asset.json";

export type Lang = "en" | "ru";
export const PRIVACY_URL = "https://antkeepapp.github.io/cobible-privacy/";
export const shots = { plans: s1.url, planDetail: s2.url, home: s3.url, reader: s4.url, qa: s5.url, player: s6.url, podcasts: s7.url, book: s8.url };

export const platforms = [
  { id: "android", name: "Google Play", sub: { en: "Android phones & tablets", ru: "Телефоны и планшеты Android" } },
  { id: "apk", name: "APK", sub: { en: "Direct install for Android", ru: "Прямая установка на Android" } },
  { id: "windows", name: "Windows", sub: { en: "Desktop app for PC", ru: "Приложение для ПК" } },
  { id: "mac", name: "macOS", sub: { en: "Desktop app for Mac", ru: "Приложение для Mac" } },
  { id: "ios", name: "App Store", sub: { en: "iPhone & iPad", ru: "iPhone и iPad" } },
] as const;

export const t = {
  en: {
    title: "CoBible — Bible reader with AI chapter analysis, podcasts and reading plans",
    description:
      "CoBible is a free cross-platform Bible app: read the Bible, listen to a podcast that explains each chapter, research chapters and single verses with AI and follow reading plans. Android, Windows, Mac and iOS.",
    nav: { features: "Features", install: "Install", faq: "FAQ" },
    eyebrow: "Bible reading app",
    h1: "Read, listen to and understand the Bible — every day.",
    lead: "CoBible brings the Bible text, podcast episodes that explain each chapter, AI analysis of chapters and verses and reading plans together in one calm, focused app.",
    ctaInstall: "How to install",
    ctaFeatures: "See features",
    soon: "Coming soon",
    featuresTitle: "Everything for daily Bible reading",
    features: [
      { t: "Comfortable reader", d: "Clean typography, footnotes, search, bookmarks and light or dark theme for long reading sessions.", img: "reader" },
      { t: "AI chapter analysis", d: "Open a chapter and get an analysis powered by Gemini AI: what happens there, why it matters and what the text teaches. Ask your own question and get an answer.", img: "qa" },
      { t: "Verse research", d: "Tap any verse to research it with AI: what it means, its main thoughts and lessons — then ask follow-up questions right there.", img: "book" },
      { t: "Bible podcasts", d: "Each chapter has a podcast episode that walks through it: the lessons, how to understand the events or laws it describes and what is useful for us living today.", img: "podcasts" },
      { t: "Reading plans", d: "Canonical, chronological, historical, prophetic, Gospels and more. Track progress chapter by chapter.", img: "plans" },
      { t: "Streaks & stats", d: "See your daily streak, best record and chapters read, plus a verse of the day on the home screen.", img: "home" },
    ],
    installTitle: "How to install CoBible",
    installLead: "CoBible is in preparation for release. Download links will appear here as soon as each version is published.",
    steps: {
      android: ["Open Google Play on your device.", "Search for “CoBible”.", "Tap Install and open the app."],
      apk: ["Download the APK file from this page.", "Allow installs from this source when Android asks.", "Open the file and tap Install."],
      windows: ["Download the Windows installer.", "Run the file and follow the steps.", "Launch CoBible from the Start menu."],
      mac: ["Download the macOS app.", "Move CoBible to the Applications folder.", "Open it from Launchpad."],
      ios: ["Open the App Store.", "Search for “CoBible”.", "Tap Get and open the app."],
    },
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "What is CoBible?", a: "CoBible is a Bible reading and study app that combines the Bible text, podcast episodes explaining each chapter, AI analysis of chapters and verses and reading plans." },
      { q: "Which devices are supported?", a: "Android (Google Play and APK), Windows and macOS are planned first, followed by iPhone and iPad on the App Store." },
      { q: "Which languages are available?", a: "English and Russian." },
      { q: "How does the AI feature work?", a: "The app prepares an analysis for each chapter, and any single verse can be researched separately. You can also type your own question, and Gemini AI answers it in the context of that chapter or verse." },
      { q: "What are the podcasts about?", a: "Each episode explains the Bible chapter it belongs to: what happened, which lessons the chapter holds, how to understand the events or laws described there and what is useful for people living in the modern world." },
      { q: "Where are my notes kept?", a: "Optional Google Drive sync keeps your notes and reading progress safe across your devices." },
      { q: "Where is the privacy policy?", a: "The privacy policy is published at antkeepapp.github.io/cobible-privacy." },
    ],
    footer: "Privacy policy",
    langSwitch: "Русский",
  },
  ru: {
    title: "CoBible — Библия с ИИ, подкастами и планами чтения",
    description:
      "CoBible — приложение для чтения и изучения Библии: текст, подкасты с разбором каждой главы, анализ глав и отдельных стихов с помощью ИИ и планы чтения. Android, Windows, Mac и iOS.",
    nav: { features: "Возможности", install: "Установка", faq: "Вопросы" },
    eyebrow: "Приложение для чтения Библии",
    h1: "Читайте, слушайте и понимайте Библию — каждый день.",
    lead: "CoBible объединяет текст Библии, подкасты с разбором каждой главы, анализ глав и стихов с помощью ИИ и планы чтения в одном спокойном и удобном приложении.",
    ctaInstall: "Как установить",
    ctaFeatures: "Возможности",
    soon: "Скоро",
    featuresTitle: "Всё для ежедневного чтения Библии",
    features: [
      { t: "Удобное чтение", d: "Чистый шрифт, сноски, поиск, закладки и светлая или тёмная тема для долгого чтения.", img: "reader" },
      { t: "Анализ главы с ИИ", d: "Откройте главу — и получите разбор на основе Gemini AI: что в ней происходит, почему это важно и чему учит текст. Задайте свой вопрос и получите ответ.", img: "qa" },
      { t: "Исследование стиха", d: "Нажмите на любой стих — и изучите его с помощью ИИ: что он означает, его главные мысли и уроки. Затем задайте уточняющие вопросы прямо там.", img: "book" },
      { t: "Подкасты о Библии", d: "К каждой главе есть выпуск подкаста, который её разбирает: какие есть уроки, как понимать описанные события или закон и что в этом полезного для нас, живущих сегодня.", img: "podcasts" },
      { t: "Планы чтения", d: "Канонический, хронологический, исторический, пророческий, Евангелия и другие. Прогресс по каждой главе.", img: "plans" },
      { t: "Серии и статистика", d: "Дни подряд, рекорд и прочитанные главы, а также цитата дня на главном экране.", img: "home" },
    ],
    installTitle: "Как установить CoBible",
    installLead: "CoBible готовится к выпуску. Ссылки для скачивания появятся здесь, как только каждая версия будет опубликована.",
    steps: {
      android: ["Откройте Google Play на устройстве.", "Найдите «CoBible».", "Нажмите «Установить» и откройте приложение."],
      apk: ["Скачайте APK-файл с этой страницы.", "Разрешите установку из этого источника, когда Android спросит.", "Откройте файл и нажмите «Установить»."],
      windows: ["Скачайте установщик для Windows.", "Запустите файл и следуйте шагам.", "Откройте CoBible из меню «Пуск»."],
      mac: ["Скачайте приложение для macOS.", "Перенесите CoBible в папку «Программы».", "Откройте его через Launchpad."],
      ios: ["Откройте App Store.", "Найдите «CoBible».", "Нажмите «Загрузить» и откройте приложение."],
    },
    faqTitle: "Частые вопросы",
    faq: [
      { q: "Что такое CoBible?", a: "CoBible — приложение для чтения и изучения Библии: текст, подкасты с разбором каждой главы, анализ глав и отдельных стихов с помощью ИИ и планы чтения." },
      { q: "Какие устройства поддерживаются?", a: "Сначала Android (Google Play и APK), Windows и macOS, затем iPhone и iPad в App Store." },
      { q: "Какие языки доступны?", a: "Русский и английский." },
      { q: "Как работает ИИ?", a: "Для каждой главы приложение готовит анализ, а любой отдельный стих можно исследовать отдельно. Можно задать и свой вопрос — Gemini AI ответит в контексте этой главы или стиха." },
      { q: "О чём подкасты?", a: "Каждый выпуск разбирает главу Библии, к которой относится: что происходило, какие есть уроки, как понимать описанные события или закон и что в этом полезного для людей, живущих в современном мире." },
      { q: "Где хранятся мои заметки?", a: "Синхронизация через Google Drive по желанию: заметки и прогресс чтения сохраняются на всех ваших устройствах." },
      { q: "Где политика конфиденциальности?", a: "Политика конфиденциальности опубликована на antkeepapp.github.io/cobible-privacy." },
    ],
    footer: "Политика конфиденциальности",
    langSwitch: "English",
  },
} as const;

export function pageHead(lang: Lang) {
  const c = t[lang];
  const path = lang === "en" ? "/" : "/ru";
  return {
    meta: [
      { title: c.title },
      { name: "description", content: c.description },
      { property: "og:title", content: c.title },
      { property: "og:description", content: c.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { property: "og:locale", content: lang === "en" ? "en_US" : "ru_RU" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: path },
      { rel: "alternate", hrefLang: "en", href: "/" },
      { rel: "alternate", hrefLang: "ru", href: "/ru" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "CoBible",
          applicationCategory: "LifestyleApplication",
          operatingSystem: "Android, Windows, macOS, iOS",
          inLanguage: ["en", "ru"],
          description: c.description,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  };
}
