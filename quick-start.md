# Quick Start Guide

## Setting up your environment

### node

You can easily install node by visiting the [nodejs website](https://nodejs.org/en/)

> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

### git

[Install Git for Windows](http://git-scm.com/download/win)

### windows git client

I use the ***amazing*** [Atlassian Git Client for Windows](https://www.atlassian.com/software/sourcetree/overview/)

![image](https://cloud.githubusercontent.com/assets/10272832/13898503/b840b87c-ed98-11e5-8516-8a04297be101.png)

Alternatively, you could use [GitHub for Windows](https://windows.github.com/), if you prefer.


### bash

There is great power and flexibility (as well as a great cross platform story) with bash, node, gulp and related tools.  For windows users, the bash shell is similar to the DOS command prompt.  Learning the bash shell will serve you well if you every want to develop on a mac or other non-windows environment.

The bash shell can be hosted by an application called `conemu` located [here](https://conemu.github.io/).  The conemu application is great.  You can right click on a tab at the top and split vertically or horizontally (and also to restart the shell as admin, which you will usually want to do).

To get conemu to start up with the bash shell, you will want to open up the menu by clicking on the upper right `hamburger` icon and then select `settings`
![image](https://cloud.githubusercontent.com/assets/10272832/13898408/caa2c878-ed95-11e5-9acd-e91e0e9cfb2a.png)

This will bring up the settings dialog.  Select the `Tasks` item under `Startup` option in the tree on the left and make sure you have a task for Bash:
![image](https://cloud.githubusercontent.com/assets/10272832/13898433/6dbbdc02-ed96-11e5-8950-239aeaf3dbef.png)

Now you can select the `Startup` option in the tree on the left, and make sure the Bash task is the startup action:
![image](https://cloud.githubusercontent.com/assets/10272832/13898442/ad8078e8-ed96-11e5-8f62-a173319dd76c.png)

### gulp

Now, to `automate and enhance your workflow`, you will need to install [gulp](http://gulpjs.com/).

From the bash shell, install gulp (globally):

```bash
npm install -g gulp
```

### Get the `aurelia-axel` repo on your workstation

From the bash shell, clone the [aurelia-axel](https://github.com/cmichaelgraham/aurelia-axel) repo.  Hint: make sure you are in the folder under which you'd like the aurelia-axel folder created.

```bash
git clone git://github.com/cmichaelgraham/aurelia-axel
```

For help with the above command, see great [Atlassian Getting Started Info](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone)

Less fun, but also works: download the [zip file](https://github.com/cmichaelgraham/aurelia-axel/archive/master.zip) and extract it in the location you desire.

I won't go into it here, but you can clone using [Atlassian SourceTree]()

### Prepare Visual Studio

### Prepare SQL Server

## Creating OData Services

### Create EF Model

### Create OData Controller

## Create Client Web Pages

### Create Search Page

### Create Details Page

## Documentation

### Document C# Assets

### Document TypeScript Assets

## Testing

### Create Unit Tests

### Create E2E Tests

## Clients

### Web App Client

### Electron-based Desktop Client

### Phone Gap - Android Client

### Phone Gap - iOS Client
