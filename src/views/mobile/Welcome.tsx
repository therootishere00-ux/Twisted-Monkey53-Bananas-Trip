"use client";

import { useEffect, useMemo, useState } from "react";
import ChatInput from "./ChatInput";
import DrawerMenu, { type ChatThread } from "./DrawerMenu";
import QuickRequestCard from "./QuickRequestCard";

type Role = "assistant" | "user";

type Message = {
  id: string;
  role: Role;
  content: string;
};

const initialThreads: ChatThread[] = [
  {
    id: "chat-1",
    title: "Новый чат",
    preview: "Готов к первому сообщению",
    updatedAt: "сейчас",
  },
  {
    id: "chat-2",
    title: "ГВГ состав",
    preview: "Разобрать оборону и атаку",
    updatedAt: "2 мин",
  },
  {
    id: "chat-3",
    title: "Моды для рейда",
    preview: "Подобрать набор под урон",
    updatedAt: "8 мин",
  },
];

const initialMessagesByChat: Record<string, Message[]> = {
  "chat-1": [],
  "chat-2": [
    {
      id: "chat-2-m1",
      role: "assistant",
      content:
        "Я бы начал с компактной защиты и оставил самые сильные синергии на решающую линию.",
    },
  ],
  "chat-3": [
    {
      id: "chat-3-m1",
      role: "assistant",
      content:
        "Для рейда важнее стабильность, чем пик урона. Давай соберём сетап под конкретную фазу.",
    },
  ],
};

function makeReply(message: string) {
  const text = message.toLowerCase();

  if (text.includes("гвг") || text.includes("gvg")) {
    return "Для ГВГ я бы собрал состав с прицелом на контроль темпа и запасной план на контрпики.";
  }

  if (text.includes("мод") || text.includes("mods")) {
    return "По модам лучше смотреть не только на скорость, но и на роль персонажа в конкретной команде.";
  }

  if (text.includes("рейд") || text.includes("raid")) {
    return "Для рейда сделаем упор на стабильный цикл ходов и усиление ключевого урона.";
  }

  if (text.includes("арен")) {
    return "Для арены важны инициатива и правильная связка лидера с ускорением команды.";
  }

  return "Принял. Пока это демо-ответ, но сам сценарий уже работает как живой чат.";
}

function makeTitle(message: string) {
  const trimmed = message.trim();
  if (!trimmed) return "Новый чат";

  return trimmed.length > 24 ? `${trimmed.slice(0, 24).trimEnd()}…` : trimmed;
}

function nowLabel() {
  return "сейчас";
}

