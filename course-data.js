/*
  course-data.js — Expanded, full-length course content for CyberShield Academy
*/

window.courses = [
  {
    id: "phishing",
    title: "Phishing Awareness",
    image: "images/courses/phishing.png",
    progress: 0,
    description: "Understand phishing — why attackers impersonate trusted sources and how to detect and respond to scam emails, SMS, and social messages.",
    learningObjectives: [
      "Recognise common phishing patterns and red flags",
      "Inspect links and email headers safely",
      "Respond to, report, and mitigate suspicious messages"
    ],
    quizCredits: 30,
    sections: [
      { title: "Introduction to Phishing", content: "Phishing is a social-engineering attack where attackers impersonate trusted organizations or people to steal credentials, money, or personal data. Typical channels include email, SMS (smishing), phone calls (vishing), and social media messages.", credit: 8 },
      { title: "Common Red Flags", content: "Look for urgency, poor grammar, mismatched domains, unexpected attachments, and requests for OTPs/passwords. Always check the sender's email address, not just the display name. Hover over links (on desktop) to view the real URL before clicking.", credit: 10 },
      { title: "Inspecting Links & Domains", content: "Carefully read the domain (e.g., bank.example.com vs bank.example.scam). Attackers often use subdomains or visually similar characters. Use domain lookup tools, and prefer typing the official site address rather than following links from untrusted sources.", credit: 10 },
      { title: "Attachments & Files — Safe Handling", content: "Attachments may contain macros, scripts, or malware. Verify with the sender via a different channel before opening. Use online virus scanners for suspicious files, and never enable macros in Office documents unless you are 100% sure.", credit: 10 },
      { title: "SMS & Phone Scams (Smishing & Vishing)", content: "Phishers call or text pretending to be banks, delivery services, or IT support. They may pressure you to reveal OTPs or credentials. For calls, hang up and call the official number shown on the organization's website.", credit: 8 },
      { title: "Reporting & Recovering from Phishing", content: "If you suspect phishing, change compromised passwords, enable 2FA, report the message to your service provider or security team, and monitor accounts for suspicious activity. Preserve evidence (headers, message text) when reporting.", credit: 14 }
    ]
  },

  {
    id: "passwords",
    title: "Password Safety",
    image: "images/courses/password.png",
    progress: 0,
    description: "Learn to create, manage, and protect strong credentials. Understand 2FA, password managers, secure reset flows, and safe recovery practices.",
    learningObjectives: [
      "Create and store secure passwords",
      "Use multi-factor authentication effectively",
      "Recognize and avoid risky password habits"
    ],
    quizCredits: 30,
    sections: [
      { title: "Why Strong Passwords Matter", content: "Weak or reused passwords are the most common reason accounts get compromised. Attackers use credential stuffing (reusing leaked credentials), brute force, and guessing attacks.", credit: 8 },
      { title: "Creating Strong Passphrases", content: "Use long passphrases (12+ characters) made of random words, numbers, and symbols. Passphrases are easier to remember and harder to brute-force than short passwords.", credit: 10 },
      { title: "Password Managers — What & Why", content: "Password managers generate and store unique credentials for each site, encrypting them with a master password. They reduce reuse and improve security across multiple accounts.", credit: 12 },
      { title: "Two-Factor Authentication (2FA)", content: "Enable 2FA where available. Authenticator apps or hardware keys are stronger than SMS-based codes. Understand backup codes and how to store them safely.", credit: 10 },
      { title: "Password Recovery & Secure Resets", content: "Secure recovery options: use email with 2FA, avoid security questions with public answers, and keep recovery phone numbers updated. Check account activity after password resets.", credit: 10 },
      { title: "Password Hygiene Habits", content: "Never share passwords, avoid storing passwords in plain text, and update passwords after breaches. Use alerts and breach-check services to monitor exposures.", credit: 10 }
    ]
  },

  {
    id: "safe-browsing",
    title: "Safe Browsing",
    image: "images/courses/browsing.png",
    progress: 0,
    description: "Best practices to browse safely: checking site security, preventing drive-by downloads, using browser privacy features, and avoiding risky extensions.",
    learningObjectives: [
      "Identify secure websites and HTTPS limitations",
      "Avoid malicious downloads and unsafe extensions",
      "Use browser privacy settings and safe search habits"
    ],
    quizCredits: 30,
    sections: [
      { title: "HTTPS, Certificates & Padlocks", content: "HTTPS encrypts traffic, but padlock alone doesn't mean the site is friendly. Inspect the domain name and certificate owner for trusted sites. Beware of sites with expired or mismatched certificates.", credit: 8 },
      { title: "Avoiding Malicious Downloads", content: "Download only from official app stores or vendor websites. Avoid pirated software and cracked installers. Scammers bundle malware with free downloads.", credit: 12 },
      { title: "Safe Use of Browser Extensions", content: "Extensions can read data on the pages you visit. Install only well-reviewed extensions from official stores, and review permissions. Remove extensions you don't use.", credit: 10 },
      { title: "Privacy Settings & Tracking", content: "Limit cookies, use tracker-blocking extensions if needed, clear sensitive cookies, and use private windows for shared machines. Understand the trade-offs of privacy vs. convenience.", credit: 8 },
      { title: "Public Wi-Fi & VPNs", content: "Avoid sensitive actions on open Wi-Fi or use a reputable VPN. Be cautious of fake hotspots named like 'Free WiFi' — attackers can intercept traffic in man-in-the-middle attacks.", credit: 10 },
      { title: "Recognizing Fake & Scam Websites", content: "Look for odd URLs, weird layouts, inconsistent branding, too-good-to-be-true offers, and typos. Use search engines to validate sites and check reviews from other users.", credit: 12 }
    ]
  },

  {
    id: "social-media",
    title: "Social Media Safety",
    image: "images/courses/social.png",
    progress: 0,
    description: "Manage your digital footprint: keep privacy controls tight, avoid oversharing, and recognize scams and social-engineering attempts on apps and messaging platforms.",
    learningObjectives: [
      "Configure privacy settings across platforms",
      "Recognize riskiest types of shared information",
      "Handle suspicious contacts & links safely"
    ],
    quizCredits: 30,
    sections: [
      { title: "Understanding Your Digital Footprint", content: "Everything you post adds to your digital footprint. Personal identifiers like full birthdate, phone number, and address are often used in targeted attacks. Limit public info.", credit: 8 },
      { title: "Privacy Settings on Popular Platforms", content: "Set profiles to private, limit who can message you, and control who sees your posts. Periodically review apps with access to your social accounts.", credit: 10 },
      { title: "Recognising Fake Profiles & Scammers", content: "Look for low-photo accounts, few friends/followers, generic bios, and accounts that immediately ask for money or private info.", credit: 10 },
      { title: "Dealing with DMs & Links", content: "Treat unsolicited DMs with suspicion. Verify links and ask the sender via a separate channel if unsure. Don't send money or sensitive info to unknown contacts.", credit: 10 },
      { title: "Privacy vs. Convenience — App Permissions", content: "Limit app permissions (location, contacts, microphone). Revoke permissions for apps you no longer use and audit installed apps regularly.", credit: 8 },
      { title: "Handling Account Compromise", content: "If your account is compromised, change passwords, log out of all sessions, alert contacts, and follow platform-specific recovery steps such as reporting and two-factor re-enablement.", credit: 14 }
    ]
  },

  {
    id: "malware",
    title: "Device Security & Malware",
    image: "images/courses/malware.png",
    progress: 0,
    description: "Detect, prevent, and recover from malware threats. Learn about common malware types, ransomware, secure backups, and how to harden devices.",
    learningObjectives: [
      "Recognize types and vectors of malware",
      "Harden device settings and update processes",
      "Recover safely from infections and backups"
    ],
    quizCredits: 30,
    sections: [
      { title: "What is Malware?", content: "Malware is software intended to harm devices or steal data. This includes viruses, worms, trojans, adware, spyware and ransomware. Understanding vectors (email, downloads, USBs) helps prevention.", credit: 8 },
      { title: "Keeping Systems & Apps Updated", content: "Software updates fix security flaws. Enable automatic updates for OS and apps where possible and avoid delaying critical security patches.", credit: 10 },
      { title: "Safe App & File Sources", content: "Install apps only from official stores or vendor websites. Check publisher reputation and app reviews. Avoid side-loading unknown apps on mobile devices.", credit: 10 },
      { title: "Antivirus & EDR Basics", content: "Antivirus can detect known threats; endpoint detection & response (EDR) is used in organizations. Keep definitions updated and run scans for suspicious signs.", credit: 10 },
      { title: "Backups & Ransomware Recovery", content: "Regular backups (offline or secure cloud) are essential. Isolate infected devices, do not pay ransom by default (contact authorities), and restore from clean backups after cleanup.", credit: 12 },
      { title: "Mobile Device Hygiene", content: "Mobile threats include malicious apps & phishing. Lock your phone with strong authentication, enable device encryption, and review app permissions.", credit: 10 }
    ]
  }
];

