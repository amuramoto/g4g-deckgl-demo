# Maps JS API with deck.gl Scatterpot Layer Demo

This example app shows how use the deck.gl Scatterplot Layer data visualization on Google Maps. The Scatterplot Layer ingests a set of geocodes and renders them as a scatterplot of dots on the map. This demo renders all of the street trees in New York City's five boroughs as a set of fice composite layers.

## What you'll need

1. A GCP account with a valid billing account.
2. A GCP project with the Maps JavaScript API enabled.
3. A valid API key for the project
3. node.js installed

## Running the app

To run the app on localhost, do the following:

1. Run `npm install` to download dependencies.

2. Set your API key in at the top of `app.js` in the `YOUR_API_KEY` constant.

3. Run `npm start`.

Your browser will open to `http://localhost:8080`.

## The app won't run!

Make sure that your API key is valid and doesn't have any restrictions that would prevent it making calls to the Maps JavaScript API on localhost.


## Datasource

This demo uses a dataset available from [NYC Open Data](https://data.cityofnewyork.us/).