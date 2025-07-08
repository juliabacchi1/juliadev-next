"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GA_TRACKING_ID } from "../../../lib/gtag";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.gtag || !GA_TRACKING_ID) return;

    window.gtag("config", GA_TRACKING_ID, {
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  // Escuta clicks em qualquer elemento com data-analytics
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const element = target.closest("[data-analytics]");
      if (!element) return;

      const eventName = element.getAttribute("data-analytics");
      if (!eventName || !window.gtag) return;

      window.gtag("event", eventName, {
        event_category: "button_click",
        event_label: element.textContent?.trim() || eventName,
      });

      console.log("🔥 Evento GA enviado:", eventName);
    }

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}