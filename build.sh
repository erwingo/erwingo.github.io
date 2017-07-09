rm -rf dist
mkdir dist

echo 'generating index.html'
pug -P src/index.pug -o .

echo '\ngenerating dist/_css/styles.css'
mkdir dist/_css
node-sass src/_css/styles.scss > dist/_css/styles.css
echo 'done'

echo '\ngenerating dist/_fonts'
mkdir dist/_fonts && mkdir dist/_fonts/icons
icon-font-generator src/_fonts/icons/*.svg -o dist/_fonts/icons --types 'woff, woff2' --jsonpath 'dist/_fonts/icons/index.json'

echo '\ncopying media files...'
mkdir dist/_media
cp src/_media/* dist/_media
echo 'done'
