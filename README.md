<h1 align="center">
    Proffy
</h1>



<p align="center">	
    <img src="https://raw.githubusercontent.com/pedrochamberlain/proffy/f3748f7b35b10f348b633e680a4ff8d43f6f8a2e/web/src/assets/images/landing.svg" alt="Proffy" width="500"/>
</p>

<p align="center">
  Online teaching platform made with <strong>Typescript</strong>, <strong>React Native</strong>, <strong>Expo</strong> and <strong>Express</strong> during Rocketseat's Next Level Week #2
</p>

<h2>
  How to run
</h2>

```zsh
# Clone the Repository
$ git clone git@github.com:pedrochamberlain/proffy.git

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

# Start up the server
yarn start
```

The application is hosted on [localhost:3000](http://localhost:3000).
