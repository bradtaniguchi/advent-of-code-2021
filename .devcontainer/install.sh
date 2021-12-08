#!/bin/bash

# Get latest from repo
echo ">> fetching"
git fetch

# install and setup nvm version
echo ">> updating nvm"
nvm use
nvm install
npm config delete prefix
nvm alias default node

# set vim as git editor
echo ">> updating git config"
git config --global core.editor "nvim"

# update profile to load bashrc, as it doesn't do so automatically
echo ">> update profile to load ~/.bashrc"
echo "source ~/.bashrc" >> ~/.profile

# install neovim and cypress deps, required by dotfiles
echo ">> installing dependencies"
sudo apt install -y --no-install-recommends neovim

# install npm packages
echo ">> installing node deps"
npm ci


echo ">> done"
