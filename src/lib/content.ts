// Image paths served from /public/
const s1 = "/shot1.png";
const s3 = "/shot3.png";
const s4 = "/shot4.png";
const s5 = "/shot5.png";
const s7 = "/shot7.png";
const s8 = "/shot8.png";
const s9 = "/verse1.png";
const s10 = "/verse2.png";
const e1 = "/en_home.png";
const e2 = "/en_reader.png";
const e3 = "/en_verse_select.png";
const e4 = "/en_verse_research.png";
const e5 = "/en_plans.png";
const e6 = "/en_podcasts.png";
const e7 = "/en_ai.png";

export type Lang = "en" | "ru";
export const PRIVACY_URL = "https://antkeepapp.github.io/cobible-privacy/";
export const SIDELOADLY_URL = "https://sideloadly.io/";
type ShotKey = "plans" | "home" | "reader" | "qa" | "podcasts" | "book";
export const shots: Record<Lang, Record<ShotKey, string>> = {
  en: { plans: e5, home: e1, reader: e2, qa: e7, podcasts: e6, book: e4 },
  ru: { plans: s1, home: s3, reader: s4, qa: s5, podcasts: s7, book: s8 },
};
export const verseShots: Record<Lang, string[]> = {
  en: [e3, e4],
  ru: [s9, s10],
};

