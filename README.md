# Phostore
[![Build Status](https://travis-ci.com/jaspy/phostore.svg?branch=master)](https://travis-ci.com/jaspy/phostore)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9f89a5d4999a42f2b88590ed80b5021d)](https://www.codacy.com/app/foobic/phostore?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jaspy/phostore&amp;utm_campaign=Badge_Grade)

Application-storage for images. Phostore needed for creating own photo-archive. User can upload, download and delete own photos.

Phostore was written on React+Redux. For authorization and storing photos we used Firebase.
## Getting Started

### Requirements
- `node 10.15.1`
- `npm 6.4.1`
- `firebase`

### Installing

```
npm install
```

### Configuration

Create `.env` file in root directory with Firebase configuration 
```
PORT=3000
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_DATABASE_URL=your_database_url
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
```


## Development

```
npm start
```

## Running the tests

```
npm test
```

## Deployment

```
npm run build
```
Then, configure any server for serving static from `build/`.

## Authors

* **Alex Gorbov** - [foobic](https://github.com/foobic)
* **Vlad Novosadenko** - [v-lad](https://github.com/v-lad)
* **Oleksandr Zhinzher** - [alle-zhinzher](https://github.com/alle-zhinzher)

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details

