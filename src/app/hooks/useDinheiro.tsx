"use client";

import { useState, useEffect, useCallback } from "react";

const LS_KEY = "kidcoin.dinheiro";
const DEFAULT_DINHEIRO = 9000; // valor inicial do aluno

export default function useDinheiro(defaultValue = DEFAULT_DINHEIRO) {
  const [dinheiro, setDinheiroState] = useState<number>(defaultValue);

  // Carrega do localStorage no mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(LS_KEY);
      if (saved) {
        setDinheiroState(Number(saved));
      }
    }
  }, []);

  // Atualiza localStorage sempre que dinheiro mudar
  const setDinheiro = useCallback((value: number) => {
    setDinheiroState(value);
    if (typeof window !== "undefined") {
      localStorage.setItem(LS_KEY, value.toString());
    }
  }, []);

  // Gastar dinheiro, retorna true se deu certo, false se saldo insuficiente
  const gastar = useCallback((valor: number): boolean => {
    if (valor <= dinheiro) {
      setDinheiro(dinheiro - valor);
      return true;
    }
    return false;
  }, [dinheiro, setDinheiro]);

  // Adicionar dinheiro
  const adicionar = useCallback((valor: number) => {
    setDinheiro(dinheiro + valor);
  }, [dinheiro, setDinheiro]);

  // Resetar dinheiro para o padrão
  const resetar = useCallback(() => {
    setDinheiro(defaultValue);
    if (typeof window !== "undefined") {
      localStorage.removeItem(LS_KEY);
    }
  }, [defaultValue]);

  return { dinheiro, setDinheiro, gastar, adicionar, resetar };
}
