import cv2
import os
import numpy as np
import time
import xlwt,os
from xlwt import Workbook
from PIL import Image
faceDetect=cv2.CascadeClassifier('mission_pluto.xml')
rec = cv2.face.LBPHFaceRecognizer_create()
rec.read(r"C:\Users\admin\Desktop\Project Expo\recognizer\trainingdata.yml")
id=0
font = cv2.FONT_HERSHEY_SIMPLEX
path1='Test_Data'
imagepaths1=[os.path.join(path1,f) for f in os.listdir(path1)]
print(imagepaths1)
wb = Workbook()
sheet1 = wb.add_sheet('Sheet 1') 
print(imagepaths1)
info = ['praharsha','Lokesh','Dheeraj','Hashmita','Vamsi','Dinakar','Satish','sameer','Neeharika','Revanth','Karthik','sreekar','Sikki','Baasha','yamini','Apoorva']
c=0
sheet1.write(c,0,"Original")
sheet1.write(c,1,"Predicted")
for i in imagepaths1:
    c=c+1
    id=int(os.path.split(i)[-1].split('.')[1])
    sheet1.write(c,0,info[id-1])
    pic = cv2.imread(i)
    img=pic
    gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    faces=faceDetect.detectMultiScale(gray,1.3,1);
    for(x,y,w,h) in faces:
        cv2.rectangle(img, (x,y), (x+w,y+h),(0,0,255),2)
        id,conf=rec.predict(gray[y:y+h,x:x+w])
        if(id-1 < len(info)):
            name = info[id-1]
        else:
            name='unknown'
        
        sheet1.write(c,1,name)
    
wb.save('Project.xls')

cv2.destroyAllWindows()
os.system(r"C:\Users\admin\eclipse-workspace\StoringLoginData\WebContent\RegisteringData.html")


