// hooks/useCurrencyFormatter.ts
"use client"; // Custom Hooks que usam useState/useEffect precisam ser 'use client'

import { useState, useEffect } from "react";

interface CurrencyFormatOptions {
  style?: "decimal" | "currency" | "percent";
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

/**
 * Custom Hook para formatar valores monetários com base no locale do usuário.
 * Detecta o locale do navegador e a moeda correspondente.
 *
 * @returns {object} Um objeto contendo:
 * - `formatCurrency`: Função para formatar um número para string de moeda.
 * - `userLocale`: O locale detectado (ex: 'pt-BR').
 * - `userCurrency`: O código da moeda detectada (ex: 'BRL').
 */

export const useCurrencyFormatter = () => {
  const [userLocale, setUserLocale] = useState<string>("pt-BR");
  const [userCurrency, setUserCurrency] = useState<string>("BRL");

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.language) {
      const detectedLocale = navigator.language; 
      setUserLocale(detectedLocale);


      let currencyCode = "BRL"; 
      if (detectedLocale.startsWith("en-US")) {
        currencyCode = "USD";
      } else if (detectedLocale.startsWith("en-GB")) {
        currencyCode = "GBP";
      } else if (detectedLocale.startsWith("es-ES")) {
        currencyCode = "EUR";
      } else if (detectedLocale.startsWith("pt-PT")) {
        currencyCode = "EUR";
      } else if (
        detectedLocale.startsWith("fr") ||
        detectedLocale.startsWith("de")
      ) {
        currencyCode = "EUR";
      }
      setUserCurrency(currencyCode);
    }
  }, []);
  /**
   *
   * @param value
   * @param options
   * @returns
   */
    
  const formatCurrency = (
    value: number,
    options?: CurrencyFormatOptions
  ): string => {
    const currentLocale = userLocale || "pt-BR";
    const currentCurrency = userCurrency || "BRL";

    try {
      return value.toLocaleString(currentLocale, {
        style: options?.style || "currency",
        currency: options?.currency || currentCurrency,
        minimumFractionDigits:
          options?.minimumFractionDigits !== undefined
            ? options.minimumFractionDigits
            : 2,
        maximumFractionDigits:
          options?.maximumFractionDigits !== undefined
            ? options.maximumFractionDigits
            : 2,
      });
    } catch (error) {
      console.error("Erro ao formatar moeda:", error);
      return `${currentCurrency} ${value.toFixed(2)}`;
    }
  };

  return { formatCurrency, userLocale, userCurrency };
};
