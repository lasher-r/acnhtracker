# Animal Crossing New Horizons critter tracker.

All other critter trackers didn't have persistent storage so here you go.
This is made to run on a pi so I used sqlite in stead of mongo.  It will run anywhere node and sqlite will.

You may have to install sqlite3:

```
sudo apt-get install sqlite3
```

You'll also need node & npm.

Install deps:
```
cd server && npm i && cd ../client && npm i
```

To run:
```
npm start
```

***There is a bunch of hard coded "localhost" in this, if you can't use this on a client, start there.***
