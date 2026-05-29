// Generates a professional 500x500 Maschine pack artwork using Canvas

export function generatePackArtwork(
  packName: string,
  authorName: string,
  sampleCount: number,
  accentColor: string = "#f59e0b"
): string {
  const canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 500;
  const ctx = canvas.getContext("2d")!;

  // Background gradient
  const bg = ctx.createLinearGradient(0, 0, 500, 500);
  bg.addColorStop(0, "#0d0d0d");
  bg.addColorStop(1, "#1c1c1c");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 500, 500);

  // Subtle grid lines
  ctx.strokeStyle = "rgba(255,255,255,0.03)";
  ctx.lineWidth = 1;
  for (let x = 0; x < 500; x += 25) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 500); ctx.stroke();
  }
  for (let y = 0; y < 500; y += 25) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(500, y); ctx.stroke();
  }

  // Waveform bars at the bottom (decorative)
  const barCount = 64;
  const barW = 500 / barCount;
  const seed = packName.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const pseudo = (n: number) => {
    const x = Math.sin(seed + n) * 10000;
    return x - Math.floor(x);
  };

  for (let i = 0; i < barCount; i++) {
    const h = 20 + pseudo(i * 7 + 1) * 120;
    const alpha = 0.12 + pseudo(i * 3 + 2) * 0.18;
    const grad = ctx.createLinearGradient(0, 500 - h, 0, 500);
    grad.addColorStop(0, accentColor + "00");
    grad.addColorStop(1, accentColor + Math.round(alpha * 255).toString(16).padStart(2, "0"));
    ctx.fillStyle = grad;
    ctx.fillRect(i * barW, 500 - h, barW - 1, h);
  }

  // Left accent stripe
  const stripe = ctx.createLinearGradient(0, 0, 0, 500);
  stripe.addColorStop(0, accentColor);
  stripe.addColorStop(1, accentColor + "40");
  ctx.fillStyle = stripe;
  ctx.fillRect(0, 0, 4, 500);

  // Top accent dot
  ctx.fillStyle = accentColor;
  ctx.beginPath();
  ctx.arc(24, 24, 5, 0, Math.PI * 2);
  ctx.fill();

  // Pack name — large, bold
  ctx.fillStyle = "#ffffff";
  const maxFontSize = 72;
  const minFontSize = 32;
  let fontSize = maxFontSize;
  let lines: string[] = [];

  // Word-wrap the pack name
  const words = packName.split(" ");
  for (let fs = maxFontSize; fs >= minFontSize; fs -= 4) {
    ctx.font = `bold ${fs}px 'Courier New', monospace`;
    const testLines: string[] = [];
    let current = "";
    for (const word of words) {
      const test = current ? `${current} ${word}` : word;
      if (ctx.measureText(test).width > 440 && current) {
        testLines.push(current);
        current = word;
      } else {
        current = test;
      }
    }
    if (current) testLines.push(current);
    if (testLines.length <= 3) {
      fontSize = fs;
      lines = testLines;
      break;
    }
  }

  const lineHeight = fontSize * 1.15;
  const totalTextH = lines.length * lineHeight;
  const startY = 240 - totalTextH / 2 + fontSize;

  ctx.font = `bold ${fontSize}px 'Courier New', monospace`;
  ctx.fillStyle = "#ffffff";
  lines.forEach((line, i) => {
    ctx.fillText(line, 36, startY + i * lineHeight);
  });

  // Subtle highlight line under name
  const underlineY = startY + (lines.length - 1) * lineHeight + 14;
  const ug = ctx.createLinearGradient(36, 0, 300, 0);
  ug.addColorStop(0, accentColor);
  ug.addColorStop(1, accentColor + "00");
  ctx.fillStyle = ug;
  ctx.fillRect(36, underlineY, 260, 2);

  // Author name
  if (authorName) {
    ctx.font = "14px 'Courier New', monospace";
    ctx.fillStyle = "rgba(255,255,255,0.45)";
    ctx.fillText(authorName.toUpperCase(), 38, underlineY + 28);
  }

  // Sample count badge — top right
  const badge = `${sampleCount} SAMPLES`;
  ctx.font = "bold 11px 'Courier New', monospace";
  const badgeW = ctx.measureText(badge).width + 20;
  ctx.fillStyle = accentColor + "25";
  ctx.beginPath();
  ctx.roundRect(500 - badgeW - 20, 16, badgeW, 24, 4);
  ctx.fill();
  ctx.fillStyle = accentColor;
  ctx.fillText(badge, 500 - badgeW - 10, 32);

  // Bottom text — "MASCHINE MK3"
  ctx.font = "10px 'Courier New', monospace";
  ctx.fillStyle = "rgba(255,255,255,0.18)";
  ctx.fillText("PREPARED FOR MASCHINE MK3", 36, 484);

  return canvas.toDataURL("image/png");
}
