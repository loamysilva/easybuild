"use client";

import { useState } from "react";
import { matchups } from "@/data/matchups";
import { StepLayout } from "@/components/StepLayout";
import { SelectionCard } from "@/components/SelectionCard";
import { ItemRow } from "@/components/ItemRow";
import { SearchOption } from "@/components/SearchOption";
import { motion, AnimatePresence } from "framer-motion";
import { Swords, Zap, Shield } from "lucide-react";

type Step =
  | "home"
  | "lane"
  | "champion"
  | "enemy"
  | "runes"
  | "early"
  | "core"
  | "questions"
  | "situational";

export default function Home() {
  const [step, setStep] = useState<Step>("home");
  const [lane, setLane] = useState("");
  const [champion, setChampion] = useState("");
  const [enemy, setEnemy] = useState("");
  const [championSearch, setChampionSearch] = useState("");
  const [enemySearch, setEnemySearch] = useState("");

  const lanes = ["TOP", "JG", "MID", "ADC", "SUP"];


const selectedMatchup = matchups.find(
  (matchup) =>
    matchup.lane === lane &&
    matchup.champion === champion &&
    matchup.enemy === enemy
);

const availableChampions = matchups
  .filter((matchup) => matchup.lane === lane)
  .map((matchup) => matchup.champion);

const uniqueAvailableChampions = [...new Set(availableChampions)];

const availableEnemies = matchups
  .filter(
    (matchup) =>
      matchup.lane === lane &&
      matchup.champion === champion
  )
  .map((matchup) => matchup.enemy);

const uniqueAvailableEnemies = [...new Set(availableEnemies)];

const filteredChampions = uniqueAvailableChampions.filter((championName) =>
  championName.toLowerCase().includes(championSearch.toLowerCase())
);

const filteredEnemies = uniqueAvailableEnemies.filter((enemyName) =>
  enemyName.toLowerCase().includes(enemySearch.toLowerCase())
);

  return (
    <main className="
        relative
        min-h-screen
        overflow-hidden
        bg-zinc-950
        text-white
        flex
        items-center
        justify-center
        p-8
      ">
        <div
  className="
    absolute inset-0
    bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_40%)]
  "
/>

<div
  className="
    absolute inset-0
    bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
    bg-[size:40px_40px]
    opacity-30
  "
