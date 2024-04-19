# import everything you need
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

music_data = pd.read_csv('music.csv')

# clean-up data IF NEEDED!
#Split data
#first kunin natin input/s (e.g: age and gender)
inputData = music_data.drop(columns=['genre'])
# next get output/s
outputData = music_data['genre']
# by default 20% is being used as test data
inputData_forTraining, inputData_forTesting, outputData_forTraining, outputData_forTesting = train_test_split(inputData, outputData, test_size = 0.2)

# instantiate and feed algo
model = DecisionTreeClassifier()
model.fit(inputData_forTraining, outputData_forTraining)

#predict
print(inputData_forTesting)
predictions = model.predict(inputData_forTesting)
# predictions = model.predict(([22,1],[35,1],[24,0],[32,0]))
print(predictions)
score = accuracy_score(outputData_forTesting, predictions)
score