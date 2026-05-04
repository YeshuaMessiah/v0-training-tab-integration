// FrontlinesFaith App Data

export const VERSES = [
  { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.", ref: "Joshua 1:9" },
  { text: "Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have — but do this with gentleness and respect.", ref: "1 Peter 3:15" },
  { text: "In your hearts revere Christ as Lord. Always be prepared to give a defense...", ref: "1 Peter 3:15" },
  { text: "The word of our God stands forever.", ref: "Isaiah 40:8" },
  { text: "Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'", ref: "John 14:6" }
];

export const DAILY_TOPICS = [
  "The Trinity — Matthew 28:19 & 2 Corinthians 13:14",
  "The Deity of Christ — John 1:1 & Colossians 2:9",
  "Reliability of the Bible — Psalm 119:89",
  "The Crucifixion — 1 Corinthians 15:3-4",
  "Salvation by Grace — Ephesians 2:8-9",
  "Islam's View of Jesus — Surah 4:171",
  "Muhammad's Revelations — Historical analysis",
  "The Quran & the Bible — Surah 5:47 paradox"
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
  {
    cat: "A. QURANIC PROBLEMS",
    items: [
      {
        title: "The Quran confirms the Bible — but how can a confirmed book be corrupt?",
        question: "The Quran commands believers to consult the Bible (Surah 5:47, 10:94). If the Bible was already corrupted, why would Allah direct people to a corrupt source?",
        dilemma: "If Muslims say the Bible was corrupted before the Quran, then the Quran falsely endorses a corrupted book as reliable. If it was corrupted after the Quran, no such event of mass corruption has historical evidence. Either way, the Tahrif doctrine contradicts the Quran.",
        evidence: "Surah 5:47 commands Christians to 'judge by what Allah has revealed therein.' Surah 10:94 tells Muhammad himself to ask 'those who have been reading the Scripture before you' if he has doubts. The manuscripts available at the time of Muhammad match today's Bible.",
        invite: "This is not just a debating point — it's a genuine question about consistency. The God who guards His Word (Quran 15:9) would have guarded the previous scriptures too. The Bible as we have it points to Jesus. Will you look at it with fresh eyes?"
      },
      {
        title: "Scientific errors in the Quran",
        question: "The Quran states the sun sets in a muddy spring (Surah 18:86) and that sperm originates from between the backbone and ribs (Surah 86:6-7). How do you explain these?",
        dilemma: "If the Quran is the perfect, literal word of God revealed to a scientifically illiterate 7th-century audience, why does it contain statements that contradict basic anatomy and cosmology?",
        evidence: "Surah 18:86 — Dhul-Qarnain 'reached the setting of the sun and found it setting in a spring of dark mud.' Surah 86:6-7 — 'He was created from a fluid, ejected, emerging from between the backbone and the ribs.' Modern science is clear: sperm originates in the testes, not the torso. The sun does not set in any spring.",
        invite: "Islamic scholars offer various interpretations — but consider what you would say if the Bible contained the same statements. Consistency in evaluation is a mark of intellectual honesty."
      },
      {
        title: "The Quran has variant readings (Hafs vs Warsh)",
        question: "Why are there different versions of the Quran being used by Muslim communities worldwide?",
        dilemma: "Muslims claim the Quran is perfectly preserved with not a single letter changed — yet Hafs and Warsh transmissions (the two most common) contain thousands of differences in voweling and some consonantal variants. If the Quran is perfectly preserved, which version is the preserved one?",
        evidence: "The Hafs transmission (used in most of the world) and the Warsh transmission (used in North Africa) are both considered valid. There are at least 10 recognized 'readings' (Qira'at). One early Caliph, Uthman, reportedly burned competing manuscripts — suggesting there were differences to eliminate.",
        invite: "We raise this not to attack but to invite consistency. The Bible's manuscript tradition is openly studied and documented. The same honesty should be applied to the Quran."
      }
    ]
  },
  {
    cat: "B. MUHAMMAD UNDER SCRUTINY",
    items: [
      {
        title: "The marriage to Aisha",
        question: "Multiple Hadith (Sahih Bukhari 5:58:234, 7:62:64) record that Aisha was 6 years old at marriage and 9 at consummation. How does this reflect on Muhammad's moral character?",
        dilemma: "Islamic tradition holds Muhammad as the supreme moral example (Uswa Hasana). If his example includes marriage to a prepubescent child, this is not a universal moral standard. Cultural relativism ('different times') undermines the claim that his example transcends all cultures and times.",
        evidence: "Sahih Bukhari 5:58:234 — Aisha narrates she was married at six and the marriage was consummated at nine. This is not disputed by mainstream Islamic scholarship — it is embraced as the Sunnah.",
        invite: "We ask this in love, not contempt. We believe every person — including Muhammad — falls short of God's perfect standard. That is why we need a Savior, not just an example."
      },
      {
        title: "How do you verify Muhammad received revelation?",
        question: "What independent, verifiable evidence exists that Muhammad received revelation from God, as opposed to having a religious experience of uncertain origin?",
        dilemma: "By contrast, Jesus's resurrection was witnessed by hundreds (1 Corinthians 15:6), occurred in a known city, and was attested by hostile witnesses (the Roman soldiers, the Jewish leaders). Muhammad received his revelations privately, initially believed he was possessed by a demon (Sirah Ibn Hisaq), and his wife's encouragement was the reassurance he received.",
        evidence: "Sahih Bukhari 1:1:3 — Muhammad's own initial response to Gabriel was fear that he was possessed. His wife Khadijah consulted her cousin Waraqah ibn Nawfal, a Christian, who interpreted the experience. This is the foundation of the world's second-largest religion.",
        invite: "We are not dismissing Muhammad's sincerity. But sincerity is not the same as accuracy. Jesus offered verifiable, external evidence. He said 'Do not believe me unless I do the works of my Father' (John 10:37). That's an evidence-based call."
      }
    ]
  },
  {
    cat: "C. ISLAMIC THEOLOGY PROBLEMS",
    items: [
      {
        title: "No assurance of salvation in Islam",
        question: "Even Muhammad said he wasn't sure of his own salvation (Sahih Bukhari 5:58:266). How can a religion with no assurance of paradise truly offer hope?",
        dilemma: "Islam teaches salvation depends on works outweighing sins, plus Allah's mercy — but Allah's decision is inscrutable. There is no guarantee. The only assured entry to paradise in Islam is dying as a martyr in jihad. Jesus, by contrast, said 'Whoever believes in the Son has eternal life' (John 3:36) — present tense, assured.",
        evidence: "Bukhari 5:266 — Muhammad said: 'By Allah, though I am the Apostle of Allah, yet I do not know what Allah will do to me.' This is Muhammad's own testimony about his uncertainty.",
        invite: "Imagine living your entire life performing prayers, fasts, and good deeds — and at the end, still not knowing. Jesus offers something Islam cannot: a relationship with a Father who says 'Nothing can separate you from my love' (Romans 8:38-39)."
      },
      {
        title: "Allah's unknowability vs. a relational God",
        question: "Islamic theology emphasizes that Allah is so transcendent as to be completely unknowable in His essence. How does one have a personal relationship with a God who cannot be known?",
        dilemma: "The 99 Names of Allah are descriptions of attributes, but Islam explicitly rejects the possibility of personal union or relationship with Allah. Contrast this with Jesus saying 'Whoever has seen me has seen the Father' (John 14:9) and Paul saying we can know God as 'Abba, Father' (Romans 8:15).",
        evidence: "Al-Ghazali, one of Islam's greatest theologians, acknowledged that the essence of Allah is entirely beyond human knowing. Islamic mysticism (Sufism) arose precisely because mainstream Islam left a relational vacuum.",
        invite: "The deepest human need is not merely forgiveness or paradise — it is to be known and loved by someone greater than ourselves. That is what Jesus offers. Not just a God who rules, but a Father who runs toward us (Luke 15:20)."
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
    color: "#90ee90",
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
    color: "#90ee90",
    verses: [
      { ref: "Matthew 28:19", text: "Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." },
      { ref: "2 Corinthians 13:14", text: "May the grace of the Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit be with you all." },
      { ref: "Genesis 1:26", text: "Then God said, 'Let us make mankind in our image, in our likeness...'" },
      { ref: "Isaiah 48:16", text: "'Come near me and listen to this: From the first announcement I have not spoken in secret; at the time it happens, I am there.' And now the Sovereign LORD has sent me, with his Spirit." }
    ]
  },
  {
    topic: "Reliability of the Bible",
    color: "#90ee90",
    verses: [
      { ref: "Psalm 119:89", text: "Your word, LORD, is eternal; it stands firm in the heavens." },
      { ref: "Isaiah 40:8", text: "The grass withers and the flowers fall, but the word of our God endures forever." },
      { ref: "Matthew 5:18", text: "Truly I tell you, until heaven and earth disappear, not the smallest letter, not the least stroke of a pen, will by any means disappear from the Law until everything is accomplished." },
      { ref: "1 Peter 1:25", text: "But the word of the Lord endures forever." }
    ]
  },
  {
    topic: "The Cross & Atonement",
    color: "#ff9999",
    verses: [
      { ref: "Isaiah 53:5-6", text: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed." },
      { ref: "Romans 5:8", text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us." },
      { ref: "Hebrews 9:22", text: "Without the shedding of blood there is no forgiveness." },
      { ref: "1 John 2:2", text: "He is the atoning sacrifice for our sins, and not only for ours but also for the sins of the whole world." }
    ]
  },
  {
    topic: "Salvation by Grace",
    color: "#7ab0ff",
    verses: [
      { ref: "Ephesians 2:8-9", text: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast." },
      { ref: "Romans 3:23-24", text: "For all have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus." },
      { ref: "Titus 3:5", text: "He saved us, not because of righteous things we had done, but because of his mercy." },
      { ref: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." }
    ]
  },
  {
    topic: "Prophecy Fulfilled by Jesus",
    color: "#ffd700",
    verses: [
      { ref: "Isaiah 53:3", text: "He was despised and rejected by mankind, a man of suffering, and familiar with pain." },
      { ref: "Micah 5:2", text: "But you, Bethlehem Ephrathah, though you are small among the clans of Judah, out of you will come for me one who will be ruler over Israel, whose origins are from of old, from ancient times." },
      { ref: "Psalm 22:16-18", text: "They pierce my hands and my feet... People stare and gloat over me. They divide my clothes among them and cast lots for my garment." },
      { ref: "Zechariah 9:9", text: "Rejoice greatly, Daughter Zion! See, your king comes to you, righteous and victorious, lowly and riding on a donkey." }
    ]
  },
  {
    topic: "Loving Muslims",
    color: "#ffaaaa",
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

export type TabType = "home" | "defend" | "advance" | "scripture" | "islam" | "quickdraw";
