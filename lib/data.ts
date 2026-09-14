// FrontlinesFaith App Data

export const VERSES = [
  { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.", ref: "Joshua 1:9" },
  { text: "Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have — but do this with gentleness and respect.", ref: "1 Peter 3:15" },
  { text: "In your hearts revere Christ as Lord. Always be prepared to give a defense...", ref: "1 Peter 3:15" },
  { text: "The word of our God stands forever.", ref: "Isaiah 40:8" },
  { text: "Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'", ref: "John 14:6" },
  { text: "For we walk by faith, not by sight.", ref: "2 Corinthians 5:7" },
  { text: "Sanctify them in the truth; your word is truth.", ref: "John 17:17" },
  { text: "The grass withers, the flower fades, but the word of our God will stand forever.", ref: "Isaiah 40:8" },
  { text: "For there is one God, and there is one mediator between God and men, the man Christ Jesus.", ref: "1 Timothy 2:5" },
  { text: "I and the Father are one.", ref: "John 10:30" },
  { text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.", ref: "Ephesians 2:8" },
  { text: "Finally, be strong in the Lord and in his mighty power. Put on the full armor of God.", ref: "Ephesians 6:10-11" }
];

export const DAILY_TOPICS = [
  "The Trinity — Matthew 28:19 & 2 Corinthians 13:14",
  "The Deity of Christ — John 1:1 & Colossians 2:9",
  "Reliability of the Bible — Psalm 119:89",
  "The Crucifixion — 1 Corinthians 15:3-4",
  "Salvation by Grace — Ephesians 2:8-9",
  "Islam's View of Jesus — Surah 4:171",
  "Muhammad's Revelations — Historical analysis",
  "The Quran & the Bible — Surah 5:47 paradox",
  "The Resurrection — Luke 24:1-8 & 1 Corinthians 15:14",
  "Jesus as the Great I AM — John 8:58",
  "The Holy Spirit — John 14:16-17",
  "The Problem of Sin — Romans 3:23",
  "The Reliability of the Gospels — Luke 1:1-4",
  "Grace and Works — James 2:17 & Ephesians 2:8-10",
  "The Uniqueness of Christ — Acts 4:12",
  "Responding with Gentleness — Colossians 4:5-6"
];

export interface DefendItem {
  title: string;
  claim: string;
  response: string;
  scripture: string;
  logic: string;
  bridge: string;
}

export interface DefendCategory {
  cat: string;
  items: DefendItem[];
}

export const DEFEND_DATA: DefendCategory[] = [
  {
    cat: "A. ATTACKS ON THE BIBLE",
    items: [
      {
        title: "\"The Bible has been corrupted (Tahrif)\"",
        claim: "Muslims argue the Torah and Gospel were altered by Jews and Christians to remove references to Muhammad and distort God's message.",
        response: "This claim contradicts the Quran itself. Surah 5:47, 5:68, and 10:94 command Christians and Jews to judge by their scriptures — if those scriptures were corrupt, Allah would not have commanded this. There is no historical evidence of a mass, coordinated corruption. We have thousands of manuscripts (Dead Sea Scrolls, Codex Sinaiticus) predating Islam that match today's Bible.",
        scripture: "Psalm 119:89 — 'Your word, LORD, is eternal; it stands firm in the heavens.' Isaiah 40:8 — 'The grass withers and the flowers fall, but the word of our God endures forever.'",
        logic: "The manuscript evidence is overwhelming. The New Testament has over 5,800 Greek manuscripts, far more than any other ancient text. No competing 'original' Gospel exists. The Dead Sea Scrolls (150 BC) match modern Isaiah almost exactly — centuries before Christ.",
        bridge: "If God could not preserve His Word, what confidence do we have He preserved the Quran? But Scripture assures us He did — and that same Word speaks of Jesus as Lord and Savior, inviting all to eternal life."
      },
      {
        title: "\"Paul corrupted Christianity\"",
        claim: "Paul invented doctrines like the Trinity and atonement that Jesus never taught, transforming a Jewish prophet's message into a Greek religion.",
        response: "Paul's letters (written 48–64 AD) predate the Gospels and contain creeds that date to within 3–5 years of the crucifixion (1 Cor 15:3-8). Paul met with the original apostles (Galatians 1-2) and was affirmed. The deity of Jesus and atonement are found in all four Gospels, not only Paul's letters.",
        scripture: "1 Corinthians 15:3-4 — 'For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day.' John 1:1 — 'In the beginning was the Word, and the Word was with God, and the Word was God.'",
        logic: "Historical scholarship shows Paul did not invent Christianity. He was in Damascus within 1-3 years of the resurrection, meeting disciples who knew Jesus personally. James (Jesus's brother) confirmed Paul's gospel. If Paul 'corrupted' Christianity, why did eyewitnesses of Jesus endorse him?",
        bridge: "Paul's great message was the cross — that God took on flesh to rescue us from sin. That's not corruption; that's the heart of the Good News Jesus Himself announced."
      },
      {
        title: "\"The Bible predicts Muhammad\"",
        claim: "The Bible contains prophecies about Muhammad — the 'Paraclete' in John 14:16 is Muhammad (meaning 'praised one'), and the 'Prophet like Moses' in Deuteronomy 18.",
        response: "The Greek word 'Parakletos' (Comforter/Helper) refers to the Holy Spirit in context — Jesus explicitly identifies this Person as 'the Spirit of Truth who will remind you of everything I said' (John 14:26). A human prophet cannot do that. Deuteronomy 18 speaks of a prophet from among Israel's brothers — the Israelites — not the Ishmaelites.",
        scripture: "John 14:26 — 'But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you.' Acts 2:1-4 — The Holy Spirit arrives at Pentecost, fulfilling this prophecy.",
        logic: "If the Paraclete is Muhammad, he would have to be 'with you forever' (John 14:16) — yet Muhammad died in 632 AD. He would also have to be unseen by the world (John 14:17), but Muhammad was very much visible. The Paraclete is clearly the Holy Spirit.",
        bridge: "Jesus promised not another prophet but the very Spirit of God to dwell within us — a personal, eternal relationship with God Himself, not just guidance from afar."
      },
      {
        title: "\"The Council of Nicaea changed everything\"",
        claim: "The Council of Nicaea (325 AD) invented the divinity of Christ and decided which books would be in the Bible.",
        response: "Nicaea did not invent the Trinity or Christ's divinity — it affirmed what Christians already believed and refuted Arius who denied it. The vote was 316-2 in favour of Christ's full divinity. The canon of the New Testament was already widely accepted before Nicaea based on apostolic authorship. Nicaea discussed the Easter date, not Scripture.",
        scripture: "John 1:1, Colossians 2:9, Philippians 2:6-7 — all written long before 325 AD establish Christ's deity. Hebrews 1:8 (written ~65 AD): 'But about the Son he says, \"Your throne, O God, will last forever.\"'",
        logic: "Pre-Nicene church fathers (Ignatius ~107 AD, Justin Martyr ~150 AD, Irenaeus ~180 AD) all wrote explicitly about Christ's divine nature — centuries before Nicaea. Dan Brown's claims in fiction are not history.",
        bridge: "The church's confession of Christ as God was not invented — it was received from the apostles who watched Him rise from the dead. That resurrection is open to your investigation today."
      }
    ]
  },
  {
    cat: "B. ATTACKS ON JESUS",
    items: [
      {
        title: "\"Jesus never claimed to be God\"",
        claim: "Jesus never directly said 'I am God.' He called himself the 'Son of Man' and prayed to the Father, showing he was a servant, not divine.",
        response: "Jesus made multiple unmistakable divine claims. He said 'I AM' using God's covenant name (John 8:58) — the crowd immediately picked up stones for blasphemy. He forgave sins — only God can do that (Mark 2:5-7). He accepted worship (Matthew 28:9, John 20:28). He claimed to judge all humanity (John 5:22). The Jewish leaders understood His claims perfectly and charged Him with blasphemy.",
        scripture: "John 8:58 — 'Before Abraham was born, I am!' John 10:30 — 'I and the Father are one.' John 20:28 — Thomas declared, 'My Lord and my God!' and Jesus affirmed this. Colossians 2:9 — 'In Christ all the fullness of the Deity lives in bodily form.'",
        logic: "C.S. Lewis's trilemma applies: Jesus was either Lord, liar, or lunatic. His claims were too extreme for Him to be merely a good teacher or prophet. A mere prophet would have rebuked Thomas for calling him God — Jesus did the opposite.",
        bridge: "Jesus did not come to leave us guessing. He invited investigation. The question He asks each person is the one He asked His disciples: 'Who do you say I am?' How you answer changes everything."
      },
      {
        title: "\"Jesus was not crucified (Quran 4:157)\"",
        claim: "The Quran says it only appeared that Jesus was crucified — he was taken up to heaven. This is a divine correction of the false Christian belief.",
        response: "The crucifixion is the best-attested event in ancient history, confirmed not just by Christians but by secular historians: Tacitus, Josephus, Pliny the Younger, and the Babylonian Talmud all record Jesus's death. The disciples, who had fled in fear, were transformed by resurrection appearances into people willing to die for the claim. No legend develops that fast.",
        scripture: "Isaiah 53:5 — 'He was pierced for our transgressions, he was crushed for our iniquities' (written 700 years before Jesus). 1 Corinthians 15:3-8 — The resurrection creed dates to within 5 years of the events.",
        logic: "The historical consensus — including secular scholars — is that Jesus was crucified. The substitution theory (someone else died) creates more problems: Why would God deceive the disciples? How did Christianity explode in Jerusalem — the very city of the crucifixion — if it didn't happen?",
        bridge: "The crucifixion is not a defeat — it is the greatest act of love in history. God Himself bore our sin so we would not have to. The question is not whether it happened, but what it means for you personally."
      },
      {
        title: "\"The Trinity is polytheism / shirk\"",
        claim: "Christians worship three gods — Father, Son, and Holy Spirit. This is polytheism and the greatest sin (shirk) in Islamic theology.",
        response: "The Trinity is not three gods. It is one God in three Persons — a distinction between 'being' and 'person.' Christians are strictly monotheistic (Deuteronomy 6:4). The Trinity is a description of God's inner nature: one divine essence, three personal distinctions. This is philosophically different from polytheism where multiple beings each have their own independent existence.",
        scripture: "Deuteronomy 6:4 — 'The LORD our God, the LORD is one.' Matthew 28:19 — Jesus commands baptism 'in the name [singular] of the Father, Son and Holy Spirit.' 2 Corinthians 13:14 references all three persons in one blessing.",
        logic: "Even the Quran uses plural pronouns for Allah ('We', 'Us' — Surah 2:30, 15:9). Islamic scholars explain this as the 'royal We.' We might ask: Is complexity within the one God truly impossible? Love requires an object — the Trinity reveals a God who IS love in eternal relationship.",
        bridge: "The Trinity is not a puzzle to solve but a love to receive. The Father sent the Son; the Son gave His life; the Spirit draws us in — all one God, working together to redeem you."
      },
      {
        title: "\"God cannot have a Son\"",
        claim: "It is blasphemy to say God has a son — this implies a physical union, which is beneath God's dignity.",
        response: "Christians do not believe God had a son through physical reproduction. The term 'Son of God' is a title denoting the eternal relationship within the Godhead and Christ's unique divine nature — not physical sonship. In the same way, the Quran uses metaphorical language without implying physical acts.",
        scripture: "John 1:14 — 'The Word became flesh' — this is about incarnation, not procreation. Luke 1:35 — The angel explains the divine conception without any suggestion of physical relationship.",
        logic: "The Quran itself calls Jesus the 'Word of God' and a 'Spirit from Him' (Surah 4:171). If words can proceed from God without compromising His unity, why cannot a divine Son proceed from the Father? The problem is a misunderstanding of what 'Son' means in this context.",
        bridge: "God's 'Son' is the Word of God made flesh — stepping into creation to restore relationship with us. This is not degradation; it is the ultimate condescension of love."
      }
    ]
  },
  {
    cat: "C. ATTACKS ON CHRISTIAN THEOLOGY",
    items: [
      {
        title: "\"Original sin is unjust\"",
        claim: "Why should humanity be punished for what Adam did? We are not responsible for someone else's choices.",
        response: "Original sin is less about punishment and more about inheritance. We don't bear Adam's guilt as a penalty but inherit his broken nature. Every person then chooses sin for themselves (Romans 3:23). The good news is that just as sin entered through one man, redemption comes through one Man — Jesus (Romans 5:12-21).",
        scripture: "Romans 5:12 — 'Sin entered the world through one man, and death through sin.' Romans 5:19 — 'Just as through the disobedience of the one man the many were made sinners, so also through the obedience of the one man the many will be made righteous.'",
        logic: "Our daily experience confirms human brokenness — every person lies, harms others, falls short of their own moral standards. Original sin is an explanation, not an excuse. And the gospel's answer — redemption through Christ — is one of the most beautiful truths in existence.",
        bridge: "If original sin shows our problem, the cross shows God's solution. He didn't leave us in our brokenness — He entered it to rescue us."
      },
      {
        title: "\"Grace without works leads to immorality\"",
        claim: "A religion of grace and forgiveness just gives people permission to sin. Works and effort are necessary for true righteousness.",
        response: "Paul addresses this directly: 'Shall we sin that grace may abound? By no means!' (Romans 6:1-2). Biblical grace does not license sin — it transforms the sinner. Grace creates love; love produces obedience. The order matters: we don't work to earn God's favor — we work because we already have it. This is far more powerful than legalistic fear.",
        scripture: "Ephesians 2:8-10 — 'For by grace you have been saved through faith... not by works... we are God's handiwork, created in Christ Jesus to do good works.' Titus 2:11-12 — 'The grace of God... teaches us to say no to ungodliness.'",
        logic: "Islamic works-righteousness creates anxiety — no one knows if they've done enough. Biblical grace creates security and love — 'We love because he first loved us' (1 John 4:19). Historically, the greatest acts of charity, abolition, and human rights came from those motivated by grace, not fear.",
        bridge: "God's grace is not a loophole — it is a power that changes hearts. When you truly grasp how much Christ gave for you, the response is not 'I'll sin more' but 'I want to live for Him.'"
      }
    ]
  },
  {
    cat: "D. PERSONAL CHALLENGES",
    items: [
      {
        title: "\"You only believe because you were born into it\"",
        claim: "You're a Christian because your parents were. If you'd been born in Saudi Arabia, you'd be Muslim. Your faith is just cultural conditioning.",
        response: "This is the genetic fallacy — the origin of a belief doesn't determine its truth. A person born in Germany who becomes a mathematician isn't wrong about calculus because of where they were born. The same applies to faith. Many Christians are converts from Islam, atheism, and other backgrounds. The question is not where a belief originated but whether it's true.",
        scripture: "Acts 17:11 — The Bereans 'examined the Scriptures every day to see if what Paul said was true.' This is the biblical call: examine the evidence.",
        logic: "By the same logic, the person asking grew up Muslim — does that invalidate Islam? The argument proves too much. Instead, the invitation is to examine the evidence for the resurrection, the reliability of Scripture, and the claims of Christ on their merits.",
        bridge: "Christianity does not ask for blind faith. The resurrection of Jesus is a historical event that demands investigation. If Jesus rose from the dead, it changes everything — regardless of where you were born."
      },
      {
        title: "\"You haven't read the Quran\"",
        claim: "You can't criticize Islam if you haven't read the Quran. Your views are based on ignorance.",
        response: "This is worth taking seriously. Christians in apologetics contexts should study the Quran — and many have. The responses in this conversation are drawn from careful study of the Quran, Hadith, and Islamic scholarship. But note: this challenge can also be reversed — have you carefully read the Bible, not selected verses, but the Gospels in full?",
        scripture: "Proverbs 18:17 — 'In a lawsuit the first to speak seems right, until someone comes forward and cross-examines.' We are called to be thorough, not dismissive.",
        logic: "The challenge is often a deflection. If the person has a specific text to discuss, engage it directly. But many who make this challenge have not read their own scriptures in depth. Mutual study and honest inquiry are what should be invited.",
        bridge: "Let's read both books together. Examine Jesus's own words in the Gospels. Let the evidence speak."
      }
    ]
  }
];

export interface AdvanceItem {
  title: string;
  question: string;
  dilemma: string;
  evidence: string;
  invite: string;
}

export interface AdvanceCategory {
  cat: string;
  items: AdvanceItem[];
}

export const ADVANCE_DATA: AdvanceCategory[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // A. QURANIC CONTRADICTIONS & PROBLEMS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    cat: "A. QURANIC CONTRADICTIONS & PROBLEMS",
    items: [
      {
        title: "The Quran confirms the Bible (Surah 5:47, 10:94) — so how can the Bible be corrupt?",
        question: "The Quran repeatedly commands Muhammad and believers to consult the Torah and Gospel as reliable, trustworthy scripture (Surah 5:47, 5:68, 10:94, 29:46). If the Bible had already been corrupted before the Quran was revealed, why would Allah direct people — including His own prophet — to a corrupted source?",
        dilemma: "Muslims face an inescapable logical dilemma: Option 1 — If the Bible was corrupted BEFORE the Quran (as most Muslims claim), then the Quran falsely endorses a corrupted book as reliable and authoritative. Allah either did not know the Bible was corrupt (undermining His omniscience), or He deliberately directed people to error (undermining His character). Option 2 — If the Bible was corrupted AFTER the Quran, there is zero historical, manuscript, or archaeological evidence of any such massive, coordinated, multi-continent alteration of millions of manuscripts in dozens of languages. The Dead Sea Scrolls, Codex Sinaiticus, and thousands of other pre-Islamic manuscripts match today's Bible with remarkable consistency. Either horn of this dilemma is devastating to the Tahrif doctrine.",
        evidence: "Surah 5:47 — 'Let the People of the Gospel judge by what Allah has revealed therein. And whoever does not judge by what Allah has revealed — then it is those who are the defiantly disobedient.' Surah 10:94 — 'So if you are in doubt, [O Muhammad], about that which We have revealed to you, then ask those who have been reading the Scripture before you.' Surah 29:46 — 'We believe in what has been revealed to us and what was revealed to you.' The Dead Sea Scrolls (c.150 BC) predate Islam by nearly 800 years and match the modern Old Testament with extraordinary accuracy. The New Testament has over 5,800 Greek manuscripts — the best-attested document in the ancient world — all predating Islam and all consistent with today's Bible.",
        invite: "This is not merely a debating point — it is a genuine question about the internal consistency of the Quran. The God who says 'We have sent down the Reminder, and We are its guardian' (Surah 15:9) would surely have guarded His previous scriptures too. If He failed to guard the Torah and Gospel, why trust His ability to guard the Quran? The Bible as we have it, validated by overwhelming manuscript evidence, speaks of Jesus Christ as Lord, Savior, and risen King. Will you read it with honest, open eyes?"
      },
      {
        title: "Scientific errors in the Quran (sun setting in muddy water 18:86, sperm from between ribs 86:6-7)",
        question: "The Quran contains a number of statements about the natural world that directly contradict well-established science — not theories or contested models, but basic observable facts. If the Quran is the word of an omniscient Creator, how do we account for these errors? And if we apply to the Quran the same standard of scrutiny that Muslims apply to the Bible, what is the conclusion?",
        dilemma: "If the Quran is the verbatim, perfect, eternal word of God revealed to an illiterate prophet as evidence of its divine origin, then its statements about the physical world should be accurate — because God, by definition, cannot err about His own creation. When the Quran makes factually incorrect statements about biology, astronomy, or cosmology, the Muslim apologist faces a dilemma: either (a) these verses are not meant literally, which opens a door of interpretation that undermines the doctrine of plain, clear Quranic revelation — or (b) they are meant literally and are simply wrong, which undermines the claim of divine authorship. Neither option is comfortable.",
        evidence: "SURAH 18:86 — 'Until, when he reached the setting of the sun, he found it setting in a spring of dark mud, and he found near it a people.' This describes Alexander the Great (Dhul-Qarnain) reaching the literal place where the sun sets and finding it setting in a muddy spring. Classical Islamic commentators (Ibn Kathir, Al-Tabari, Al-Qurtubi) understood this literally. The sun, of course, does not set in any spring or body of water — it is a star approximately 1.39 million kilometres in diameter. SURAH 86:6-7 — 'He was created from a fluid, ejected, emerging from between the backbone and the ribs.' This states that the fluid that creates human life emerges from between the backbone (sulb) and the ribs (tara'ib). Modern anatomy is unambiguous: semen is produced in the testes (located in the scrotum, far below and outside the torso), stored in the epididymis, and travels through the vas deferens. It has no origin between the backbone and the ribs.",
        invite: "We raise these not to mock but to invite the same intellectual honesty that Muslims rightly ask of Christians when examining the Bible. The standard of evidence should be applied consistently to all scripture. If these verses are admitted to be errors, then the claim of perfect divine dictation must be reconsidered. The Bible, by contrast, invites open examination — and the Jesus revealed in its pages is the same yesterday, today, and forever. Truth invites scrutiny. Will you apply the same standard to all scripture?"
      },
      {
        title: "The Quran has variant readings (Hafs vs Warsh)",
        question: "Muslims frequently claim that the Quran is the only religious text in history to have been perfectly preserved — that not a single letter has changed since it was revealed to Muhammad 1,400 years ago. Yet different versions of the Quran are in active use in Muslim communities around the world today. If the Quran is perfectly preserved, which version is the preserved one — and how would you know?",
        dilemma: "The claim of perfect textual preservation is central to Islamic apologetics — it is often used to contrast the Quran favourably with the Bible's manuscript diversity. But the Quran itself has multiple recognised transmissions (qira'at) with documented differences between them. The Hafs 'an 'Asim transmission, dominant in most of the Muslim world, and the Warsh 'an Nafi' transmission, dominant in North Africa and parts of West Africa, differ from each other not merely in pronunciation or vowel pointing (tashkil) but in actual consonantal letters in multiple places. If the Quran is perfectly preserved, these two transmissions cannot both be the perfectly preserved original.",
        evidence: "There are at least 7 officially recognised qira'at (readings) of the Quran, with 3 additional less-common readings, making 10 in total — all considered valid by mainstream Islamic scholarship. The differences between Hafs and Warsh include: (1) Surah 2:132 — Hafs reads 'wa-wasaa' (and enjoined) while Warsh reads 'wa-awsaa' (and charged) — different words with different grammatical forms. (2) Surah 3:81 — differences in verb forms affecting meaning. Historically, this diversity has roots in the earliest transmission: Sahih Bukhari 6:61:514 records that multiple companions of Muhammad had their own versions of the Quran with differences. Companion Ibn Mas'ud famously rejected Uthman's compiled Quran and maintained his own version, which did not include Surahs 1, 113, and 114. The Sanaa manuscripts (discovered in Yemen in 1972) contain significant textual variants from the standard Uthmanic text.",
        invite: "We raise this not to undermine faith but to invite intellectual consistency. The Bible's manuscript tradition — with its thousands of openly published documents, its documented variants, and the transparent science of textual criticism — is the most thoroughly examined textual tradition in history. Christians do not claim every manuscript is identical; they claim the original message is reliably reconstructable from the manuscript evidence. If the same honest examination is applied to the Quran's transmission history, the result is similar — a rich and complex textual tradition, not a single perfect document."
      },
      {
        title: "The Quran was compiled AFTER Muhammad's death",
        question: "The Islamic claim of perfect Quranic preservation is often presented as though Muhammad left behind a single, complete, perfectly organised written scripture. But historical Islamic sources themselves record a very different picture — the Quran was not compiled into a single authoritative document during Muhammad's lifetime. Why, if the Quran is God's perfectly preserved final revelation, was it not preserved in written form while the prophet was still alive to verify it?",
        dilemma: "If the Quran is the perfect, final, and complete word of God — of such supreme importance that it supersedes all previous revelation — it is remarkable that God did not ensure its compilation into a single authoritative document during the lifetime of the prophet through whom it was revealed. The process of compilation was a human, fallible, politically-driven exercise: it occurred after Muhammad's death, was driven by the military crisis of Yamama (where many memorisers were killed), and was later revised and standardised by Caliph Uthman — who then ordered all competing versions burned. If a single perfect text existed, there would have been nothing to burn.",
        evidence: "Sahih Bukhari 6:61:509 — Zayd ibn Thabit describes the first compilation under Caliph Abu Bakr (after Muhammad's death): 'Abu Bakr sent for me [to collect the Quran]... So I started looking for the Quran and collecting it from [what was written on] palm-leaf stalks, thin white stones, and also from the men who knew it by heart.' This was approximately 632-634 AD — after Muhammad's death in 632 AD. Uthman then commissioned an official text and ordered all other manuscripts burned. Companion Ibn Mas'ud refused to surrender his copy and maintained that his version was superior. His version did not include Surahs 1, 113, and 114 — three entire chapters of the Quran as we have it today.",
        invite: "The New Testament documents were being circulated, copied, quoted by multiple independent witnesses, and cross-referenced within decades of the events they record — while eyewitnesses were still alive to correct errors. Paul's letters, some of the earliest Christian documents, date to within 15-20 years of the crucifixion. The four Gospels were written within living memory of Jesus. Which transmission history provides greater grounds for confidence in the original? The question is worth sitting with honestly."
      },
      {
        title: "Abrogation (Naskh) — God changing his own mind",
        question: "Islamic theology acknowledges a doctrine called Naskh (abrogation), which holds that certain Quranic verses have been cancelled and replaced by later Quranic verses where they appear to contradict each other. The later revelation takes precedence over the earlier one. If the Quran is the perfect, eternal, word of an omniscient God, why does it contain verses that need to be cancelled and revised? Does God change His mind?",
        dilemma: "The doctrine of abrogation creates a profound theological problem for the claim of Quranic perfection. If God's earlier revelation was perfect and true, there is no reason for a later verse to cancel it. If the earlier verse needed cancelling, it was imperfect or situationally limited — which means God's initial revelation was not ideal. The problem is compounded when peaceful, tolerant verses — cited by Muslim moderates to demonstrate Islam's peaceful nature — are considered abrogated by later, more militant verses.",
        evidence: "Surah 2:106 — 'We do not abrogate a verse or cause it to be forgotten except that We bring forth [one] better than it or similar to it.' This verse is the Quranic basis for the doctrine of abrogation — but it also implicitly admits that earlier verses were less than optimal. Classical Islamic scholarship has identified over 200 abrogated verses. Key examples: (1) Surah 2:256 — 'There is no compulsion in religion' — widely cited to demonstrate Islamic tolerance, is considered by many classical scholars to have been abrogated by the Verse of the Sword, Surah 9:5: 'And when the sacred months have passed, then kill the polytheists wherever you find them.'",
        invite: "The progressive revelation in the Bible is fundamentally different from Islamic abrogation. In Scripture, God's revelation unfolds across history — earlier promises and shadows are not cancelled but fulfilled. The Law points to Christ (Galatians 3:24). The sacrificial system points to the cross. The Passover lamb points to Jesus, the Lamb of God. Earlier revelation is not abrogated but completed and illuminated. 'Do not think that I have come to abolish the Law or the Prophets,' Jesus said, 'I have not come to abolish them but to fulfil them' (Matthew 5:17). A God who progressively reveals a single coherent redemptive plan is more consistent than a God who revises His own commands."
      },
      {
        title: "Missing Quranic verses — the verse of stoning, the suckling verse",
        question: "Classical Islamic sources — including the most authoritative Hadith collections — record that certain verses which were once part of the Quran, were recited by Muhammad, and were acted upon by the early Muslim community, are now entirely absent from the current Quran. How is the absence of these verses consistent with the claim that the Quran has been perfectly preserved with not a single letter missing or changed?",
        dilemma: "If the Quran is perfectly preserved — a claim central to Islamic apologetics — then no verse that was ever part of the Quran should be missing. Yet multiple companions of Muhammad explicitly stated that certain verses they had personally heard and memorised from the prophet were not included in Uthman's compiled text. These are not obscure or disputed reports — they come from Sahih Muslim and Sahih Bukhari, the two most authoritative Hadith collections in Sunni Islam. The existence of these reports forces a choice: either the Hadith collections are unreliable (undermining the entire Sunnah) or the Quran is incomplete (undermining perfect preservation).",
        evidence: "THE VERSE OF STONING (Ayat al-Rajm): Sahih Muslim 17:4194 — Umar ibn al-Khattab (the second Caliph) stated publicly: 'Verily Allah sent Muhammad with the truth and revealed the Book to him, and among what Allah revealed, was the verse of Rajm (stoning to death), and we did recite this verse and understood and memorised it.' This verse is not in the current Quran. THE VERSE OF SUCKLING (Ayat al-Rida): Sahih Muslim 8:3421 — Aisha stated: 'It had been revealed in the Qur'an that ten clear sucklings make the marriage unlawful, then it was abrogated (and substituted) by five sucklings.' She added that she had this verse written on a piece of paper under her bed — and it was eaten by a goat after Muhammad's death. The verse is not in the current Quran.",
        invite: "The Bible's manuscript tradition is the most openly studied, publicly available, and rigorously examined textual tradition in human history. Every variant is documented, debated, and publicly accessible. The same honest openness applied to the Quran's own textual history raises significant questions. If God perfectly preserved the Quran, where are these verses that companions of Muhammad recited and memorised? The God revealed in Jesus Christ is a God of truth who said 'Your word is truth' (John 17:17). Truth can withstand examination."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // B. MUHAMMAD UNDER SCRUTINY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    cat: "B. MUHAMMAD UNDER SCRUTINY",
    items: [
      {
        title: "Marriage to Aisha (age 6/9)",
        question: "Islam holds Muhammad to be the Uswa Hasana — the 'perfect moral example' for all people in all cultures in all periods of history (Surah 33:21). Multiple Sahih (authentic) Hadith, recorded in the most authoritative Islamic sources, state that Muhammad married Aisha when she was 6 years old and consummated the marriage when she was 9. If Muhammad is the timeless perfect moral exemplar, what are the implications of this for Islamic ethics — and does a truly universal moral standard need to transcend the cultural norms of 7th-century Arabia?",
        dilemma: "Muslims face a dilemma on two fronts: (1) If Muhammad's Sunnah is normative and binding for all Muslims in all times and places — as mainstream Islamic jurisprudence holds — then his marriage and consummation with a 9-year-old is in principle a valid model. (2) If Muslims argue that Muhammad's behaviour was culturally appropriate 'for that time' and is not binding as a universal standard, they undermine the foundational Islamic claim that Muhammad's Sunnah is the perfect pattern for all humanity across all time. The 'different times' defence dissolves the concept of a timeless perfect example — which is the very basis of Muhammad's authority in Islam.",
        evidence: "Sahih Bukhari 5:58:234 — Aisha narrates: 'The Prophet married me when I was six years old and he consummated his marriage when I was nine years old, and then I remained with him for nine years (i.e., till his death).' Sahih Bukhari 7:62:64, 7:62:65 — confirm the same account from multiple narrations. Sahih Muslim 8:3309, 3310, 3311, 3312 — multiple independent confirmations of the same account. This is not a disputed or marginal report — it is multiply attested in both major Sahih collections and has been accepted as authentic by mainstream Islamic scholarship across centuries.",
        invite: "We raise this not in hatred or contempt — Muslims are deeply loved by God and by us, and this question is asked in a spirit of honest inquiry, not attack. We believe every human being, including Muhammad, falls short of God's perfect standard — which is precisely why the Christian gospel insists we need a Saviour rather than merely an example. Jesus set a standard of love, purity, servant-leadership, and self-sacrifice that has genuinely never been surpassed or even equalled in history. The question worth sitting with is: which prophet's example most fully reflects the character of a holy, loving God?"
      },
      {
        title: "The Satanic Verses (Surah 53)",
        question: "Early and reliable Islamic historical sources — written by some of the most respected Muslim historians and scholars — record an incident in which Muhammad temporarily recited verses praising the three Meccan goddesses (Al-Lat, Al-Uzza, and Manat) as having intercessory power, believing these verses to be divine revelation. He later retracted them, saying Satan had inserted them. If Muhammad could be deceived by Satan into reciting false revelation as genuine divine revelation — even temporarily — what guarantee do we have that the Quran contains no other Satanically-inspired content that was not subsequently identified and retracted?",
        dilemma: "This incident — known in Western scholarship as the 'Satanic Verses' — creates a fundamental epistemological problem for the Islamic claim to revelation. If the primary human receiver of the Quran could mistake Satanic inspiration for divine inspiration, the entire mechanism of Quranic transmission is called into question. How did Muhammad distinguish between genuine revelation and Satanic imitation? He could not distinguish them in this instance — it required subsequent correction. If correction was possible once, it must be considered possible in other instances as well.",
        evidence: "The incident is recorded in respected early Islamic sources: Ibn Ishaq's Sirat Rasul Allah (the earliest and most authoritative biography of Muhammad, compiled ~760 AD). Al-Tabari's Tarikh al-Rusul wal-Muluk (History of the Prophets and Kings). Ibn Sa'd's Tabaqat al-Kubra. The Quranic verse Surah 22:52 appears to reference and explain the incident: 'And We did not send before you any messenger or prophet except that when he spoke [or recited], Satan threw into it [some misunderstanding].' Classical Islamic commentators including al-Tabari and Ibn Kathir acknowledged this verse's connection to the Satanic Verses incident. The original verses allegedly recited by Muhammad (and later retracted) praised Al-Lat, Al-Uzza, and Manat as having intercessory power — the exact opposite of Islamic monotheism.",
        invite: "The Christian scriptures are remarkably honest about the failures and weaknesses of their human authors — including the apostles who fell asleep in Gethsemane, Peter who denied Christ three times, and Paul who persecuted the church. The Bible does not claim its human authors were infallible — it claims the divine Author worked through fallible human beings to produce a reliable record. The evidence for the Bible's reliability rests not on the spiritual perfection of its human authors but on the historical evidence for the events it records — above all, the resurrection of Jesus Christ."
      },
      {
        title: "Muhammad's use of violence and assassination",
        question: "Islamic tradition records that Muhammad ordered or expressly approved the assassination of a number of individuals — including poets, women, and political critics — who mocked him or criticised his movement. These are not accounts from hostile outside sources but from primary Islamic biographical and Hadith literature. If Muhammad is 'a mercy to all worlds' (Surah 21:107) and the perfect moral example, how do these recorded actions reflect on his character?",
        dilemma: "If these accounts in Ibn Ishaq's Sirah and the Hadith collections are accurate (which mainstream Islamic scholarship has generally accepted), then Muhammad ordered the killing of critics — including a nursing mother killed in her bed while her infant was with her. This is difficult to reconcile with a claim to be a mercy to all worlds and a model of divine compassion. If the accounts are rejected as inaccurate, then the Sirah — the foundational biography of Islam's prophet, accepted as authoritative for 1,400 years — cannot be trusted as a reliable source.",
        evidence: "KA'B IBN AL-ASHRAF: Ibn Ishaq's Sirah — Ka'b ibn al-Ashraf was a Jewish poet whose poetry criticised Muhammad. Ibn Ishaq records that Muhammad asked his companions: 'Who will rid me of Ibn al-Ashraf?' Muhammad ibn Maslama volunteered and, with Muhammad's permission, assassinated Ka'b. This is also referenced in Sahih Bukhari 4:52:270. ASMA' BINT MARWAN: Ibn Sa'd's Tabaqat al-Kubra records that Asma' bint Marwan, a poetess who criticised Muhammad in verse, was killed in her bed by 'Umayr ibn 'Adiy — the infant she was nursing was still at her breast. When the man informed Muhammad, he reportedly said 'You have helped God and His apostle.'",
        invite: "Jesus, when his disciples asked whether they should call down fire from heaven on a Samaritan village that refused to receive them, 'turned and rebuked them' (Luke 9:54-55). When Peter drew a sword to defend Jesus in Gethsemane, Jesus said 'Put your sword back in its place, for all who draw the sword will die by the sword' (Matthew 26:52) — and then healed the ear of the man Peter had struck (Luke 22:51). When enemies nailed Him to a cross, He prayed 'Father, forgive them, for they do not know what they are doing' (Luke 23:34). Which prophet's life most fully reflects the character of a God described as Love?"
      },
      {
        title: "The raid on Banu Qurayza",
        question: "Islamic historical sources record that following the Battle of the Trench (627 AD), Muhammad ordered or oversaw the killing of between 600 and 900 men of the Banu Qurayza Jewish tribe — all of whose bodies were buried in trenches dug in the marketplace of Medina — and the enslavement of their women and children. This is one of the largest recorded single massacres in the history of Arabia. How is this event consistent with Muhammad's claim to be 'a mercy to all worlds'?",
        dilemma: "The Banu Qurayza massacre presents an acute moral challenge: (1) If the event occurred as described in Ibn Ishaq and Bukhari, and Muhammad approved, ordered, and participated in it, then a prophet claiming to be a mercy to all worlds was responsible for one of the largest mass executions in 7th-century Arabia. (2) If Muslims dispute the historicity of the account, they are rejecting a narrative from Ibn Ishaq's Sirah — the single most authoritative biography of Muhammad, accepted by Islamic scholarship for 1,400 years. (3) If the killings were justified on the grounds of treachery, this raises the question of collective punishment — whether killing all men of a tribe is consistent with divine justice.",
        evidence: "Ibn Ishaq's Sirat Rasul Allah — the primary and most detailed account — records: 'Then [Muhammad] sent for them and struck off their heads in those trenches as they were brought out to him in batches. Among them was the enemy of Allah, Huyayy b. Akhtab, and Ka'b b. Asad their chief. There were 600 or 700 in all, though some put the figure as high as 800 or 900.' Sahih Bukhari 4:56:839 — references the killing of the men of Banu Qurayza and the taking of their women and children as captives. Muhammad reportedly took Rayhana bint Zayd as a concubine.",
        invite: "Jesus wept over Jerusalem — the city that would reject and kill Him — saying 'If you, even you, had only known on this day what would bring you peace...' (Luke 19:41-42). He wept over his enemies. He prayed for those who were crucifying him. The New Testament vision of dealing with enemies is radically different: 'Do not repay evil with evil or insult with insult. On the contrary, repay evil with blessing' (1 Peter 3:9). We are comparing the explicit teachings and recorded actions of the founders of these two faiths. The difference is not a matter of degree. It is a matter of kind."
      },
      {
        title: "Muhammad's multiple wives vs his own rules",
        question: "The Quran clearly limits Muslim men to a maximum of four wives simultaneously (Surah 4:3), with the condition of treating them equally. Yet historical Islamic sources document that Muhammad had at least 11-13 wives simultaneously at various points in his life — well exceeding the limit he himself proclaimed as divine law. He justified this through a special divine dispensation granted only to himself (Surah 33:50). How should we evaluate a divine revelation that establishes a moral rule for all believers while simultaneously granting its author an exemption from that very rule?",
        dilemma: "This situation creates an uncomfortable dilemma for Islamic apologetics: (1) If the four-wife limit is a genuine divine command reflecting God's will for human society, why did God grant Muhammad a personal exemption from it? (2) If Muhammad needed a divine exemption to justify his personal behaviour, this raises the question of whether the revelation was shaped by Muhammad's personal circumstances and desires rather than purely by divine mandate. (3) Aisha herself is recorded in Sahih Bukhari as questioning whether Allah always seemed to hasten to fulfil Muhammad's personal desires — a remarkably candid observation.",
        evidence: "Surah 4:3 — 'then marry those that please you of [other] women, two or three or four. But if you fear that you will not be just, then [marry only] one.' This is the clear Quranic limit: a maximum of four wives. Surah 33:50 — 'O Prophet, indeed We have made lawful to you your wives... This is exclusively for you, not for the [other] believers.' This verse explicitly grants Muhammad an exemption. Muhammad's wives included: Khadijah, Sawda, Aisha, Hafsa, Zaynab bint Khuzayma, Umm Salama, Zaynab bint Jahsh, Juwayriyya, Umm Habiba, Safiyya, Maymuna, and multiple concubines including Mariya al-Qibtiyya. Sahih Bukhari 6:60:311 — Aisha reportedly said: 'I feel that your Lord hastens in fulfilling your wishes and desires.'",
        invite: "Biblical prophets who fell into moral compromise — including David with Bathsheba, Solomon with his many foreign wives — were explicitly condemned by Scripture and suffered real consequences for their sin (2 Samuel 12:9-14, 1 Kings 11:1-13). The Bible does not adjust the standard to accommodate the prophet's behaviour; it holds the prophet to the same standard as everyone else and records his failures honestly. This is one of the remarkable marks of biblical authenticity — its heroes are not sanitised."
      },
      {
        title: "How do you verify Muhammad received revelation?",
        question: "What independent, externally verifiable, historically documented evidence exists that Muhammad genuinely received divine revelation from the God of Abraham — as opposed to having a powerful but subjective religious experience of uncertain and unverifiable origin? This is not a question about sincerity — it is a question about epistemology and evidence.",
        dilemma: "The Islamic claim to revelation rests ultimately and entirely on Muhammad's own testimony — there is no independent witness to the revelatory experiences themselves. Muhammad received his revelations privately and alone, in experiences that he himself initially found frightening and interpreted as demonic attack. The chain of authority is: Gabriel told Muhammad; Muhammad told his companions; his companions wrote it down or memorised it; later generations compiled it. At the foundational link of this chain, there is no independent verification — only Muhammad's word that Gabriel appeared to him. By contrast, the resurrection of Jesus — the central validating event of Christianity — was claimed to be witnessed by over 500 people simultaneously (1 Corinthians 15:6).",
        evidence: "Sahih Bukhari 1:1:3 — Muhammad's own account of his first revelation: 'The angel caught me (forcefully) and pressed me so hard that I could not bear it any more...' Muhammad then returned to Khadijah 'with his heart beating severely' and said: 'I fear that something may happen to me' — indicating he feared he was being attacked by a jinn (demon) or going mad. Khadijah took Muhammad to her cousin Waraqah ibn Nawfal, a Christian, who reinterpreted Muhammad's experience as angelic rather than demonic visitation. The entire Islamic revelation therefore rests on one private experience, initially interpreted by its recipient as demonic, and reinterpreted as divine by a Christian.",
        invite: "We do not raise this question to be dismissive of Muhammad's sincerity. Sincerity is not in doubt. The question is about the epistemological basis for accepting any revelation as genuinely divine. The biblical test is: 'If what a prophet proclaims in the name of the LORD does not take place or come true, that is a message the LORD has not spoken' (Deuteronomy 18:22). Jesus submitted to this test — His resurrection is a publicly documented historical event. He also said 'Do not believe me unless I do the works of my Father' (John 10:37-38). That is an evidence-based invitation to belief."
      },
      {
        title: "No miracles authenticated independently",
        question: "The Quran itself acknowledges that Muhammad's contemporaries repeatedly demanded miracles from him and that he was, in most cases, unable to provide them — offering the Quran itself as his primary miraculous sign. Yet the Gospels record Jesus performing miracles publicly witnessed by thousands. Why is Muhammad's miracle tradition dramatically thinner than that of the prophet he claimed to supersede?",
        dilemma: "Islamic apologetics frequently contrasts the Quran's literary uniqueness as Muhammad's primary miracle (i'jaz al-Quran) with the miracles of previous prophets. But this creates a dilemma: (1) Literary uniqueness is a subjective aesthetic judgment, not an objective miraculous sign capable of public verification — unlike healing the blind, which is either observable or it isn't. (2) The Quran's repeated acknowledgment that people were asking for miracles and being told they would not receive them implies that Muhammad was not performing the kind of publicly verifiable miraculous signs that characterised biblical prophets. (3) Later Hadith literature — compiled 200+ years after Muhammad's death — contains extensive miracle accounts. This is precisely the opposite pattern from reliable historical testimony: reliable accounts of miracles are contemporaneous, not legendary.",
        evidence: "Surah 6:37 — 'And they say, Why has a sign not been sent down to him from his Lord? Say, Indeed, Allah is Able to send down a sign, but most of them do not know.' Surah 17:59 — 'And nothing has prevented Us from sending signs except that the former peoples denied them.' Surah 13:7 — 'And those who disbelieved say, Why has a sign not been sent down to him from his Lord? You are only a warner.' These verses show repeated demands for miraculous signs and the consistent refusal or inability to provide them. By contrast, Jesus's miracles are referenced even in non-Christian sources: Josephus (Antiquities 18.3) — describes Jesus as 'a doer of startling deeds.' The Babylonian Talmud — which is hostile to Jesus — does not deny his miracles but attributes them to sorcery (Sanhedrin 43a).",
        invite: "Hebrews 2:3-4 describes God as 'confirming his message by signs, wonders and various miracles.' The biblical pattern of revelation includes authenticating miracles — not because God must prove Himself, but because a loving God reaches out to His creatures with evidence. The resurrection of Jesus is the ultimate authenticating miracle — documented by multiply attested historical sources, including hostile witnesses. It is the most investigated event in ancient history, and the evidence for it is formidable. If Jesus rose from the dead, the question of religious truth is fundamentally answered."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // C. ISLAMIC THEOLOGY PROBLEMS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    cat: "C. ISLAMIC THEOLOGY PROBLEMS",
    items: [
      {
        title: "Allah's complete unknowability vs a relational God",
        question: "Islamic theology emphasises Allah's absolute transcendence (tanzih) to such a degree that His essence is considered completely unknowable to human beings. The 99 Names of Allah are descriptions of attributes, not revelations of His essence. Personal union or direct relationship with Allah is not only impossible but considered blasphemous in mainstream Sunni theology. Yet the human heart is created with a profound, universal longing for deep personal relationship with its Creator. If Islam's God is structurally unknowable, how can Islam genuinely satisfy the deepest human spiritual need?",
        dilemma: "Islamic theology has produced a God who is, by definition, beyond personal relationship — which creates a structural spiritual vacuum at the heart of the faith. The Sufi movement arose within Islam specifically to fill this relational void — and has been condemned as heretical innovation (bid'ah) by mainstream Islamic authorities precisely because it sought the direct personal experience of God that Sunni theology denies is possible. This is not a peripheral theological debate — it touches the most fundamental question of religious life: can I know God? Does God know me? Is relationship with the divine possible?",
        evidence: "Al-Ghazali (1058-1111 AD) — widely regarded as one of the greatest Muslim theologians in history — wrote in Ihya Ulum al-Din: the essence of Allah is completely beyond the comprehension of any created being. Al-Ash'ari — founder of the dominant Ash'ari theological school in Sunni Islam — taught that Allah's essence is utterly distinct from anything in creation and cannot be compared to or known by human faculties. Surah 6:103 — 'Vision perceives Him not, but He perceives [all] vision.' Surah 42:11 — 'There is nothing like unto Him.' The Sufi tradition — represented by Rumi, al-Hallaj (who was executed for declaring 'I am the Truth'), and Ibn Arabi — arose precisely because conventional Sunni Islam left this relational need unmet.",
        invite: "Jesus said 'Whoever has seen me has seen the Father' (John 14:9). In Jesus, God did not remain transcendent, distant, and unknowable — He became flesh and dwelt among us (John 1:14), visible, tangible, conversational, and relational. The Apostle Paul wrote that we can know God as 'Abba, Father' (Romans 8:15). John writes that 'eternal life' is defined as knowing God personally: 'Now this is eternal life: that they know you, the only true God, and Jesus Christ, whom you have sent' (John 17:3). Augustine wrote: 'You have made us for yourself, O Lord, and our heart is restless until it rests in you.' The God revealed in Jesus does not remain behind a veil of absolute transcendence. He comes looking for us (Luke 15:20)."
      },
      {
        title: "Salvation by works — no assurance of paradise",
        question: "Islam teaches that on the Day of Judgment, Allah will weigh each person's good deeds against their bad deeds, and salvation (entrance to Jannah) depends on this balance plus Allah's inscrutable mercy. There is no mechanism in mainstream Islamic theology by which a Muslim can be certain — before death — that they will enter paradise. Even Muhammad himself — according to the most authoritative Hadith collections — expressed uncertainty about his own eternal destiny. If a religion cannot offer its most devoted adherents any assurance of the salvation it promises, in what meaningful sense can it be said to offer salvation at all?",
        dilemma: "The absence of assurance of salvation in Islam creates a profound pastoral and theological problem: (1) An entire life of prayer, fasting, almsgiving, pilgrimage, and moral striving can end at death with no certainty about the outcome — because Allah's decision is not revealed in advance and depends on His mercy, which is not bound by any mechanism a human can rely on. (2) The only guaranteed route to paradise described in Islamic sources is dying as a martyr in jihad (Surah 3:169-171) — which has obvious and disturbing implications for the radicalisation of desperate believers seeking the one certain route to eternal life. (3) The very prophet whose example all Muslims are supposed to follow expressed personal uncertainty about his own salvation.",
        evidence: "Sahih Bukhari 5:58:266 — Muhammad said: 'By Allah, though I am the Apostle of Allah, yet I do not know what Allah will do to me.' Surah 46:9 — 'I do not know what will be done with me or with you.' Surah 3:169-171 — 'And never think of those who have been killed in the cause of Allah as dead. Rather, they are alive with their Lord...' — this passage, guaranteeing paradise for martyrs in battle, is the only clear unconditional assurance of paradise in the Quran. By contrast: John 3:36 — 'Whoever believes in the Son has eternal life' (present tense, indicative mood — a current possession, not a future uncertainty). John 10:28 — 'I give them eternal life, and they shall never perish; no one will snatch them out of my hand.' 1 John 5:13 — 'I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life.'",
        invite: "The Christian assurance of salvation is not arrogance — it is not based on confidence in one's own moral performance but on trust in what Christ has accomplished. Ephesians 2:8-9 — 'For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast.' The security is in the Giver, not the receiver. Imagine living an entire life of prayer, fasting, and sacrifice — and arriving at the moment of death still uncertain. Then imagine hearing the voice of Jesus say: 'I give them eternal life, and they shall never perish.' Which God offers what the human heart needs most — not just forgiveness, but certainty of love?"
      },
      {
        title: "The 72 virgins / sensual paradise",
        question: "The Quran and Hadith describe Islamic paradise (Jannah) in predominantly physical and sensual terms — rivers of wine that does not intoxicate, gardens, physical pleasures, and Houri companions often interpreted by classical Islamic scholars as beautiful virginal companions for male believers. Is a paradise defined primarily by physical and sensory gratification the highest vision of eternal life that the Creator of the universe can offer?",
        dilemma: "The Islamic description of paradise raises several important questions: (1) If the highest eternal good is an amplification of physical pleasure — eating, drinking, sensory gratification, and sexual companionship — then eternal life is simply more of what we have now, without suffering. This is a profound reduction of human dignity and destiny compared with the Christian vision of knowing God face to face. (2) Classical Islamic scholars (including Ibn Kathir and al-Suyuti) interpreted the Houris as virginal companions for male believers in paradise. What is the eternal destiny of women in paradise — do they receive comparable physical gratification? (3) A God who motivates human behaviour — including the ultimate sacrifice of one's life in battle — primarily through the promise of physical and sexual pleasure reveals something about His own character.",
        evidence: "Surah 56:17-24 — 'They will be attended by immortal youths with cups and pitchers... And [there will be] Houris with large, [beautiful] eyes, the likenesses of lustrous pearls, as reward for what they used to do.' Surah 78:31-33 — 'Indeed, for the righteous is attainment — gardens and grapevines and full-breasted [companions] of equal age.' Sahih Tirmidhi 2687 — 'Every man who enters Paradise shall be given 72 Houris; no matter when he was born, he will find them virgins.' (Classified as Hasan — acceptable — by al-Tirmidhi.) Al-Suyuti's Al-Itqan and Ibn Kathir's Tafsir confirm the traditional interpretation of Houris as physical female companions for male believers.",
        invite: "Jesus was asked about marriage and sexuality in eternity and gave a remarkable answer: 'At the resurrection people will neither marry nor be given in marriage; they will be like the angels in heaven' (Matthew 22:30). The Christian vision of eternity is not a denial of created goods but their transcendence — we will know God 'face to face' and 'even as I am fully known' (1 Corinthians 13:12). C.S. Lewis wrote that the highest pleasures of earthly life are dim shadows of the joy of knowing God directly — and that anyone who has tasted that joy would not trade it for any earthly pleasure multiplied infinitely. The question is not whether physical creation is good (it is) but whether physical pleasure is the highest good. 'You make known to me the path of life; you will fill me with joy in your presence, with eternal pleasures at your right hand' (Psalm 16:11)."
      },
      {
        title: "Women's status in the Quran and Hadith",
        question: "The Quran and authenticated Hadith contain a number of statements about women that, taken at face value, establish a significantly lower legal, moral, and spiritual status for women than for men — including permission for men to beat disobedient wives, a woman's testimony being worth half that of a man's, and statements by Muhammad that women are the majority in hell and are deficient in mind and religion. If the Quran is the eternal, perfect word of God for all people in all times, what does this reveal about the God who revealed it?",
        dilemma: "Islamic apologists typically respond to these passages in one of two ways: (1) Contextual reinterpretation — arguing that the relevant verses and Hadith must be understood in their historical and cultural context, and that they were actually progressive for 7th-century Arabia. This is a significant concession: it admits that the Quran's ethical standards are not timeless universals but contextually conditioned improvements on existing culture. (2) Reinterpretation — arguing that the passages are misunderstood and actually teach something more gender-equitable. This requires overriding 1,400 years of mainstream Islamic jurisprudence.",
        evidence: "Surah 4:34 — 'Men are in charge of women... So righteous women are devoutly obedient... But those [wives] from whom you fear arrogance — [first] advise them; [then if they persist], forsake them in bed; and [finally], strike them.' The Arabic word 'idribuhunna' — used for the third stage — most naturally means 'strike' or 'beat.' Surah 2:282 — 'And if there are not two men [available], then a man and two women from those whom you accept as witnesses — so that if one of the women errs, the other can remind her.' This establishes that a woman's legal testimony is worth half that of a man's. Sahih Bukhari 1:6:301 — Muhammad said: 'O women! Give alms, as I have seen that the majority of the dwellers of hell-fire were you [women]... I have not seen anyone more deficient in intelligence and religion than you.'",
        invite: "Jesus's treatment of women was radically, scandalously countercultural for 1st-century Judaism and the Greco-Roman world. He spoke openly and at length with the Samaritan woman at the well — crossing two social taboos simultaneously (John 4). He allowed women to be among His core disciples and financial supporters (Luke 8:1-3). He appeared first to women after the resurrection and entrusted to them the first proclamation of the resurrection — at a time when women's testimony was legally worthless in Jewish courts (John 20:14-18). Galatians 3:28 — 'There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.' The ground at the foot of the cross is level."
      },
      {
        title: "Islamic predestination (Qadar) and its implications",
        question: "Islam teaches as one of its six articles of faith that Allah has decreed and recorded all things that will happen — including every human action and decision — before creation (Qadar, or Divine Decree). If Allah has decreed all things, including which human beings will believe and which will disbelieve, does this not make Allah ultimately responsible for the unbelief He then punishes? And if human beings are acting out a divinely pre-written script, in what meaningful sense are they morally responsible for their actions?",
        dilemma: "The doctrine of Qadar creates what philosophers call the problem of compatibilism — how to hold together divine predetermination and genuine human moral freedom. Islamic theology has wrestled with this for centuries and has never produced a fully satisfying resolution: (1) The Ash'ari school developed the concept of 'acquisition' (kasb) — the idea that humans 'acquire' actions that Allah creates. But this is widely acknowledged to be a philosophical sleight of hand rather than a genuine resolution. (2) The Mu'tazilite school, which gave genuine free will to humans, was declared heretical by mainstream Sunni Islam and suppressed. (3) Some Hadith explicitly describe Allah writing the destined fate of every human being — including whether they will end in paradise or hell — before their birth.",
        evidence: "Sahih Muslim 33:6390 — 'Allah created Adam, then touched his back with his right hand and brought forth from it his offspring. Then He said: I have created these for Paradise and with the actions of the people of Paradise will they act. Then He touched his back again and said: I have created these for the Fire and with the actions of the people of the Fire will they act.' Surah 76:29-30 — 'This is a Reminder, so whoever wills may take a path to his Lord. But you cannot will unless Allah wills.' Surah 6:125 — 'So whoever Allah wants to guide — He expands his breast to [contain] Islam; and whoever He wants to misguide — He makes his breast tight and constricted.'",
        invite: "The Christian doctrine of sovereignty and human freedom is also theologically complex — the relationship between divine foreknowledge and human freedom has generated centuries of theological debate. But the Christian gospel clearly holds both together without dissolving human responsibility: John 3:16 — 'whoever believes' — a genuine human choice. Revelation 22:17 — 'let the one who wishes take the free gift of the water of life.' 2 Peter 3:9 — God 'is patient with you, not wanting anyone to perish, but everyone to come to repentance.' The Christian God earnestly, genuinely desires the salvation of every person — not merely of those He has pre-selected. The cross is the ultimate demonstration that God takes human choice and human sin with absolute seriousness — serious enough to pay for it Himself."
      },
      {
        title: "No atonement theology in Islam",
        question: "Islam has no doctrine of atonement — no mechanism by which the moral debt of human sin is justly paid. In Islamic theology, Allah forgives sin by sovereign mercy and in response to human repentance and good deeds — but there is no substitutionary sacrifice, no divine bearing of sin's penalty, no satisfaction of divine justice. If Allah is both perfectly just (Al-Adl) and perfectly merciful (Al-Rahman, Al-Rahim), how does He simultaneously satisfy both attributes when He forgives human sin without a penalty being paid? Where does divine justice go?",
        dilemma: "This is perhaps the most profound theological problem in Islamic soteriology (the doctrine of salvation): Every functional legal and moral system — human and divine — recognises that justice requires that wrongdoing be answered by an appropriate consequence. A judge who simply dismisses charges against a criminal, without any penalty being paid, is not merciful — he is corrupt. If Allah forgives sin purely by sovereign fiat — simply deciding not to count it — then either: (1) Sin is not actually that serious, in which case Allah's justice is compromised; or (2) Sin is serious and Allah's justice is real, but He simply overrides it with mercy, in which case His justice is not reliable. Islam has no answer to this dilemma. The cross in Christianity is specifically the answer: God's justice is fully satisfied (the penalty is paid) AND God's mercy is fully extended (the payment is made by God Himself for the benefit of sinners). At the cross, justice and mercy do not cancel each other — they kiss.",
        evidence: "Surah 6:164 — 'No bearer of burdens shall bear the burden of another.' This verse explicitly rules out substitutionary atonement — one person bearing another's moral debt — making a Christian doctrine of atonement not merely absent from Islam but specifically prohibited. Surah 39:53 — 'Say, O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah. Indeed, Allah forgives all sins.' This presents Allah's forgiveness as virtually unconditional — without any mechanism of justice satisfaction. By contrast: Romans 3:25-26 — 'God presented Christ as a sacrifice of atonement, through the shedding of his blood — to be received by faith. He did this to demonstrate his righteousness... so as to be just and the one who justifies those who have faith in Jesus.' Hebrews 9:22 — 'Without the shedding of blood there is no forgiveness.'",
        invite: "The cross is Christianity's answer to the problem of evil and justice — a problem every honest religion must face. It is not a primitive or barbaric answer. It is the most profound moral statement in history: that God took with ultimate seriousness both the reality of human sin and the reality of His own love. He did not lower the standard of justice; He met it at infinite personal cost. 'God so loved the world that he gave his one and only Son' (John 3:16). The question is not whether God can forgive — the question is whether His forgiveness is just. The cross is the only answer in all of world religion that satisfies both. Where in Islam do justice and mercy truly meet?"
      },
      {
        title: "Taqiyya — permitted deception",
        question: "Islamic jurisprudence includes a concept — Taqiyya — that permits the concealment or denial of one's faith and beliefs under certain circumstances. Some schools of Islamic law have extended this concept beyond situations of compulsion and persecution to include a broader permission for deception in certain contexts. If a religion's own theological tradition permits deception as a legitimate tool under defined circumstances, how does this affect the foundation of trust necessary for genuine interfaith dialogue?",
        dilemma: "It is important to be fair and precise about Taqiyya: it is primarily a Shia concept developed in the context of Shia persecution by Sunni authorities, and its scope in mainstream Sunni jurisprudence is more limited. However, the broader Islamic concept of permitted deception extends beyond Taqiyya: Classical Islamic jurisprudence — including mainstream Sunni scholars — permits lying in three specific contexts (based on Sahih Muslim 32:6303): to reconcile people, to a spouse, and in war. Since classical Islamic jurisprudence treats the relationship between the Muslim community and non-Muslim communities (Dar al-Islam vs Dar al-Harb) as ultimately a kind of wartime relationship, some scholars have extended the permissibility of deception to interactions with non-Muslims.",
        evidence: "Surah 3:28 — 'Let not believers take disbelievers as allies rather than believers. And whoever does that has nothing with Allah, except when taking precaution against them in prudence (tuqātan).' The word 'tuqatan' is the verbal form of 'taqiyya' — indicating that apparent alliance with non-believers is permitted when taking precautionary measures against them. Sahih Muslim 32:6303 — Muhammad said: 'He who makes peace between the people by inventing good information or saying good things, is not a liar.' Ibn Shihab comments that exemption was granted in three cases: in battle, for bringing reconciliation amongst persons, and between spouses. Imam al-Ghazali (from Ihya Ulum al-Din): 'Speaking is a means to achieve objectives... if a praiseworthy aim is attainable through both telling the truth and lying, it is unlawful to accomplish through lying because there is no need for it. When it is possible to achieve such an aim only through lying, it is permissible to lie if attaining the goal is permissible.'",
        invite: "Jesus said 'I am the truth' (John 14:6) — not merely truthful but truth itself, the very ground of all reality. 'Let your yes be yes and your no be no; anything beyond this comes from the evil one' (Matthew 5:37). Hebrews 6:18 states it is 'impossible for God to lie.' The God of the Bible is not merely truthful by choice — He is incapable of deception because deception contradicts His very nature. A God who permits deception under defined circumstances is a God who treats truth instrumentally. A God who IS truth has no such instrumental relationship with it. Which vision of God is more worthy of worship — a God who sometimes permits deception, or a God who is truth itself?"
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // D. HISTORICAL ISLAM
  // ═══════════════════════════════════════════════════════════════════════════
  {
    cat: "D. HISTORICAL ISLAM",
    items: [
      {
        title: "Islam spread predominantly by the sword in its first century",
        question: "Within approximately 100 years of Muhammad's death (632 AD), the Islamic caliphate had expanded by military conquest from the Arabian Peninsula to include the entire Levant, Egypt, North Africa, the Persian Empire, the Iberian Peninsula, and parts of Central Asia. This was one of the fastest military expansions in human history. How does this historical record relate to the claim that Islam is fundamentally a religion of peace — and how does it compare with the spread of Christianity through its first century?",
        dilemma: "The historical record of early Islamic expansion creates a significant tension with the claim that Islam spread primarily through peaceful persuasion: (1) The military campaigns of the early caliphate are not disputed historical events — they are celebrated in Islamic historiography as divinely blessed conquests (futuh). The conquered peoples were given the choice of conversion, submission and payment of the jizya tax, or warfare. (2) The Ridda Wars (wars of apostasy, 632-634 AD) — conducted immediately after Muhammad's death — established that leaving Islam was a capital offence enforced by the sword. This means both the entry into and the exit from Islam were, from the very beginning, enforced by violence rather than voluntary choice.",
        evidence: "Ibn Khaldun (1332-1406 AD) — widely regarded as one of the greatest historians and sociologists in Islamic history — wrote in the Muqaddimah: 'In the Muslim community, the holy war is a religious duty, because of the universalism of the Muslim mission and the obligation to convert everybody to Islam either by persuasion or by force.' This is not a hostile outside characterisation — it is an internal Islamic scholar's own description. The Ridda Wars: immediately after Muhammad's death, entire Arabian tribes that had converted during his lifetime sought to leave Islam. Abu Bakr, the first Caliph, declared war on them and fought campaigns across Arabia to force their return to Islam — establishing that apostasy was a capital offence. The early military campaigns — Conquest of Syria (634-638), Conquest of Egypt (639-641), Conquest of Persia (633-654), Conquest of North Africa, Conquest of Iberia (711-718) — were all offensive campaigns against non-Muslim territories, not defensive wars.",
        invite: "The early church spread in the first century through a radically different method: through suffering, martyrdom, and proclamation. Christians were killed by the Roman Empire, the Jewish authorities, and later by various political powers. They had no political power for the first three centuries. They converted people through persuasion, example, miraculous healing, and the transforming power of the gospel — not through military compulsion. Jesus's model of kingdom expansion is explicitly non-coercive: 'My kingdom is not of this world. If it were, my servants would fight' (John 18:36). The method of expansion tells us something about the character of the God being proclaimed."
      },
      {
        title: "The treatment of Jews and Christians under early caliphates",
        question: "Islamic apologists frequently claim that Islam is uniquely respectful of Jews and Christians as 'People of the Book' (Ahl al-Kitab) and that life under Islamic governance was a golden age of tolerance for religious minorities. How accurate is this picture — and how does the institutionalised legal and social system for non-Muslims under classical Islamic governance (the Dhimmi system) reflect the character of a religion that claims to be the fullest expression of God's will for humanity?",
        dilemma: "The claim of Islamic tolerance toward religious minorities must be evaluated against the actual historical and legal framework that governed their lives under Islamic rule: (1) The Dhimmi system was not tolerance in any modern sense — it was a system of institutionalised legal inferiority in which non-Muslims were permitted to exist and practice their religion privately, but at the cost of paying a special tax (jizya), accepting a range of social restrictions, and living as second-class subjects. (2) The Pact of Umar — the foundational document governing Dhimmi status — contains a detailed list of restrictions that non-Muslims had to accept. (3) Periods of genuine intellectual collaboration existed alongside systematic legal inequality.",
        evidence: "THE DHIMMI SYSTEM — QURANIC BASIS: Surah 9:29 — 'Fight those who do not believe in Allah... until they give the jizyah willingly while they are subdued.' The phrase 'while they are subdued' (wa-hum saghirun) — meaning in a state of humiliation or diminishment — is key. This is not the language of equal dignity. THE PACT OF UMAR (Shurut al-Umariyya) required Dhimmis to accept: Not to build new churches, synagogues, or temples. Not to repair existing ones without permission. To wear distinctive clothing that marked them as non-Muslims. Not to openly display their religion. JIZYA IN PRACTICE: The jizya was levied annually on non-Muslim adult males. Its payment was often accompanied by humiliating rituals — the Dhimmi was required to present himself in a posture of submission. Ibn Qudama al-Maqdisi (classical Hanbali jurist): 'When a dhimmi pays the jizya, he should be hit on the side of his neck.'",
        invite: "The New Testament vision of relationships between peoples of different backgrounds is shaped not by legal categories of superiority and inferiority but by the radical equality of persons at the foot of the cross. Galatians 3:28 — 'There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.' Acts 10:34-35 — Peter declares: 'I now realise how true it is that God does not show favouritism but accepts from every nation the one who fears him.' The early church was the most ethnically and socially diverse community in the Roman Empire — a community in which the social distinctions of the surrounding culture were explicitly relativised by the equal dignity of all persons before God. The ground at the foot of the cross is level."
      },
      {
        title: "The slave trade in Islamic history",
        question: "The Arab-Islamic slave trade is one of the largest and longest-running systems of human enslavement in history — predating the transatlantic slave trade by approximately 700 years, running for approximately 1,300 years (approximately 650-1900 AD), and involving an estimated 11-17 million enslaved Africans, with additional millions from Europe, Central Asia, and the Indian subcontinent. The Quran and authenticated Hadith do not abolish slavery but regulate it, and Muhammad himself owned and traded in enslaved people. If Islam is God's perfect, final, and universal revelation, why did it not abolish one of humanity's greatest moral evils?",
        dilemma: "The Islamic position on slavery creates a significant moral problem: (1) The Quran does not abolish slavery — it regulates it. This is frequently offered as a virtue: Islamic slavery was 'regulated and humane' compared with other ancient systems. But regulation of an evil is not the same as abolition of it. A God whose final, perfect revelation merely regulates rather than abolishes the ownership of human beings has not delivered a moral advance sufficient to the claim of final divine revelation. (2) The mechanism of Islamic law (fiqh) for slavery — extensively elaborated by classical scholars — created a comprehensive system for the buying, selling, owning, and manumission of enslaved people. (3) Abolition of the Arab-Islamic slave trade came primarily through external pressure — from European colonial powers influenced by Christian abolitionism — not from within Islamic theology. Saudi Arabia did not legally abolish slavery until 1962; Mauritania until 1981.",
        evidence: "QURANIC REGULATION OF SLAVERY: Surah 4:3 — permits ownership of 'what your right hands possess' (ma malakat aymanukum) — a Quranic euphemism for enslaved people. Surah 33:50 — explicitly permits Muhammad's ownership of enslaved women. MUHAMMAD AND SLAVERY: Muhammad owned enslaved people (including Zayd ibn Haritha), gifted enslaved people to companions, received enslaved people as tribute, and permitted his companions to enslave captives of war. Mariya al-Qibtiyya — an enslaved Coptic Christian woman given to Muhammad as a gift — became the mother of his son Ibrahim. THE SCALE: Ronald Segal, Islam's Black Slaves (2001) — estimates 11-17 million Africans were enslaved through Arab-Islamic trade between approximately 650 and 1900 AD. Male enslaved Africans were frequently castrated to serve as eunuchs — a practice documented extensively in Islamic sources — resulting in a high death rate from the procedure.",
        invite: "The Christian abolition movement was theologically driven — not despite the gospel but because of it. William Wilberforce spent 45 years fighting for abolition in the British Parliament, explicitly motivated by his Christian faith. Frederick Douglass — himself formerly enslaved — was a committed Christian who used Scripture as the basis for his argument for abolition. He distinguished between Christian failure and Christian teaching. The gospel, correctly applied, was the engine of abolition — because the gospel insists that every human being, regardless of race, gender, or social status, bears the image of God (Genesis 1:26-27) and is loved by God to the point of the cross (John 3:16). Imago Dei — the image of God in every person — is the theological foundation of human dignity, and no human being who bears that image can be owned by another."
      },
      {
        title: "The destruction of pre-Islamic heritage",
        question: "Throughout Islamic history — and with particular visibility in recent decades — Islamic religious authorities and movements have engaged in the systematic destruction of pre-Islamic cultural, artistic, architectural, and religious heritage, justified on the grounds that such objects and sites constitute potential idols (shirk) or bid'ah (forbidden innovation). What does this attitude toward the cultural and creative heritage of humanity reveal about the Islamic understanding of God's relationship to human creativity?",
        dilemma: "The Islamic theological justification for iconoclasm — the destruction of images and representations — creates a tension with the biblical understanding of human cultural creativity as an expression of the image of God (imago Dei): (1) If God created human beings in His image, and if human creativity is therefore an expression of the divine image in humanity, then the destruction of great works of human art and culture is a kind of theological statement about the worthlessness of what image-bearing humans create. (2) The specific targeting of ancient archaeological heritage — including sites that predate Islam by thousands of years and that constitute humanity's shared historical memory — is a form of cultural violence against the entire human community.",
        evidence: "HISTORICAL DESTRUCTION: The destruction of the pre-Islamic sacred sites in Mecca and Medina has been documented by historians of Islam. The Kaaba itself contained approximately 360 idols which were destroyed. THE DESTRUCTION OF BUDDHIST AND HINDU HERITAGE IN SOUTH ASIA: The Islamic conquest of the Indian subcontinent (8th-18th centuries) involved the destruction of thousands of Hindu temples and Buddhist monasteries. The destruction of the Nalanda university complex by Muhammad bin Bakhtiyar Khilji in 1193 AD destroyed one of history's most important libraries. MODERN DESTRUCTION: Taliban destruction of the Bamiyan Buddhas (Afghanistan, March 2001) — two monumental 6th-century Buddha statues carved into a cliff face. Mullah Omar declared: 'All we are breaking are stones.' ISIS destruction of Nimrud, Hatra, and Palmyra (Iraq and Syria, 2015) — including the 2,000-year-old city of Palmyra, a UNESCO World Heritage Site. The Mosul Museum destruction (February 2015) — ISIS destroyed ancient Assyrian and Akkadian artefacts, some over 3,000 years old.",
        invite: "Genesis 1:26-27 records that human beings are made in the image of God — the imago Dei. Human creativity — the ability to make beautiful things, to compose music, to write poetry, to create art and architecture — is one of the ways the divine image is expressed in humanity. The Bible's vision is not one of destroying human cultural achievement but of redeeming and consecrating it to God's glory. Revelation 21:24-26 envisions the kings of the earth bringing their glory into the New Jerusalem — the cultural treasures of humanity finding their ultimate home in the City of God. Which theological vision better honours the dignity of human beings created in God's image?"
      }
    ]
  }
];

export interface ScriptureVerse {
  ref: string;
  text: string;
}

export interface ScriptureTopic {
  topic: string;
  color: string;
  verses: ScriptureVerse[];
}

export const SCRIPTURE_DATA: ScriptureTopic[] = [
  {
    topic: "Deity of Christ",
    color: "var(--scripture-green)",
    verses: [
      { ref: "John 1:1", text: "In the beginning was the Word, and the Word was with God, and the Word was God." },
      { ref: "John 8:58", text: "'Very truly I tell you,' Jesus answered, 'before Abraham was born, I am!'" },
      { ref: "Colossians 2:9", text: "For in Christ all the fullness of the Deity lives in bodily form." },
      { ref: "Isaiah 9:6", text: "For to us a child is born... And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace." },
      { ref: "Hebrews 1:8", text: "But about the Son he says, 'Your throne, O God, will last for ever and ever.'" }
    ]
  },
  {
    topic: "The Trinity",
    color: "var(--scripture-green)",
    verses: [
      { ref: "Matthew 28:19", text: "Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." },
      { ref: "2 Corinthians 13:14", text: "May the grace of the Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit be with you all." },
      { ref: "Genesis 1:26", text: "Then God said, 'Let us make mankind in our image, in our likeness...'" },
      { ref: "Isaiah 48:16", text: "'Come near me and listen to this: From the first announcement I have not spoken in secret; at the time it happens, I am there.' And now the Sovereign LORD has sent me, with his Spirit." }
    ]
  },
  {
    topic: "Reliability of the Bible",
    color: "var(--scripture-green)",
    verses: [
      { ref: "Psalm 119:89", text: "Your word, LORD, is eternal; it stands firm in the heavens." },
      { ref: "Isaiah 40:8", text: "The grass withers and the flowers fall, but the word of our God endures forever." },
      { ref: "Matthew 5:18", text: "Truly I tell you, until heaven and earth disappear, not the smallest letter, not the least stroke of a pen, will by any means disappear from the Law until everything is accomplished." },
      { ref: "1 Peter 1:25", text: "But the word of the Lord endures forever." }
    ]
  },
  {
    topic: "The Cross & Atonement",
    color: "var(--claim-red-strong)",
    verses: [
      { ref: "Isaiah 53:5-6", text: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed." },
      { ref: "Romans 5:8", text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us." },
      { ref: "Hebrews 9:22", text: "Without the shedding of blood there is no forgiveness." },
      { ref: "1 John 2:2", text: "He is the atoning sacrifice for our sins, and not only for ours but also for the sins of the whole world." }
    ]
  },
  {
    topic: "Salvation by Grace",
    color: "var(--advance-blue)",
    verses: [
      { ref: "Ephesians 2:8-9", text: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast." },
      { ref: "Romans 3:23-24", text: "For all have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus." },
      { ref: "Titus 3:5", text: "He saved us, not because of righteous things we had done, but because of his mercy." },
      { ref: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." }
    ]
  },
  {
    topic: "Prophecy Fulfilled by Jesus",
    color: "var(--gold-2)",
    verses: [
      { ref: "Isaiah 53:3", text: "He was despised and rejected by mankind, a man of suffering, and familiar with pain." },
      { ref: "Micah 5:2", text: "But you, Bethlehem Ephrathah, though you are small among the clans of Judah, out of you will come for me one who will be ruler over Israel, whose origins are from of old, from ancient times." },
      { ref: "Psalm 22:16-18", text: "They pierce my hands and my feet... People stare and gloat over me. They divide my clothes among them and cast lots for my garment." },
      { ref: "Zechariah 9:9", text: "Rejoice greatly, Daughter Zion! See, your king comes to you, righteous and victorious, lowly and riding on a donkey." }
    ]
  },
  {
    topic: "Loving Muslims",
    color: "var(--claim-red)",
    verses: [
      { ref: "Matthew 5:44", text: "But I tell you, love your enemies and pray for those who persecute you." },
      { ref: "Romans 5:8", text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us." },
      { ref: "John 3:16", text: "For God so loved the world that he gave his one and only Son..." },
      { ref: "2 Peter 3:9", text: "The Lord is not slow in keeping his promise... He is patient with you, not wanting anyone to perish, but everyone to come to repentance." }
    ]
  }
];

export interface IslamPillar {
  name: string;
  desc: string;
}

export interface IslamFaith {
  name: string;
  desc: string;
}

export interface IslamGlossary {
  term: string;
  def: string;
}

export const ISLAM_DATA = {
  pillars: [
    { name: "Shahada", desc: "Declaration of faith — 'There is no God but Allah, and Muhammad is his messenger.' The entry point to Islam." },
    { name: "Salat", desc: "Ritual prayer performed five times daily, facing Mecca, with specific postures and Arabic recitations." },
    { name: "Zakat", desc: "Obligatory almsgiving — 2.5% of accumulated wealth given to the poor and needy annually." },
    { name: "Sawm", desc: "Fasting during the month of Ramadan from dawn to sunset — no food, drink, or sexual relations." },
    { name: "Hajj", desc: "Pilgrimage to Mecca at least once in a lifetime for those physically and financially able." }
  ] as IslamPillar[],
  faith: [
    { name: "Allah", desc: "Belief in one God, absolutely singular, without partners or equals." },
    { name: "Angels (Mala'ika)", desc: "Belief in spiritual beings created from light who serve Allah and carry out His commands." },
    { name: "Scriptures (Kutub)", desc: "Belief in revealed books: Torah (Tawrat), Psalms (Zabur), Gospel (Injeel), and the Quran." },
    { name: "Prophets (Anbiya)", desc: "Belief in all prophets from Adam to Muhammad, with Muhammad as the final messenger." },
    { name: "Day of Judgment (Yawm al-Qiyamah)", desc: "Belief in resurrection, judgment, heaven (Jannah), and hell (Jahannam)." },
    { name: "Divine Decree (Qadar)", desc: "Belief that Allah has decreed all things — a form of predestination." }
  ] as IslamFaith[],
  glossary: [
    { term: "Allah", def: "Arabic word for God; used by Arabic-speaking Christians and Jews as well as Muslims." },
    { term: "Tawhid", def: "The absolute oneness of God — the central doctrine of Islam." },
    { term: "Shirk", def: "Associating partners with Allah — considered the greatest sin in Islam." },
    { term: "Injeel", def: "The Gospel given to Jesus; Muslims believe the present Gospels are corrupted versions." },
    { term: "Tawrat", def: "The Torah given to Moses; believed by Muslims to be the original law." },
    { term: "Tahrif", def: "The doctrine that the Bible was corrupted/altered by Jews and Christians." },
    { term: "Jihad", def: "Literally 'struggle'; can mean inner spiritual struggle or outward effort/warfare." },
    { term: "Dhimmi", def: "Non-Muslim subjects under Islamic rule; historically given protected but inferior status." },
    { term: "Ummah", def: "The global community of Muslims — the Islamic nation." },
    { term: "Naskh", def: "Abrogation — the doctrine that later Quranic verses cancel earlier contradictory ones." },
    { term: "Taqiyya", def: "Permitted concealment of faith under compulsion; some extend this to tactical deception." },
    { term: "Mahdi", def: "The awaited Islamic messiah figure who will appear before the Day of Judgment." },
    { term: "Jannah", def: "Paradise — described in physical, sensory terms including gardens, rivers, and companions." },
    { term: "Jahannam", def: "Hell — described as a place of physical torment for unbelievers and sinners." },
    { term: "Hadith", def: "Recorded sayings and actions of Muhammad; Sahih (authentic) collections carry great authority." },
    { term: "Sunnah", def: "The example and practice of Muhammad — the model for Islamic life." }
  ] as IslamGlossary[],
  jesusInIslam: "In Islam, Jesus (Isa) is highly honoured as a prophet and messenger of Allah, born of a virgin (Surah 3:45-47), who performed miracles. He is called the 'Word of God' (Kalimatullah) and a 'Spirit from Him' (Surah 4:171). However, Islam denies His crucifixion, death for sins, resurrection, and divine nature. He is believed to be alive in heaven and will return before the Day of Judgment to correct Christianity. This creates an interesting opportunity: Muslims already have enormous respect for Jesus. The question is whether they know the full Jesus of Scripture."
};

export interface QuickDrawItem {
  cat: string;
  type: "defense" | "advance";
  text: string;
}

export const QUICKDRAW: QuickDrawItem[] = [
  { cat: "QURAN CONFIRMS BIBLE", type: "advance", text: "The Quran tells Muslims to consult the Bible (Surah 10:94) — so if the Bible is corrupt, Allah sent Muslims to a corrupt book." },
  { cat: "I AM", type: "defense", text: "Jesus said 'I AM' — the same name God gave Moses at the burning bush. That's not a prophet's language. That's God's language." },
  { cat: "SALVATION", type: "defense", text: "Muhammad said he wasn't sure of his own salvation (Bukhari 5:266). Jesus said 'I am the resurrection and the life.' I'll follow the One who conquered death." },
  { cat: "MANUSCRIPT EVIDENCE", type: "defense", text: "We have 5,800+ Greek manuscripts of the New Testament. No ancient text is better attested. The Quran was compiled after Muhammad's death from memory and bone fragments." },
  { cat: "TRINITY", type: "defense", text: "The Trinity isn't three Gods — it's one God in three Persons. Deepwater is still one substance in three states. God's complexity doesn't make Him plural." },
  { cat: "NICAEA", type: "defense", text: "The Council of Nicaea didn't invent Christ's divinity. Ignatius called Jesus 'our God' in 107 AD — 218 years before Nicaea." },
  { cat: "CRUCIFIXION", type: "defense", text: "The crucifixion is confirmed by Tacitus, Josephus, Pliny, and the Talmud — hostile sources with no motive to invent it." },
  { cat: "PAUL", type: "defense", text: "Paul's resurrection creed in 1 Corinthians 15 dates to within 2-5 years of the crucifixion — before any legend could form." },
  { cat: "AISHA", type: "advance", text: "Muhammad is held up as the perfect moral example for all time. But a 'perfect example' for all cultures married a 6-year-old. Shouldn't a timeless moral standard transcend 7th-century Arabia?" },
  { cat: "GRACE", type: "defense", text: "Islam gives you a scale. Christianity gives you a Saviour. One leaves you uncertain; the other leaves you loved." },
  { cat: "ASSURANCE", type: "defense", text: "'Nothing can separate us from the love of God' (Romans 8:38-39). Name one verse in the Quran that offers the same assurance." },
  { cat: "SCIENCE", type: "advance", text: "The Quran says sperm comes from between the ribs and backbone (86:6-7). It doesn't — it comes from the testes. How is this the word of an all-knowing God?" },
  { cat: "VARIANTS", type: "advance", text: "Muslims claim the Quran is perfectly preserved — but Hafs and Warsh are different transmissions used today. Which one is the perfectly preserved version?" },
  { cat: "SON OF GOD", type: "defense", text: "When Jesus is called 'Son of God' we don't mean biological fatherhood. The Quran calls Jesus the 'Word of God' — does that mean Allah spoke and Jesus came out? Titles can be metaphysical, not physical." },
  { cat: "LOVE", type: "defense", text: "'God demonstrates his love for us in this: While we were still sinners, Christ died for us.' (Romans 5:8). Where in the Quran does Allah die for you?" }
];

export type TabType = "home" | "defend" | "advance" | "scripture" | "islam" | "quickdraw" | "training" | "reference";

// ─────────────────────────────────────────────
// TRAINING ACADEMY DATA
// ─────────────────────────────────────────────

export type TrainingQuestionType = 'mcq' | 'flash' | 'fill' | 'scenario';
export type TrainingCategory = 'all' | 'defend' | 'advance' | 'bible' | 'jesus' | 'islam' | 'history';

export interface TrainingQuestion {
  id: string;
  cat: string;
  type: 'defend' | 'advance';
  subtype: TrainingQuestionType;
  // For MCQ and Scenario
  q?: string;
  context?: string;
  options?: string[];
  correct?: number;
  explain?: string;
  scripture?: string;
  // For Flash cards
  front?: string;
  back?: string;
  // For Fill in the blank
  answer?: string;
  keywords?: string[];
  // For Scenario
  claim?: string;
}

export const TRAINING_QUESTIONS: TrainingQuestion[] = [
  // ── DEFEND: BIBLE ──
  {id:'d1',cat:'bible',type:'defend',subtype:'mcq',
   q:'A Muslim says the Bible has been corrupted (Tahrif). Which argument directly contradicts this using the Quran itself?',
   context:'This is one of the most common Islamic challenges.',
   options:['The Bible is older than the Quran','Surah 5:47 & 10:94 command Christians to judge by their scriptures — if corrupt, Allah endorsed a corrupt source','Muhammad could not read, so he trusted the Bible','The Dead Sea Scrolls were found in 1947'],
   correct:1,
   explain:'The Quran itself commands Christians to judge by the Gospel (Surah 5:47) and tells Muhammad to ask People of the Book if in doubt (Surah 10:94). If the Bible was corrupt, Allah directed people to corruption — a devastating internal contradiction.',
   scripture:"Isaiah 40:8 — 'The word of our God endures forever.'"},
  {id:'d2',cat:'bible',type:'defend',subtype:'mcq',
   q:'How many Greek manuscripts of the New Testament exist — making it the best-attested ancient text?',
   options:['About 500','Around 2,000','Over 5,800','Approximately 10,000'],
   correct:2,
   explain:'The New Testament has over 5,800 Greek manuscripts, plus thousands more in Latin, Coptic, Syriac, and other languages. No other ancient text comes close. This makes the claim of undetected mass corruption historically impossible.',
   scripture:"Psalm 119:89 — 'Your word, LORD, is eternal; it stands firm in the heavens.'"},
  {id:'d3',cat:'bible',type:'defend',subtype:'mcq',
   q:'The Council of Nicaea (325 AD) is accused of inventing Christ\'s divinity. What is the fatal flaw in this claim?',
   options:['Constantine was a Christian his whole life','Ignatius of Antioch called Jesus "our God" in 107 AD — 218 years before Nicaea','The Bible was written before Nicaea','The vote was unanimous'],
   correct:1,
   explain:'Ignatius (~107 AD), Justin Martyr (~150 AD), and Irenaeus (~180 AD) all taught Christ\'s divinity centuries before Nicaea. Nicaea defended established belief against Arius the innovator. The council vote was 316-2 — not a close new idea being forced through.',
   scripture:"John 1:1 — 'In the beginning was the Word, and the Word was with God, and the Word was God.' Written ~90 AD, 235 years before Nicaea."},
  {id:'d4',cat:'bible',type:'defend',subtype:'fill',
   q:'Complete: The Dead Sea Scrolls date to approximately ___ BC and match today\'s Bible with remarkable accuracy, predating Islam by over 700 years.',
   answer:'150',keywords:['150','100','200'],
   explain:'The Dead Sea Scrolls (discovered 1947, dated ~150 BC) contain Isaiah and other OT texts virtually identical to modern Bibles — completely undermining the Tahrif (corruption) narrative since they predate Islam by nearly 800 years.',
   scripture:"Isaiah 40:8 — 'The word of our God endures forever.'"},
  {id:'d5',cat:'bible',type:'defend',subtype:'flash',
   front:'What is the Tahrif doctrine and how does the Quran itself refute it?',
   back:'Tahrif = the claim the Bible was corrupted. The Quran refutes it by commanding Christians to judge by their Gospel (Surah 5:47) and telling Muhammad to consult People of the Book (Surah 10:94). If the Bible was corrupt, the Quran endorsed corruption.',
   scripture:"Surah 5:47 — 'Let the People of the Gospel judge by what Allah has revealed therein.'"},
  {id:'d6',cat:'bible',type:'defend',subtype:'mcq',
   q:'How did Paul receive the gospel he preached, according to Galatians 1:12?',
   options:['From the other apostles in Jerusalem','He read it in the Old Testament','By direct revelation from Jesus Christ','He invented it himself'],
   correct:2,
   explain:'Paul explicitly states he did not receive the gospel from any human but "by revelation from Jesus Christ" (Galatians 1:12). He also met with Peter and James to confirm agreement (Galatians 2:9). The "Paul corrupted it" theory collapses against these facts.',
   scripture:"Galatians 2:9 — Peter, James, and John 'gave me the right hand of fellowship.'"},
  {id:'d7',cat:'bible',type:'defend',subtype:'scenario',
   claim:'"Your Bible has hundreds of different versions. It has clearly been changed."',
   q:'Which is the strongest response?',
   options:['All translations are equally valid','Modern translations are different translations of the same ancient manuscripts — like having many translations of the Quran. The underlying Greek and Hebrew manuscripts are the same.','We only trust the King James Version','The versions are all from different councils'],
   correct:1,
   explain:'Bible translations are access tools — like Quran translations into English. The underlying Greek and Hebrew texts are the same. Bible translators openly publish their source manuscripts. The Quran also has multiple transmissions (Hafs vs Warsh).',
   scripture:"Isaiah 40:8 — 'The word of our God endures forever.'"},

  // ── DEFEND: JESUS ──
  {id:'d8',cat:'jesus',type:'defend',subtype:'mcq',
   q:'Jesus said "Before Abraham was born, I AM" (John 8:58). Why did the crowd immediately pick up stones?',
   options:['Because Jesus was claiming to be Abraham\'s son','Because "I AM" is the divine covenant name God gave Moses — they understood Jesus was claiming to be God','Because He insulted Abraham','Because He broke the Sabbath'],
   correct:1,
   explain:'"I AM" (ego eimi in Greek, ehyeh in Hebrew) is the divine covenant name God revealed to Moses at the burning bush (Exodus 3:14). Jesus used it of Himself, and the crowd\'s immediate reaction (picking up stones for blasphemy) proves they understood exactly what He was claiming.',
   scripture:"Exodus 3:14 — 'God said to Moses, I AM WHO I AM.' John 8:58-59 — The crowd immediately tried to stone Him."},
  {id:'d9',cat:'jesus',type:'defend',subtype:'flash',
   front:'C.S. Lewis\'s trilemma about Jesus — what are the three options and what is its apologetic force?',
   back:'A man who claims to be God is either (1) a Liar — deliberately deceiving, (2) a Lunatic — genuinely deluded, or (3) Lord — actually who He claims to be. Jesus\'s moral character, composure, love, and resurrection rule out the first two. Therefore Lord.',
   scripture:"John 10:30 — 'I and the Father are one.' John 20:28-29 — Thomas: 'My Lord and my God!' Jesus accepted this worship."},
  {id:'d10',cat:'jesus',type:'defend',subtype:'mcq',
   q:'The Quran denies the crucifixion (Surah 4:157). What is the strongest historical counter-argument?',
   options:['Christians have always believed in the crucifixion','The crucifixion is confirmed by hostile sources — Tacitus, Josephus, Pliny the Younger, and the Babylonian Talmud — who had no motive to invent it','The four Gospels all record it','Paul writes about it in his letters'],
   correct:1,
   explain:'Hostile, non-Christian sources confirming the crucifixion include: Tacitus (Annals 15.44), Josephus (Antiquities 18.3), Pliny the Younger, Lucian, and the Babylonian Talmud. Not a single ancient source denies the crucifixion occurred — making the Quranic denial historically isolated.',
   scripture:"Isaiah 53:5 — 'He was pierced for our transgressions' (written 700 years before Jesus)."},
  {id:'d11',cat:'jesus',type:'defend',subtype:'mcq',
   q:'When Thomas said "My Lord and my God!" to Jesus (John 20:28), what did Jesus do?',
   options:['Rebuked Thomas for blasphemy','Told Thomas not to worship him','Blessed Thomas and affirmed his faith: "Because you have seen me, you have believed"','Said nothing'],
   correct:2,
   explain:'A mere prophet or good teacher would have immediately and forcefully rebuked anyone calling them God — as Paul and Barnabas did in Acts 14:14-15. Jesus did the opposite: He blessed Thomas\'s declaration. This is one of the clearest affirmations of Christ\'s divinity in the Gospels.',
   scripture:"John 20:28-29 — 'My Lord and my God!... Because you have seen me, you have believed; blessed are those who have not seen and yet have believed.'"},
  {id:'d12',cat:'jesus',type:'defend',subtype:'fill',
   q:'Complete: The Trinity is not three gods — it is one God in three ___. There is one divine being (what God is) and three personal distinctions (who God is).',
   answer:'persons',keywords:['persons','person','personhood'],
   explain:'The key philosophical distinction is between being (what God is — one divine nature) and person (who God is — three personal distinctions). This is not polytheism, which involves multiple separate beings with independent existences.',
   scripture:"Matthew 28:19 — Baptism is commanded 'in the name [singular] of the Father, Son and Holy Spirit.'"},
  {id:'d13',cat:'jesus',type:'defend',subtype:'scenario',
   claim:'"Jesus prayed to God. You cannot be God and pray to God at the same time. So Jesus is not God."',
   q:'What is the most theologically precise response?',
   options:['Jesus only appeared to pray','The Trinity distinguishes Father and Son as distinct Persons within one Being. In the incarnation, the Son voluntarily took on human limitations (Philippians 2:6-8) and prayed in His human nature. A king undercover as a servant remains a king.','Jesus was confused about who he was','Jesus prayed because he was tired'],
   correct:1,
   explain:'This is the doctrine of kenosis (Philippians 2:6-8) — the Son voluntarily limited the expression of certain divine attributes in the incarnation. His prayer represents His human nature, not a denial of His divine nature. Within the Trinity, the Persons relate to each other — this is a feature, not a bug.',
   scripture:"Philippians 2:6-8 — 'Who, being in very nature God, did not consider equality with God something to be used to his own advantage; rather, he made himself nothing...'"},
  {id:'d14',cat:'jesus',type:'defend',subtype:'mcq',
   q:'When Jesus cried "My God, My God, why have you forsaken me?" (Matthew 27:46), He was quoting the opening of Psalm 22. What is significant about where Psalm 22 ends?',
   options:['It ends in despair, proving Jesus failed','It ends in triumph — "He has done it!" (v.31), the same words as John 19:30 "It is finished"','It ends with a promise of a new prophet','It ends with a blessing for Israel'],
   correct:1,
   explain:'Psalm 22 begins with desolation but ends in triumph (vv.27-31): all nations will worship, God has done it. By quoting the opening, Jesus was pointing to the entire Psalm — signalling that His cry of forsakenness was not the end but the path to the triumphant conclusion. "It is finished" echoes the Psalm\'s finale.',
   scripture:"Psalm 22:31 — 'They will proclaim his righteousness... for he has done it.' John 19:30 — 'It is finished.'"},

  // ── DEFEND: THEOLOGY ──
  {id:'d15',cat:'bible',type:'defend',subtype:'mcq',
   q:'"Grace without works leads to immorality." What does Paul say in Romans 6:1-2?',
   options:['"Yes, sin more so grace increases"','"Shall we sin that grace may abound? By no means! We are dead to sin — how can we live in it any longer?"','"Works are also needed for salvation"','"Grace is only for those who try hard enough"'],
   correct:1,
   explain:'Paul pre-empts this exact objection in Romans 6:1-2. Biblical grace does not licence sin — it transforms the sinner. The motivation shifts from fear of punishment to love for the One who gave everything. Love produces more obedience than law-keeping.',
   scripture:"Ephesians 2:8-10 — Saved by grace to do good works. Titus 2:12 — 'The grace of God teaches us to say no to ungodliness.'"},
  {id:'d16',cat:'bible',type:'defend',subtype:'flash',
   front:'How do you answer "Original sin is unjust — why should I pay for Adam\'s sin?"',
   back:'Original sin is not inherited punishment but inherited nature — a broken, sin-inclined humanity. Every person then confirms this by their own choices (Romans 3:23). The beautiful symmetry: through one man sin entered, and through one Man (Jesus) righteousness is offered (Romans 5:19).',
   scripture:"Romans 5:18-19 — 'Just as one trespass resulted in condemnation... so also one righteous act resulted in justification and life for all people.'"},
  {id:'d17',cat:'history',type:'defend',subtype:'mcq',
   q:'How should a Christian respond to "The Crusades prove Christianity is violent"?',
   options:['Deny the Crusades happened','The Crusades were a military response to Islamic conquest of Christian territories. Christ never commanded holy war — His command was to love enemies. Christianity must be judged by its founder, not its historical failures.','Agree that Christianity is violent','Say the Crusades were fully justified'],
   correct:1,
   explain:'The Crusades occurred after centuries of Islamic expansion (Jerusalem fell 637 AD, Iberian Peninsula, repeated attacks on Constantinople). Many Crusade atrocities were condemned by church leaders at the time. Jesus\'s teaching (Matthew 5:44, John 18:36) explicitly prohibits holy war. The comparison with early Islamic expansion — commanded by Muhammad himself — is not equivalent.',
   scripture:"John 18:36 — 'My kingdom is not of this world. If it were, my servants would fight.'"},
  {id:'d18',cat:'history',type:'defend',subtype:'fill',
   q:'Complete: "Christianity must be judged by its ___, not by its historical failures." (The standard is Christ Himself.)',
   answer:'founder',keywords:['founder','jesus','christ'],
   explain:'This is the key principle: we judge a worldview by what it actually teaches and by the life of its founder. Jesus never commanded violence, slavery, or coercion. When Christians acted wrongly, they acted against Christ\'s explicit teaching.',
   scripture:"Matthew 5:44 — 'Love your enemies and pray for those who persecute you.'"},

  // ── ADVANCE: QURAN ──
  {id:'a1',cat:'advance',type:'advance',subtype:'mcq',
   q:'Which Surah tells Muhammad himself to ask People of the Book if he has doubts about the revelation?',
   options:['Surah 2:106','Surah 4:157','Surah 10:94','Surah 112'],
   correct:2,
   explain:'Surah 10:94 — "If you are in doubt about what We have revealed to you, ask those who have been reading the Scripture before you." This verse, addressed to Muhammad, implies the Christian and Jewish scriptures were reliable and accessible — directly contradicting the Tahrif (corruption) doctrine.',
   scripture:"This Surah is the apologetic key: if the Bible was corrupt, Allah told His prophet to consult corruption."},
  {id:'a2',cat:'advance',type:'advance',subtype:'mcq',
   q:'The Quran says sperm originates "from between the backbone and the ribs" (Surah 86:6-7). What does modern science tell us?',
   options:['It comes from the kidneys','It originates in the testes — completely different location','It comes from bone marrow','Sperm does come from between the backbone and ribs'],
   correct:1,
   explain:'Sperm is produced in the testes (male gonads), located in the scrotum — nowhere near the backbone or ribs. This is not a translation ambiguity — the location described in Surah 86:6-7 does not match human anatomy. This is a problem for claims of perfect scientific accuracy.',
   scripture:"The standard of consistency: what would you say if the Bible contained the same statement?"},
  {id:'a3',cat:'advance',type:'advance',subtype:'flash',
   front:'What is the Hafs vs Warsh problem and why does it matter apologetically?',
   back:'Hafs and Warsh are two major transmissions of the Quran with thousands of differences (including some consonantal variants). Hafs is used in most of the world; Warsh in North Africa. There are at least 7 officially recognized readings. This directly challenges the claim that the Quran is perfectly preserved with not a single letter changed.',
   scripture:"The question to ask: 'Which transmission is the perfectly preserved Quran — and how do you know?'"},
  {id:'a4',cat:'advance',type:'advance',subtype:'mcq',
   q:'What is Naskh (Abrogation) in Islamic theology and why is it theologically problematic?',
   options:['A type of Quranic calligraphy','The doctrine that later Quranic verses cancel earlier ones — raising the question of why an omniscient God needed to revise His revelation','The first Surah of the Quran','The process of Quran memorisation'],
   correct:1,
   explain:'Naskh (abrogation) acknowledges that some Quranic verses contradict earlier ones — and the later ones take precedence. Over 200 verses are considered abrogated. This includes peaceful verses cancelled by the Verse of the Sword (Surah 9:5). The question: why did an omniscient, unchanging God need to revise His revelation?',
   scripture:"Surah 2:106 — 'We do not abrogate a verse... except that We bring forth one better than it.' But why would a perfect God's earlier word need to be improved?"},
  {id:'a5',cat:'islam',type:'advance',subtype:'mcq',
   q:'What did Umar ibn al-Khattab say about the "verse of stoning" — and why is this significant?',
   options:['He said it was never in the Quran','He stated they used to recite a stoning verse (Sahih Muslim 17:4194) but it is not in the current Quran — raising questions about perfect preservation','He said it was cancelled by abrogation','He never mentioned a stoning verse'],
   correct:1,
   explain:'Umar, the second Caliph and companion of Muhammad, explicitly stated that there was a verse commanding stoning for adultery that "we used to recite" — yet it is absent from the current Quran. Combined with the story of Aisha\'s suckling verse being eaten by a goat, these are serious questions about the completeness of the current Quran.',
   scripture:"'By Allah, if I were not afraid that people would say that Umar has made an addition in Allah\'s Book, I would have written the verse about stoning.' — Umar ibn al-Khattab"},
  {id:'a6',cat:'advance',type:'advance',subtype:'scenario',
   claim:'"The Quran has been perfectly preserved — not a single letter has changed since Muhammad received it."',
   q:'What is the most precise apologetic response?',
   options:['Agree — the Quran is perfectly preserved','Actually, Caliph Uthman burned all competing manuscripts after Muhammad\'s death. The Hafs and Warsh transmissions used today differ in thousands of places. And companion Ibn Masud rejected Uthman\'s Quran entirely. Which version is perfectly preserved?','Say the Quran does have errors','Change the subject to the Bible'],
   correct:1,
   explain:'The facts: (1) Muhammad died before the Quran was compiled into one book. (2) Uthman compiled one version and burned alternatives. (3) Ibn Masud, Muhammad\'s own companion, had a different version (without Surahs 1, 113, 114). (4) Hafs and Warsh differ significantly. These are from Islamic sources themselves.',
   scripture:"Sahih Bukhari 6:61:509 — the collection process is described. Caliph Uthman ordered competing manuscripts burned."},

  // ── ADVANCE: MUHAMMAD ──
  {id:'a7',cat:'advance',type:'advance',subtype:'mcq',
   q:'What did Muhammad say about his own salvation in Sahih Bukhari 5:58:266?',
   options:['"I am guaranteed paradise as the final prophet"','"By Allah, though I am the Apostle of Allah, yet I do not know what Allah will do to me"','"Allah has assured me of paradise"','"Only my family will be saved with certainty"'],
   correct:1,
   explain:'Muhammad himself expressed uncertainty about his own salvation. This is recorded in Sahih Bukhari — the most authoritative Hadith collection. By contrast, Jesus said "Whoever believes in the Son has eternal life" (John 3:36 — present tense) and "I give them eternal life, and they shall never perish" (John 10:28).',
   scripture:"John 10:28 — 'I give them eternal life, and they shall never perish; no one will snatch them out of my hand.'"},
  {id:'a8',cat:'advance',type:'advance',subtype:'mcq',
   q:'What did Muhammad\'s initial reaction to the first revelation reveal, according to Sahih Bukhari 1:1:3?',
   options:['He was filled with immediate peace and joy','He was afraid he was being attacked by a demon or going mad, and needed his wife\'s reassurance and her Christian cousin\'s interpretation','He immediately knew it was from God','He fainted and saw a vision of paradise'],
   correct:1,
   explain:'Muhammad\'s own account says he was terrified, thought he was possessed, and ran home shaking. His wife Khadijah consoled him and took him to her Christian cousin Waraqah ibn Nawfal, who interpreted the experience as divine revelation. This subjective, private, unwitnessed event forms the entire basis for the Islamic revelation claim.',
   scripture:"By contrast, Jesus's resurrection was public, witnessed by 500+ people (1 Cor 15:6), and confirmed by hostile witnesses who never denied the empty tomb."},
  {id:'a9',cat:'advance',type:'advance',subtype:'flash',
   front:'What are the Satanic Verses and why are they historically significant?',
   back:'Early Islamic sources (Ibn Ishaq, Al-Tabari) record Muhammad temporarily recited verses praising Meccan goddesses (Al-Lat, Al-Uzza, Manat), believing them to be from God — before Gabriel corrected him. If Muhammad could be deceived by Satan into reciting false revelation, how can we be certain the entire Quran contains no other Satanically-inspired content?',
   scripture:"The referenced event is alluded to in Surah 22:52 — 'We did not send before you any messenger or prophet except that when he spoke [or recited], Satan threw into it [some misunderstanding].'"},
  {id:'a10',cat:'advance',type:'advance',subtype:'mcq',
   q:'The Quran limits Muslim men to four wives (Surah 4:3). How many wives did Muhammad have simultaneously?',
   options:['Exactly four, as commanded','Two','At least nine — justified by a special divine exemption for himself (Surah 33:50)','He only ever had one wife'],
   correct:2,
   explain:'Muhammad had at least 9-11 wives simultaneously, receiving a special divine dispensation in Surah 33:50 exempting him from his own four-wife rule. This raises the question: how do we distinguish between genuine divine revelation and personally convenient revelation? Biblical prophets who fell into moral failure were explicitly condemned by Scripture (David — 2 Samuel 12).',
   scripture:"Surah 33:50 — 'O Prophet, indeed We have made lawful to you your wives... This is exclusively for you, not for the [other] believers.'"},

  // ── ISLAMIC THEOLOGY ──
  {id:'a11',cat:'islam',type:'advance',subtype:'mcq',
   q:'What is the major problem with Islamic soteriology (salvation theology) for everyday believers?',
   options:['There is no concept of heaven in Islam','Salvation depends on works outweighing sins plus Allah\'s inscrutable mercy — with no assurance. Even Muhammad was uncertain of his own salvation.','Islam guarantees paradise for everyone','You must perform Hajj twice to be saved'],
   correct:1,
   explain:'Islam has no doctrine of assurance. Salvation (Najat) depends on the balance of deeds plus Allah\'s will — but Allah\'s decision is hidden. The only guaranteed entrance to paradise is martyrdom in jihad. Compare: John 3:36 (present tense certainty), Romans 8:38-39 (nothing can separate us), 1 John 5:13 (written so you may KNOW you have eternal life).',
   scripture:"1 John 5:13 — 'I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life.'"},
  {id:'a12',cat:'islam',type:'advance',subtype:'flash',
   front:'What is the theological problem with Allah\'s complete unknowability (tanzih)?',
   back:'Islamic theology holds Allah is so transcendent his essence cannot be known. The 99 Names are attributes only. Personal relationship or union with Allah is considered impossible/blasphemous. Yet humans are created for relationship with their Maker. Islam structurally cannot meet this deepest human need. Jesus said "Whoever has seen me has seen the Father" (John 14:9) — God made fully knowable.',
   scripture:"John 17:3 — 'Now this is eternal life: that they know you, the only true God, and Jesus Christ, whom you have sent.'"},
  {id:'a13',cat:'islam',type:'advance',subtype:'mcq',
   q:'The Quran says "No bearer of burdens shall bear the burden of another" (Surah 6:164). What does this rule out?',
   options:['Human free will','Substitutionary atonement — making it impossible for Islam to explain how a just God can forgive sin without a penalty being paid','The existence of angels','The doctrine of resurrection'],
   correct:1,
   explain:'Surah 6:164 explicitly rules out the concept of one person bearing another\'s penalty — which eliminates substitutionary atonement. But the Quran also says Allah is Al-Adl (The Just). If He simply forgives sin without penalty being paid, where does His justice go? The cross answers this: God Himself paid the penalty, satisfying both justice and mercy simultaneously.',
   scripture:"Romans 3:25-26 — 'God presented Christ as a sacrifice of atonement... to demonstrate his justice... so as to be just and the one who justifies those who have faith in Jesus.'"},
  {id:'a14',cat:'islam',type:'advance',subtype:'mcq',
   q:'What does "Kalimatullah" mean in Islamic theology, and why is it an apologetic opportunity?',
   options:['The final prophet of Allah','Word of God — a title given only to Jesus in the Quran (Surah 4:171), shared with John 1:1','The seal of the prophets','A name for the Quran'],
   correct:1,
   explain:'Kalimatullah (Word of God) is a title given exclusively to Jesus in the Quran — no other prophet receives this. Combined with "a Spirit from Him" (Surah 4:171), Islam\'s own scripture gives Jesus uniquely elevated status. The apologetic opportunity: "The Quran calls Jesus the Word of God — and John 1:1 says the Word was God. Muslims already honour a version of Jesus. Have you read what Jesus Himself said about who He was?"',
   scripture:"John 1:1 — 'In the beginning was the Word, and the Word was with God, and the Word was God.' Surah 4:171 — Jesus is 'His Word which He conveyed to Mary and a spirit from Him.'"},

  // ── KEY VERSES ──
  {id:'v1',cat:'bible',type:'defend',subtype:'fill',
   q:'Complete: "For by ___ you have been saved, through faith — and this is not from yourselves, it is the gift of God." (Ephesians 2:8)',
   answer:'grace',keywords:['grace'],
   explain:'Ephesians 2:8 is the cornerstone of the gospel: salvation is entirely God\'s gift through faith — not earned by works. This is the fundamental difference between Christianity and Islam: not how hard you try, but what God has done.',
   scripture:"Ephesians 2:8-9 — 'not by works, so that no one can boast.'"},
  {id:'v2',cat:'jesus',type:'defend',subtype:'fill',
   q:'Complete: "Before Abraham was born, ___ ___." (John 8:58 — Jesus using the divine name)',
   answer:'I am',keywords:['i am','iam'],
   explain:'"I AM" (Greek: ego eimi) is the divine covenant name — exactly what God said to Moses in Exodus 3:14. The crowd\'s response (picking up stones for blasphemy) proves they understood Jesus was claiming divinity, not merely seniority to Abraham.',
   scripture:"Exodus 3:14 — God told Moses 'I AM WHO I AM.' Jesus used the same name of Himself."},
  {id:'v3',cat:'bible',type:'defend',subtype:'flash',
   front:'What is the difference between Islamic "works + mercy" salvation and the Christian gospel?',
   back:'Islam: salvation = good deeds outweigh bad deeds + Allah\'s unknowable mercy. No assurance. Even Muhammad was uncertain. Christianity: Christ\'s righteousness credited to believers through faith. God\'s justice satisfied at the cross. Present-tense assurance: "You may KNOW that you have eternal life" (1 John 5:13). The difference is a scale vs. a Saviour.',
   scripture:"Romans 8:38-39 — 'Nothing can separate us from the love of God that is in Christ Jesus our Lord.'"},
  {id:'v4',cat:'jesus',type:'defend',subtype:'mcq',
   q:'Isaiah 53 — written approximately 700 years before Jesus — says the Servant would be "pierced for our transgressions." What is the apologetic significance of this?',
   options:['It proves Isaiah was a Christian','It is one of over 300 specific Messianic prophecies fulfilled by Jesus — the mathematical probability of accidental fulfilment is statistically impossible','It shows Muhammad was prophesied','It is only metaphorical and applies to Israel'],
   correct:1,
   explain:'Isaiah 53 is one of the most specific Messianic prophecies in Scripture — describing piercing, crushing, bearing others\' iniquity, being buried with the rich (Joseph\'s tomb), and seeing his offspring after suffering. Written ~700 BC, it describes the crucifixion with extraordinary precision. The entire chapter is one of the most powerful evidences for Jesus being the fulfilment of Scripture.',
   scripture:"Isaiah 53:5 — 'He was pierced for our transgressions, he was crushed for our iniquities... by his wounds we are healed.'"},
  {id:'v5',cat:'islam',type:'advance',subtype:'mcq',
   q:'What are the 5 Pillars of Islam in the correct order?',
   options:['Prayer, Fasting, Pilgrimage, Zakat, Shahada','Shahada, Salat, Zakat, Sawm, Hajj','Shahada, Hajj, Fasting, Prayer, Giving','Quran, Prayer, Fasting, Pilgrimage, Jihad'],
   correct:1,
   explain:'The 5 Pillars: (1) Shahada — declaration of faith, (2) Salat — five daily prayers, (3) Zakat — almsgiving 2.5%, (4) Sawm — Ramadan fasting, (5) Hajj — pilgrimage to Mecca. Knowledge of Islamic practice is essential for respectful and effective dialogue.',
   scripture:"Understanding what Muslims believe and practise is the foundation of effective, respectful apologetics."},
  {id:'v6',cat:'islam',type:'advance',subtype:'mcq',
   q:'What does "Tawhid" mean in Islamic theology?',
   options:['The five daily prayers','The absolute, indivisible oneness of God — the central doctrine of Islam','The Islamic concept of paradise','The collection of Muhammad\'s sayings'],
   correct:1,
   explain:'Tawhid (from the Arabic root wahida — to be one) is the absolute monotheism at the heart of Islamic theology. Associating anything with Allah (Shirk) is the one unforgivable sin (Surah 4:48). Understanding Tawhid is essential for explaining why Muslims find the Trinity problematic — and for lovingly explaining what the Trinity actually teaches.',
   scripture:"The best bridge: Deuteronomy 6:4 — 'The LORD our God, the LORD is one.' Christians are also strict monotheists."},
  {id:'v7',cat:'history',type:'advance',subtype:'mcq',
   q:'What is the Dhimmi system and why is it apologetically relevant?',
   options:['The Islamic pilgrimage system','The protected but inferior legal status of Jews and Christians under Islamic rule — involving the jizya tax, restrictions on building churches, and legal disadvantages','The Islamic educational system','The system of Islamic inheritance law'],
   correct:1,
   explain:'The Dhimmi system (based on Surah 9:29) gave People of the Book protected but second-class status under Islamic governance: paying the jizya tax while being "subdued," restrictions on building churches, and disadvantages in legal proceedings. This contrasts with Galatians 3:28 — "there is neither Jew nor Gentile... you are all one in Christ Jesus."',
   scripture:"Galatians 3:28 — 'There is neither Jew nor Gentile... for you are all one in Christ Jesus.'"},
  {id:'v8',cat:'advance',type:'advance',subtype:'scenario',
   claim:'"Muhammad is the greatest moral example — the perfect pattern for all people in all times."',
   q:'What is the most loving and precise apologetic challenge?',
   options:['Agree that Muhammad was a good man','The title "perfect example for all times and cultures" requires a standard that transcends history. Muhammad\'s marriage to a 9-year-old (Bukhari 5:58:234), execution of critics, and special exceptions to his own rules raise serious questions. By contrast, Jesus\'s standard of love, purity, and self-sacrifice has never been improved upon.','Never say anything negative about Muhammad','Change the subject'],
   correct:1,
   explain:'We raise these challenges respectfully, not hatefully. The key is the claim of universal, timeless moral perfection. We believe all people — including Muhammad — fall short of God\'s perfect standard. That is why we need a Saviour (Christ) rather than merely an example. Jesus\'s life, death, and resurrection demonstrate a love and holiness that is genuinely timeless.',
   scripture:"Matthew 5:44 — 'Love your enemies.' John 15:13 — 'Greater love has no one than this: to lay down one\'s life for one\'s friends.' Jesus did both."},
  {id:'v9',cat:'bible',type:'defend',subtype:'mcq',
   q:'What is the best response to "You only believe because you were born into it"?',
   options:['That is probably true','This commits the genetic fallacy — the origin of a belief doesn\'t determine its truth. Millions of Christians are converts from Islam, atheism, and other backgrounds. The question is not where a belief originated but whether it is true. And by the same logic, the person asking was born into Islam.','Admit that faith is just cultural','Say you have always been a Christian'],
   correct:1,
   explain:'The genetic fallacy is a logical error that judges a belief by its origin rather than its truth. The same argument invalidates the Muslim\'s own faith if they were born into Islam. The invitation is to examine the evidence: the historical resurrection, the manuscript reliability of Scripture, and the claims of Christ on their merits.',
   scripture:"Acts 17:11 — The Bereans 'examined the Scriptures every day to see if what Paul said was true.' Examine the evidence — wherever you were born."},
  {id:'v10',cat:'jesus',type:'defend',subtype:'flash',
   front:'What does Colossians 2:9 say — and why is it decisive for Christ\'s deity?',
   back:'"For in Christ all the fullness of the Deity lives in bodily form." Paul says the ENTIRE fullness of divinity (theotes — the divine essence itself, not just divine qualities) dwells in Jesus. This is not partial divinity or divine appointment — it is the complete divine essence in bodily form. Written ~62 AD, 263 years before Nicaea.',
   scripture:"Colossians 2:9 — 'all the fullness of the Deity lives in bodily form.' Written by Paul, not invented at Nicaea."},
];

export const TRAINING_LEVELS = [
  {xp: 0, title: 'Initiate'},
  {xp: 100, title: 'Recruit'},
  {xp: 250, title: 'Soldier'},
  {xp: 500, title: 'Defender'},
  {xp: 800, title: 'Champion'},
  {xp: 1200, title: 'Apologist'},
  {xp: 1800, title: 'Scholar'},
  {xp: 2500, title: 'Master'},
];

// ─────────────────────────────────────────────
// COMPLETE APOLOGETICS REFERENCE LIBRARY
// Source: FrontlinesFaith Complete Apologetics Reference (research notes)
// ─────────────────────────────────────────────

export interface ReferenceEntry {
  ref?: string;   // citation, e.g. "Surah 86.6-7", "Bukhari 2419", scripture ref
  label?: string; // optional short heading for the entry
  text: string;   // the fact / explanation
}

export interface ReferenceSubsection {
  heading?: string;
  entries: ReferenceEntry[];
}

export interface ReferenceSection {
  id: string;
  num: number;
  title: string;
  desc?: string;
  // 'advance' = challenging Islamic claims, 'defend' = defending the Christian faith
  side: "advance" | "defend";
  subsections: ReferenceSubsection[];
}

export const REFERENCE_DATA: ReferenceSection[] = [
  {
    id: "quran-errors",
    num: 1,
    title: "Quran Errors",
    desc: "Factual errors documented within the Quran, with explanations of why they constitute errors.",
    side: "advance",
    subsections: [
      {
        entries: [
          { ref: "Surah 86.6-7", text: "Semen comes from between the ribs & backbone. This is incorrect anatomy, copied from ancient Greeks (i.e., from Plato & Hippocrates)." },
          { ref: "Surah 23.14", text: "Sperm made into a clot of blood, then a lump (fetus), then bones, then clothed with flesh. Sperm does not become a clot then a lump; flesh & bones form simultaneously (not sequentially)." },
          { ref: "Surah 25.53", text: "There is an impassible barrier between fresh & salt water. Fresh & salt water mix in estuaries." },
          { ref: "Surah 9.30 & Bukhari 4581", text: "Jews worship Ezra as the Son of Allah. Jews never believed this." },
          { ref: "Surah 66.12 & 19.28", text: "Mary (Mother of Jesus) is called daughter of Imran & sister of Aaron. Confuses her with Miriam sister of Moses, who existed >1000 years earlier." },
          { ref: "Surah 12.20-21", text: "Joseph in ancient Egypt was sold for a few Dirhams. No coined currency in ancient Egypt." },
          { ref: "Surah 20.71", text: "Pharaoh threatened to crucify Moses. Crucifixion didn't exist in ancient Egypt." },
          { ref: "Surah 34.10-11", text: "David makes chainmail (~1000BC). Chainmail didn't exist until 500BC." },
          { ref: "Surah 18.96-97", text: "David built a giant metal wall between two mountains to deter Gog/Magog. No evidence of this giant metal wall." },
          { ref: "Surah 71.19, 20.53, 36.38 & Sahih Muslim 758", text: "The earth is flat like a carpet, sun has a stopping point & Allah descends every night then ascends at day. Muhammad thought the earth was flat." },
          { ref: "Surah 4.11-12", text: "Inheritance law totals 1.125 shares (2/3 for daughter + 1/6 for each parent + 1/8 for wife). Mathematic error; Companions invented awl rule to fix this." },
          { ref: "Surah 4.11", text: "Inheritance law in Arabic says 'more than 2' daughters inherit 2/3. However, it means to say '2 or more' daughters. This leaves no inheritance rule for exactly 2 daughters. Quran.com tries to cover this up in the English. Linguistic error." },
          { ref: "Surah 2.125-126 & 14.35", text: "Mecca described as a secure city & centre of worship built by Abraham. No evidence of Mecca before 5th century." },
          { ref: "Surah 53.1 & Bukhari 4864", text: "Muhammad split the moon. Provably false; no witnesses, no cosmological evidence." },
          { ref: "Surah 41.10-12", text: "Stars were made after earth. Wrong." },
          { ref: "Surah 5.116", text: "Quran says the Trinity is Allah, Jesus and Mary. Wrong. No Christians believe this. Muslims appeal to Collyridians, but they were a tiny heretical group, who died out 200 years before Muhammad." },
          { ref: "Surah 3.68 & 7.143", text: "Abraham & Moses were Muslim. Wrong; they believed in altar sacrifice, priesthood, eternal Sabbath/Law, Holy Spirit, that God enters creation, and called God 'Father'." },
          { ref: "Surah 61.6 & 61.14", text: "Jesus was Muslim, foretold Muhammad & the disciples were Muslim. Wrong; Jesus called Himself the only begotten Son of God; no evidence He foretold of Muhammad; no early Christian groups were compatible with Islam." },
        ],
      },
    ],
  },
  {
    id: "quran-contradictions",
    num: 2,
    title: "Quran Contradictions",
    desc: "Internal contradictions within the Quran — where one verse directly contradicts another.",
    side: "advance",
    subsections: [
      {
        entries: [
          { text: "Surah 4.48: Allah does not forgive Shirk — Surah 39.53: Allah forgives all sin." },
          { text: "Surah 6.51: Intercession is impermissible — Surah 20.109 & Sunan Majah 4308: intercession is allowed." },
          { text: "Surah 2.48: no soul bears the burden of another — Surah 16.25: false teachers bear the burden of those they mislead; Sahih Muslim 2767: Christians & Jews bear the sins of Muslims." },
          { text: "Surah 2.256: no compulsion in religion — Surah 9.29-30: fight those who do not adopt Islam & who say Allah has a Son; Nasai 4059: kill those who leave Islam." },
          { text: "Surah 6.103 & 42.11: Allah cannot be seen — Surah 75.23 & Bukhari 7439: Allah will be seen & 'recognised' by his shin." },
          { text: "Surah 4.176: Inheritance law (one sister gets 1/3, two sisters get 2/3) — Surah 4.12: inheritance law (one sister gets 1/6, two sisters get 1/3)." },
          { text: "Surah 11.1 & 16.89: the Quran is a clear & detailed explanation of all things — Surah 3.7: the Quran has un-specific verses & requires Tafsir/Hadith." },
        ],
      },
    ],
  },
  {
    id: "islamic-dilemma",
    num: 3,
    title: "The Islamic Dilemma",
    desc: "The Quran explicitly confirms Torah / Gospel authority 22 times.",
    side: "advance",
    subsections: [
      {
        heading: "The Quran Explicitly Confirms Torah / Gospel Authority",
        entries: [
          { ref: "2.51", text: "Torah is the Criterion (Furqan)." },
          { ref: "3.3", text: "Confirms Torah / Gospel are divine revelation." },
          { ref: "4.136", text: "Believe in Allah, Muhammad, Quran AND the prior Scripture." },
          { ref: "5.43", text: "Torah is the judgement of Allah." },
          { ref: "5.46", text: "Confirms the Torah/Gospel are an authority." },
          { ref: "5.47", text: "Judge by the Gospel." },
          { ref: "5.48", text: "Quran 'guards' the Torah / Gospel; Allah willed the differences." },
          { ref: "5.66", text: "Uphold Torah and Gospel." },
          { ref: "5.68", text: "Uphold Torah and Gospel." },
          { ref: "29.46", text: "Confirms the Books revealed to Jews / Christians." },
        ],
      },
      {
        heading: "Quran Confirms the Torah / Gospel is WITH THEM",
        entries: [
          { ref: "2.41", text: "Confirms what is WITH the people of the Book." },
          { ref: "2.91", text: "Confirms what is WITH the people of the Book." },
          { ref: "2.101", text: "Confirms what is WITH the people of the Book." },
          { ref: "2.113", text: "Christians & Jews both recite the Scripture." },
          { ref: "5.43", text: "They 'HAVE' the Torah and should judge by it." },
          { ref: "5.48", text: "Confirms the Scriptures IN THEIR HANDS (ma bayna yadayhi)." },
          { ref: "Tirmidhi 2653", text: "The Torah / Gospel are WITH THEM." },
        ],
      },
      {
        heading: "Quran Says to Validate It Using the Torah / Gospel",
        entries: [
          { ref: "7.157", text: "Validate Quran using Torah/Gospel WITH THEM." },
          { ref: "10.94", text: "Validate Quran by READING Torah/Gospel WITH THEM." },
        ],
      },
      {
        heading: "The Torah / Gospel Are Preserved",
        entries: [
          { ref: "2.85", text: "People of the Book MUST believe in the WHOLE Book, not just parts." },
          { ref: "2.121", text: "Their Book is recited with true recital, so is preserved. Ibn Kathir & Quran.com confirm this refers to Torah/Gospel." },
          { ref: "6.34", text: "Allah's revelations can't be altered." },
        ],
      },
      {
        heading: "Not a Single Verse Says the Torah or Gospel Are Textually Corrupt",
        entries: [
          { ref: "Ibn Kathir (5.43), Bukhari 6841", text: "Jew hid verse about stoning with his hand; no textual corruption." },
          { ref: "2.79", text: "Condemns those who write something and claim it's Scripture; never says Torah (2.80 quotes Talmud). Ibn Kathir confirms it's about a different book, not Torah." },
        ],
      },
    ],
  },
  {
    id: "quran-not-preserved",
    num: 4,
    title: "Quran Not Preserved",
    desc: "Evidence from Islamic primary sources that the Quran was not perfectly preserved.",
    side: "advance",
    subsections: [
      {
        entries: [
          { ref: "Bukhari 2419", text: "Muhammad gave 7 versions of the Quran; Companions (from same tribe with same dialect) fighting over different recitations." },
          { ref: "Bukhari 5038-39", text: "Muhammad & Companions forgot verses." },
          { ref: "Sahih Muslim 1050", text: "Companions lost 2 entire Surahs." },
          { ref: "Sahih Muslim 1691a", text: "Stoning verse lost, even though the Companions practiced & recited it after Muhammad's death." },
          { ref: "Muwafaqatu Al-Khubr Al-Khabr (Hasan)", text: "Surah Azhab lost >200 verses." },
          { ref: "Sahih Muslim 824a", text: "Companions rejected an additional verse introduced by the Syrians 'wa ma khalaqa'; this addition is present in the Quran today." },
          { ref: "Bukhari 4986 & Kitab al-masahif (p.23)", text: "Much of the Quran was lost at the battle of Yamama." },
          { ref: "Bukhari 4784", text: "Uthman sent Zaid to gather Quran manuscripts off the battlefield; he notes a verse from Surah Ahzab was found with just one dead man (rendering accuracy check impossible)." },
          { ref: "Bukhari 4987", text: "Syria & Iraq fighting over different recitations; so Uthman (and 4 scribes) re-wrote Quran & burnt all the manuscripts (rendering accuracy check impossible)." },
          { ref: "Bukhari 4999", text: "Ibn Masud & Ubayy were Muhammad's 2 best reciters; none of the top 4 reciters were at Uthman's council." },
          { ref: "Bukhari 5005", text: "Ubayy rejected Uthman's Quran, as it omitted some of what Muhammad recited. Ubayy's had 116 Surahs (+2)." },
          { ref: "Tirmidhi 3104", text: "Ibn Masud rejected Uthman's Quran, ordering his followers to hide his version. Masud's had 111 Surahs (-3), different legal rulings & Surah order. Masud's persisted for >100 years as the dominant reading in Kufa." },
          { ref: "Surah 2.106 & 16.101", text: "Abrogation doesn't work as an excuse, as it requires a verse to be replaced, not simply lost. Also makes no sense for Allah to arbitrarily abrogate verses, only during Muhammad's 20 years as a prophet — it's ad-hoc & contradicts Allah's omniscience." },
          { ref: "Sources", text: "1. Anthony S. Two lost Surahs of the Quran. 2019. | 2. Harvey R. The Legal Epistemology of Qur'anic Variants: The Readings of Ibn Mas'ud. 2017." },
        ],
      },
    ],
  },
  {
    id: "quran-reading-variants",
    num: 5,
    title: "Quran Reading Variants",
    desc: "30 permissible readings; >30,000 differences (Van Der Walt, A. Unveiling Doubts: Critical Analysis of the Qur'an's Preserved Text. 2023).",
    side: "advance",
    subsections: [
      {
        heading: "Examples of Quran Reading Variants",
        entries: [
          { ref: "Surah 37.12", text: "Hafs ('Allah wonders...') vs. Khalaf ('Muhammad wonders...'). Contradiction (noted by Qurtubi)." },
          { ref: "Surah 11.81", text: "Hafs (Lut leaves his wife) vs. al-Bazzi (Lut brings his wife). Contradiction (noted by Ibn Kathir & Al-Jalalayn)." },
          { ref: "Surah 2.184", text: "Hafs (missed fast = feed 1 poor person) vs. Warsh (missed fast = feed multiple poor people). Contradiction." },
          { ref: "Surah 57.24", text: "Hafs vs Warsh (the word 'He is', missing from Warsh). Entire missing word." },
          { ref: "Surah 3.146", text: "Hafs (many prophets fought) vs. Warsh (many prophets were killed). Different meaning (noted by Al-Jalalayn)." },
          { ref: "Surah 10.16", text: "Hafs (Allah would NOT have made it known) vs. al-Bazzi (Allah would have made it known). Contradiction (noted by Al-Jalalayn)." },
        ],
      },
      {
        heading: "Poor Manuscript Evidence",
        entries: [
          { ref: "Birmingham (570-620AD)", text: "Only 4 pages, exclusively Christian apocryphal stories; contains non-canonical variants." },
          { ref: "Sana'a lower layer (~650AD)", text: "Significant non-canonical variants." },
          { ref: "Sana'a upper layer (~700AD)", text: "Written over the lower layer; 12 non-canonical variants." },
          { ref: "Codex Mashad (~800AD)", text: "Significant variation vs Uthmanic text." },
          { ref: "Codex Parisino Petropolitanus (~800AD)", text: "Only 45% of the Quran and contains non-canonical variants." },
          { ref: "Topkapi (~950AD)", text: ">2200 differences, amends, scribal errors, and contains non-canonical variants." },
          { ref: "Samarkand (775-995AD)", text: "Late dating, has non-canonical variants, edits and later additions." },
        ],
      },
    ],
  },
  {
    id: "history-of-quran",
    num: 6,
    title: "Brief History of the Quran",
    desc: "Showing human fingerprints all over its canonisation.",
    side: "advance",
    subsections: [
      {
        entries: [
          { ref: "610-630AD", text: "Muhammad reveals 7 recitations; Companions not tracking what was abrogated; verses forgotten; fighting over recitations." },
          { ref: "630-650AD", text: "Battle of Yamama; lost Surahs/verses; Muslims fighting over Quran variants; some added verses." },
          { ref: "650AD", text: "Uthman standardises the Quran & burns all variants; Ubayy and Masud resist." },
          { ref: "650-750AD", text: "Masud's Qurans persist in Kufa for 100 years as the dominant reading." },
          { ref: "685AD", text: "Abd al-Malik & al-Hajjaj re-standardise the Quran, violently enforce Uthman's version; suppress Ubayy and Masud's versions; add vowels to the text; burn all variants." },
          { ref: "900AD", text: "Ibn Mujahid re-standardised Quran, chose 7 readings (Qiraat) & executed those with non-orthodox commentary (Tafsir)." },
          { ref: "1400AD", text: "Qiraat count expanded to 10." },
          { ref: "1600AD", text: "Qiraat count expanded to 14." },
          { ref: "1924AD", text: "Egyptian State standardised Hafs variant (favoured by the Ottomans); the dominant reading today." },
        ],
      },
    ],
  },
  {
    id: "islam-lacks-continuity",
    num: 7,
    title: "Islam Lacks Continuity With the Abrahamic Faith",
    side: "advance",
    subsections: [
      {
        entries: [
          { ref: "Exodus 3.14; Deut 6.4; Deut 32.6", text: "I AM (Exodus 3.14); YHWH (Deuteronomy 6.4); Father (Deuteronomy 32.6) — these names of God are all missing from Allah's 99 eternal names." },
          { ref: "Deut 4.2; Num 15.15; Ps 111.7-8", text: "God's Old Covenant is eternal, including for Sojourners — Islam simply abrogated this, leaving the Old Covenant unresolved." },
          { ref: "Lev 16.31; Lev 24.8; Ex 31.16", text: "Sabbath is an eternal statute — Islam simply abrogated this, leaving the Sabbath unresolved." },
          { ref: "Lev 4.25; Lev 16.32-34; Lev 17.11", text: "Sacrificial altar, eternal priesthood, blood atonement — Islam totally ignores altar & priesthood." },
          { ref: "Gen 3.8; 18.22; 32.28; Ex 3.4; 24.10; 33.11", text: "God manifests in creation as Theophanies — Islam rejects this." },
          { ref: "Gen 1.2; Isa 48.16-17; Isa 63.11; Ezek 2", text: "The Holy Spirit — Islam rejects that God has a Spirit." },
          { ref: "Gen 17.19; Deut 7.6; Deut 18.15; Isa 41.8", text: "Prophets must be Israelite — Muhammad (an Ishmaelite) breaks this rule." },
          { ref: "Historical inconsistencies", text: "Mecca, the Kaaba, the Islamic 'Tawrah' & 'Injil', any group compatible with Islam pre-Muhammad lack any historical evidence." },
          { ref: "Deut 13.1-4", text: "Reject any Prophet that tells you to follow other gods or commandments — Christians & Jews are obligated to reject Islam." },
        ],
      },
    ],
  },
  {
    id: "debunking-scientific-miracles",
    num: 8,
    title: "Debunking Quran Scientific Miracles",
    desc: "Arabia was a direct neighbour of Greeks & Egyptians for centuries, long enough for ideas to cross-pollinate. They engaged in trade & Muhammad himself had direct contact with them.",
    side: "advance",
    subsections: [
      {
        entries: [
          { ref: "Surah 10.5", text: "Moon reflects light — already known by the Greeks from 500BC." },
          { ref: "Surah 21.30", text: "The Big Bang — verse simply says heavens & earth were once joined then separated; this isn't the big bang." },
          { ref: "Surah 21.30", text: "All living things made from water — this was a very common idea among ancient agricultural civilisations." },
          { ref: "Surah 21.32", text: "The earth's atmosphere — verse simply says the sky is a protective ceiling, not an atmosphere; earth having a roof/dome was a very common ancient belief." },
          { ref: "Surah 86.2-3", text: "Pulsar star — verse simply calls a 'star' a 'night-comer' (per every translation, except Quran.com)." },
          { ref: "Surah 57.25", text: "Iron came from space — all elements came from space; Egyptians, Indians, Greeks knew Iron came from space (meteorites)." },
          { ref: "Surah 39.21", text: "The water cycle — verse simply says Allah sends rain, makes springs, produces crops. This is a simple observation. Greeks, Indians & Egyptians had a far superior understanding of the water cycle." },
          { ref: "Surah 24.43", text: "Cloud formation — verse simply says Allah drives clouds, brings them together, makes them like mountains, makes them rain/hail. Again, just a simple observation." },
          { ref: "Surah 23.12-14", text: "Embryology — verse says sperm lodges in a firm place, forms a clot, lump, bones, then clothed with flesh. This is vague & wrong. Sperm fertilises the egg, forms a zygote (group of cells), travels to the uterus, bones & flesh then form simultaneously (not sequentially)." },
          { ref: "Surah 36.40", text: "The Sun and Moon orbit — ancients already knew about orbits. Quran only mentions the Sun & Moon orbiting, suggesting geocentric model; it claims the Sun cannot 'overtake' the moon, suggesting geocentric model. Tafsir from Qurtubi & Tabari interpret geocentric model." },
          { ref: "Surah 25.53", text: "Salt & fresh water cannot mix — wrong, they mix in estuaries." },
          { ref: "Surah 51.47", text: "Expanding universe — verse simply says Allah actively 'makes vast' or 'expands' heavens. Isaiah 40.22 also says God actively 'stretches' & 'spreads' out heavens (active verb). Very common ancient belief." },
        ],
      },
    ],
  },
  {
    id: "debunking-prophecies",
    num: 9,
    title: "Debunking Muhammad's Prophecies",
    side: "advance",
    subsections: [
      {
        heading: "1. Riyad as-Salihin 60: Tall Buildings",
        entries: [
          { text: "Barefoot, naked, poor shepherds will compete in constructing tall buildings." },
          { text: "Post-hoc (tall buildings already existed in 7th century); no timeframe given; non-specific (doesn't quantify 'tall'); fails all specific criteria (barefoot, naked, bedouin, shepherds); unimpressive (tall buildings over infinite timeframe highly probable)." },
        ],
      },
      {
        heading: "2. Quran 30.2-4: Romans Victory",
        entries: [
          { text: "Romans have been defeated in the nearest land. But after their defeat, they will be victorious within a few years [3-9 years]." },
          { text: "Post-hoc — this verse was revealed after the Roman victory (Tirmidhi 3192). Timeframe failed — Romans lost to Persians in 613AD & won in 624AD on Day of Badr (Tirmidhi 3192) = 11 years. Non-specific — victory conditions & location not defined. Unimpressive — Romans retained 70% of their military after their defeat, the Persians overextended, a Roman victory was highly probable. Military predictions do not necessitate Divine inspiration." },
        ],
      },
      {
        heading: "3. Surah 48.27",
        entries: [
          { text: "Muhammad would enter Mecca peacefully — he 'foretold' this after a peace treaty was already made (ibn Kathir Tafsir); not impressive." },
        ],
      },
      {
        heading: "4. Surah 111.1-3",
        entries: [
          { text: "Muhammad predicted his uncle would never accept Islam — his uncle was a pagan religious zealot (ibn Kathir Tafsir); so this is a common sense statement." },
        ],
      },
      {
        heading: "5. Various Vague End Times Prophecies",
        entries: [
          { text: "Increased homosexuality, women working, usury, obesity etc — non-specific, no timeframe or location given. This is just a generic condemnation of behaviours that Muslims already condemned in the 7th century." },
        ],
      },
      {
        heading: "6. Bukhari 3618",
        entries: [
          { text: "Muhammad predicted when the Caesar of his time (Heraclius) died, there would be no more Caesars — wrong; Caesars continued for 800 years after this." },
        ],
      },
      {
        heading: "7. Tirmidhi 2239",
        entries: [
          { text: "Muhammad predicted Constantinople would fall at the coming of the last hour — wrong; Constantinople fell 600 years ago and still no last hour." },
        ],
      },
      {
        heading: "8. Sahih Muslim 2952",
        entries: [
          { text: "Muhammad predicted the last hour would come before a young boy in his presence would grow old — wrong; he died 1400 years ago, and still no last hour." },
        ],
      },
      {
        heading: "9. Bukhari 3176",
        entries: [
          { text: "Signs of the last hour = Muhammad's death; Conquest of Jerusalem; Plague that afflicts sheep; Wealth increase; Truce with Byzantines — this all happened >1000 years ago & Byzantines don't even exist today; yet, still no last hour." },
        ],
      },
    ],
  },
  {
    id: "refuting-biblical-prophecies",
    num: 10,
    title: "Refuting 'Biblical Prophecies' of Muhammad",
    side: "defend",
    subsections: [
      {
        entries: [
          { ref: "Deuteronomy 18.18", text: "The Prophet foretold must be from AMONG the Israelites; from among their brothers (Deuteronomy 17.15 defines brother as fellow Israelite); seen God face to face (like Moses in Exodus 24.10 & 33.11) — Muhammad fails." },
          { ref: "Isaiah 42", text: "The servant is of Israel (Isaiah 41); is gentle; is given as a covenant; will have God's Spirit upon Him. Sela & Kedar will rejoice because they're homeland to the Ishmaelites, who were cut off from Israel — Muhammad fails." },
          { ref: "Isaiah 29.12", text: "'Cannot read' refers to Spiritual blindness as a punishment from God; this is not a good thing — nothing to do with a coming Prophet." },
          { ref: "Song of Songs 5.16", text: "This is a poem about Solomon and his lover; she calls him 'altogether lovely' which translates to 'machmadim', not Muhammad — coincidental phonetic similarity ≠ prophecy." },
          { ref: "Daniel 2.31-45", text: "Ottomans conquered the Byzantines (but Rome persisted as the Holy Roman empire); Ottomans fell (fail 'everlasting'), Ottomans are a human kingdom (fail 'cut by no human hand') — claiming this as a prophecy requires layers of eisegetic interpretation." },
          { ref: "John 14-15", text: "The Advocate is a Spirit; with us forever; abided in the 1st century Apostles; sent in the Name of Jesus; proceeds from the Father; is the Holy Spirit — Muhammad fails." },
        ],
      },
    ],
  },
  {
    id: "hadith-unreliable",
    num: 11,
    title: "Hadith Unreliable",
    desc: "Islam relies on Hadith for: the character of Muhammad & companions; compilation of Quran; prayer, fasting, Zakat, pilgrimage to Mecca, Shahada.",
    side: "advance",
    subsections: [
      {
        entries: [
          { text: "The vast majority were documented 220 years after Muhammad; first manuscripts not until 400-600 years after Muhammad." },
          { text: "~16000 hadith total; only ~200 are Mutuwatir (multiple chains of narration)." },
          { text: "Bukhari, Muslim, Tirmidhi, Dawud, Nasai all lived same time & general area — nothing preventing group bias." },
          { text: "Bukhari only commented on the reliability of 6% of narrators, with extremely brief one-line excerpts." },
          { text: "Narrator biographies were not completed until 1300-1400AD (>700 years after Muhammad)." },
          { text: "Most Sahih Isnad chains contain obscure narrators with very little biographical info." },
          { text: "Nothing prevents a 7th century person/group fabricating a narration → attaching it to chain(s) of 'reliable' narrators to fake credibility → disseminating it across the caliphate." },
          { text: "We know this happened, because Bukhari had to filter 600,000 fabrications down to just 7,000." },
          { text: "Yet Bukhari's method is circular & flawed (i.e., it presumes Isnad chains were recorded faithfully, which are the very thing in question)." },
          { text: "Furthermore, Isnad chains are verified by narrator biographies. Yet narrator biographies are verified by Isnad chains. So the system is a self-fulfilling circle." },
        ],
      },
      {
        heading: "Several Sahih Hadith Are Objectively Falsifiable, Invalidating the Isnad System",
        entries: [
          { ref: "Bukhari 3869 (Mutuwatir)", text: "Muhammad split and re-joined the moon." },
          { ref: "Bukhari 3849", text: "Monkeys stoning each other for adultery." },
          { ref: "Bukhari 278", text: "Moses had a scrotal hernia, a stone ran away with his clothes, he chased and beat the stone." },
          { ref: "Tirmidhi 3192 vs 3193", text: "Tirmidhi 3192 contradicts 3193 (was Surah 30.1-4 revealed before the Roman victory, or 11 years later, after the Roman victory?)." },
        ],
      },
    ],
  },
  {
    id: "muhammad-unreliable",
    num: 12,
    title: "Muhammad Unreliable",
    side: "advance",
    subsections: [
      {
        heading: "1. Bukhari 6982 — Muhammad's Claim to See Gabriel Was Unverified & Founded on a Lie",
        entries: [
          { text: "Event: something violated Muhammad in a cave → he ran in terror to Khadija & thought he was possessed → Waraqa (a blind Christian monk) convinced Muhammad it was Gabriel, who visited Moses → Waraqa died & Muhammad got suicidal → he only saw Gabriel when he tried to kill himself." },
          { text: "Problems: Waraqa never saw Gabriel (Muhammad's prophethood based on an unverified guess); Gabriel never visited Moses (Muhammad's prophethood based on a lie); Muhammad was suicidal & insane (discrediting his testimony)." },
        ],
      },
      {
        heading: "2. Surah 69.44-46",
        entries: [
          { text: "If Muhammad was a false Prophet, he would die from a cut aorta — Dawud 4512 & Bukhari 4428: he died from a cut aorta." },
        ],
      },
      {
        heading: "3. Tirmidhi 1939",
        entries: [
          { text: "Muhammad said lying is permissible to wives, during war and to keep peace (discrediting his testimony)." },
        ],
      },
      {
        heading: "4. Bukhari 7146",
        entries: [
          { text: "Muhammad permits breaking oaths (discrediting his testimony)." },
        ],
      },
      {
        heading: "5. Bukhari 3268 & 3175 & 5765",
        entries: [
          { text: "Magic was worked on Muhammad; imagined he was doing things he was not doing; used to think he'd had sex with his wives when he had not (insane, no grip on reality, discrediting his testimony)." },
        ],
      },
    ],
  },
  {
    id: "muhammad-motives",
    num: 13,
    title: "Muhammad's Alterior Motives",
    side: "advance",
    subsections: [
      {
        entries: [
          { ref: "Surah 8.1 & 8.41", text: "Muhammad gets 1/5 of all war loot." },
          { ref: "Dawud 2997", text: "Muhammad trades 7 slaves at a time." },
          { ref: "Sahih Muslim 1438", text: "Muhammad gets sex slaves." },
          { ref: "Surah 33.50", text: "Muhammad gets more wives than everyone else." },
          { ref: "Bukhari 5068", text: "Muhammad gets 9 wives, and could afford to house all 9." },
          { ref: "Nasa'i 3959", text: "Muhammad's wives are nagging him to stop having sex with his slave girl. So he reveals Surah 66.1, stating that Allah permitted it." },
          { ref: "Bukhari 4793", text: "Muhammad's dinner guests wouldn't leave. He was too shy to tell them. So he revealed Surah 33.53: 'do not enter the houses of the Prophet except when you are permitted...when you have eaten, disperse without seeking to remain for conversation...' (Note 'houses of the prophet' (plural) — showing he was wealthy.)" },
          { ref: "Multiple", text: "Muhammad was eating well: Muslim 2043 (dates); Al-Muhammadiyah 153 (chicken); Bukhari 5431 (sweets & honey); Nasai 265, Muslim 357, Bukhari 5404, Majah 493, Dawud 188, Majah 3311 (meat); Muslim 2008 (milk & honey); Bukhari 5404 & 5612 (milk); Bukhari 4793 (banquet of bread & meat)." },
          { ref: "Bukhari 7420", text: "Muhammad desired his adopted son's wife; Surah 33.4 — Muhammad ended adoption; Surah 33.37 — Muhammad married his adopted son's wife." },
        ],
      },
    ],
  },
  {
    id: "muhammad-character",
    num: 14,
    title: "Muhammad's Poor Character",
    side: "advance",
    subsections: [
      {
        entries: [
          { ref: "Sahih Muslim 1438a & Dawud 2155", text: "Sex slavery." },
          { ref: "Dawud 2995, 2997 & Sahih Ibn Habban (11/607)", text: "Killed Saffiyah's family, bought her for 7 slaves & raped her (she 'hated him' for killing her family)." },
          { ref: "Nasai 4621, Bukhari 987, Dawud 2997, Mishkat al-Masabih 3260", text: "Owned, bought, sold and beat slaves." },
          { ref: "Bukhari 2415, 2534, 2141", text: "Enforced slavery and canceled manumission." },
          { ref: "Nasai 3378, Bukhari 6130", text: "Had sex with Aisha at age 9, who was prepubescent." },
          { ref: "Sahih Muslim 1745b, Majah 2839", text: "Killed women and children in war." },
          { ref: "Sahih Muslim 1731, Bukhari 3167", text: "Imposed Islam or Jizya on foreign lands." },
          { ref: "Sahih Muslim 2922 & Tirmidhi 2236", text: "Commands to kill Jews until last hour." },
          { ref: "Surah 9.29-30, Sahih Muslim 1767a, 2167a", text: "Commands to kill Jews & Christians, and ongoing hostility." },
          { ref: "Bukhari 4122, Sahih Muslim 1738a, Majah 2541", text: "Massacred the Quraiza (after they surrendered), including young boys." },
          { ref: "Bukhari 304", text: "Says women have half the intelligence and religion as men, and Hell is full of women because of this." },
          { ref: "Surah 4.34, Dawud 2146, Bukhari 5825", text: "Endorsed beating wives." },
          { ref: "Bukhari 6042, Mishkat al-Masabih 3260", text: "Endorsed beating women." },
          { ref: "Nasai 3964", text: "Struck Asiah in the chest causing her great pain." },
          { ref: "Nasai 4064, Bukhari 6922 & 6878", text: "Enforced Apostasy law (kill those who leave Islam)." },
          { ref: "Sahih Muslim 2662c", text: "Teaches that Allah predestines unborn babies to hell." },
        ],
      },
    ],
  },
  {
    id: "quran-inimitability",
    num: 15,
    title: "Quran Inimitability",
    desc: "If the Quran's 'inimitability' is to be objectively proven, it must also be objectively falsifiable (hypothesis vs. null-hypothesis).",
    side: "advance",
    subsections: [
      {
        heading: "This requires a repeatable method, with pre-specified criteria",
        entries: [
          { text: "Formal definition of 'Quranic style'." },
          { text: "Metric(s) to measure 'similarity'." },
          { text: "Success threshold." },
          { text: "Unbiased judging (peer review)." },
          { text: "Simply stating 'it is linguistically inimitable' is not specific, not measurable and circular." },
        ],
      },
      {
        heading: "Using AI",
        entries: [
          { text: "ChatGPT (or any LLM) is insufficient; it is simply a data retrieval model. Without a pre-defined methodology & blinding, LLMs do not validate truth; they simply reproduce patterns in their training data. As a result, if a claim (such as Quranic inimitability) is disproportionately repeated in the data, it will bias that claim, regardless of truth." },
        ],
      },
    ],
  },
  {
    id: "refuting-trinity-polemics",
    num: 16,
    title: "Refuting Trinity Strawman Polemics",
    side: "defend",
    subsections: [
      {
        heading: "Define Trinity",
        entries: [
          { text: "God = One Divine Nature, subsisting in 3 Persons." },
          { text: "Co-equal in Nature, distinct in Person." },
          { text: "Person (who) ≠ Nature (what)." },
          { text: "Father ≠ Son ≠ Spirit (Persons distinct by relational origin)." },
          { text: "Divine nature = infinite → indivisible." },
          { text: "For comparison: Created natures = finite → instances divided in space-time." },
        ],
      },
      {
        heading: "Interlocutor Cannot Show Trinity Violates Laws of Logic",
        entries: [
          { text: "Identity: X is not X (in same respect)." },
          { text: "Non-contradiction: X is true and false (at same time & in same respect)." },
          { text: "Excluded middle: X is neither exclusively true nor false." },
          { text: "As such, their critique will be a personal incredulity fallacy ('I don't understand X, so X is false'), which isn't a logical argument." },
        ],
      },
      {
        heading: "Refuting Incarnation Strawman Polemics — Incarnation Involved No Loss or Deficiency",
        entries: [
          { text: "The Son (Person) has a Divine Nature." },
          { text: "He gained a distinct Human Nature." },
          { text: "The Divine Nature remained unchanged." },
          { text: "So the Incarnation involved no change or loss." },
        ],
      },
      {
        heading: "Mark 13.32 — Why Did Christ Not Know the Hour",
        entries: [
          { text: "Intellect is a faculty of nature, not person." },
          { text: "i.e., its operation can be limited by natural condition (e.g., sleep, ignorance, injury), while the Person remains unchanged." },
          { text: "The One Person of the Son has 2 natures, so 2 ways of knowing." },
          { text: "Any limitation implied by Mark 13:32 pertains to His human nature only." },
        ],
      },
    ],
  },
  {
    id: "trinity-in-bible",
    num: 17,
    title: "Trinity in the Bible",
    desc: "Hebrew does not have the 'royal we'.",
    side: "defend",
    subsections: [
      {
        heading: "Plurality",
        entries: [
          { ref: "Genesis 1.26", text: "'Let US make man in OUR image according to OUR likeness'." },
          { ref: "Genesis 3.22", text: "'Behold, the man has become like one of US...'" },
          { ref: "Genesis 11.7", text: "'Come, let US go down and confuse their language...'" },
          { ref: "Genesis 18", text: "3 men appeared to Abraham; all 3 called God." },
          { ref: "Genesis 19.24", text: "YHWH rained fire from YHWH out of Heaven." },
          { ref: "Daniel 7.14-27", text: "Son of Man called 'Most High'; approaches Ancient of Days; has eternal kingdom, worshiped by nations (Psalm 22.28: Kingdom is YHWH's; He rules the nations)." },
        ],
      },
      {
        heading: "Spirit",
        entries: [
          { ref: "Genesis 1.2", text: "'And the Spirit of God was hovering over the face of the waters.'" },
          { ref: "Psalm 51.11", text: "'Do not cast me away from Your presence, and do not take Your Holy Spirit from me.'" },
          { ref: "Psalm 139.7-8", text: "The Spirit of God is Omnipresent." },
          { ref: "Isaiah 63.10", text: "'But they rebelled and grieved His Holy Spirit; Therefore He turned Himself to become their enemy; He fought against them'." },
          { ref: "Ezekiel 3.24", text: "'Then the Spirit...He spoke to me and said: Go, shut yourself inside your house.'" },
          { ref: "Acts 5.3-4", text: "'But Peter said, Ananias, why has Satan filled your heart to lie to the Holy Spirit...You have not lied to men but to God.'" },
        ],
      },
      {
        heading: "The Word / Angel of the Lord",
        entries: [
          { ref: "Genesis 15.1-7", text: "The Word of YHWH appeared to Abraham saying 'I am YHWH'." },
          { ref: "Genesis 16.10-13", text: "Angel of the Lord is called God." },
          { ref: "Genesis 31.11-13", text: "The Angel of YHWH calls Himself 'God of Bethel' to whom Jacob anointed a pillar and made a vow to." },
          { ref: "Genesis 32.24-28", text: "Jacob wrestled with God (the Angel of YHWH). Hosea 12.3-4: 'He strove with the angel and prevailed...'" },
          { ref: "Genesis 48.15-16", text: "Angel of YHWH defined as the God of Abraham & Isaac." },
          { ref: "Zechariah 1.12", text: "'...Angel of the LORD said, O LORD of hosts, how long will you have no mercy on Jerusalem...'" },
        ],
      },
      {
        heading: "Trinity",
        entries: [
          { ref: "John 16.13-15", text: "Christ & the Spirit possess all things that the Father has." },
          { ref: "Matthew 28.19", text: "Baptize in One Singular Name, shared by Father, Son and Spirit." },
          { ref: "Isaiah 48.12-16", text: "'I am the first, I am also the last...So now Lord Yahweh has sent Me, and His Spirit.'" },
        ],
      },
      {
        heading: "The Son Incarnate",
        entries: [
          { ref: "Luke 10.22", text: "'All things have been handed over to me by my Father...'" },
          { ref: "Matthew 28.18", text: "'All authority in heaven and on earth has been given to me.'" },
          { ref: "John 5.19", text: "'For whatever the Father does He [the Son] does likewise'." },
          { ref: "John 5.23", text: "'so that all may honor the Son, just as they honor the Father'." },
          { ref: "Mark 14.62", text: "Jesus is the Son of Man coming with the clouds (Daniel 7)." },
        ],
      },
    ],
  },
  {
    id: "nt-preservation",
    num: 18,
    title: "Preservation of the New Testament",
    side: "defend",
    subsections: [
      {
        entries: [
          { text: "At least 11 manuscripts dated to 2nd century (List of New Testament papyri)." },
          { text: "Diatesseron harmonising all 4 Gospels (dated ~160AD)." },
          { text: "Thousands of early quotations, enough to reconstruct the entire corpus (Metzger B, Ehrman B. The Text of the New Testament. Fourth edition)." },
          { text: "From 1st-2nd century, these include Polycarp, Clement, Ignatius, Irenaeus, Theophilus of Antioch & Justin Martyr." },
          { text: "Analysis of early vs. medieval manuscripts, across traditions (Byzantine vs. Alexandrian) showed 92.6% textual stability, with only 0.1-0.2% of variants significantly impacting meaning (Heide M, et al. 2011)." },
          { text: "300,000 variants between manuscripts, almost all trivial (i.e., word order, spelling, grammar etc...) & do not impact meaning (Textual criticism of the New Testament)." },
        ],
      },
      {
        heading: "Corroborated by Early Non-Biblical Literature",
        entries: [
          { text: "Shepherd of Hermas, Didache, Epistle of Barnabas, Diatesseron, early patristics (i.e., Clement, Ignatius, Polycarp)." },
          { text: "Josephus, Tacitus, Suetonius, Pliny the Younger, Mara Bar Serapion (Top ten historical references to Jesus outside of the Bible)." },
        ],
      },
      {
        heading: "Authorship",
        entries: [
          { text: "Muratorian fragment (~160AD) names & identifies Gospel authors." },
          { text: "Papias-Irenaeus (100-170AD) name & identify Gospel authors." },
          { text: "All manuscripts with a front page contain the 4 traditional Gospel author names." },
          { text: "Unanimous early consensus on author identity — no evidence for notions of anonymity or alternative naming from 1st-3rd centuries." },
        ],
      },
    ],
  },
  {
    id: "messianic-prophecies",
    num: 19,
    title: "Specific Messianic Prophecies",
    side: "defend",
    subsections: [
      {
        heading: "1. Daniel 9.24-27",
        entries: [
          { text: "The Anointed One (Messiah) will be put to death, confirm a new Covenant & put an end to sacrifice offering." },
          { text: "The time between order to rebuild Jerusalem & Anointed One being put to death will be 7x7 and 62x7 = 483 years. Artaxerxes ordered Jerusalem to be rebuilt in 445BC (Nehemiah 2). 445BC + 483 years = 38AD. Hebrew years are 360 days = 31AD (Jesus' crucifixion date)." },
        ],
      },
      {
        heading: "2. Micah 5.2",
        entries: [
          { text: "The Ancient of Days, ruler of Israel will come out of Bethlehem." },
        ],
      },
      {
        heading: "3. Isaiah 7.14",
        entries: [
          { text: "The virgin will conceive a Son called 'God is with us'." },
        ],
      },
      {
        heading: "4. Isaiah 9.6",
        entries: [
          { text: "A child is born, a Son is given, he will be called Mighty God." },
        ],
      },
      {
        heading: "5. Isaiah 53",
        entries: [
          { text: "He was pierced for our transgressions, crushed for our iniquity, bore our sin, cut off from the living, by His wounds we are healed, He will prolong His days." },
        ],
      },
      {
        heading: "6. Psalm 22",
        entries: [
          { text: "'My God, my God, why have you forsaken Me'; they say 'let YHWH rescue Him'; 'they have pierced my hands and feet'; 'I count all my bones'; 'they divide my garments...for my clothing they cast lots' — exactly how the crucifixion played out." },
        ],
      },
      {
        heading: "7. Zechariah 9.9-10",
        entries: [
          { text: "King of Jerusalem will ride a donkey/colt." },
        ],
      },
      {
        heading: "8. Zechariah 12.1-10",
        entries: [
          { text: "God declares that Jerusalem will look upon Him, who they have pierced, and weep as they would over a firstborn." },
        ],
      },
    ],
  },
];

export type AcademyLesson = {
  id: string;
  sectionId: string;
  sectionTitle: string;
  side: ReferenceSection["side"];
  sourceType: "Quran" | "Hadith" | "Bible" | "History" | "Theology";
  title: string;
  claim: string;
  explanation: string;
  citation: string;
  reviewPrompt: string;
};

function getAcademySourceType(citation: string, sectionTitle: string): AcademyLesson["sourceType"] {
  if (/bukhari|muslim|hadith|tirmidhi|abu dawud/i.test(citation)) return "Hadith";
  if (/surah|quran/i.test(citation)) return "Quran";
  if (/bible|manuscript|gospel|testament/i.test(sectionTitle)) return "Bible";
  if (/history|historical|manuscript/i.test(sectionTitle)) return "History";
  return "Theology";
}

export const ACADEMY_LESSONS: AcademyLesson[] = REFERENCE_DATA.flatMap((section) =>
  section.subsections.flatMap((subsection, subsectionIndex) =>
    subsection.entries.map((entry, entryIndex) => {
      const citation = entry.ref ?? "Reference Library source";
      const title = entry.label ?? subsection.heading ?? section.title;
      return {
        id: `${section.id}-${subsectionIndex}-${entryIndex}`,
        sectionId: section.id,
        sectionTitle: section.title,
        side: section.side,
        sourceType: getAcademySourceType(citation, section.title),
        title,
        claim: entry.text,
        explanation: `Study the claim in context, verify the citation, and explain the evidence carefully before drawing a conclusion. This lesson comes directly from the ${section.title} reference collection.`,
        citation,
        reviewPrompt: `Can you state the claim, cite ${citation}, and explain why it matters without relying on a quotation out of context?`,
      };
    })
  )
);