/>
      <AnimatePresence mode="wait">
  <div className="relative z-10 w-full flex justify-center">
      {step === "home" && (
    <motion.section
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-7xl"
    >
<div
  className="
    relative
    rounded-[32px]
    border
    border-indigo-500/20
    bg-zinc-950/70
    backdrop-blur-xl
    p-8
    shadow-[0_0_120px_rgba(99,102,241,0.10)]
  "
>
  <div
  className="
    absolute
    top-40
    left-1/2
    -translate-x-1/2
    h-[500px]
    w-[500px]
    rounded-full
    bg-indigo-500/10
    blur-3xl
    pointer-events-none
  "
/>
  <header className="flex items-center justify-between mb-20">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
        ⚡
      </div>

      <span className="text-xl font-bold">
        EasyBuild
      </span>
    </div>

    <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
      <span>Sobre</span>
      <span>Como funciona</span>

      <button
        onClick={() => setStep("lane")}
        className="
          rounded-full
          bg-indigo-500
          px-6
          py-3
          font-semibold
          text-white
          hover:bg-indigo-400
          hover:scale-[1.015]
          active:scale-[0.98]
          shadow-lg
          shadow-indigo-500/20
          transition-all
          duration-300
          cursor-pointer
        "
      >
        Começar
      </button>
    </div>
  </header>

  <section className="text-center pt-16 pb-14">
    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300 mb-8">
      ✦ Guias inteligentes para cada partida
    </div>

    <h1
      className="
        text-7xl
        md:text-8xl
        font-black
        tracking-tight
        leading-none
        mb-6
      "
    >
      Easy
      <span className="bg-gradient-to-r from-white via-white to-indigo-500 bg-clip-text text-transparent">
        Build
      </span>
    </h1>

    <p className="mx-auto max-w-2xl text-xl text-zinc-400 mb-10">
      Aprenda matchups, builds e decisões certas para vencer mais partidas.
    </p>

    <button
      onClick={() => setStep("lane")}
className="
  mt-6
  rounded-full
  bg-indigo-500
  px-8
  py-4
  text-lg
  font-semibold
  hover:bg-indigo-400
  hover:scale-[1.02]
  active:scale-[0.98]
  shadow-[0_0_40px_rgba(99,102,241,0.35)]
  transition-all
  duration-300
  cursor-pointer
"
    >
      Começar agora →
    </button>
  </section>

  <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
    <div className="
  group
  rounded-3xl
  border
  border-zinc-800
  bg-zinc-900/60
  p-8
  backdrop-blur-sm

  hover:-translate-y-1
  hover:border-indigo-500/40
  hover:bg-zinc-900

  hover:shadow-[0_0_40px_rgba(99,102,241,0.12)]

  transition-all
  duration-300
  cursor-pointer
  hover:scale-[1.015]
">
      <Swords className=" w-8 h-8 text-indigo-400 mb-4 transition-all duration-300 group-hover:text-indigo-300 group-hover:scale-110"/>
      <h3 className="font-bold text-lg mb-2">Matchups guiadas</h3>
      <p className="text-zinc-400 text-sm">
        Entenda como jogar cada confronto com clareza.
      </p>
    </div>

    <div className="
  group
  rounded-3xl
  border
  border-zinc-800
  bg-zinc-900/60
  p-8
  backdrop-blur-sm

  hover:-translate-y-1
  hover:border-indigo-500/40
  hover:bg-zinc-900

  hover:shadow-[0_0_40px_rgba(99,102,241,0.12)]

  transition-all
  duration-300
  cursor-pointer
  hover:scale-[1.015]
">
      <Zap className=" w-8 h-8 text-indigo-400 mb-4 transition-all duration-300 group-hover:text-indigo-300 group-hover:scale-110" />
      <h3 className="font-bold text-lg mb-2">Builds adaptativas</h3>
      <p className="text-zinc-400 text-sm">
        Itens e runas ajustados para cada situação do jogo.
      </p>
    </div>

    <div className="
  group
  rounded-3xl
  border
  border-zinc-800
  bg-zinc-900/60
  p-8
  backdrop-blur-sm

  hover:-translate-y-1
  hover:border-indigo-500/40
  hover:bg-zinc-900

  hover:shadow-[0_0_40px_rgba(99,102,241,0.12)]

  transition-all
  duration-300
  cursor-pointer
  hover:scale-[1.015]
">
      <Shield className=" w-8 h-8 text-indigo-400 mb-4 transition-all duration-300 group-hover:text-indigo-300 group-hover:scale-110" />
      <h3 className="font-bold text-lg mb-2">Decisões rápidas</h3>
      <p className="text-zinc-400 text-sm">
        Saiba o que fazer em cada momento da partida.
      </p>
    </div>
  </section>

  <section className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm hover:border-indigo-500/20 transition-all duration-300 p-8">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold">
        🔥 Matchups populares
      </h2>

      <span className="text-sm text-indigo-400">
        Ver todos →
      </span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<button
  onClick={() => {
    setLane("TOP");
    setChampion("Yasuo");
    setEnemy("Darius");
    setStep("runes");
  }}
  className="
    group
    rounded-2xl
    border
    border-zinc-800
    bg-zinc-950/70
    p-6
    text-left
    hover:-translate-y-1
    hover:border-indigo-500/30
    hover:bg-zinc-900
    transition-all
    duration-300
    cursor-pointer
  "
>
  <div className="flex items-center justify-between gap-4 mb-5">
    <div className="flex flex-col items-center gap-2">
      <img
        src="/champions/yasuo.png"
        alt="Yasuo"
        className="h-20 w-20 rounded-full object-cover border border-indigo-500/30 group-hover:scale-105"
      />
      <span className="text-sm font-semibold">Yasuo</span>
    </div>

    <span className="text-zinc-600 text-sm font-semibold">VS</span>

    <div className="flex flex-col items-center gap-2">
      <img
        src="/champions/darius.png"
        alt="Darius"
        className="h-20 w-20 rounded-full object-cover border border-red-500/30 group-hover:scale-105"
      />
      <span className="text-sm font-semibold">Darius</span>
    </div>
  </div>

  <div className="flex items-center justify-between">
    <p className="text-zinc-400 text-sm">TOP</p>

    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-400">
      Favorável
    </span>
  </div>
</button>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-zinc-900 transition-all duration-300 cursor-pointer">
        <p className="text-zinc-400 text-sm mb-2">TOP</p>
        <h3 className="font-bold">Camille vs Fiora</h3>
        <span className="mt-4 inline-block rounded-full bg-yellow-500/15 px-3 py-1 text-sm text-yellow-400">
          Equilibrado
        </span>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-zinc-900 transition-all duration-300 cursor-pointer">
        <p className="text-zinc-400 text-sm mb-2">MID</p>
        <h3 className="font-bold">Zed vs Ahri</h3>
        <span className="mt-4 inline-block rounded-full bg-red-500/15 px-3 py-1 text-sm text-red-400">
          Difícil
        </span>
      </div>
    </div>
  </section>
</div>
        </motion.section>
        
      )}

