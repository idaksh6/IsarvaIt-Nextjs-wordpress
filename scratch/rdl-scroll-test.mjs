import { chromium } from "playwright";

const url = "http://localhost:3000/products/rdl-product";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(2000);

const result = await page.evaluate(async () => {
  const header = document.querySelector("header");
  const out = {
    hasRdlStable: document.documentElement.classList.contains("rdl-scroll-stable"),
    headerClass: header?.className || "",
    headerBackdrop: getComputedStyle(header).backdropFilter,
    headerTransition: getComputedStyle(header).transition,
    nextImgCount: document.querySelectorAll(".rdl-product-page img[data-nimg]").length,
    nativeImgCount: document.querySelectorAll(".rdl-product-page img:not([data-nimg])").length,
    overflowHidden: document.querySelectorAll(".rdl-product-page [class*='overflow-hidden']").length,
    longTasks: [],
    wheelScroll: {},
  };

  const longTasks = [];
  let observer;
  try {
    observer = new PerformanceObserver((list) => {
      for (const e of list.getEntries()) longTasks.push(e.duration);
    });
    observer.observe({ type: "longtask", buffered: false });
  } catch (_) {}

  // Simulate wheel scroll through Key Capabilities
  const frameDurations = [];
  let last = performance.now();
  let frames = 0;
  let scrolling = true;

  const rafId = { id: 0 };
  function onFrame(now) {
    frameDurations.push(now - last);
    last = now;
    frames++;
    if (scrolling) rafId.id = requestAnimationFrame(onFrame);
  }
  rafId.id = requestAnimationFrame(onFrame);

  // Dispatch wheel events
  for (let i = 0; i < 40; i++) {
    window.dispatchEvent(
      new WheelEvent("wheel", { deltaY: 80, bubbles: true, cancelable: true })
    );
    window.scrollBy(0, 80);
    await new Promise((r) => setTimeout(r, 16));
  }

  scrolling = false;
  cancelAnimationFrame(rafId.id);
  await new Promise((r) => setTimeout(r, 100));
  if (observer) observer.disconnect();

  const slow = frameDurations.filter((d) => d > 24).length;
  const avg = frameDurations.reduce((a, b) => a + b, 0) / (frameDurations.length || 1);
  const sorted = [...frameDurations].sort((a, b) => a - b);
  const p95 = sorted[Math.floor(sorted.length * 0.95)] || 0;

  out.longTasks = longTasks;
  out.wheelScroll = {
    frames,
    avgMs: Number(avg.toFixed(2)),
    p95Ms: Number(p95.toFixed(2)),
    slowFramesOver24ms: slow,
    scrollY: window.scrollY,
    maxLongTaskMs: longTasks.length ? Math.max(...longTasks) : 0,
  };
  return out;
});

console.log(JSON.stringify(result, null, 2));
await browser.close();