/* quizBank */
window.quizBank = {
  phishing: [
    { q: "An email claims 'Urgent: Your account will close in 24 hours' — what's the safest first step?", a: ["Click the link and follow instructions","Log in via the bank's official site you know", "Reply asking for more info"], correct: 1, explanation: "Always visit the official site directly — phishing uses urgency to trick you." },
    { q: "If a sender's display name matches your bank, but the email address is odd, is this suspicious?", correct: true, explanation: "Display names can be faked; always check the full email address." },
    { q: "Shortened links (bit.ly) in unexpected emails should:", a: ["Be clicked immediately","Be expanded/checked before opening","Be safe if they look short"], correct: 1, explanation: "Expand or preview shortened links before clicking." },
    { q: "Banks typically ask for your OTP via email or phone call to 'verify' your login.", correct: false, explanation: "Banks never ask for OTP via email/call—OTP is private." },
    { q: "An attachment with a .docm or .exe file from an unknown sender is:", a: ["Safe to open","Likely harmful — do not open","Only harmful on Windows"], correct: 1, explanation: "Suspicious attachments can contain malware; verify the sender." },
    { q: "Spear phishing differs from regular phishing because it is:", a: ["Sent to many random people","Targeted using personal info","Always via SMS"], correct: 1, explanation: "Spear phishing targets specific individuals using personal data." }
  ],

  passwords: [
    { q: "Is 'P@ssw0rd' a strong password by today's standards?", a: ["Yes, it's strong","No, it's weak"], correct: 1, explanation: "'P@ssw0rd' is a common pattern and not strong; use long unique passphrases." },
    { q: "Which is the safest password practice?", a: ["Use the same password across sites","Use a unique password per site via a manager","Write passwords on sticky notes"], correct: 1, explanation: "Password managers help generate and store unique passwords." },
    { q: "What is the advantage of a password manager?", a: ["It stores encrypted unique passwords","It makes passwords visible to websites","It uploads passwords to cloud without encryption"], correct: 0, explanation: "Good managers encrypt passwords and protect them with a master password." },
    { q: "A good master password should be:", a: ["Short and simple","Long and unique","Common word"], correct: 1, explanation: "Long, unique master passwords protect all stored credentials." },
    { q: "Two-factor via authenticator app is generally safer than SMS-based codes.", correct: true, explanation: "Authenticator apps are not vulnerable to SMS interception." }
  ],

  "safe-browsing": [
    { q: "A padlock icon means the website is completely safe.", a: ["True","False"], correct: 1, explanation: "Padlock means encryption in transit only, not site safety." },
    { q: "Which is the best practice on public Wi-Fi?", a: ["Log into bank websites freely","Avoid sensitive activities or use VPN","Disable browser"], correct: 1, explanation: "Use VPNs or avoid sensitive actions on open Wi-Fi." },
    { q: "Downloading software from unofficial sites increases the chance of malware.", correct: true, explanation: "Use official vendor sites to minimize risk." }
  ],

  "social-media": [
    { q: "Sharing full birthdate publicly increases risk.", correct: true, explanation: "Personal data can be used for identity-based attacks." },
    { q: "Which privacy step is recommended?", a: ["Make account public","Set account to private and review followers","Accept all friend requests"], correct: 1, explanation: "Private accounts reduce exposure." },
    { q: "A DM from a friend asking you to click a weird link should be:", a: ["Clicked immediately","Verified with the friend via call/text","Forwarded"], correct: 1, explanation: "Confirm via a different channel — their account may be compromised." }
  ],

  malware: [
    { q: "Ransomware encrypts your files and demands payment to unlock them.", correct: true, explanation: "Backups are vital; paying ransom is risky." },
    { q: "Which helps defend against malware?", a: ["Keep OS updated","Disable updates","Install random apps"], correct: 0, explanation: "Updates patch vulnerabilities that malware exploits." },
    { q: "A USB drive from unknown source should be:", a: ["Plugged in to see contents","Never plugged into your device","Shared with friends"], correct: 1, explanation: "Unknown USBs can contain malware and autorun exploits." }
  ]
};