{step === "lane" && (
    <motion.div
    key="lane"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
  <StepLayout
    title="Escolha sua rota"
  >
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {lanes.map((laneName) => (
        <SelectionCard
          key={laneName}
          label={laneName}
          image={`/roles/${laneName}.png`}
          onClick={() => {
            setLane(laneName);
            setStep("champion");
          }}
        />
      ))}
    </div>
  </StepLayout>
  </motion.div>
)}

{step === "champion" && (
  <motion.div
    key="champion"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    <p className="text-zinc-400 mb-2">
      Rota escolhida: {lane}
    </p>

    <h2 className="text-4xl font-bold mb-8">
      Escolha seu champion
    </h2>

<input
  value={championSearch}
  onChange={(event) => setChampionSearch(event.target.value)}
  placeholder="Digite o nome do champion..."
  className="w-full mb-6 rounded-2xl bg-zinc-900 border border-zinc-800 px-5 py-4 text-white outline-none focus:border-indigo-500"
/>

<div className="grid gap-3">
  {championSearch.length > 0 &&
  filteredChampions.map((championName) => (
        <SearchOption
          key={championName}
          label={championName}
          onClick={() => {
            setChampion(championName);
            setStep("enemy");
          }}
        />
      ))}
    </div>
  </motion.div>
)}

{step === "enemy" && (
    <motion.div
    key="enemy"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    <p className="text-zinc-400 mb-2">
      {lane} • {champion}
    </p>

    <h2 className="text-4xl font-bold mb-8">
      Escolha o champion inimigo
    </h2>

<input
  value={enemySearch}
  onChange={(event) => setEnemySearch(event.target.value)}
  placeholder="Digite o nome do inimigo..."
  className="w-full mb-6 rounded-2xl bg-zinc-900 border border-zinc-800 px-5 py-4 text-white outline-none focus:border-indigo-500"
/>

<div className="grid gap-3">
  {enemySearch.length > 0 &&
  filteredEnemies.map((enemyName) => (
        <SearchOption
          key={enemyName}
          label={enemyName}
          onClick={() => {
            setEnemy(enemyName);
            setStep("runes");
          }}
        />
      ))}
    </div>
  </motion.div>
)}

{step === "runes" && (
    <motion.div
    key="runes"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
  <StepLayout
    title="Runas recomendadas"
    subtitle={`${champion} vs ${enemy}`}
  >
    {selectedMatchup ? (
      <div className="grid gap-4">
        
        <Card title="Runas">
          <ItemRow
          title=""
          items={selectedMatchup.runes}
        />
        </Card>

        <Card title="Fragmentos">
          <ItemRow
          title=""
          items={selectedMatchup.shards}
          />
        </Card>

        <Card title="Feitiços">
          <ItemRow
            title=""
            items={selectedMatchup.spells}
          />
        </Card>

        <button
          onClick={() => setStep("early")}
        className="
          mt-6
          rounded-full
          bg-indigo-500
          px-8
          py-4
          text-lg
          font-semibold
          hover:bg-indigo-400
          hover:scale-[1.02]
          active:scale-[0.98]
          shadow-lg
          shadow-indigo-500/20
          hover:shadow-indigo-500/40
          transition-all
          duration-300
        "
        >
          Próximo →
        </button>

      </div>
    ) : (
      <div
  className="
    bg-zinc-900
    border
    border-zinc-800
    rounded-2xl
    p-6
    hover:border-indigo-500/30
    transition-all
    duration-300
  "
>
        <h3 className="text-xl font-bold mb-2">
          Matchup ainda não cadastrada
        </h3>

        <p className="text-zinc-400">
          Ainda não temos dados para {champion} vs {enemy}.
        </p>
      </div>
    )}
  </StepLayout>
  </motion.div>
)}

