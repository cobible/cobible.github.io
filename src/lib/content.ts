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
  { id: "apk", name: "APK", sub: { en: "Android · direct install", ru: "Android · прямая установка" } },
  { id: "windows", name: "Windows", sub: { en: "Windows x64 · ZIP", ru: "Windows x64 · ZIP" } },
  { id: "mac", name: "macOS", sub: { en: "Intel & Apple Silicon · DMG", ru: "Intel и Apple Silicon · DMG" } },
  { id: "ios", name: "iOS · IPA", sub: { en: "iPhone & iPad · SideStore / Sideloadly", ru: "iPhone и iPad · SideStore / Sideloadly" } },
  { id: "appstore", name: "App Store", sub: { en: "iPhone & iPad", ru: "iPhone и iPad" } },
] as const;
export type PlatformId = (typeof platforms)[number]["id"];

export const t = {
  en: {
    meta: {
      title: "CoBible — Bible Reading App",
      description:
        "CoBible is a free cross-platform Bible app: read the Bible, listen to a podcast that explains each chapter, analyse chapters and verses with AI, and follow reading plans. Available for Android, Windows, macOS, and iOS.",
    },
    nav: { features: "Features", install: "Install", faq: "FAQ" },
    langSwitch: "Русский",
    eyebrow: "Bible reading app",
    h1: "Read, listen to and understand the Bible\u00a0\u2014 every\u00a0day.",
    lead: "CoBible brings the Bible text, podcast episodes that explain each chapter, AI analysis of chapters and verses and reading plans together in one calm, focused app.",
    ctaInstall: "How to install",
    ctaFeatures: "See features",
    soon: "Coming soon",
    download: "Download",
    releaseLoading: "Loading release\u2026",
    releaseError: "Could not load release info.",
    releaseMissing: "Build not found in this release.",
    viewRelease: "View latest release",
    releasesFallback: "Latest release page",
    featuresTitle: "Everything you need to read the Bible daily",
    features: [
      { t: "Bible text", d: "The full Bible text in one place. Navigate by book, chapter, and verse, with a clean reader built for focus.", img: "reader" as ShotKey },
      { t: "Podcast per chapter", d: "Listen to a short episode that explains each chapter: who is speaking, what happens and why it matters.", img: "podcasts" as ShotKey },
      { t: "AI analysis", d: "Ask any question about a chapter or a specific verse. The AI draws on the text and context to give clear, grounded answers.", img: "qa" as ShotKey },
      { t: "Reading plans", d: "Canonical, chronological, historical, prophetic, Gospels and more. Track progress chapter by chapter.", img: "plans" as ShotKey },
      { t: "Streaks & stats", d: "See your daily streak, best record and chapters read, plus a verse of the day on the home screen.", img: "home" as ShotKey },
    ],
    installTitle: "How to install CoBible",
    installLead: "Download the latest stable release for Android, Windows x64, macOS (Intel and Apple Silicon) or iPhone and iPad. The recommended iOS method is SideStore \u2014 no computer needed after the first setup. Google Play and App Store links are coming later.",
    steps: {
      android: ["Open Google Play on your device.", "Search for \u201cCoBible\u201d.", "Tap Install and open the app."],
      apk: ["Download the APK file from this page.", "Allow installs from this source when Android asks.", "Open the file and tap Install."],
      windows: ["Download the ZIP archive below.", "Extract the archive into a folder.", "Open the CoBible application from that folder."],
      mac: ["Download and open the DMG file below.", "Move CoBible to the Applications folder.", "Open it from Launchpad."],
      ios: ["Download the IPA file. Install via SideStore (recommended\u00a0\u2014 refresh directly from iPhone, no computer needed after setup) or Sideloadly (requires a PC or Mac each time)."],
      appstore: ["Open the App Store.", "Search for \u201cCoBible\u201d.", "Tap Get and open the app."],
    },
    sideload: {
      sidestoreTitle: "SideStore \u2014 recommended (refresh from iPhone, no computer needed)",
      sidestoreInstallTitle: "Part\u00a01 \u2014 First install (computer required once)",
      sidestoreInstall: [
        "On your computer, go to iloadapp.com and download iLoader \u2014 a free tool that installs SideStore onto your iPhone over Wi-Fi.",
        "Open iLoader, connect your iPhone via USB cable, unlock it and tap \u201cTrust\u201d when prompted. iLoader installs SideStore automatically. Disconnect the cable once it finishes.",
        "On your iPhone open Settings \u2192 General \u2192 VPN & Device Management, find the new developer profile and tap \u201cTrust\u201d.",
        "iOS\u00a016 or later only: open Settings \u2192 Privacy & Security \u2192 Developer Mode, turn it on, restart the device and tap \u201cTurn On\u201d when asked. Skip this step on iOS\u00a015 or earlier.",
        "Open SideStore on your iPhone and sign in with your Apple\u00a0ID when prompted.",
        "In SideStore tap the \u00ab+\u00bb button, select the downloaded CoBible .ipa file. SideStore installs the app.",
      ],
      sidestoreSetupTitle: "Part\u00a02 \u2014 iPhone setup (once)",
      sidestoreSetup: [
        "SideStore uses LocalDevVPN to refresh apps without a computer. Open Settings \u2192 VPN and confirm LocalDevVPN is listed. Tap the toggle to connect whenever you need to refresh.",
        "Automate daily refresh with the Shortcuts app: open Shortcuts \u2192 Automation \u2192 New Automation \u2192 Time of Day. Set a time (e.g.\u00a008:00). Add action \u201cOpen App\u201d and choose SideStore. Add \u201cWait\u201d (5 seconds). Add \u201cOpen App\u201d again and choose your Home Screen. SideStore will silently refresh apps every morning.",
      ],
      sidestoreDailyTitle: "Part\u00a03 \u2014 Daily use & updates",
      sidestoreDaily: [
        "Apps signed with a free Apple\u00a0ID are valid for 7\u00a0days. SideStore can refresh them while LocalDevVPN is active \u2014 no computer needed.",
        "Before the 7-day deadline: open Control Centre (or Settings \u2192 VPN), enable LocalDevVPN, then open SideStore and tap \u201cRefresh All\u201d. Done in under a minute.",
        "If the Shortcuts automation is set up, refreshing happens automatically every morning.",
        "If an app expires, do not delete it: open SideStore and re-sign it. Deleting removes all app data.",
      ],
      sideloadlyDivider: "Or install using a computer (Sideloadly)",
      link: "Get Sideloadly & requirements",
      windowsTitle: "Install using Windows (Sideloadly)",
      macTitle: "Install using Mac (Sideloadly)",
      windows: [
        "On the official Sideloadly website, install the web versions of iTunes and iCloud from the \u201cBefore you install\u201d section. Uninstall Microsoft Store versions first if present. Restart your PC if the device is not detected.",
        "Download Sideloadly for Windows from that same website, install it and open it.",
      ],
      mac: [
        "Download Sideloadly for macOS from its official website. Open the DMG, move Sideloadly to Applications and launch it. Follow any setup prompts.",
      ],
      common: [
        "Connect your iPhone or iPad via USB cable, unlock it and tap \u201cTrust\u201d if asked. Keep an internet connection available.",
        "In Sideloadly, select your iPhone or iPad (not the Mac itself), then drag the downloaded CoBible .ipa file into the window.",
        "Enter your Apple\u00a0ID in Sideloadly and click \u201cStart\u201d. Enter the password and verification code there if requested \u2014 never on this website. Wait until installation finishes.",
        "On your iPhone, open Settings \u2192 General \u2192 VPN & Device Management. Select the developer profile and tap \u201cTrust\u201d.",
        "On iOS\u00a016 or later: enable Settings \u2192 Privacy & Security \u2192 Developer Mode if required. Restart and confirm.",
        "Open CoBible from your Home Screen.",
      ],
      updatesTitle: "Keeping apps up to date (Sideloadly)",
      updates: [
        "A free Apple\u00a0ID gives apps a 7-day validity period and allows up to 3 apps at the same time.",
        "Sideloadly refreshes apps automatically in the background on your computer. Keep the computer on and Sideloadly running, with your phone on the same Wi-Fi. Wireless refresh requires Wi-Fi sync in iTunes (Windows) or Finder (Mac).",
        "If an app expires, do not delete it: re-sign it with the same Apple\u00a0ID, otherwise you will lose the app\u2019s data.",
      ],
      troubleshooting: "Sideloadly setup & troubleshooting",
    },
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "What is CoBible?", a: "CoBible is a Bible reading and study app: full Bible text, podcast episodes that explain each chapter, AI analysis of chapters and individual verses, and reading plans." },
      { q: "Which devices are supported?", a: "Android via APK, Windows x64, macOS on Intel and Apple Silicon, and iPhone and iPad via IPA installed with SideStore or Sideloadly. Google Play and App Store listings are planned." },
      { q: "What languages are available?", a: "Russian, English, Spanish, and Ukrainian." },
      { q: "Is it free?", a: "Yes, CoBible is completely free." },
      { q: "What is an IPA file?", a: "An IPA is the standard app format for iPhone and iPad, similar to an APK on Android. Because CoBible is not yet on the App Store, you install it using SideStore or Sideloadly, which sign the app with your Apple ID so iOS trusts it." },
    ],
    footer: "Privacy Policy",
  },
  ru: {
    meta: {
      title: "CoBible \u2014 приложение для чтения Библии",
      description:
        "CoBible \u2014 приложение для чтения и изучения Библии: текст, подкасты с разбором каждой главы, анализ глав и отдельных стихов с помощью ИИ и планы чтения.",
    },
    nav: { features: "Возможности", install: "Установка", faq: "Вопросы" },
    langSwitch: "English",
    eyebrow: "Приложение для чтения Библии",
    h1: "Читайте, слушайте и понимайте Библию\u00a0\u2014 каждый\u00a0день.",
    lead: "CoBible объединяет текст Библии, подкасты с разбором каждой главы, анализ глав и стихов с помощью ИИ и планы чтения в одном спокойном, сфокусированном приложении.",
    ctaInstall: "Как установить",
    ctaFeatures: "Смотреть возможности",
    soon: "Скоро",
    download: "Скачать",
    releaseLoading: "Загружаю информацию о релизе\u2026",
    releaseError: "Не удалось загрузить информацию о релизе.",
    releaseMissing: "Файл не найден в этом релизе.",
    viewRelease: "Открыть последний релиз",
    releasesFallback: "Страница последнего релиза",
    featuresTitle: "Всё для ежедневного чтения Библии",
    features: [
      { t: "Текст Библии", d: "Полный текст Библии в одном месте. Навигация по книге, главе и стиху в чистом читалке.", img: "reader" as ShotKey },
      { t: "Подкаст к каждой главе", d: "Слушайте короткий выпуск с разбором каждой главы: кто говорит, что происходит и почему это важно.", img: "podcasts" as ShotKey },
      { t: "Анализ с помощью ИИ", d: "Задавайте вопросы о главе или отдельном стихе. ИИ опирается на текст и контекст и даёт чёткие, обоснованные ответы.", img: "qa" as ShotKey },
      { t: "Планы чтения", d: "Канонический, хронологический, исторический, пророческий, Евангелия и другие. Прогресс по каждой главе.", img: "plans" as ShotKey },
      { t: "Серии и статистика", d: "Дни подряд, рекорд и прочитанные главы, а также цитата дня на главном экране.", img: "home" as ShotKey },
    ],
    installTitle: "Как установить CoBible",
    installLead: "Скачайте последний стабильный выпуск для Android, Windows x64, macOS (Intel и Apple Silicon) или iPhone и iPad. Рекомендуемый способ для iOS \u2014 SideStore: после первой настройки компьютер больше не нужен. Ссылки на Google Play и App Store появятся позже.",
    steps: {
      android: ["Откройте Google Play на устройстве.", "Найдите \u00abCoBible\u00bb.", "Нажмите \u00abУстановить\u00bb и откройте приложение."],
      apk: ["Скачайте APK-файл с этой страницы.", "Разрешите установку из этого источника, когда Android спросит.", "Откройте файл и нажмите \u00abУстановить\u00bb."],
      windows: ["Скачайте ZIP-архив ниже.", "Распакуйте архив в папку.", "Откройте приложение CoBible из этой папки."],
      mac: ["Скачайте и откройте DMG-файл ниже.", "Перенесите CoBible в папку \u00abПрограммы\u00bb.", "Откройте его через Launchpad."],
      ios: ["Скачайте IPA-файл. Установите через SideStore (рекомендуется\u00a0\u2014 обновление прямо с iPhone, после первой настройки компьютер не нужен) или Sideloadly (нужен ПК или Mac при каждом обновлении)."],
      appstore: ["Откройте App Store.", "Найдите \u00abCoBible\u00bb.", "Нажмите \u00abЗагрузить\u00bb и откройте приложение."],
    },
    sideload: {
      sidestoreTitle: "SideStore \u2014 рекомендуется (обновление с iPhone, без компьютера)",
      sidestoreInstallTitle: "\u0427асть\u00a01 \u2014 Первая установка (компьютер нужен один раз)",
      sidestoreInstall: [
        "На компьютере зайдите на iloadapp.com и скачайте iLoader \u2014 бесплатную утилиту, которая устанавливает SideStore на iPhone по Wi-Fi.",
        "Откройте iLoader, подключите iPhone USB-кабелем, разблокируйте устройство и нажмите \u00abДоверять\u00bb. iLoader установит SideStore автоматически. Когда закончит \u2014 кабель можно отключить.",
        "На iPhone откройте \u00abНастройки\u00bb \u2192 \u00abОсновные\u00bb \u2192 \u00abVPN и управление устройством\u00bb, найдите появившийся профиль разработчика и нажмите \u00abДоверять\u00bb.",
        "Только iOS\u00a016 и новее: откройте \u00abНастройки\u00bb \u2192 \u00abКонфиденциальность и безопасность\u00bb \u2192 \u00abРежим разработчика\u00bb, включите его, перезагрузите iPhone и подтвердите. На iOS\u00a015 и старше этот шаг пропустите.",
        "Откройте SideStore на iPhone и войдите со своим Apple\u00a0ID, когда появится запрос.",
        "В SideStore нажмите \u00ab+\u00bb, выберите скачанный файл CoBible .ipa. SideStore установит приложение.",
      ],
      sidestoreSetupTitle: "\u0427асть\u00a02 \u2014 Настройка iPhone (один раз)",
      sidestoreSetup: [
        "SideStore использует LocalDevVPN для обновления приложений без компьютера. Откройте \u00abНастройки\u00bb \u2192 \u00abVPN\u00bb и убедитесь, что профиль LocalDevVPN есть в списке. Включайте переключатель каждый раз, когда нужно обновить приложения.",
        "Автоматизация через \u00abКоманды\u00bb: откройте \u00abКоманды\u00bb \u2192 \u00abАвтоматизация\u00bb \u2192 \u00abНовая автоматизация\u00bb \u2192 \u00abВремя суток\u00bb. Укажите время (например, 08:00). Добавьте действие \u00abОткрыть приложение\u00bb \u2014 выберите SideStore. Добавьте \u00abПодождать\u00bb (5 секунд). Добавьте \u00abОткрыть приложение\u00bb снова \u2014 выберите главный экран. SideStore будет обновлять приложения каждое утро автоматически.",
      ],
      sidestoreDailyTitle: "\u0427асть\u00a03 \u2014 Ежедневная работа и обновления",
      sidestoreDaily: [
        "Приложения, подписанные бесплатным Apple\u00a0ID, действуют 7\u00a0дней. SideStore обновляет их пока активен LocalDevVPN \u2014 компьютер не нужен.",
        "До истечения 7\u00a0дней: откройте Пункт управления (или \u00abНастройки\u00bb \u2192 \u00abVPN\u00bb), включите LocalDevVPN, затем откройте SideStore и нажмите \u00abОбновить все\u00bb. Занимает меньше минуты.",
        "Если настроена автоматизация в \u00abКомандах\u00bb, обновление будет происходить само каждое утро.",
        "Если приложение всё же истекло \u2014 не удаляйте его: откройте SideStore и переподпишите. Удаление уничтожит все данные приложения.",
      ],
      sideloadlyDivider: "Или установить с компьютера (Sideloadly)",
      link: "Скачать Sideloadly и проверить требования",
      windowsTitle: "Установка с Windows (Sideloadly)",
      macTitle: "Установка с Mac (Sideloadly)",
      windows: [
        "На официальном сайте Sideloadly установите iTunes и iCloud из раздела \u00abBefore you install\u00bb (нужны версии с сайта Apple, не из Microsoft Store \u2014 версии из магазина удалите). Если устройство не определяется, перезагрузите компьютер.",
        "С этого же сайта скачайте Sideloadly для Windows, установите и откройте программу.",
      ],
      mac: [
        "Скачайте Sideloadly для macOS с официального сайта. Откройте DMG, перенесите Sideloadly в папку \u00abПрограммы\u00bb и запустите. Выполните указания при первом запуске.",
      ],
      common: [
        "Подключите iPhone USB-кабелем, разблокируйте устройство и нажмите \u00abДоверять\u00bb, если появится запрос. Интернет должен быть доступен.",
        "В Sideloadly выберите свой iPhone (не сам Mac), затем перетащите файл CoBible .ipa в окно программы.",
        "Введите Apple\u00a0ID в Sideloadly и нажмите \u00abStart\u00bb. Пароль и код подтверждения вводите там же \u2014 не на этом сайте. Дождитесь завершения установки.",
        "На iPhone откройте \u00abНастройки\u00bb \u2192 \u00abОсновные\u00bb \u2192 \u00abVPN и управление устройством\u00bb. Выберите профиль разработчика и нажмите \u00abДоверять\u00bb.",
        "На iOS\u00a016 и новее: включите \u00abНастройки\u00bb \u2192 \u00abКонфиденциальность и безопасность\u00bb \u2192 \u00abРежим разработчика\u00bb, если потребуется. Перезагрузите и подтвердите.",
        "Откройте CoBible на главном экране.",
      ],
      updatesTitle: "Обновления через Sideloadly",
      updates: [
        "Бесплатный Apple\u00a0ID даёт приложениям срок 7\u00a0дней; одновременно можно держать до 3\u00a0приложений.",
        "Sideloadly обновляет приложения автоматически в фоне. Компьютер должен быть включён, Sideloadly запущен, телефон и компьютер \u2014 в одной Wi-Fi сети. Для беспроводной работы нужна синхронизация по Wi-Fi в iTunes (Windows) или Finder (Mac).",
        "Если приложение истекло \u2014 не удаляйте его: переподпишите тем же Apple\u00a0ID, иначе потеряются данные.",
      ],
      troubleshooting: "Настройка Sideloadly и решение проблем",
    },
    faqTitle: "Частые вопросы",
    faq: [
      { q: "Что такое CoBible?", a: "CoBible \u2014 приложение для чтения и изучения Библии: текст, подкасты с разбором каждой главы, анализ глав и отдельных стихов с помощью ИИ и планы чтения." },
      { q: "Какие устройства поддерживаются?", a: "Android через APK, Windows x64, macOS на Intel и Apple Silicon, а также iPhone и iPad через IPA-файл, установленный с помощью SideStore или Sideloadly. Публикация в Google Play и App Store запланирована." },
      { q: "Какие языки доступны?", a: "Русский, английский, испанский и украинский." },
      { q: "Приложение платное?", a: "Нет, CoBible полностью бесплатное." },
      { q: "Что такое IPA-файл?", a: "IPA \u2014 стандартный формат приложений для iPhone и iPad, аналог APK на Android. Пока CoBible не в App Store, его устанавливают через SideStore или Sideloadly: эти программы подписывают приложение вашим Apple\u00a0ID, и iOS доверяет ему." },
    ],
    footer: "Политика конфиденциальности",
  },
} as const;

export function pageHead(lang: Lang) {
  const m = t[lang].meta;
  return {
    meta: [
      { name: "description", content: m.description },
      { property: "og:title", content: m.title },
      { property: "og:description", content: m.description },
    ],
    links: [{ rel: "canonical", href: lang === "en" ? "https://cobible.github.io/" : "https://cobible.github.io/ru" }],
  };
}
