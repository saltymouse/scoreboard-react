import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

// for all options read: https://www.i18next.com/overview/configuration-options
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          "add-scores": "Add Scores",
          "remove-scores": "Remove Scores",
          "current-round": "Current Round",
          "add-player": "Add Player",
          "remove-player": "Remove Player",
          "score": "Score?",
          "reset": "Reset"
        }
      },
      ja: {
        translation: {
          "add-scores": "スコアを確定",
          "remove-scores": "スコアを消す",
          "current-round": "ゲーム目",
          "add-player": "プレーヤーを増やす",
          "remove-player": "プレーヤーを減らす",
          "score": "スコア入力",
          "reset": "リセット"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