export const platforms = [
  { id: "android", name: "Google Play", sub: { en: "Android phones & tablets", ru: "Телефоны и планшеты Android" } },
  { id: "apk", name: "APK", sub: { en: "Direct install for Android", ru: "Прямая установка на Android" } },
  { id: "windows", name: "Windows", sub: { en: "Windows x64 · ZIP", ru: "Windows x64 · ZIP" } },
  { id: "mac", name: "macOS", sub: { en: "Intel & Apple Silicon · DMG", ru: "Intel и Apple Silicon · DMG" } },
  { id: "ios", name: "iOS · IPA", sub: { en: "iPhone & iPad · via Sideloadly", ru: "iPhone и iPad · через Sideloadly" } },
  { id: "appstore", name: "App Store", sub: { en: "iPhone & iPad", ru: "iPhone и iPad" } },
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
    download: "Download",
    viewRelease: "Open GitHub release",
    releaseLoading: "Checking the latest release…",
    releaseError: "Download information is temporarily unavailable. The latest release is available on GitHub.",
    releaseMissing: "No download for this platform in the latest stable release.",
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
    installLead: "Download the latest stable release for Android, Windows x64, macOS (Intel and Apple Silicon) or iPhone and iPad. Install the iOS IPA using Sideloadly on a Windows PC or Mac. Google Play and App Store links are coming later.",
    steps: {
      android: ["Open Google Play on your device.", "Search for “CoBible”.", "Tap Install and open the app."],
      apk: ["Download the APK file from this page.", "Allow installs from this source when Android asks.", "Open the file and tap Install."],
      windows: ["Download the ZIP archive below.", "Extract the archive into a folder.", "Open the CoBible application from that folder."],
      mac: ["Download and open the DMG file below.", "Move CoBible to the Applications folder.", "Open it from Launchpad."],
      ios: ["Download the IPA file below to your computer.", "Expand the instructions for Windows or Mac below to install it on your iPhone or iPad."],
      appstore: ["Open the App Store.", "Search for “CoBible”.", "Tap Get and open the app."],
    },
    sideload: {
      link: "Get Sideloadly & requirements",
      windowsTitle: "Install using Windows",
      macTitle: "Install using Mac",
      windows: [
        "On the official Sideloadly website, install the web versions of iTunes and iCloud linked under “Before you install”. If you have Microsoft Store versions, uninstall those first. Restart your PC if the device is not detected.",
        "Download Sideloadly for Windows from that same website, install it and open it.",
      ],
      mac: [
        "Download Sideloadly for macOS from its official website. Open the DMG, move Sideloadly to Applications and launch it. Follow any setup prompts it displays.",
      ],
      common: [
        "Connect your iPhone or iPad to the computer with a USB cable, unlock it and tap “Trust” if asked. Keep an internet connection available.",
        "In Sideloadly, select your iPhone or iPad (not the Mac itself), then drag the downloaded CoBible .ipa file into the window.",
        "Enter your Apple Account (Apple ID) in Sideloadly and click “Start”. Enter the password and verification code there if requested — never on this website. Wait until installation finishes.",
        "On your iPhone or iPad, open Settings → General → VPN & Device Management. Select the developer profile for the Apple Account you used and tap “Trust”; follow any confirmation prompts.",
        "On iOS / iPadOS 16 or later, enable Settings → Privacy & Security → Developer Mode if required. Restart the device and confirm. If the option is missing, check again after the first installation attempt.",
        "Open CoBible from your Home Screen.",
      ],
      updatesTitle: "How to keep apps up to date",
      updates: [
        "A free Apple ID gives apps a 7-day validity period and allows up to 3 apps at the same time.",
        "Sideloadly refreshes apps automatically through a background process on your computer. Keep the computer on and Sideloadly running, with your phone and computer on the same Wi-Fi network. Wireless refresh requires Wi-Fi sync in iTunes (Windows) or Finder (Mac).",
        "If your computer is not always on: AltStore Classic refreshes through AltServer on a computer on the same network; allow AltStore access to the local network on your iPhone. SideStore needs a computer only for the first installation, then refreshes from the phone using LocalDevVPN.",
        "If an app expires, do not delete it: re-sign it with the same Apple ID, otherwise you will lose the app’s data.",
      ],
      troubleshooting: "Sideloadly setup & troubleshooting",
    },
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "What is CoBible?", a: "CoBible is a Bible reading and study app that combines the Bible text, podcast episodes explaining each chapter, AI analysis of chapters and verses and reading plans." },
      { q: "Which devices are supported?", a: "Android via APK, Windows x64, macOS on Intel and Apple Silicon, and iPhone or iPad via an IPA installed with Sideloadly from Windows or Mac. Google Play and App Store distribution is planned." },
      { q: "Which languages are available?", a: "English and Russian." },
      { q: "How does the AI feature work?", a: "The app prepares an analysis for each chapter, and any single verse can be researched separately. You can also type your own question, and Gemini AI answers it in the context of that chapter or verse." },
      { q: "What are the podcasts about?", a: "Each episode explains the Bible chapter it belongs to: what happened, which lessons the chapter holds, how to understand the events or laws described there and what is useful for people living in the modern world." },
      { q: "Can podcasts be listened to offline?", a: "Yes. Download a podcast episode in advance and it stays available for offline listening." },
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
    download: "Скачать",
    viewRelease: "Открыть выпуск на GitHub",
    releaseLoading: "Проверяем последний выпуск…",
    releaseError: "Сведения о скачивании временно недоступны. Последний выпуск можно открыть на GitHub.",
    releaseMissing: "В последнем стабильном выпуске нет файла для этой платформы.",
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
    installLead: "Скачайте последний стабильный выпуск для Android, Windows x64, macOS (Intel и Apple Silicon) или iPhone и iPad. IPA-файл для iOS устанавливается через Sideloadly с компьютера Windows или Mac. Ссылки на Google Play и App Store появятся позже.",
    steps: {
      android: ["Откройте Google Play на устройстве.", "Найдите «CoBible».", "Нажмите «Установить» и откройте приложение."],
      apk: ["Скачайте APK-файл с этой страницы.", "Разрешите установку из этого источника, когда Android спросит.", "Откройте файл и нажмите «Установить»."],
      windows: ["Скачайте ZIP-архив ниже.", "Распакуйте архив в папку.", "Откройте приложение CoBible из этой папки."],
      mac: ["Скачайте и откройте DMG-файл ниже.", "Перенесите CoBible в папку «Программы».", "Откройте его через Launchpad."],
      ios: ["Скачайте IPA-файл ниже на компьютер.", "Раскройте инструкцию для Windows или Mac ниже, чтобы установить его на iPhone или iPad."],
      appstore: ["Откройте App Store.", "Найдите «CoBible».", "Нажмите «Загрузить» и откройте приложение."],
    },
    sideload: {
      link: "Скачать Sideloadly и проверить требования",
      windowsTitle: "Установка с Windows",
      macTitle: "Установка с Mac",
      windows: [
        "На официальном сайте Sideloadly установите версии iTunes и iCloud по ссылкам в разделе «Before you install». Нужны версии с сайта Apple, не из Microsoft Store: версии из магазина сначала удалите. Если устройство не определяется, перезагрузите компьютер.",
        "С этого же сайта скачайте Sideloadly для Windows, установите и откройте программу.",
      ],
      mac: [
        "Скачайте Sideloadly для macOS с официального сайта. Откройте DMG, перенесите Sideloadly в папку «Программы» и запустите. Выполните указания программы при первом запуске.",
      ],
      common: [
        "Подключите iPhone или iPad к компьютеру USB-кабелем, разблокируйте устройство и нажмите «Доверять», если появится запрос. Интернет должен быть доступен.",
        "В Sideloadly выберите свой iPhone или iPad (не сам Mac), затем перетащите скачанный файл CoBible .ipa в окно программы.",
        "Введите свою учётную запись Apple (Apple ID) в Sideloadly и нажмите «Start». Если программа запросит пароль и код подтверждения, введите их там — не на этом сайте. Дождитесь завершения установки.",
        "На iPhone или iPad откройте «Настройки» → «Основные» → «VPN и управление устройством». Выберите профиль разработчика с вашей учётной записью Apple и нажмите «Доверять»; выполните запросы подтверждения.",
        "На iOS / iPadOS 16 и новее при необходимости включите «Настройки» → «Конфиденциальность и безопасность» → «Режим разработчика». Перезагрузите устройство и подтвердите включение. Если пункта нет, проверьте его после первой попытки установки.",
        "Откройте CoBible на главном экране устройства.",
      ],
      updatesTitle: "Как не терять обновления",
      updates: [
        "Бесплатный Apple ID даёт приложениям срок 7 дней; одновременно можно держать до 3 приложений.",
        "Sideloadly обновляет приложения автоматически через фоновый процесс на компьютере. Компьютер должен быть включён, Sideloadly запущен, телефон и компьютер — в одной Wi-Fi сети. Для беспроводной работы нужна синхронизация по Wi-Fi в iTunes (Windows) или Finder (Mac).",
        "Если компьютер не работает постоянно: AltStore Classic обновляет через AltServer на компьютере в той же сети; на iPhone разрешите AltStore доступ к локальной сети. SideStore нужен компьютер только для первой установки, дальше обновление идёт с телефона через LocalDevVPN.",
        "Если приложение истекло, не удаляйте его: переподпишите тем же Apple ID, иначе потеряются данные приложения.",
      ],
      troubleshooting: "Настройка Sideloadly и решение проблем",
    },
    faqTitle: "Частые вопросы",
    faq: [
      { q: "Что такое CoBible?", a: "CoBible — приложение для чтения и изучения Библии: текст, подкасты с разбором каждой главы, анализ глав и отдельных стихов с помощью ИИ и планы чтения." },
      { q: "Какие устройства поддерживаются?", a: "Android через APK, Windows x64, macOS на Intel и Apple Silicon, а также iPhone и iPad через IPA-файл, установленный с Windows или Mac с помощью Sideloadly. Публикация в Google Play и App Store запланирована." },
      { q: "Какие языки доступны?", a: "Русский и английский." },
      { q: "Как работает ИИ?", a: "Для каждой главы приложение готовит анализ, а любой отдельный стих можно исследовать отдельно. Можно задать и свой вопрос — Gemini AI ответит в контексте этой главы или стиха." },
      { q: "О чём подкасты?", a: "Каждый выпуск разбирает главу Библии, к которой относится: что происходило, какие есть уроки, как понимать описанные события или закон и что в этом полезного для людей, живущих в современном мире." },
      { q: "Можно ли слушать подкасты офлайн?", a: "Да. Заранее скачайте выпуск подкаста — и он будет доступен для прослушивания без интернета." },
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
