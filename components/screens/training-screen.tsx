"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { AcademyLibrary } from "@/components/academy-library";
import { Badge } from "@/components/ui/badge";
import { 
  TRAINING_QUESTIONS, 
  TRAINING_LEVELS,
  type TrainingQuestion,
  type TrainingQuestionType,
  type TrainingCategory 
} from "@/lib/data";
import { 
  Shield, 
  Target, 
  Zap, 
  PenLine, 
  Swords, 
  Home, 
  ChevronRight, 
  Check, 
  X as XIcon, 
  RotateCcw,
  Flame,
  BookOpen,
  Cross,
  Building2,
  Landmark
} from "lucide-react";

type Mode = 'mcq' | 'flash' | 'fill' | 'scenario';
type Screen = 'home' | 'quiz' | 'results' | 'academy';

interface TrainingStats {
  total: number;
  correct: number;
  streak: number;
  xp: number;
}

const MODE_CONFIG: { id: Mode; label: string; icon: typeof Target; desc: string }[] = [
  { id: 'mcq', label: 'Multiple Choice', icon: Target, desc: '4 options, instant feedback' },
  { id: 'flash', label: 'Flash Cards', icon: Zap, desc: 'Spaced repetition' },
  { id: 'fill', label: 'Fill the Gap', icon: PenLine, desc: 'Complete key phrases' },
  { id: 'scenario', label: 'Scenario Battle', icon: Swords, desc: 'Real conversation drills' },
];

const CATEGORY_CONFIG: { id: TrainingCategory; label: string; icon?: typeof Target }[] = [
  { id: 'all', label: 'All Topics' },
  { id: 'defend', label: 'Defend', icon: Shield },
  { id: 'advance', label: 'Advance', icon: Swords },
  { id: 'bible', label: 'Bible', icon: BookOpen },
  { id: 'jesus', label: 'Jesus', icon: Cross },
  { id: 'islam', label: 'Islam', icon: Building2 },
  { id: 'history', label: 'History', icon: Landmark },
];

function getLevel(xp: number) {
  let level = TRAINING_LEVELS[0];
  for (const l of TRAINING_LEVELS) {
    if (xp >= l.xp) level = l;
  }
  return level;
}

function getNextLevel(xp: number) {
  for (const l of TRAINING_LEVELS) {
    if (xp < l.xp) return l;
  }
  return null;
}

function getLevelIndex(xp: number) {
  let idx = 0;
  for (let i = 0; i < TRAINING_LEVELS.length; i++) {
    if (xp >= TRAINING_LEVELS[i].xp) idx = i;
  }
  return idx;
}

