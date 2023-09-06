MINIFY = False
USE_URL = False

import os

#importing the generation base which has the replace areas
print('Setting up base')
generated = ''
with open('./GENERATION BASE.js', 'r') as file:
    generated = file.read()

#adding the globals
print('Adding globals')
with open('./globals.js', 'r') as file:
    generated = generated.replace('//globals', file.read())

#adding the utils
print('Adding utils')
with open('./utils.js', 'r') as file:
    generated = generated.replace('//utils', file.read())

#adding the color override
print('Adding color override')
with open('./color override.js', 'r') as file:
    generated = generated.replace('//color override', file.read())

#adding the injector
print('Adding injector')
with open('./injector.js', 'r') as file:
    generated = generated.replace('//injector', file.read())

#adding the functions to register the overrides
print('Registering overrides')
with open('./register categorys.js', 'r') as file:
    generated = generated.replace('//register categorys', file.read())

#importing the classes and xml for the categorys
print('Adding categorys')
categorys = ''
for filename in os.listdir("./categorys"):
    with open(f'./categorys/{filename}', 'r') as file:
        print('added file: ', filename)
        categorys = '{}\n{}'.format(categorys, file.read())
generated = generated.replace('//CATEGORYS', categorys)

#importing the functions and event for special categorys
#pen, micro:bit, etc etc...
specials = ''
print('Adding special categorys')
for filename in os.listdir("./special categorys"):
    with open(f'./special categorys/{filename}', 'r') as file:
        print('added file: ', filename)
        specials = '{}{}'.format(specials, file.read())
generated = generated.replace('//SPECIAL CATEGORYS', specials)

#optional minifying
if MINIFY:
    print('Minified is on.\nMinifying..')
    if not USE_URL:
        USE_URL = True
        print('Currently there is no library to minify the JS correctly, so URL has been used')
    if USE_URL:
        import requests
        response = requests.post('https://www.toptal.com/developers/javascript-minifier/api/raw', data=dict(input=generated)).text
        generated = '{}'.format(response)
    else:
        from css_html_js_minify import process_single_js_file, js_minify
        generated = js_minify(generated)
    print('Minified')

#fixing emojis
print('Fixing emojis')
generated = generated.replace('ðŸª„', '🪄', -1) #magic wand
generated = generated.replace('ðŸ¥š', '🥚', -1) #egg
generated = generated.replace('â‰¥', '≥', -1) #greater-than or equal
generated = generated.replace('â‰¤', '≤', -1) #less-than or equal

#saving the generated JS
print('Writing to file')
with open('./# TurboCharged.js', 'wb') as file:
    file.write(bytes(generated.encode("utf-8")))
print('Done generating!\nCheck "# TurboCharged.js"')