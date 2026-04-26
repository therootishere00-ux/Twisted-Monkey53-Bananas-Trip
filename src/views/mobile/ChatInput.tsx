"use client";

import { FormEvent } from "react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
  disabled = false,
}: ChatInputProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSend();
  };

  return (
    <form className="relative z-10 px-6 pb-6" onSubmit={handleSubmit}>
      <div className="welcome-composer">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="welcome-composer-chip">
            <span className="welcome-composer-chip-dot" />
            Пока без бэкенда
          </div>
        </div>

        <div className="relative flex items-end gap-3 px-4 pb-4">
          <input
            type="text"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Спросить что-нибудь..."
            className="welcome-input"
            disabled={disabled}
          />
          <button
            type="submit"
            disabled={disabled || !value.trim()}
            aria-label="Send message"
            className={`welcome-send-button ${
              value.trim() && !disabled ? "welcome-send-button-active" : ""
            }`}
          >
            <img
              src="/icons/send.PNG"
              alt=""
              className={`h-3.5 w-3.5 object-contain ${
                value.trim() && !disabled ? "" : "invert"
              }`}
            />
          </button>
        </div>
      </div>

      <p className="mt-3 text-center text-[11px] leading-snug text-[#8E8E93]">
        Первое сообщение запускает демо-ответ прямо в интерфейсе.
      </p>
    </form>
  );
}
