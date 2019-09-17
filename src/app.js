/*
 * Copyright 2019 Google LLC

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *  https://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {loadGoogleMap} from './load_map';
import {GoogleMapsOverlay} from '@deck.gl/google-maps';
import {ScatterplotLayer} from '@deck.gl/layers';

/* SET YOU API KEY HERE */
const YOUR_API_KEY = '';

const base_uri = 'https://data.cityofnewyork.us/resource/5rq2-4hqu.json';
const trees = {
  all: base_uri + '?$limit=683788',
  manhattan: base_uri + '?$limit=65423&&boroname=Manhattan',
  bronx: base_uri + '?$limit=85203&&boroname=Bronx',
  staten_island: base_uri + '?$limit=105318&&boroname=Staten Island',
  brooklyn: base_uri + '?$limit=177293&&boroname=Brooklyn',
  queens: base_uri + '?$limit=250551&&boroname=Queens'
};

// Init the base map and deck.gl GoogleMapsOverlay, then add the layer
async function run() {
  const MAP = await loadGoogleMap(YOUR_API_KEY);
  const layers = [];
  const overlay = new GoogleMapsOverlay({
    layers: layers
  });
  overlay.setMap(MAP);
}

run();