# Tomaatti Timer

[![Build Status](https://travis-ci.com/bandantonio/tomaatti-timer.svg?branch=master)](https://travis-ci.com/bandantonio/tomaatti-timer)
[![Maintainability](https://api.codeclimate.com/v1/badges/7c4b6676e0f0f8eda6ce/maintainability)](https://codeclimate.com/github/bandantonio/tomaatti-timer/maintainability)
[![Documentation coverage](http://inch-ci.org/github/bandantonio/tomaatti-timer.svg)](http://inch-ci.org/github/bandantonio/tomaatti-timer)
[![codecov](https://codecov.io/gh/bandantonio/tomaatti-timer/branch/master/graph/badge.svg)](https://codecov.io/gh/bandantonio/tomaatti-timer)
[![Coverage Status](https://coveralls.io/repos/github/bandantonio/tomaatti-timer/badge.svg?branch=master)](https://coveralls.io/github/bandantonio/tomaatti-timer?branch=master)
[![devDependencies](https://david-dm.org/bandantonio/tomaatti-timer/dev-status.svg)](https://david-dm.org/bandantonio/tomaatti-timer/dev-status.svg)

Tomaatti (Finnish for tomato) is a Pomodoro timer :tomato: that makes it easier for anyone to get started with the [Pomodoro Technique &reg;](https://francescocirillo.com/pages/pomodoro-technique) .

## What? :confused: Yet another Pomodoro timer?

Well, yes and no :grinning:. Just don't hesitate - give it a try. I bet, you will like it!

There are not so many projects on GitHub with Pomodoro timers that force you to commit the murder of their authors after several minutes of use. After several days of investigation, I felt like I'm over it and I need something different.

This project was born as the result of my stydying JavaScript and I expect it to grow into a fully-featured product, as my knowledge evolve. I have a more or less clear roadmap of incremental improvements :chart_with_upwards_trend: some of which should make a real difference and stand out :rocket: _Tomaatti Timer_ from the rest of existing Pomodoro timers (yeah, I guess your reaction :satisfied: :trollface:).

The ultimate goal behind the idea of creating _Tomaatti Timer_ was not "yet another ephemeral Pomodoro timer" but rather a product with usefullness in mind, so that other people would like to use and can easily [contribute](#contributing) to.

## Getting started

The instructions below will help you to get the copy of the project up and running on your local machine for development and/or testing purposes.

The simplest and the fastest way to quickstart with the project is to use Docker. If you want more control over the process, you can choose manual deployment option.

### Deploy using Docker

#### Prerequisites

1. `Docker` [ [Mac](https://docs.docker.com/docker-for-mac/) | [Linux](https://docs.docker.com/install/linux/docker-ce/ubuntu/) | [Windows](https://docs.docker.com/docker-for-windows/) ]. Docker allows you to spin up isolated runtime environments that can be re-created and reproduced on any machine. There are no more excuses for "It works on my machine!" :wink: If you need a quick introduction to Docker, its basic concepts and commands, feel free to read [this article](https://medium.com/@kelvin_sp/docker-introduction-what-you-need-to-know-to-start-creating-containers-8ffaf064930a).

#### Steps

1. Open your terminal and execute the following command:

    ```bash
    docker run --rm --name tomaatti-timer -p 5000:5000 bandantonio/tomaatti-timer:1.0
    ```

1. Open your browser and navigate to `http://localhost:5000`.

Bingo! :tada:

### Deploy manually

#### Prerequisites

1. [`git`](https://git-scm.com). As you are already using GitHub (aren't you? :wink:), I expect you to have git installed on your machine and I also expect that you are familiar with basic `git` commands and flows. If not, feel free check [this guide](https://guides.github.com/activities/hello-world/). 
1. [`npm`](https://docs.npmjs.com). Node.js package manager is used to install, launch, and manage different packages within the project. If you need more info on how to use npm, check [this guide](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/).

#### Steps

1. Open your terminal and execute the following commands:

    ```bash
    git clone https://github.com/bandantonio/tomaatti-timer.git
    cd tomaatti-timer
    npm i
    npm run styles
    npm start
    ```

1. Open your browser and navigate to `http://localhost:5000`.

Bingo! :tada:

### Screenshots

 **Main screen** | **Running Timer**
-----------------|------------------
![Main Screen](showcase/1.png) | ![Running Timer](showcase/2.png)
 **Paused Timer** | **Break Time**
![Paused Timer](showcase/3.png) | ![Break Time](showcase/4.png)
 **Settings** | **Applied new settings** |
![Settings](showcase/5.png) | ![Applied new settings](showcase/6.png)

### Features

The current list of features includes:

* configurable timer intervals (cycle, short and long breaks)
* pause functionality
* ticking sound (optional)

### Roadmap

You can see a plan for further improvements [here](https://github.com/bandantonio/tomaatti-timer/projects/1#column-4831830).

### Technical improvements

You can see a plan for further *technical* improvements [here](https://github.com/bandantonio/tomaatti-timer/projects/1#column-4899430).

## Contributing

The project is on its early stages of development, so any kind of contribution (including :star:) is welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## Community

The Tomaatti Timer community is dedicated to providing a safe, inclusive, welcoming, and harassment-free space and experience for all community participants, regardless of gender identity and expression, sexual orientation, disability, physical appearance, socioeconomic status, body size, ethnicity, nationality, level of experience, age, religion (or lack thereof), or other identity markers. Our Code of Conduct exists because of that dedication, and we do not tolerate harassment in any form. See our full Code of Conduct [here](CODE_OF_CONDUCT.md).

## Versioning

Tomaati Timer receives its versions according to [SemVer](http://semver.org/).

## License

[MIT](LICENSE). &copy; 2019, [Antonio Zolotukhin](https://mister-gold.pro).