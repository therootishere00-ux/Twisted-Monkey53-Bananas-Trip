"use client";

import { ChevronRight, MessageSquare, Plus, X } from "lucide-react";

export type ChatThread = {
  id: string;
  title: string;
  preview: string;
  updatedAt: string;
};

interface DrawerMenuProps {
  open: boolean;
  chats: ChatThread[];
  activeChatId: string;
  onClose: () => void;
  onSelectChat: (chatId: string) => void;
  onNewChat: () => void;
}

export default function DrawerMenu({
  open,
  chats,
  activeChatId,
  onClose,
  onSelectChat,
  onNewChat,
}: DrawerMenuProps) {
  return (
    <div
      className={`drawer-overlay ${open ? "drawer-overlay-open" : ""}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className="drawer-backdrop"
        aria-label="Close chat menu"
        onClick={onClose}
      />

      <aside className={`drawer-panel ${open ? "drawer-panel-open" : ""}`}>
        <div className="drawer-rail" />

        <header className="drawer-header">
          <div>
            <p className="drawer-eyebrow">SWGOH AI</p>
            <h2 className="drawer-title">swgoh.ai</h2>
          </div>

          <button
            type="button"
            className="drawer-close"
            aria-label="Close menu"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <p className="drawer-note">
          Список чатов временный. Сейчас это просто локальная витрина без
          сохранения.
        </p>

        <button type="button" className="drawer-new-chat" onClick={onNewChat}>
          <span className="drawer-new-chat-icon">
            <Plus className="h-4 w-4" />
          </span>
          <span>
            <strong>Новый чат</strong>
            <small>Начать пустой диалог</small>
          </span>
        </button>

        <section className="drawer-section">
          <div className="drawer-section-head">
            <span>Чаты</span>
            <MessageSquare className="h-4 w-4" />
          </div>

          <div className="drawer-chat-list">
            {chats.map((chat) => {
              const isActive = chat.id === activeChatId;

              return (
                <button
                  key={chat.id}
                  type="button"
                  className={`drawer-chat-item ${isActive ? "drawer-chat-item-active" : ""}`}
                  onClick={() => onSelectChat(chat.id)}
                >
                  <div className="drawer-chat-copy">
                    <strong>{chat.title}</strong>
                    <span>{chat.preview}</span>
                  </div>
                  <div className="drawer-chat-meta">
                    <span>{chat.updatedAt}</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </aside>
    </div>
  );
}
