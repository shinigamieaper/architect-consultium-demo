import { chromium } from "playwright";
const b = await chromium.launch();
for (const [w,h,tag] of [[1440,900,"d"],[390,844,"m"]]) {
  const p = await b.newPage({ viewport: { width: w, height: h }, isMobile: w<500 });
  await p.goto("http://localhost:3312/", { waitUntil: "networkidle" });
  await p.addStyleTag({ content: "html{scroll-behavior:auto !important}" });
  await p.waitForTimeout(700);
  await p.screenshot({ path: `C:/Users/facom/.claude/jobs/bfc62a15/tmp/hero-${tag}.png` });
  await p.close();
}
await b.close();
console.log("shot");
