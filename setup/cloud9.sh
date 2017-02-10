#!/usr/bin/env bash

set -v

# Install latest NVM
nvm unload
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
source ~/.bashrc
NODE_VERSION="$(<$(git rev-parse --show-toplevel)/.nvmrc)"
nvm install $NODE_VERSION
nvm alias default $NODE_VERSION
nvm use $NODE_VERSION

# Install Yarn
sudo apt-get update && sudo apt-get install apt-transport-https ca-certificates
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

# Install bower
nvm use $NODE_VERSION
yarn global add bower
echo '
export PATH=$PATH:$(yarn global bin)
export PORT=8080
' >> ~/.bashrc
source ~/.bashrc

# Install dependencies
yarn --pure-lockfile
bower install

# Run ember serve
