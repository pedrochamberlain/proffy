<h1 align="center">
    Proffy
</h1>



<p align="center">	
    <img src="https://raw.githubusercontent.com/pedrochamberlain/proffy/f3748f7b35b10f348b633e680a4ff8d43f6f8a2e/web/src/assets/images/landing.svg" alt="Proffy" width="500"/>
</p>

<p align="center">
  Online teaching platform made with <strong>Typescript</strong>, <strong>React</strong>, <strong>React Native</strong>, <strong>Expo</strong> and <strong>Express</strong> during Rocketseat's Next Level Week #2
</p>

<h2>
  :computer: Running the Web Application
</h2>

<h3>
  Requirements
</h3>

- Node

```zsh
# Download nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

# This loads nvm
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install Node
nvm install node
```

- Yarn

```zsh
brew install yarn
export PATH="$PATH:`yarn global bin`"
```

<h3>
  Setup
</h3>

```zsh
# Clone the Repository
git clone git@github.com:pedrochamberlain/proffy.git

# Access the web folder
cd proffy/web

# Install the Dependencies
yarn install

# Start up the front-end
yarn start

# Access the server folder
cd ../server

# OPTIONAL: Start up a new database
rm src/database/database.sqlite
yarn knex:migrate

# Install the Dependencies
yarn install

# Start up the server, it'll be hosted on port 30
yarn start
```

<h2> 
  :iphone: Running the Phone Application (Without Emulator)
</h2>

<h3>
  Requirements
</h3>

- Install Repo on your machine

```zsh
yarn global add expo-cli
```

- Download the Expo app on your device
  - <a href="https://apps.apple.com/br/app/expo-client/id982107779">iPhone</a>
  - <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en">Android</a>

<h3>
  Setup
</h3>

```zsh
# Clone the Repository
git clone git@github.com:pedrochamberlain/proffy.git

# Access the web folder
cd proffy/mobile

# Install the Dependencies
yarn install

# Start up the app
yarn start

# Access your Expo app on your device and connect with the QR Code
```