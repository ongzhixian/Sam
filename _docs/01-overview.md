# Overview

# Downgrade Angular version

npm uninstall -g @angular/cli
npm install -g @angular/cli@14
ng version

Note: We are sticking to Angular 14, because dependencies do not work well in Angular 15+

# Bundle size analysis

npm install -g webpack-bundle-analyzer
ng build --stats-json
webpack-bundle-analyzer .\dist\sam-app\stats.json