"use client"

import { useEffect } from "react"

// Public board token for the "Ourpot" Canny board. Safe to expose client-side
// (it only identifies which board to render). The secret API key is never used
// in the browser.
const CANNY_BOARD_TOKEN =
  process.env.NEXT_PUBLIC_CANNY_BOARD_TOKEN ?? "4e282f4a-63af-3cf4-ae9f-d2cee0f436fa"

type CannyFn = ((...args: unknown[]) => void) & { q?: unknown[] }

declare global {
  interface Window {
    Canny: CannyFn
  }
}

export function CannyWidget() {
  useEffect(() => {
    // Canny SDK loader — official snippet (https://developers.canny.io/install/widget/web),
    // typed for TS. Loads from sdk.canny.io.
    ;(function (w: Window, d: Document, i: string, s: string) {
      function l() {
        if (!d.getElementById(i)) {
          const f = d.getElementsByTagName(s)[0]
          const e = d.createElement(s) as HTMLScriptElement
          e.type = "text/javascript"
          e.async = true
          e.src = "https://sdk.canny.io/sdk.js"
          f.parentNode?.insertBefore(e, f)
        }
      }
      if (typeof w.Canny !== "function") {
        const c = function (...args: unknown[]) {
          c.q?.push(args)
        } as CannyFn
        c.q = []
        w.Canny = c
        if (d.readyState === "complete") l()
        else w.addEventListener("load", l, false)
      }
    })(window, document, "canny-jssdk", "script")

    window.Canny("render", {
      boardToken: CANNY_BOARD_TOKEN,
      basePath: "/feedback",
      ssoToken: null,
      theme: "dark",
    })
  }, [])

  return <div data-canny />
}
