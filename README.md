To run the application:

Install Angular and Ionic

Node Version:
23.9.0

npm install -g @angular/cli
npm install -g @ionic/cli
npm install

`ng serve`

Design assumptions:

Used a similar font to design spec
Used ionic library components

Reusable Components:

Type, Instrument, SearchInstrument, Card all reusable dumb components to keep styling and layout consistent between components. Any design updates affecting these areas can be done on the one component.

Data Sources:

Created services for the data sources and retrieved data using http request to simulate real data retrieval. Combined data from different apis to formulate the data models for each page.

I am new to Ionic and did not have time to do the animation.

I am using standalone components so the application is light weight and ready for upgrades to use Signals and zoneless.

The navigation set up seems correct going by Ionic documenation, but doesn't navigate back to Invest page, ran out of time to debug this.
