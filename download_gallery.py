import urllib.request
import os

images = {
    "g1.jpg": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80",
    "g2.jpg": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop&q=80",
    "g3.jpg": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80",
    "g4.jpg": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=80",
    "g5.jpg": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    "g6.jpg": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&auto=format&fit=crop&q=80"
}

os.makedirs("assets", exist_ok=True)
opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)')]
urllib.request.install_opener(opener)

for name, url in images.items():
    dest = os.path.join("assets", name)
    try:
        print(f"Downloading {name}...")
        urllib.request.urlretrieve(url, dest)
    except Exception as e:
        print(f"Error downloading {name}: {e}")
