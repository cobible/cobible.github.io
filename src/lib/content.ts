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
  { id: "android", name: "Google Play", sub: { en: "Android", ru: "Android" } },
  { id: "appstore", name: "App Store", sub: { en: "iPhone & iPad", ru: "iPhone и iPad" } },
] as const;
export type PlatformId = (typeof platforms)[number]["id"];

export function detectPlatform(ua?: string, maxTouchPoints?: number): PlatformId | null {
  const userAgent = ua ?? (typeof navigator !== "undefined" ? navigator.userAgent : "");
  const touchPoints = maxTouchPoints ?? (typeof navigator !== "undefined" ? navigator.maxTouchPoints : 0);

  // Android -> currently APK (future: "android" when store is live)
  if (/android/i.test(userAgent)) return "apk";

  // iOS & iPadOS (iPad on iOS 13+ identifies as Macintosh with touch points)
  if (/iphone|ipod|ipad/i.test(userAgent) || (touchPoints > 1 && /macintosh/i.test(userAgent))) {
    return "ios";
  }

  // macOS
  if (/macintosh|mac os x/i.test(userAgent)) return "mac";

  // Windows
  if (/windows|win32|win64/i.test(userAgent)) return "windows";

  return null;
}

export const t = {
  en: {
    meta: {
      title: "CoBible — Bible Reading App",
      description:
        "CoBible is a free cross-platform Bible app: read the Bible, listen to a podcast that explains each chapter, analyse chapters and verses with AI, and follow reading plans. Available for Android, Windows, macOS, and iOS.",
    },
    nav: { features: "Features", install: "Install", faq: "FAQ" },
    langSwitch: "Русский",
    theme: {
      toggle: "Theme",
      light: "Light",
      dark: "Dark",
      system: "System",
    },
    eyebrow: "Bible reading app",
    h1: "Read, listen to and understand the Bible\u00a0\u2014 every\u00a0day.",
    lead: "CoBible brings the Bible text, podcast episodes that explain each chapter, AI analysis of chapters and verses and reading plans together in one calm, focused app.",
    ctaInstall: "How to install",
    ctaFeatures: "See features",
    soon: "Coming soon",
    yourDevice: "For your device",
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
      sidestoreInstallTitle: "Part\u00a01 \u2014 Install SideStore via computer",
      sidestoreInstall: [
        "Download iLoader \u2014 a free tool that installs SideStore onto your iPhone.",
        "Windows only: install \u201cApple Devices\u201d from the Microsoft Store \u2014 it provides the USB drivers iLoader needs to detect your iPhone. If you already have iTunes installed from the Microsoft Store, that works too; do not have both installed at the same time. Mac users can skip this step.",
        "Open iLoader. In the Account section on the left, enter your Apple\u00a0ID email and password, then click \u201cLogin\u201d.",
        "Connect your iPhone via USB cable, unlock it and tap \u201cTrust\u201d when prompted. Your iPhone will appear in the Devices section \u2014 click on it to select it.",
        "In the Installers section, click \u201cSideStore\u00a0(Stable)\u201d. iLoader will sign and install SideStore on your iPhone automatically. Wait for it to finish, then disconnect the cable.",
      ],
      sidestoreSetupTitle: "Part\u00a02 \u2014 iPhone setup & LocalDevVPN",
      localDevVpnLink: "LocalDevVPN \u2014 App Store (free)",
      sidestoreSetup: [
        "Trust the developer: tapping SideStore will show an \u201cUntrusted Developer\u201d alert. Open Settings \u2192 General \u2192 VPN & Device Management, tap your Apple\u00a0ID profile, and choose \u201cTrust\u201d.",
        "iOS\u00a016 or later only: open Settings \u2192 Privacy & Security \u2192 Developer Mode, turn it on, restart your iPhone and tap \u201cTurn On\u201d when prompted. (Skip this on iOS\u00a015 or earlier).",
        "Install LocalDevVPN: open the App Store on your iPhone and install the free \u201cLocalDevVPN\u201d app (link above). SideStore requires this local loopback tunnel to sign apps on-device without a computer.",
        "Enable VPN: open the LocalDevVPN app and tap \u201cConnect\u201d. When iOS asks for permission, tap \u201cAllow\u201d and confirm with Face\u00a0ID or your passcode. The \u201cVPN\u201d badge will appear in the iOS status bar.",
      ],
      sidestoreAppTitle: "Part\u00a03 \u2014 Install CoBible",
      sidestoreApp: [
        "Download the CoBible .ipa file using the \u201cDownload IPA\u201d button above and save it to the Files app on your iPhone.",
        "Make sure LocalDevVPN is connected (the VPN icon should be visible in the status bar at the top).",
        "Open SideStore on your iPhone, sign in with your Apple\u00a0ID if prompted, tap the \u00ab+\u00bb button, and select the downloaded CoBible .ipa file. SideStore will sign and install the app to your Home Screen!",
        "If you see \u201cPairing Required\u201d or a UDID error: ensure LocalDevVPN is active, then restart SideStore. If it persists, export the pairing file in iLoader on your computer (\u201cManage Pairing File\u201d / Ctrl+P), send it to your iPhone, and import it in SideStore Settings.",
        "Manual 7-day refresh: apps signed with a free Apple\u00a0ID expire after 7\u00a0days. To refresh without a computer, simply connect LocalDevVPN, open SideStore, and tap \u201cRefresh All\u201d (takes ~30 seconds).",
        "If an app expires: do not delete it (deleting removes your notes and bookmarks) \u2014 just connect LocalDevVPN and re-sign it in SideStore.",
      ],
      sidestoreAutomationTitle: "Part\u00a04 \u2014 Automated weekly refresh via Shortcuts (no computer needed)",
      sidestoreAutomation: [
        "Open the Shortcuts app: locate and open Apple\u2019s preinstalled \u201cShortcuts\u201d app on your iPhone.",
        "Go to the \u201cAutomation\u201d tab: in the bottom navigation bar, tap the \u201cAutomation\u201d tab.",
        "Create a new automation: tap the \u201c+\u201d (plus) button in the top right corner to create a new automation.",
        "Select trigger (Time of Day): choose \u201cTime of Day\u201d. Set a convenient time (e.g.\u00a003:00 at night when your phone is charging and on Wi-Fi). Set the repeat schedule to \u201cWeekly\u201d (since the certificate lasts 7\u00a0days). At the bottom, select \u201cRun Immediately\u201d (so it runs without prompting), then tap \u201cNext\u201d in the top right.",
        "Add action to open SideStore: on the blank automation screen tap \u201cAdd Action\u201d (or the search bar at the bottom), search for \u201cOpen App\u201d and select it. Tap the faint \u201cApp\u201d placeholder inside the block and choose SideStore from the list.",
        "Add a delay for stability: tap the \u201c+\u201d directly below that action, search for and add the \u201cWait\u201d action. Set the delay to 5\u201310 seconds so the app has time to launch and establish the local VPN.",
        "Add the app refresh action: tap \u201c+\u201d again, search for \u201cSideStore\u201d, and select the shortcut action \u201cRefresh All Apps\u201d. Tap \u201cDone\u201d in the top right corner to save \u2014 CoBible will now refresh automatically every week!",
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
      appleDevicesLink: "Apple Devices — Microsoft Store (Windows driver)",
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
    theme: {
      toggle: "Тема",
      light: "Светлая",
      dark: "Тёмная",
      system: "Системная",
    },
    eyebrow: "Приложение для чтения Библии",
    h1: "Читайте, слушайте и понимайте Библию\u00a0\u2014 каждый\u00a0день.",
    lead: "CoBible объединяет текст Библии, подкасты с разбором каждой главы, анализ глав и стихов с помощью ИИ и планы чтения в одном спокойном, сфокусированном приложении.",
    ctaInstall: "Как установить",
    ctaFeatures: "Смотреть возможности",
    soon: "Скоро",
    yourDevice: "Для вашего устройства",
    download: "Скачать",
    releaseLoading: "Загружаю информацию о релизе\u2026",
    releaseError: "Не удалось загрузить информацию о релизе.",
    releaseMissing: "Файл не найден в этом релизе.",
    viewRelease: "Открыть последний релиз",
    releasesFallback: "Страница последнего релиза",
    featuresTitle: "Всё для ежедневного чтения Библии",
    features: [
      { t: "Текст Библии", d: "Полный текст Библии в одном месте. Навигация по книге, главе и стиху в чистой читалке.", img: "reader" as ShotKey },
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
      sidestoreInstallTitle: "\u0427асть\u00a01 \u2014 Установка SideStore через компьютер",
      sidestoreInstall: [
        "Скачайте iLoader \u2014 бесплатную утилиту, которая устанавливает SideStore на iPhone.",
        "Только Windows: установите \u00abApple Devices\u00bb из Microsoft Store \u2014 это приложение содержит USB-драйверы, необходимые для обнаружения iPhone. Если у вас уже есть iTunes из Microsoft Store, он тоже подойдёт; держать оба одновременно не нужно. Пользователи Mac этот шаг пропускают.",
        "Откройте iLoader. В разделе Account слева введите email и пароль вашего Apple\u00a0ID, затем нажмите \u00abLogin\u00bb.",
        "Подключите iPhone USB-кабелем, разблокируйте устройство и нажмите \u00abДоверять\u00bb. iPhone появится в разделе Devices \u2014 нажмите на него, чтобы выбрать.",
        "В разделе Installers нажмите \u00abSideStore\u00a0(Stable)\u00bb. iLoader подпишет и установит SideStore на iPhone автоматически. После завершения кабель можно отключить.",
      ],
      sidestoreSetupTitle: "\u0427асть\u00a02 \u2014 Настройка iPhone и LocalDevVPN",
      localDevVpnLink: "LocalDevVPN \u2014 App Store (бесплатно)",
      sidestoreSetup: [
        "Разрешите запуск SideStore: при первом нажатии на иконку SideStore появится ошибка \u00abНенадежный разработчик\u00bb. Перейдите в \u00abНастройки\u00bb \u2192 \u00abОсновные\u00bb \u2192 \u00abVPN и управление устройством\u00bb, нажмите на профиль с вашим Apple\u00a0ID и выберите \u00abДоверять\u00bb.",
        "Только iOS\u00a016 и новее: откройте \u00abНастройки\u00bb \u2192 \u00abКонфиденциальность и безопасность\u00bb \u2192 \u00abРежим разработчика\u00bb, включите его, перезагрузите iPhone и подтвердите включение (\u00abВключить\u00bb). На iOS\u00a015 и старше пропустите этот шаг.",
        "Установите LocalDevVPN: откройте App Store на iPhone и установите бесплатное приложение \u00abLocalDevVPN\u00bb (ссылка выше). SideStore использует этот локальный туннель для подписи приложений прямо на устройстве без компьютера.",
        "Включите VPN: откройте приложение LocalDevVPN и нажмите \u00abConnect\u00bb. На системный запрос iOS нажмите \u00abРазрешить\u00bb и подтвердите через Face\u00a0ID или код-пароль. В строке состояния iPhone (рядом со значком батареи/Wi-Fi) появится значок \u00abVPN\u00bb.",
      ],
      sidestoreAppTitle: "\u0427асть\u00a03 \u2014 Установка CoBible",
      sidestoreApp: [
        "Скачайте файл CoBible .ipa по кнопке \u00abСкачать IPA\u00bb в карточке выше и сохраните его в приложение \u00abФайлы\u00bb на iPhone.",
        "Убедитесь, что LocalDevVPN включён: значок VPN должен отображаться в верхней строке экрана (если нет \u2014 откройте LocalDevVPN и нажмите Connect).",
        "Откройте SideStore на iPhone, войдите со своим Apple\u00a0ID (если появится запрос), нажмите кнопку \u00ab+\u00bb и выберите скачанный файл CoBible .ipa. SideStore подпишет и установит приложение на главный экран!",
        "Если появится ошибка сопряжения (\u00abPairing Required\u00bb или ошибка UDID): убедитесь, что LocalDevVPN активен и перезапустите SideStore. Если ошибка осталась \u2014 в iLoader на ПК нажмите \u00abManage Pairing File\u00bb (Ctrl+P), отправьте файл на iPhone и выберите его в настройках SideStore.",
        "Ручное обновление раз в 7\u00a0дней: бесплатный Apple\u00a0ID даёт срок 7\u00a0дней. Для обновления без компьютера просто включите LocalDevVPN, откройте SideStore и нажмите \u00abRefresh All\u00bb (занимает полминуты).",
        "Если срок истёк: не удаляйте CoBible (чтобы не потерять закладки и заметки) \u2014 включите LocalDevVPN и просто переподпишите приложение в SideStore.",
      ],
      sidestoreAutomationTitle: "\u0427асть\u00a04 \u2014 Автоматическое еженедельное обновление через \u00abКоманды\u00bb (без компьютера)",
      sidestoreAutomation: [
        "Откройте приложение \u00abКоманды\u00bb: найдите на iPhone стандартное приложение \u00abКоманды\u00bb (оно предустановлено от Apple) и откройте его.",
        "Перейдите на вкладку \u00abАвтоматизация\u00bb: в нижней панели управления выберите вкладку \u00abАвтоматизация\u00bb (вторая иконка снизу справа).",
        "Создайте новую автоматизацию: нажмите на кнопку \u00ab+\u00bb (плюс) в правом верхнем углу экрана, чтобы создать новую автоматизацию.",
        "Выберите условие запуска (Время суток): прокрутите список возможных триггеров вниз и выберите пункт \u00abВремя суток\u00bb. Установите нужное время (например, 03:00 ночи, когда телефон обычно подключен к зарядке и Wi-Fi). В поле частоты выберите \u00abЕженедельно\u00bb (так как сертификат SideStore живёт 7\u00a0дней). В нижней части экрана выберите вариант \u00abЗапускать немедленно\u00bb (чтобы команда выполнялась без лишних подтверждений), затем нажмите \u00abДалее\u00bb вверху справа.",
        "Добавьте действие для открытия SideStore: на экране создания пустой автоматизации нажмите \u00abДобавить действие\u00bb (или строку поиска внизу). Введите в поиске \u00abОткрыть приложение\u00bb и выберите это действие. Нажмите на бледное слово \u00abПриложение\u00bb внутри блока и выберите из списка SideStore.",
        "Добавьте паузу для стабильности: нажмите на знак \u00ab+\u00bb прямо под только что созданным действием (или воспользуйтесь поиском действий), найдите и добавьте действие \u00abЖдать\u00bb (Ожидать). Установите задержку примерно в 5\u201310 секунд, чтобы приложение успело запуститься и подхватить локальный VPN.",
        "Добавьте действие обновления приложений: снова нажмите \u00ab+\u00bb для добавления следующего шага, введите в поиске название самого SideStore или посмотрите доступные быстрые действия (Intents) для него. Выберите действие, соответствующее обновлению приложений в SideStore (обычно называется \u00abRefresh All Apps\u00bb или \u00abОбновить все\u00bb в экосистеме быстрых команд SideStore). Нажмите кнопку \u00abГотово\u00bb в верхнем правом углу для сохранения.",
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
      appleDevicesLink: "Apple Devices — Microsoft Store (драйвер для Windows)",
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
