rm -rf dist
mkdir dist

echo 'generating index.html'
pug -P src/index.pug -o .

echo '\ngenerating dist/_css/styles.css'
mkdir dist/_css
node-sass src/_css/styles.scss > dist/_css/styles.css
echo 'done'

echo '\ngenerating dist/_fonts'
mkdir dist/_fonts
icon-font-generator src/_fonts/*.svg -o dist/_fonts --types 'woff, woff2'

echo '\ncopying media files...'
mkdir dist/_media
cp src/_media/* dist/_media
echo 'done'
