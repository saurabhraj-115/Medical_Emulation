from faker import Faker
import json
import random
from os import system


fake= Faker()

class DatProd(object):
    def __init__(self):
        pass
    def inputDat(self,x):
        patdat={}
        for i in range(x):
            patdat[i]={}
            patdat[i]['heart_rate']=str(0)
            patdat[i]['systolic_BP']=str(round(random.uniform(118.0,122.0),1))
            patdat[i]['diatolic_BP']=str(round(random.uniform(77.0,83.0),1))
        i=0
        while (i<=490):
            patdat[i]['heart_rate']=str(80)
            patdat[i+1]['heart_rate']=str(80)
            patdat[i+2]['heart_rate']=str(80)
            patdat[i+3]['heart_rate']=str(85)
            patdat[i+4]['heart_rate']=str(60)
            patdat[i+5]['heart_rate']=str(100)
            patdat[i+6]['heart_rate']=str(80)
            patdat[i+7]['heart_rate']=str(83)
            patdat[i+8]['heart_rate']=str(80)
            patdat[i+9]['heart_rate']=str(80)
            i+=10

        with open('patient_data.json', 'w') as fp:
            json.dump(patdat, fp)

while True:
    system('clear')
    dp = DatProd()
    num=5000
    dp.inputDat(num)
    break
