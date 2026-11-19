import sys, io, json, base64, subprocess, urllib.request
from PIL import Image
PROJECT="fmmarketingdigital-maps"; MODEL=sys.argv[5] if len(sys.argv)>5 else "gemini-2.5-flash-image"
src,out=sys.argv[1],sys.argv[2]; crop_h=float(sys.argv[3]); yc=float(sys.argv[4])
W,H=1600,900
im=Image.open(src).convert("RGB"); w,h=im.size
ch=int(h*crop_h); top=max(0,min(h-ch,int(h*yc-ch/2)))
im=im.crop((0,top,w,top+ch)); im=im.resize((round(w*H/ch),H),Image.LANCZOS); x=(W-im.width)//2
canvas=Image.new("RGB",(W,H),(128,128,128)); canvas.paste(im,(x,0))
b=io.BytesIO(); Image.open(src).convert("RGB").save(b,"JPEG",quality=92)
tok=subprocess.check_output("gcloud auth print-access-token --account transcitynorwalk@gmail.com",shell=True).decode().strip()
prompt=("Expand this vertical photograph into a 16:9 horizontal wide shot of the same room. Keep every object from the original exactly as it is, same position relative to each other, same colors and lighting; only reveal more of the room to the left and right, filling the extra space ONLY with plain empty white wall and the same floor tiles. Do NOT add any new furniture, sofas, chairs, windows, doors, plants, TVs, screens, artwork, cabinets or equipment; nothing that is not visible in the original. No people, no text, no logos. Photorealistic, same camera look.")
_unused=(" of a dental clinic placed in the center of a 16:9 canvas with flat grey bars on the left and right. "
 "Outpaint: replace ONLY the grey bars by naturally extending the scene (walls, floor, ceiling, lighting) so it reads as one continuous wide-angle photograph. "
 "Do not alter the central photo. Keep it plausible and minimal: plain white walls and continuing floor; do not add people, text, logos, screens, artwork or new equipment.")
body={"contents":[{"role":"user","parts":[{"inlineData":{"mimeType":"image/jpeg","data":base64.b64encode(b.getvalue()).decode()}},{"text":prompt}]}],
 "generationConfig":{"responseModalities":["IMAGE"],"imageConfig":{"aspectRatio":"16:9","imageSize":"1K"}}}
url=f"https://aiplatform.googleapis.com/v1/projects/{PROJECT}/locations/global/publishers/google/models/{MODEL}:generateContent"
req=urllib.request.Request(url,json.dumps(body).encode(),{"Authorization":"Bearer "+tok,"Content-Type":"application/json"})
try: r=json.load(urllib.request.urlopen(req,timeout=300))
except urllib.error.HTTPError as e: print(e.read().decode()[:400]); sys.exit(1)
part=[p for p in r["candidates"][0]["content"]["parts"] if "inlineData" in p][0]
g=Image.open(io.BytesIO(base64.b64decode(part["inlineData"]["data"]))).convert("RGB")
# paste original back with soft 24px feather
m=Image.new("L",(W,H),0); inner=Image.new("L",(im.width,H),255)
from PIL import ImageFilter
m.paste(inner,(x,0)); m=m.filter(ImageFilter.GaussianBlur(10)); m.paste(Image.new("L",(im.width-48,H),255),(x+24,0))
g.save(out,"WEBP",quality=85); print("ok",out)
