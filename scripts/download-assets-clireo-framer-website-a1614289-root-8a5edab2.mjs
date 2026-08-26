import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const OUT = "public/sites/clireo-framer-website-a1614289/root-8a5edab2/images";
const SEO = "public/sites/clireo-framer-website-a1614289/root-8a5edab2/seo";
const CDN = "https://framerusercontent.com/images/";

const FILES = [
  "r7w4rUz0elpf5RTtb7zb1MZTmhQ.webp","nehHdbGZLbGGvtzCnfwaTT4QQWk.webp","NRJ7RAbIHkChosM6TZfMgLt9oc.webp",
  "Hu23s5yrWh9GMj9Fl9nfLLaQqOw.webp","Tq7FlazMvgvvdDdZ9uI0ahHS0gA.webp","9Wyco1Y04y918xfuR6Tv5ui4.webp",
  "poFbYhdbQchROzlUdlozNuj4JPQ.webp","SebajAOsz6a8sWPvrYcEDu50c.svg","xa99qvpg8IUc9n1GZ7kGFxevJ0.svg",
  "QVULYcKsFklavhQU9fbshqfZw.svg","BqocAOOuI80JOBG7O7tbaeZUw.webp","pJSdUV9FevHoktES8cyLiFSD8jM.svg",
  "Tt3aPFPt7DrBRtEkqeQbk0sRI.webp","0U0qZF8m25gT9NcRC3H63SGwo.svg","siuwzbV8DYOrdSvEUFV4CXZAZY.webp",
  "5jWBbSjEFIHfAYKeD5tZGxvBGZ0.svg","1hIaY1IIxNgvQ6kgwdaw6yBAVhc.webp","KUlEux6SUGltrbOun5GlhZaydtQ.svg",
  "TYm6jpZh5sVjmGQaH331qF5IupQ.webp","qdBNVG8bwfV08i3g2bfy2XAc.svg","t5y8ihAWr04e5rh1e5YfzpGgPA.svg",
  "HW8DeQ9Yx95dpwt6ZgaCPOV1MRw.svg","wRcbXoDc5Kye6JPiHat2o3ftH6A.webp","mIGhhqSm244qFe4CJ5yCRmRzY.webp",
  "TWo3zf3MWRGUFg4nNjN1cFkNCA.webp","z1w45xkDJPq5Am5ur4XhOSozAw.webp","Vfimlp2gMWsvh869HuMjPvkSbo.jpg",
  "YuJ6TAgmFc8JeYQb1EFWmOe9IoI.webp","VdEtNUITn4nhxNF9KmPjDNX6bU.webp","lTrIrSG4mvwiX5mimYjf66IFlQ.png",
  "sQo1XDmGwLtXswT5vKF8E6lzzQ.png","C8dunOfMYF9Jvnsi07RsgBh78.webp","AERyzXVYeSkqwWF9eBPGEoP5Ck.webp",
  "dANsf6ioPNeYnwz49LXt7gZI7UE.webp","mm2AUcLwSXo1bprayvj24p0lDuU.webp","d3snzdodpmHtvA8pu1tO3Nb4ac.webp",
  "FmaKvHrXOJ9uBjoEUNXTOSWDpU.webp","6jTIdV87HRtET5fapkF7vFsaIc.webp","U18uXhD7MdnQOngOXKvthb9fX6U.webp",
  "PnpAr08n1JUeJxXkKediO8U3i0.webp",
];
const SEO_FILES = ["tyW7rq1BwTdSF5RXJRRIwknPNGo.svg","DMIjUp8b9TvAVYVxigaRjpghxY8.svg"];

async function grab(name, dir) {
  const res = await fetch(CDN + name);
  if (!res.ok) throw new Error(`${res.status} ${name}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(join(dir, name), buf);
  return `${name} ${(buf.length / 1024).toFixed(1)}KB`;
}

async function run(list, dir) {
  await mkdir(dir, { recursive: true });
  const results = [];
  for (let i = 0; i < list.length; i += 4) {
    const batch = list.slice(i, i + 4);
    const settled = await Promise.allSettled(batch.map((n) => grab(n, dir)));
    settled.forEach((s, j) => {
      results.push(s.status === "fulfilled" ? `OK   ${s.value}` : `FAIL ${batch[j]}: ${s.reason.message}`);
    });
  }
  return results;
}

const out = [...(await run(FILES, OUT)), ...(await run(SEO_FILES, SEO))];
console.log(out.join("\n"));
console.log(`\n${out.filter((l) => l.startsWith("OK")).length}/${out.length} downloaded`);