export function TrainingScreen() {
  const [screen, setScreen] = useState<Screen>('home');
  const [mode, setMode] = useState<Mode>('mcq');
  const [categories, setCategories] = useState<TrainingCategory[]>(['all']);
  const [stats, setStats] = useState<TrainingStats>({ total: 0, correct: 0, streak: 0, xp: 0 });
  
  // Quiz state
  const [questions, setQuestions] = useState<TrainingQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionWrong, setSessionWrong] = useState(0);
  const [sessionXP, setSessionXP] = useState(0);
  const [weakTopics, setWeakTopics] = useState<Record<string, number>>({});
  
  // Question interaction state
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [flashRevealed, setFlashRevealed] = useState(false);
  const [fillInput, setFillInput] = useState('');
  const [fillSubmitted, setFillSubmitted] = useState(false);

  // Load stats from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('ff-training-stats');
    if (saved) {
      try {
        setStats(JSON.parse(saved));
      } catch {
        // Invalid JSON, ignore
      }
    }
  }, []);

  // Save stats to localStorage and notify the home screen card in real-time
  // ENHANCEMENT 4: dispatching 'ff-stats-updated' so TrainingProgressCard
  // re-reads localStorage immediately — no page reload needed.
  const saveStats = useCallback((newStats: TrainingStats) => {
    localStorage.setItem('ff-training-stats', JSON.stringify(newStats));
    setStats(newStats);
    window.dispatchEvent(new Event('ff-stats-updated'));
  }, []);

  const toggleCategory = (cat: TrainingCategory) => {
    if (cat === 'all') {
      setCategories(['all']);
    } else {
      let newCats = categories.filter(c => c !== 'all');
      if (newCats.includes(cat)) {
        newCats = newCats.filter(c => c !== cat);
      } else {
        newCats.push(cat);
      }
      if (newCats.length === 0) {
        setCategories(['all']);
      } else {
        setCategories(newCats);
      }
    }
  };

  const filterQuestions = useCallback(() => {
    let pool = [...TRAINING_QUESTIONS];
    
    // Filter by category
    if (!categories.includes('all')) {
      pool = pool.filter(q => {
        if (categories.includes('defend') && q.type === 'defend') return true;
        if (categories.includes('advance') && q.type === 'advance') return true;
        if (categories.includes('bible') && q.cat === 'bible') return true;
        if (categories.includes('jesus') && q.cat === 'jesus') return true;
        if (categories.includes('islam') && q.cat === 'islam') return true;
        if (categories.includes('history') && q.cat === 'history') return true;
        return false;
      });
    }
    
    // Filter by mode/subtype
    if (mode !== 'flash') {
      pool = pool.filter(q => q.subtype === mode || q.subtype === 'mcq');
    }
    if (mode === 'flash') {
      pool = pool.filter(q => q.subtype === 'flash');
    }
    if (mode === 'scenario') {
      pool = pool.filter(q => q.subtype === 'scenario');
    }
    if (mode === 'fill') {
      pool = pool.filter(q => q.subtype === 'fill');
    }
    
    // Fallback if no questions match
    if (pool.length === 0) {
      pool = TRAINING_QUESTIONS.filter(q => q.subtype === 'mcq');
    }
    
    // Shuffle and take 10
    return pool.sort(() => Math.random() - 0.5).slice(0, 10);
  }, [categories, mode]);

  const startQuiz = () => {
    const qs = filterQuestions();
    setQuestions(qs);
    setQuestionIndex(0);
    setSessionCorrect(0);
    setSessionWrong(0);
    setSessionXP(0);
    setWeakTopics({});
    setAnswered(false);
    setSelectedOption(null);
    setFlashRevealed(false);
    setFillInput('');
    setFillSubmitted(false);
    setScreen('quiz');
  };

  const goHome = () => {
    setScreen('home');
  };

  const recordAnswer = (isCorrect: boolean, q: TrainingQuestion) => {
    const newStats = { ...stats };
    newStats.total++;
    
    if (isCorrect) {
      setSessionCorrect(prev => prev + 1);
      newStats.correct++;
      newStats.streak++;
      const xpGain = 10 + (newStats.streak > 2 ? 5 : 0);
      newStats.xp += xpGain;
      setSessionXP(prev => prev + xpGain);
    } else {
      setSessionWrong(prev => prev + 1);
      setWeakTopics(prev => ({
        ...prev,
        [q.cat]: (prev[q.cat] || 0) + 1
      }));
      newStats.streak = 0;
    }
    
    saveStats(newStats);
  };

  const handleOptionSelect = (index: number) => {
    if (answered) return;
    setAnswered(true);
    setSelectedOption(index);
    const q = questions[questionIndex];
    const isCorrect = index === q.correct;
    recordAnswer(isCorrect, q);
  };

  const handleFlashReveal = () => {
    if (flashRevealed) return;
    setFlashRevealed(true);
  };

  const handleFlashRate = (rating: number) => {
    const q = questions[questionIndex];
    const isGood = rating >= 2;
    recordAnswer(isGood, q);
    
    // If hard, add question back to queue
    if (rating === 1) {
      setQuestions(prev => [...prev, q]);
    }
    
    nextQuestion();
  };

  const handleFillSubmit = () => {
    if (fillSubmitted) return;
    setFillSubmitted(true);
    setAnswered(true);
    
    const q = questions[questionIndex];
    const val = fillInput.trim().toLowerCase();
    const isCorrect = q.keywords?.some(k => val.includes(k)) || false;
    recordAnswer(isCorrect, q);
  };

  const nextQuestion = () => {
    setAnswered(false);
    setSelectedOption(null);
    setFlashRevealed(false);
    setFillInput('');
    setFillSubmitted(false);
    
    if (questionIndex >= questions.length - 1) {
      setScreen('results');
    } else {
      setQuestionIndex(prev => prev + 1);
    }
  };

  const currentQuestion = questions[questionIndex];
  const progress = questions.length > 0 ? ((questionIndex) / questions.length) * 100 : 0;
  const level = getLevel(stats.xp);
  const nextLevelData = getNextLevel(stats.xp);
  const levelIndex = getLevelIndex(stats.xp);
  const xpProgress = nextLevelData 
    ? ((stats.xp - level.xp) / (nextLevelData.xp - level.xp)) * 100 
    : 100;

  if (screen === 'academy') {
    return <AcademyLibrary onBack={() => setScreen('home')} />;
  }

  // HOME SCREEN
  if (screen === 'home') {
    return (
      <div className="space-y-4 max-w-md mx-auto">
        {/* Hero Banner */}
        <Card className="bg-gradient-to-br from-[var(--navy)] to-[var(--navy-3)] border-primary/30">
          <CardContent className="p-5 text-center">
            <div className="flex justify-center mb-2">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-xl font-medium text-primary mb-1">Training Academy</h2>
            <p className="text-xs text-muted-foreground tracking-wide">SHARPEN YOUR SWORD &middot; KNOW YOUR FAITH</p>
          </CardContent>
        </Card>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2">
          <Card>
            <CardContent className="p-3 text-center">
              <div className="text-2xl font-medium text-primary">{stats.total}</div>
              <div className="text-[10px] text-muted-foreground tracking-wide">Answered</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <div className="text-2xl font-medium text-primary">
                {stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) + '%' : '—'}
              </div>
              <div className="text-[10px] text-muted-foreground tracking-wide">Accuracy</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <div className="text-2xl font-medium text-primary flex items-center justify-center gap-1">
                {stats.streak}<Flame className="h-4 w-4 text-orange-500" />
              </div>
              <div className="text-[10px] text-muted-foreground tracking-wide">Streak</div>
            </CardContent>
          </Card>
        </div>

        {/* XP Progress */}
        <Card>
          <CardContent className="p-3">
            <div className="flex justify-between items-center mb-2 text-xs">
              <span className="text-muted-foreground">Level {levelIndex} — {level.title}</span>
              <span className="text-muted-foreground">
                {nextLevelData ? `${stats.xp} / ${nextLevelData.xp} XP` : `${stats.xp} XP (Max)`}
              </span>
            </div>
            <Progress
              value={xpProgress}
              className="h-2"
              aria-label={`Training progress: ${stats.xp} of ${nextLevelData?.xp ?? stats.xp} XP`}
            />
          </CardContent>
        </Card>

        <Button variant="outline" className="w-full border-primary/40 text-primary" onClick={() => setScreen('academy')}>
          <BookOpen className="mr-2 h-4 w-4" /> Study the Reference Library
        </Button>

        {/* Mode Selection */}
        <div role="radiogroup" aria-label="Select training mode" className="grid grid-cols-2 gap-2">
          {MODE_CONFIG.map((m) => {
            const Icon = m.icon;
            return (
              <button
                key={m.id}
                type="button"
                role="radio"
                aria-checked={mode === m.id}
                onClick={() => setMode(m.id)}
                className={cn(
                  "w-full rounded-xl border bg-card p-3 text-center transition-all hover:border-primary/50",
                  mode === m.id && "border-primary bg-primary/5"
                )}
              >
                <Icon className="mx-auto mb-2 h-6 w-6 text-primary" aria-hidden="true" />
                <div className="text-sm font-medium text-primary">{m.label}</div>
                <div className="mt-1 text-[10px] text-muted-foreground">{m.desc}</div>
              </button>
            );
          })}
        </div>

        {/* Category Selection */}
        <div>
          <label className="text-[10px] text-muted-foreground tracking-wider uppercase block mb-2">
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            {CATEGORY_CONFIG.map((cat) => {
              const Icon = cat.icon;
              const selected = categories.includes(cat.id);
              return (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggleCategory(cat.id)}
                  className={cn(
                    "inline-flex min-h-11 items-center gap-1 rounded-full border px-3 py-2 text-xs transition-colors",
                    selected
                      ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  )}
                >
                  {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Start Button */}
        <Button 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          size="lg"
          onClick={startQuiz}
        >
          Begin Training <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    );
  }

  // QUIZ SCREEN
  if (screen === 'quiz' && currentQuestion) {
    const q = currentQuestion;

    return (
      <div className="space-y-3 max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={goHome} className="text-muted-foreground">
            <Home className="h-4 w-4 mr-1" /> Home
          </Button>
          <div className="flex-1">
            <Progress value={progress} className="h-1.5" />
            <div className="text-[10px] text-muted-foreground text-right mt-1">
              {questionIndex} / {questions.length}
            </div>
          </div>
          <Badge variant="outline" className={cn(
            "text-[10px]",
            q.type === 'defend' ? "border-red-500/40 text-red-400" : "border-blue-500/40 text-blue-400"
          )}>
            {q.type === 'defend' ? '🛡️ Defend' : '⚔️ Advance'}
          </Badge>
        </div>

        {/* MCQ / Scenario View */}
        {(q.subtype === 'mcq' || q.subtype === 'scenario') && (
          <>
            {q.subtype === 'scenario' && q.claim && (
              <Card className="bg-red-950/20 border-red-900/30">
                <CardContent className="p-4">
                  <div className="text-[10px] uppercase tracking-wider text-red-400 mb-2">
                    Muslim says to you:
                  </div>
                  <div className="text-sm italic text-red-300">{q.claim}</div>
                </CardContent>
              </Card>
            )}
            
            <Card>
              <CardContent className="p-4">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">
                  {q.subtype === 'scenario' ? 'Best response:' : q.type === 'advance' ? '⚔️ Advance — Offensive Apologetics' : '🛡️ Defend — Answering the Challenge'}
                </div>
                <div className="text-sm leading-relaxed">{q.q}</div>
                {q.context && (
                  <div className="text-xs text-muted-foreground italic mt-2 pt-2 border-t border-border">
                    {q.context}
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-2">
              {q.options?.map((opt, i) => {
                const letter = ['A', 'B', 'C', 'D'][i];
                const isCorrect = i === q.correct;
                const isSelected = selectedOption === i;
                
                return (
                  <button
                    key={i}
                    onClick={() => handleOptionSelect(i)}
                    disabled={answered}
                    className={cn(
                      "w-full text-left p-3 rounded-lg border transition-all text-sm",
                      !answered && "hover:border-primary/50 hover:bg-primary/5",
                      answered && isCorrect && "bg-green-900/20 border-green-600 text-green-400",
                      answered && isSelected && !isCorrect && "bg-red-900/20 border-red-600 text-red-400",
                      !answered && "bg-card border-border"
                    )}
                  >
                    <span className={cn(
                      "inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-medium mr-2",
                      answered && isCorrect ? "bg-green-900/50 text-green-400" :
                      answered && isSelected && !isCorrect ? "bg-red-900/50 text-red-400" :
                      "bg-primary/15 text-primary"
                    )}>
                      {letter}
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {answered && (
              <>
                <Card className={cn(
                  "border",
                  selectedOption === q.correct 
                    ? "bg-green-900/10 border-green-600/40" 
                    : "bg-red-900/10 border-red-600/40"
                )}>
                  <CardContent className="p-4">
                    <div className={cn(
                      "text-sm font-medium mb-2",
                      selectedOption === q.correct ? "text-green-400" : "text-red-400"
                    )}>
                      {selectedOption === q.correct ? (
                        <span className="flex items-center gap-1"><Check className="h-4 w-4" /> Correct! Well done.</span>
                      ) : (
                        <span className="flex items-center gap-1"><XIcon className="h-4 w-4" /> Not quite — here&apos;s why:</span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{q.explain}</div>
                    {q.scripture && (
                      <div className="text-xs text-primary/80 italic mt-2 pt-2 border-t border-border/50">
                        📖 {q.scripture}
                      </div>
                    )}
                  </CardContent>
                </Card>
                <Button className="w-full" onClick={nextQuestion}>
                  Next <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </>
            )}
          </>
        )}

        {/* Flash Card View */}
        {q.subtype === 'flash' && (
          <>
            <Card 
              className={cn(
                "cursor-pointer min-h-[160px] flex items-center justify-center",
                !flashRevealed && "hover:border-primary/30"
              )}
              onClick={handleFlashReveal}
            >
              <CardContent className="p-5 text-center w-full">
                {!flashRevealed ? (
                  <>
                    <div className="text-sm leading-relaxed mb-3">{q.front}</div>
                    <div className="text-[10px] text-muted-foreground">Tap to reveal answer</div>
                  </>
                ) : (
                  <>
                    <div className="text-xs text-muted-foreground mb-3 pb-3 border-b border-border">
                      {q.front}
                    </div>
                    <div className="text-sm leading-relaxed text-muted-foreground">{q.back}</div>
                  </>
                )}
              </CardContent>
            </Card>

            {flashRevealed && (
              <>
                <Card className="bg-green-900/10 border-green-600/40">
                  <CardContent className="p-4">
                    <div className="text-sm font-medium text-green-400 mb-2">📖 Full Explanation</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{q.back}</div>
                    {q.scripture && (
                      <div className="text-xs text-primary/80 italic mt-2 pt-2 border-t border-border/50">
                        📖 {q.scripture}
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-3 gap-2">
                  <Button 
                    variant="outline" 
                    className="border-red-500/30 text-red-400 hover:bg-red-900/20"
                    onClick={() => handleFlashRate(1)}
                  >
                    Hard
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary/10"
                    onClick={() => handleFlashRate(2)}
                  >
                    Got it
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-green-500/30 text-green-400 hover:bg-green-900/20"
                    onClick={() => handleFlashRate(3)}
                  >
                    Easy!
                  </Button>
                </div>
              </>
            )}
          </>
        )}

        {/* Fill in the Blank View */}
        {q.subtype === 'fill' && (
          <>
            <Card>
              <CardContent className="p-4">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">
                  Complete the phrase
                </div>
                <div className="text-sm leading-relaxed">{q.q}</div>
              </CardContent>
            </Card>

            <Input
              value={fillInput}
              onChange={(e) => setFillInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleFillSubmit()}
              placeholder="Type your answer..."
              disabled={fillSubmitted}
              className={cn(
                fillSubmitted && q.keywords?.some(k => fillInput.toLowerCase().includes(k)) && "border-green-600 bg-green-900/10",
                fillSubmitted && !q.keywords?.some(k => fillInput.toLowerCase().includes(k)) && "border-red-600 bg-red-900/10"
              )}
            />

            {!fillSubmitted && (
              <Button className="w-full" variant="outline" onClick={handleFillSubmit}>
                Submit Answer
              </Button>
            )}

            {fillSubmitted && (
              <>
                <Card className={cn(
                  "border",
                  q.keywords?.some(k => fillInput.toLowerCase().includes(k))
                    ? "bg-green-900/10 border-green-600/40" 
                    : "bg-red-900/10 border-red-600/40"
                )}>
                  <CardContent className="p-4">
                    <div className={cn(
                      "text-sm font-medium mb-2",
                      q.keywords?.some(k => fillInput.toLowerCase().includes(k)) ? "text-green-400" : "text-red-400"
                    )}>
                      {q.keywords?.some(k => fillInput.toLowerCase().includes(k)) ? (
                        <span className="flex items-center gap-1"><Check className="h-4 w-4" /> Correct!</span>
                      ) : (
                        <span className="flex items-center gap-1"><XIcon className="h-4 w-4" /> The answer was: &quot;{q.answer}&quot;</span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{q.explain}</div>
                    {q.scripture && (
                      <div className="text-xs text-primary/80 italic mt-2 pt-2 border-t border-border/50">
                        📖 {q.scripture}
                      </div>
                    )}
                  </CardContent>
                </Card>
                <Button className="w-full" onClick={nextQuestion}>
                  Next <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </>
            )}
          </>
        )}
      </div>
    );
  }

  // RESULTS SCREEN
  if (screen === 'results') {
    const total = sessionCorrect + sessionWrong;
    const percentage = total > 0 ? Math.round((sessionCorrect / total) * 100) : 0;
    
    const getMessage = (pct: number) => {
      if (pct >= 90) return 'Outstanding! "Be strong and courageous." — Joshua 1:9';
      if (pct >= 70) return 'Strong work! Keep training — the sword sharpens with use.';
      if (pct >= 50) return 'Good effort. Review the weak areas and return stronger.';
      return 'Every soldier starts somewhere. Study and return — God equips the willing.';
    };

    const weakEntries = Object.entries(weakTopics).sort((a, b) => b[1] - a[1]).slice(0, 4);
    const catLabels: Record<string, string> = {
      bible: 'Bible & Manuscripts',
      jesus: 'Jesus & Christology',
      advance: 'Advance — Islam',
      islam: 'Islamic Theology',
      history: 'History'
    };

    return (
      <div className="space-y-4 max-w-md mx-auto">
        {/* Results Hero */}
        <Card className="bg-gradient-to-br from-[var(--navy)] to-[var(--navy-3)] border-primary/30">
          <CardContent className="p-6 text-center">
            <div className="text-5xl font-medium text-primary mb-1">{percentage}%</div>
            <div className="text-sm text-muted-foreground mb-3">Score</div>
            <div className="text-sm text-primary/80 italic">{getMessage(percentage)}</div>
          </CardContent>
        </Card>

        {/* Results Grid */}
        <div className="grid grid-cols-2 gap-2">
          <Card>
            <CardContent className="p-3 text-center">
              <div className="text-xl font-medium text-green-400">{sessionCorrect}</div>
              <div className="text-[10px] text-muted-foreground">Correct</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <div className="text-xl font-medium text-red-400">{sessionWrong}</div>
              <div className="text-[10px] text-muted-foreground">Incorrect</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <div className="text-xl font-medium text-primary">+{sessionXP}</div>
              <div className="text-[10px] text-muted-foreground">XP Earned</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <div className="text-xl font-medium text-blue-400 flex items-center justify-center gap-1">
                {stats.streak}<Flame className="h-4 w-4 text-orange-500" />
              </div>
              <div className="text-[10px] text-muted-foreground">Streak</div>
            </CardContent>
          </Card>
        </div>

        {/* Weak Topics */}
        {weakEntries.length > 0 && (
          <Card>
            <CardContent className="p-4">
              <h3 className="text-sm text-muted-foreground mb-3">Review These Topics</h3>
              <div className="space-y-2">
                {weakEntries.map(([cat, count]) => (
                  <div key={cat} className="flex justify-between items-center text-xs py-1 border-b border-border last:border-0">
                    <span>{catLabels[cat] || cat}</span>
                    <span className="text-red-400 font-medium">{count} missed</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {weakEntries.length === 0 && (
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-sm text-muted-foreground">Perfect score! Exceptional work.</div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <Button variant="outline" className="w-full" onClick={startQuiz}>
          <RotateCcw className="mr-2 h-4 w-4" /> Train Again
        </Button>
        <Button className="w-full bg-primary text-primary-foreground" onClick={goHome}>
          Back to Home
        </Button>
      </div>
    );
  }

  return null;
}