/* scenarios */
window.scenarios = [
  { title: "A WhatsApp message from a friend contains an unfamiliar link and a short message 'Check this out!'", correct: true, explanation: "Their account might be compromised — avoid clicking and verify with them." },
  { title: "An email from 'support@bankabc.com' asks you to verify account details via a link", correct: true, explanation: "Verify by calling the bank's official number — do not use the email link." },
  { title: "A browser popup claims a virus and asks you to download a cleanup tool immediately", correct: true, explanation: "Fake popups often push malware; use trusted antivirus." },
  { title: "A recruiter messages you on LinkedIn asking for your bank details for a job sign-up", correct: true, explanation: "Recruiters don't request bank details up front — verify first." },
  { title: "A friend tags you in a funny video and you click the link to play it", correct: true, explanation: "If the link leads to unknown sites, it may be malicious — verify domain." },
  { title: "Your bank app asks to re-enter password inside the app after an update", correct: false, explanation: "If inside the official app and the update is genuine, this can be normal — check update notes." },
  { title: "A free movie download offers an installer from a third-party site", correct: true, explanation: "Pirated downloads are high-risk and often include malware." },
  { title: "A social media ad promises expensive gadgets for completing a short survey", correct: true, explanation: "Scams harvest data via fake surveys." },
  { title: "A call from 'IT support' asking you to install remote software to fix a problem", correct: true, explanation: "Verify internal IT via known numbers before installing remote access tools." },
  { title: "An email from HR asks to update payroll via a corporate portal link", correct: true, explanation: "If the sender uses public email (gmail/yahoo), be suspicious; verify via internal channels." },
  { title: "A friend shares a compressed file (ZIP) with photos unexpectedly", correct: true, explanation: "Verify sender — compressed files can hide executables or macros." },
  { title: "A small popup from a website asks to allow notifications for the site", correct: false, explanation: "Notifications are often safe on trusted sites, but avoid for random domains." },
  { title: "An auction site asks you to pay via direct bank transfer to an unknown seller", correct: true, explanation: "Use platform-provided payments with buyer protection." },
  { title: "Your phone shows an app requesting camera and contacts access that you rarely use", correct: true, explanation: "Review app permissions and revoke if unnecessary." },
  { title: "A coupon email from a brand contains a code and a short redirect link", correct: true, explanation: "Confirm coupon via official brand site before using." },
  { title: "A colleague shares a Google Docs link to a proposal", correct: false, explanation: "If from their verified email and permissions look correct, it's likely safe — still check URL." },
  { title: "A USB found on the school parking lot labeled 'Salary details - click me'", correct: true, explanation: "Never plug unknown USB drives — they could contain malware." },
  { title: "An app update is available in the official Play Store for an app you installed there", correct: false, explanation: "Official store updates are generally safe — still verify update details and permissions." }
];

/* rewards */
window.rewards = [
  { title: "Amazon India ₹100 Gift Voucher", cost: 300 },
  { title: "Flipkart ₹100 Discount Code", cost: 280 },
  { title: "Myntra ₹200 Off Coupon", cost: 350 },
  { title: "Swiggy ₹150 Discount", cost: 300 },
  { title: "Zomato ₹150 Discount", cost: 300 },
  { title: "BigBasket ₹120 Voucher", cost: 250 },
  { title: "Reliance Digital ₹300 Gift Card", cost: 550 },
  { title: "BookMyShow ₹100 Ticket Voucher", cost: 220 },
  { title: "Paytm Cashback ₹75", cost: 160 },
  { title: "Ajio ₹150 Discount", cost: 280 },
  { title: "Domino's ₹100 Discount", cost: 200 }
];
