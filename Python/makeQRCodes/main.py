import pyqrcode

data = "https://ayushirawat.com/create-your-own-audiobook-from-any-pdf-with-python"

# pip install pyqrcode
# pip install pypng

img = pyqrcode.create(data)
# naming the image
img.png("makeQRCodesWithPython.png", scale=10)
