#autoBuild.sh

WEB_PATH= $(dirname "$PWD")

echo "Start deployment"
cd $WEB_PATH
cd '/d/Code/webhook/initMobile/'
echo "pulling source code..."

git reset --hard origin/master
git clean -f
git pull
git checkout master
cnpm install
npm run serve
echo "Finished."
