"""Genera una ilustración 16:9 con Gemini usando una foto real del estudio como referencia de estética.

Uso: python scripts/gemini-card.py <foto_ref.jpg> <salida.webp> "<escena>" [modelo]
"""
import sys, io, json, time, base64, subprocess, urllib.request, urllib.error
from PIL import Image

PROJECT = "fmmarketingdigital-maps"
ref, out, escena = sys.argv[1], sys.argv[2], sys.argv[3]
MODEL = sys.argv[4] if len(sys.argv) > 4 else "gemini-2.5-flash-image"

b = io.BytesIO()
im = Image.open(ref).convert("RGB")
im.thumbnail((1024, 1024))
im.save(b, "JPEG", quality=90)
tok = subprocess.check_output(
    "gcloud auth print-access-token --account transcitynorwalk@gmail.com", shell=True
).decode().strip()

prompt = (
    "The attached photo is a real dental clinic. Create a NEW photorealistic 16:9 photograph set in this same clinic, "
    "matching its look exactly: bright, airy, minimalist white interior, beige floor tiles, soft diffuse daylight, "
    "clean white and light-grey tones, shallow depth of field, professional editorial photography. "
    f"Scene: {escena} "
    "Faces should be out of frame, turned away or softly out of focus. No text, no logos, no watermarks."
)
body = {
    "contents": [{"role": "user", "parts": [
        {"inlineData": {"mimeType": "image/jpeg", "data": base64.b64encode(b.getvalue()).decode()}},
        {"text": prompt},
    ]}],
    "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": "16:9"}},
}
url = f"https://aiplatform.googleapis.com/v1/projects/{PROJECT}/locations/global/publishers/google/models/{MODEL}:generateContent"

for intento in range(6):
    req = urllib.request.Request(url, json.dumps(body).encode(),
                                 {"Authorization": "Bearer " + tok, "Content-Type": "application/json"})
    try:
        r = json.load(urllib.request.urlopen(req, timeout=300))
        break
    except urllib.error.HTTPError as e:
        if e.code == 429:
            time.sleep(20 * (intento + 1))
            continue
        print(e.read().decode()[:400])
        sys.exit(1)
else:
    print("429 persistente"); sys.exit(1)

part = [p for p in r["candidates"][0]["content"]["parts"] if "inlineData" in p][0]
Image.open(io.BytesIO(base64.b64decode(part["inlineData"]["data"]))).convert("RGB").save(out, "WEBP", quality=85)
print("ok", out)
