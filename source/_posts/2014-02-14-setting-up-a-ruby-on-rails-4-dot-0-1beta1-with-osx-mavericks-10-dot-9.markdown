---
layout: post
title: "Setting up a Ruby on Rails 4.0.1beta1 with OSX Mavericks 10.9"
date: 2014-02-14 01:21:15 -0500
comments: true
categories:
- Ruby on Rails
---

I keep having to setup Rails environments for people so I am just going to write my first blog article on how to do it on OSX 10.9.  

Installing the Command line tools
The GCC compiler is required with installing RVM and Brew, so you need to download and install these tools.  Open terminal and type in this:
xcode-select --install

Installing HomeBrew
Homebrew is a package manager that makes it stupid easy to install and update software.  We will be using this tool to install Git, Postgres, and RVM.  To install this tool enter this into the terminal:
ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go/install)"
After the install type in
brew doctor
This will update brew and fetch the latest installation scripts

Installing Postgres
Most guides recommend installing MySQL as the db engine, but because Heroku defaults to Postgres and Postgres is the hot thing right now, I use it in dev and in my production environments.

To install, type this command into the terminal:
brew update
brew install postgresql
At the end of the install, follow the instructions for how to startup the server.  I would recommend to have it autostart with login, so you don’t have to think about it.  If you wish to manually start it when you need it, don’t lose that command to start it.

Installing RVM
RVM is a ruby version manager.  It allows you to install multiple versions of ruby on your computer and easily switch between them.  This is important because as new versions of ruby on released, you will want to be able to test websites before deploying them and you may need to switch back to an old version if you encounter bugs.

\curl -L https://get.rvm.io | bash -s stable

Install Rails
To install the rails toolset type in this to terminal:
gem install rails

Installing Git
git is the most common tool for managing source code.  I would recommend creating an account on github and using that as your source control.  Check out these guides for a quick start with git: 
Quick start git guide from the terminal:
http://rogerdudler.github.io/git-guide/

GitHub flow:
I think I want to uses this pattern for the repo if more than one person is working on it.
http://scottchacon.com/2011/08/31/github-flow.html

To install Git CLI
brew update
brew install git

I also use Github’s GUI tool because it makes committing easier.  Unfortunately it tends to fall flat on its face outside of the happy path (read merge conflicts and rebasing), so you can’t completely rely on this tool for git management.

To install Github GUI
Follow the instructions here:
http://mac.github.com/

Install Heroku toolbelt
Heroku is a popular hosting service for rails applications, mostly because it is free and easy to use.

Make an account at heroku.com
Install the toolbelt found here https://toolbelt.heroku.com/

Optional Installing Sublime:
Sublime is probably the most common text editor for Rails development.  You can download it here: http://www.sublimetext.com/ 