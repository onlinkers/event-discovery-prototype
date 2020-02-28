[![Netlify Status](https://api.netlify.com/api/v1/badges/9c2b1115-c493-484a-a3be-e9062c9573f4/deploy-status)](https://app.netlify.com/sites/link-link-web-app/deploys)

# Event Discovery App
ONLINKERS' Event Web Application

Some libraries used in this app:
- Router via `vue-router`
- Storage Management via `vuex`
- Component Styles via `vuetify` and `bootstrap-vue`
- Maps via `mapbox-gl` and `vue-mapbox`
- Free Icons via `fortawesome`

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node.js v13 (npm v6) (Download [here](https://nodejs.org/en/download/)
- EsLint v6.8 (Setup Instructions [here](https://eslint.org/))

### Installing

1. Clone the repository: ```git clone```
2. Install the packages: ```cd event-discovery-prototype``` and ```npm install```
3. Setup the [environmental files](#environmental-files)

### Running

Start the web app by doing

```npm run serve```

This should open a browser tab with the URL: "http://localhost:8080". The port 8080 may differ if you are running multiple instances of the app, but in general 808x. If a browser tab isn't opened, simply look through the logs on the Vue CLI to find the address. 

## Development

Development is recommended to be done on a system where [eslint](https://eslint.org/) is installed, and using [VSCode](https://code.visualstudio.com/)

### Linting

Linters are put into place to exercise good and consistent coding style, regardless of developer. Editing lint rules and such can be done by changing the `.eslintrc.js` file, which is not recommended until approved by lead developers of the team.

Lint checks will run during a *pre-commit*, meaning that they will throw an error and abort the commit if the style checks detect an error (warnings are ignored)

<hr />

Further good coding practices can be addressed by reading [this](https://github.com/orgs/onlinkers/teams/principal/discussions/1) document on the **TEAMS** page

<hr />

### Environmental Files

A dotenv (`.env.local`) environmental file needs to be created at `root`

> You can do this easily by copying and renaming `.env.default`

### Components and Services

Custom pages are located in `src/views`, while custom-created components are located in `src/components`

Any miscellaneous functions are located in `src/utils`, where `src/utils/index.js` compiles all the functions and exports them for easy importing

### Styles

Styles are written **inside** `.vue` components, recommended as scoped styles, and in SCSS

Styles are pre-compiled using [sass-loader](https://vue-loader.vuejs.org/guide/pre-processors.html#sass)

Overwrites to libraries or global style variables and constants can be wrriten in `src/assets/scss`, which is pre-pended using `sass-loader`

## Deployment

None yet. Application's `master` branch is currently built on Netlify for live viewing. Build settings can be accessed ONLY through the onlinker-admin netlify account. Netlify teams has a billing plan which we are too cheap to purchase as of now.

Run `npm run build` to minify and compile the application for production

## Contributing
Contributions are only accepted from members of the [team](https://github.com/orgs/onlinkers/people). Instructions to start contributing are as follows:

1. Clone the remote repository into a local environment
2. Setup the repository (instructions [here](#getting-started))
3. Make the appropriate edits and additions
4. Submit pull requests with a detailed commit message of what additions were made
--> Pull requests will be accepted after being reviewed and after the appropriate tests are conducted

### Built With

* [Vue](https://vuejs.org/v2/guide/) - MVVm Javascript Framework
* [Netlify](https://www.netlify.com/) - Build and Deployment

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
