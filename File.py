import glob
import os.path
from typing import Text
import cv2
from PIL import Image
import pytesseract

# Prints the most recent png file.

folder_path = r'C:\Users\16043\Downloads'
file_type = r'\*jpg'
files = glob.glob(folder_path + file_type)
max_file = max(files, key=os.path.getctime)
print(max_file)

#Creates a black and white image.
  
originalImage = cv2.imread(max_file)
grayImage = cv2.cvtColor(originalImage, cv2.COLOR_BGR2GRAY)
  
(thresh, blackAndWhiteImage) = cv2.threshold(grayImage, 127, 255, cv2.THRESH_BINARY)

# cv2.imshow('Black white image', blackAndWhiteImage)
# cv2.imshow('Original image',originalImage)
# cv2.imshow('Gray image', grayImage)
  
# cv2.waitKey(0)
# cv2.destroyAllWindows()

pytesseract.pytesseract.tesseract_cmd = r'C:\Users\16043\AppData\Local\Tesseract-OCR\tesseract.exe'
text = pytesseract.image_to_string(Image.open(max_file),lang='eng')

#open text file
text_file = open("D:/data.txt", "w")
 
#write string to file
text_file.write('Transcribed File.')
 
#close file
text_file.close()