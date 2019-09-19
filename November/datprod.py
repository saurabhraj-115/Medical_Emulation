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
            patdat[i]['patient_id']=str(i+201909)
            patdat[i]['name']=fake.name()
            patdat[i]['email']=fake.email()
            #patdat[i]['country']=fake.country()
            patdat[i]['address']=fake.address()
            #patdat[i]['name']=fake.name()
            patdat[i]['body_temp_degF']=str(round(random.uniform(97.3,101.2),1))
            patdat[i]['heart_rate']=str(round(random.uniform(72.0,89.0),1))
            patdat[i]['systolic_BP']=str(round(random.uniform(112.0,138.0),1))
            patdat[i]['diatolic_BP']=str(round(random.uniform(59.0,89.0),1))
            patdat[i]['anesthesia_duration']=str(round(random.uniform(192.0,305.0),1))

        with open('patient_data.json', 'w') as fp:
            json.dump(patdat, fp)

while True:
    system('clear')
    dp = DatProd()
    num=500
    #num=int(input("How many patients' data do you want to retrieve?"))
    dp.inputDat(num)
    system('atom patient_data.json')
    break
