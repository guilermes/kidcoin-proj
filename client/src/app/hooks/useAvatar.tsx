// hooks/useAvatar.tsx
"use client";

import { useEffect, useState, useCallback } from "react";

const LS_KEY = "kidcoin.avatar";

export default function useAvatar(defaultAvatar = "/assets/loading.png") {
  const [avatar, setAvatar] = useState<string>(defaultAvatar);

  // carregar do localStorage ao montar
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) setAvatar(raw);
    } catch (err) {
      // ignore (ex: ssr safety)
    }
  }, []);

  // função para atualizar avatar em state + localStorage
  const updateAvatar = useCallback((newAvatar: string) => {
    setAvatar(newAvatar);
    try {
      localStorage.setItem(LS_KEY, newAvatar);
    } catch (err) {
      console.error("Erro ao salvar avatar no localStorage", err);
    }
  }, []);

  // opcional: função para limpar
  const clearAvatar = useCallback(() => {
    setAvatar(defaultAvatar);
    try {
      localStorage.removeItem(LS_KEY);
    } catch (err) {}
  }, [defaultAvatar]);

  return { avatar, setAvatar: updateAvatar, clearAvatar };
}