{step === "early" && (
    <motion.div
    key="early"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
  <StepLayout
    title="Early Game"
    subtitle={`${champion} vs ${enemy}`}
  >
    {selectedMatchup && (
      <div className="grid gap-4">

        <ItemRow
        title="Start de item"
        items={selectedMatchup.startItems}
        />

        <ItemRow
          title="Primeiro B"
          items={selectedMatchup.firstBase}
        />

        <button
          onClick={() => setStep("core")}
        className="
          mt-6
          rounded-full
          bg-indigo-500
          px-8
          py-4
          text-lg
          font-semibold
          hover:bg-indigo-400
          hover:scale-[1.02]
          active:scale-[0.98]
          shadow-lg
          shadow-indigo-500/20
          hover:shadow-indigo-500/40
          transition-all
          duration-300
        "
        >
          Próximo →
        </button>

      </div>
    )}
  </StepLayout>
  </motion.div>
)}

{step === "core" && (
      <motion.div
    key="core"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
  <StepLayout
    title="Core Build"
    subtitle={`${champion} vs ${enemy}`}
  >
    {selectedMatchup && (
      <div className="grid gap-4">
      <ItemRow
        title="3 itens principais"
        items={selectedMatchup.coreItems}
      />

        <button
          onClick={() => setStep("questions")}
          className="
          mt-6
          rounded-full
          bg-indigo-500
          px-8
          py-4
          text-lg
          font-semibold
          hover:bg-indigo-400
          hover:scale-[1.02]
          active:scale-[0.98]
          shadow-lg
          shadow-indigo-500/20
          hover:shadow-indigo-500/40
          transition-all
          duration-300
        "
        >
          Próximo →
        </button>
      </div>
    )}
  </StepLayout>
  </motion.div>
)}

{step === "questions" && (
        <motion.div
    key="questions"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="w-full max-w-xl"
  >
  <StepLayout
    title="Perguntas"
    subtitle={`${champion} vs ${enemy}`}
  >
    <div className="grid gap-4">

      <Card title="Como está a partida?">
        <p className="text-zinc-400 text-center">
          Escolha uma opção abaixo.
        </p>
      </Card>

      <div className="grid gap-4">
        <button
          onClick={() => setStep("situational")}
          className="
            rounded-2xl
            bg-zinc-900
            border
            border-zinc-800
            p-6
            text-center
            hover:bg-zinc-800
            transition
          "
        >
          Estou forte
        </button>

        <button
          onClick={() => setStep("situational")}
          className="
            rounded-2xl
            bg-zinc-900
            border
            border-zinc-800
            p-6
            text-center
            hover:bg-zinc-800
            transition
          "
        >
          Estou atrás
        </button>

        <button
          onClick={() => setStep("situational")}
          className="
            rounded-2xl
            bg-zinc-900
            border
            border-zinc-800
            p-6
            text-center
            hover:bg-zinc-800
            transition
          "
        >
          Muito controle de grupo inimigo
        </button>
      </div>

    </div>
  </StepLayout>
  </motion.div>
)}

{step === "situational" && (
        <motion.div
    key="situational"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
  <StepLayout
    title="Itens situacionais"
    subtitle={`${champion} vs ${enemy}`}
  >
    {selectedMatchup && (
      <div className="grid gap-4">

        <ItemRow
          title="Itens recomendados"
          items={selectedMatchup.situationalItems}
        />

        <button
          onClick={() => {
            setStep("home");
            setLane("");
            setChampion("");
            setEnemy("");
          }}
        className="
          mt-6
          rounded-full
          bg-indigo-500
          px-8
          py-4
          text-lg
          font-semibold
          hover:bg-indigo-400
          hover:scale-[1.02]
          active:scale-[0.98]
          shadow-lg
          shadow-indigo-500/20
          hover:shadow-indigo-500/40
          transition-all
          duration-300
        "
        >
          Recomeçar
        </button>

      </div>
    )}
  </StepLayout>
  </motion.div>
)}
  </div>
</AnimatePresence>
    </main>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
  className="
    bg-zinc-900
    border
    border-zinc-800
    rounded-2xl
    p-6
    hover:border-indigo-500/30
    transition-all
    duration-300
  "
>
      <h3 className="text-xl font-bold mb-4 text-center">
        {title}
      </h3>

      {children}
    </div>
  );
}