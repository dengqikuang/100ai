import { useState } from "react";
import { createPortal } from "react-dom";

function Header({ completedCount }) {
  const progress = completedCount;
  const [showContact, setShowContact] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-surface/80 backdrop-blur-md border-b border-white/10 shadow-[0_0_15px_rgba(0,240,255,0.1)] z-50">
      <div className="flex justify-between items-center px-section-margin py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowContact(true)}
            className="font-[JetBrains_Mono] text-xs text-primary-container border border-primary-container/30 px-3 py-1.5 rounded hover:bg-primary-container/10 transition-colors"
          >
            联系
          </button>
        </div>
        <div className="flex items-center gap-6" />
      </div>
      {showContact && createPortal(
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowContact(false)}>
          <div className="p-6 bg-surface-container-high border border-primary-container/20 rounded-lg shadow-[0_0_20px_rgba(0,240,255,0.15)]" onClick={e => e.stopPropagation()}>
            <p className="font-[JetBrains_Mono] text-xs text-primary-container text-center mb-4">扫码添加微信</p>
            <img src="/wechat-qr.png" alt="微信二维码" className="w-[16rem] h-[16rem] object-contain mx-auto" />
            <button onClick={() => setShowContact(false)} className="mt-4 w-full font-[JetBrains_Mono] text-xs text-primary-container border border-primary-container/30 px-3 py-1.5 rounded hover:bg-primary-container/10 transition-colors">
              关闭
            </button>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}

export default Header;