export default function Welcome() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [threads, setThreads] = useState(initialThreads);
  const [activeChatId, setActiveChatId] = useState(initialThreads[0].id);
  const [messagesByChat, setMessagesByChat] = useState<Record<string, Message[]>>(
    initialMessagesByChat,
  );
  const [isTyping, setIsTyping] = useState(false);

  const activeChat = useMemo(
    () => threads.find((thread) => thread.id === activeChatId) ?? threads[0],
    [activeChatId, threads],
  );

  const activeMessages = messagesByChat[activeChat.id] ?? [];

  useEffect(() => {
    setDrawerOpen(false);
  }, [activeChatId]);

  const pushMessage = (role: Role, content: string) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const nextMessage: Message = { id, role, content };

    setMessagesByChat((current) => ({
      ...current,
      [activeChat.id]: [...(current[activeChat.id] ?? []), nextMessage],
    }));

    setThreads((current) =>
      current.map((thread) => {
        if (thread.id !== activeChat.id) return thread;

        const baseTitle =
          thread.title === "Новый чат" ? makeTitle(content) : thread.title;

        return {
          ...thread,
          title: baseTitle,
          preview: content,
          updatedAt: nowLabel(),
        };
      }),
    );
  };

  const sendMessage = (value: string) => {
    const message = value.trim();
    if (!message || isTyping) return;

    setDraft("");
    pushMessage("user", message);
    setIsTyping(true);

    window.setTimeout(() => {
      setMessagesByChat((current) => {
        const chatMessages = current[activeChat.id] ?? [];
        const reply = makeReply(message);
        const nextMessage: Message = {
          id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
          role: "assistant",
          content: reply,
        };

        return {
          ...current,
          [activeChat.id]: [...chatMessages, nextMessage],
        };
      });

      setThreads((current) =>
        current.map((thread) =>
          thread.id === activeChat.id
            ? {
                ...thread,
                preview: makeReply(message),
                updatedAt: nowLabel(),
              }
            : thread,
        ),
      );

      setIsTyping(false);
    }, 850);
  };

  const createNewChat = () => {
    const id = `chat-${Date.now()}`;
    const thread: ChatThread = {
      id,
      title: "Новый чат",
      preview: "Готов к первому сообщению",
      updatedAt: "сейчас",
    };

    setThreads((current) => [thread, ...current]);
    setMessagesByChat((current) => ({ ...current, [id]: [] }));
    setActiveChatId(id);
    setDrawerOpen(false);
    setDraft("");
  };

  const selectChat = (chatId: string) => {
    setActiveChatId(chatId);
    setDraft("");
  };

  return (
    <div className="welcome-shell relative flex h-screen w-full flex-col overflow-hidden animate-in fade-in duration-700">
      <div className="welcome-orb welcome-orb-left" />
      <div className="welcome-orb welcome-orb-right" />
      <div className="welcome-grid" />

      <DrawerMenu
        open={drawerOpen}
        chats={threads}
        activeChatId={activeChatId}
        onClose={() => setDrawerOpen(false)}
        onSelectChat={selectChat}
        onNewChat={createNewChat}
      />

      <header className="relative z-10 flex items-center justify-between px-6 pt-6">
        <button
          type="button"
          aria-label="Open menu"
          className="welcome-icon-button"
          onClick={() => setDrawerOpen(true)}
        >
          <img
            src="/icons/menu.PNG"
            alt=""
            className="h-4 w-4 object-contain invert"
          />
        </button>

        <div className="welcome-badge">
          <span className="welcome-badge-dot" />
          SWGOH AI
        </div>
      </header>

      <main className="relative z-10 flex min-h-0 flex-1 flex-col px-6 pb-6">
        <section className={`welcome-hero mt-6 ${activeMessages.length ? "welcome-hero-compact" : ""}`}>
          <div className="welcome-hero-visual">
            <div className="welcome-avatar-ring">
              <div className="welcome-avatar-shell">
                <img
                  src="/gifs/assistant.GIF"
                  alt="Assistant"
                  className="welcome-avatar gif-mask"
                />
              </div>
            </div>
          </div>

          <div className="welcome-hero-copy">
            <p className="welcome-kicker">Готов к работе</p>
            <h1 className="welcome-title">Привет, командир.</h1>
            <p className="welcome-subtitle">
              Подскажу по отрядам, аренам, модам и рейдам. Без шума, без лишних
              экранов, сразу по сути.
            </p>

            <div className="welcome-pills">
              <span className="welcome-pill">Отряды</span>
              <span className="welcome-pill">Моды</span>
              <span className="welcome-pill">Рейды</span>
              <span className="welcome-pill">Арена</span>
            </div>
          </div>
        </section>

        <section className="mt-7 min-h-0 flex-1">
          <div className="mb-4 flex items-center justify-between px-1">
            <p className="text-[13px] font-medium tracking-[0.18em] text-[#8E8E93] uppercase">
              Что спросить
            </p>
            <p className="text-[12px] text-[#6C6C70]">Быстрые подсказки</p>
          </div>

          {!activeMessages.length ? (
            <div className="welcome-empty-state">
              <p className="welcome-empty-title">Демо-чат пока спит</p>
              <p className="welcome-empty-copy">
                Отправь первое сообщение или нажми подсказку ниже, и интерфейс
                ответит как живой чат.
              </p>
            </div>
          ) : (
            <div className="welcome-chat-window">
              <div className="welcome-chat-head">
                <span>{activeChat.title}</span>
                <span>{activeChat.preview}</span>
              </div>

              <div className="welcome-message-list">
                {activeMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`welcome-message-row ${
                      message.role === "user"
                        ? "welcome-message-row-user"
                        : "welcome-message-row-assistant"
                    }`}
                  >
                    <div
                      className={`welcome-message-bubble ${
                        message.role === "user"
                          ? "welcome-message-bubble-user"
                          : "welcome-message-bubble-assistant"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}

                {isTyping ? (
                  <div className="welcome-message-row welcome-message-row-assistant">
                    <div className="welcome-message-bubble welcome-message-bubble-assistant welcome-typing">
                      Думаю...
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          )}

          <div className="mt-3 grid grid-cols-2 gap-3">
            <QuickRequestCard
              title="Собрать ГВГ-отряд"
              iconName="card1.PNG"
              onClick={() => sendMessage("Собрать ГВГ-отряд")}
            />
            <QuickRequestCard
              title="Лучший деф для арены"
              iconName="card2.PNG"
              onClick={() => sendMessage("Лучший деф для арены")}
            />
            <QuickRequestCard
              title="Кого фармить первым"
              iconName="card3.PNG"
              onClick={() => sendMessage("Кого фармить первым")}
            />
            <QuickRequestCard
              title="Советы по рейдам"
              iconName="card4.PNG"
              onClick={() => sendMessage("Советы по рейдам")}
            />
          </div>

          <div className="welcome-note mt-4">
            <p className="text-[13px] leading-relaxed text-[#A1A1A6]">
              Это пока локальный демо-слой. История чатов и ответы живут только
              в памяти страницы.
            </p>
          </div>
        </section>
      </main>

      <ChatInput
        value={draft}
        onChange={setDraft}
        onSend={() => sendMessage(draft)}
        disabled={isTyping}
      />
    </div>
  );
}
