import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/empty-state.css";

interface EmptyStateProps {
  onRetry: () => void;
}

export const LoadingState: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="empty-state">
      <div className="loading-spinner" />
      <p>{t("loadingSaveData")}</p>
    </div>
  );
};

export const NoSaveState: React.FC<EmptyStateProps> = ({ onRetry }) => {
  const { t } = useTranslation();
  return (
    <div className="empty-state">
      <p style={{ fontSize: "18px", fontWeight: 600 }}>{t("noSaveFileDetected")}</p>
      <p 
        style={{ maxWidth: "500px", fontSize: "14px", lineHeight: "1.6" }}
        dangerouslySetInnerHTML={{ __html: t("noSaveFileDesc") }}
      />
      <p style={{ maxWidth: "500px", fontSize: "14px", lineHeight: "1.6", marginTop: "10px" }}>
        {t("noSaveFileWarning")}
      </p>
      <button className="tab-btn" onClick={onRetry} style={{ border: "1px solid var(--border-color)", padding: "8px 16px", borderRadius: "8px", background: "rgba(255,255,255,0.03)", color: "var(--text-main)" }}>
        {t("retryLoadingSave")}
      </button>
    </div>
  );
};
