import sys
from PIL import Image
# usage: sheet.py out.png cols crop(0/1) files...
out, cols, crop = sys.argv[1], int(sys.argv[2]), sys.argv[3] == "1"
ims = [Image.open(f).convert("RGB") for f in sys.argv[4:]]
if crop:
    boxes = []
    for im in ims:
        g = im.convert("L").point(lambda v: 255 if v < 238 else 0)
        boxes.append(g.getbbox() or (0, 0, im.width, im.height))
    x0 = min(b[0] for b in boxes); y0 = min(b[1] for b in boxes); x1 = max(b[2] for b in boxes); y1 = max(b[3] for b in boxes)
    pad = 20
    ims = [im.crop((max(0, x0 - pad), max(0, y0 - pad), min(im.width, x1 + pad), min(im.height, y1 + pad))) for im in ims]
w = max(i.width for i in ims); h = max(i.height for i in ims)
rows = (len(ims) + cols - 1) // cols
sheet = Image.new("RGB", (w * cols, h * rows), "white")
for k, im in enumerate(ims): sheet.paste(im, ((k % cols) * w, (k // cols) * h))
sheet.save(out)
print(sheet.size)
