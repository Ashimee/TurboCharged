MINIFY = True

import os

#importing the generation base which has the replace areas
generated = ''
with open('./GENERATION BASE.js', 'r') as file:
    generated = file.read()

#adding the globals
with open('./globals.js', 'r') as file:
    generated = generated.replace('//globals', file.read())

#adding the utils
with open('./utils.js', 'r') as file:
    generated = generated.replace('//utils', file.read())

#adding the color override
with open('./color override.js', 'r') as file:
    generated = generated.replace('//color override', file.read())

#adding the injector
with open('./injector.js', 'r') as file:
    generated = generated.replace('//injector', file.read())

#adding the functions to register the overrides
with open('./register categorys.js', 'r') as file:
    generated = generated.replace('//register categorys', file.read())

#importing the classes and xml for the categorys
categorys = ''
for filename in os.listdir("./categorys"):
    with open(f'./categorys/{filename}', 'r') as file:
        categorys = '{}\n{}'.format(categorys, file.read())
generated = generated.replace('//CATEGORYS', categorys)

#importing the functions and event for special categorys
#pen, micro:bit, etc etc...
specials = ''
for filename in os.listdir("./special categorys"):
    with open(f'./special categorys/{filename}', 'r') as file:
        specials = '{}{}'.format(specials, file.read())
generated = generated.replace('//SPECIAL CATEGORYS', specials)

#optional minifying
if MINIFY:
    import requests
    response = requests.post('https://www.toptal.com/developers/javascript-minifier/api/raw', data=dict(input=generated)).text
    generated = '{}'.format(response.replace('\xf0�\xaa�', '🪄', -1))

#saving the generated JS
with open('./# TurboCharged.js', 'wb') as file:
    file.write(bytes(generated.encode("utf-32")))