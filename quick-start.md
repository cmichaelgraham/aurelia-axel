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

I won't go into it here, but you can also clone using the wonderful [Atlassian SourceTree](https://www.atlassian.com/software/sourcetree/overview/) application.

### Prepare Visual Studio

If you don't alerady have it, grab yourself a copy of [Visual Studio - (free) Community Edition](https://www.visualstudio.com/products/visual-studio-community-vs)

You'll need this for developing the server-side code.  This is only one path for server-side code, of course.

### Prepare SQL Server

We are going to put some data into SQL Server, so if you don't have access to an existing SQL Server database, you can get the (free) [SQL Server Express here](https://www.microsoft.com/en-us/server-cloud/products/sql-server-editions/sql-server-express.aspx).  The version with the tools will give you SQL Server Management Studio, excellent for managing your databases.

## Creating OData Services

### Create EF Model

### Create OData Controller

## Create Client Web Pages

### Create Search Page

### Create Details Page

## Documentation

### Document C# Assets

### Document TypeScript Assets

### Documenting WebAPIs

1. Right click Visual Studio Solution
2. Choose `Manage Nuget Packages`
3. Search for `Swashbuckle` on nuget.org
4. Add it to your WebAPI project
5. Search for `Swashbuckle.OData`
6. Add it to your WebAPI project

Background Information on Documenting WebAPIs
* [swashbuckle on github](https://github.com/domaindrivendev/Swashbuckle#swashbuckle-50)
* [swashbuckle odata on github](https://github.com/rbeauchamp/Swashbuckle.OData#swashbuckleodata)
* [swagger](http://swagger.io/)
* [open api spec](https://github.com/OAI/OpenAPI-Specification#the-openapi-specification-fka-the-swagger-specification)

The goal of The OpenAPI Specification is to define a **standard, language-agnostic interface to REST APIs** which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined via OpenAPI, a consumer can understand and interact with the remote service with a minimal amount of implementation logic. Similar to what interfaces have done for lower-level programming, OpenAPI removes the guesswork in calling the service.

Use cases for machine-readable API interfaces include: 
> * interactive documentation, 
> * code generation for 
>     * documentation, 
>     * client, and 
>     * server, as well as 
>     * automated test cases. 

OpenAPI-enabled APIs expose JSON files that correctly adhere to the OpenAPI Specification, documented in this repository. 

These files can either be produced and served statically, or be generated dynamically from your application.

## Testing

### Create Unit Tests

### Create E2E Tests

## Clients

### Web App Client

### Electron-based Desktop Client

### Phone Gap - Android Client

### Phone Gap - iOS Client
