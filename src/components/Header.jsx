import { useState } from "react";
import { createPortal } from "react-dom";

function Header({ completedCount }) {
  const [showContact, setShowContact] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand-lockup" href="/" aria-label="100 AI 首页">
          <span>100 AI</span>
          <em>{String(completedCount).padStart(2, "0")}/100</em>
        </a>
        <nav className="header-actions" aria-label="页面操作">
          <a href="#archive" className="header-link">
            产品格子
          </a>
          <button
            type="button"
            onClick={() => setShowContact(true)}
            className="contact-button"
          >
            联系
          </button>
        </nav>
      </div>
      {showContact &&
        createPortal(
          <div className="dialog-backdrop" onClick={() => setShowContact(false)}>
            <div
              className="contact-dialog"
              role="dialog"
              aria-modal="true"
              aria-label="微信联系二维码"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="dialog-head">
                <span>微信联系</span>
                <button type="button" onClick={() => setShowContact(false)} aria-label="关闭联系弹窗">
                  ×
                </button>
              </div>
              <img src="/wechat-qr.png" alt="添加微信的二维码" />
              <p>扫码添加微信，聊产品、AI 应用或合作想法。</p>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}

export default Header;
