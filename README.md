# Morralito

Morralito is a custom system for a currency exchange store that allows to keep track of the movements of the store. It also offers the possibility to manage users, print receipts, create, view and print charts based on the information stored in the application.

## Get started

This project is built using:

- [React.js](https://es.reactjs.org)
- [Electron.js](https://www.electronjs.org)
- [React Bootstrap](https://react-bootstrap.github.io)

### Installation

Once the project is cloned run the following command to install the proper dependencies:

```bash
$ npm install
```

The dependencies installation might take a while so go an grab a cup of ☕️ and when you get back, the installation might be finished.

### Runing the application

Once the dependendencies had been installed just run the following command to run the project in development mode:

```bash
$ npm start
```

## Development environment

In order to make the development environment easier to read and understand and also to be consistent, the project depends on ESLint and Prettier settings that allow to keep the code clean. The [AirBnB ESLint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) rules has been applied to the project in order to maintain consistency thru the components.

It has been used some Githooks that runs the lint command in order to avoid to send some linter errors into the repository and keep our code 100% error free.
Also, in order to keep consistency thru the devs environments, it has been added a `.vscode` folder which contain some settings from the projects and also some recommended extensions that will help to the developer's performance. The extensions are "suggested" depends on the developer if installs it or not, but is recommended tho.

If have any questions about the code guidelines, the linter or any config, please, refer to the documentation first and will give you a better understanding of the tools.
