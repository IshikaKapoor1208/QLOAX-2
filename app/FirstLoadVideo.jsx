"use client";

import { useEffect, useRef, useState } from "react";

export default function FirstLoadVideo() {
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const timeout = window.setTimeout(() => hideSplash(), 9000);

    document.body.classList.add("is-loading-intro");

    video?.play().catch(() => {
      hideSplash();
    });

    return () => {
      window.clearTimeout(timeout);
      document.body.classList.remove("is-loading-intro");
    };
  }, []);

  function hideSplash() {
    setLeaving(true);
    window.setTimeout(() => {
      setVisible(false);
      document.body.classList.remove("is-loading-intro");
    }, 520);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className={`intro-loader ${leaving ? "intro-loader--leaving" : ""}`} aria-hidden="true">
      <video
        ref={videoRef}
        className="intro-loader__video"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={hideSplash}
        onError={hideSplash}
      >
        <source src="/first_load.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
