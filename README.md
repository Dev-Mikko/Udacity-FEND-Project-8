# README - Project 8 for Udacity Front End Nanodegree

**Creator**: Michele "*Dev_Mikko*" De Palma

**What is that?**

It's a single page webapp map of all Apulian universities, a region of Southern Italy, creating using ReactJS.

**How to use**:

- Download NodeJS and install it
- Open your terminal (if you are on Windows, open Commands prompt or Windows Powershell)
- Execute the following command to verify that NodeJS is correctly installed:

```
node -v
```

- Download the project
- Move to the project directory with your terminal:

**Linux/macOS:**

```cd <path>```

**Windows:** (if you are working on the same partition of your system install)

```cd <path>```

**Windows:** (if you are working on other partition)

```cd /d <path>```

- Edit the file Map.js (./src/components/Map.js) and insert your Google Maps API key in the API area to remove "For development use only" watermark:

```
[...]

export default GoogleApiWrapper({
	apiKey: '',
})(MapContainer)
```

- Execute the following commands on your terminal:

```
npm install

npm start
```

- The browser will open automatically
- Enjoy the app

**Project notes:**

Rember to insert your personal API key to enjoy the full potential of this web app.
All the datas are stored inside the Places.json file (.src/data/Places.json).
You can use this app offline thanks to service worker (./src/registerServiceWorker.js) but only after you use the following command inside your terminal:

```
npm run build
```

**Credits**:

- Michele "*Dev_Mikko*" De Palma
- Udacity for the Nanodegree's lessons 
- NodeJS
- Facebook for ReactJS
- All creators of implemented components (prop-types, sort-by, escape-string-regexp, Material-UI React, google-maps-react)