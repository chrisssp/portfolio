"use client";

import dynamic from "next/dynamic";
import type { Locale } from "@/i18n/config";

const ChatWidget = dynamic(
   () =>
      import("@/components/organisms/ChatWidget").then((mod) => mod.ChatWidget),
   { ssr: false },
);

type Props = {
   locale: Locale;
};

export function ChatWidgetWrapper({ locale }: Props) {
   return <ChatWidget locale={locale} />;
}
