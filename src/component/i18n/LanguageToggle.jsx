import React from 'react'
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
    const { i18n, t } = useTranslation();
    const isHindi = i18n.language === "hi";

    const toggle = () => i18n.changeLanguage(isHindi ? "en" : "hi");

    return (
        <div className="w-full h-screen justify-center items-center bg-fuchsia-500">
            <button
                onClick={toggle}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 font-semibold transition hover:border-[#D99416] justify-center"
            >
                <Languages className="h-4 w-4 text-[#D99416]" />
                <span className={!isHindi ? "text-[#D99416]" : ""}>EN</span>
                <span className="text-slate-300">|</span>
                <span className={isHindi ? "text-[#D99416]" : ""}>हिंदी</span>
            </button>
            <div>
                <p>{t("name")}</p>
            </div>
        </div>
    );
}
