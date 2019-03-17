# Matrix AngularSeedProject

This is a seed project for the Matrix Professional Services AppDev team to use when building a frontend with Angular; it includes a sample component, as well as relevant scripts to run and test the application. Unit testing is done with Jasmine, Karma and Sinon; end-to-end testing is done with Protractor. See directions below for running the application, as well as forking and creating/merging pull requests.

## Prerequisites

* [git](https://git-scm.com/downloads)
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/), if desired
* [Chocolatey](https://chocolatey.org/), if desired, for installing software on Windows envs

## Development process

### Forking & Cloning

1. Fork the main repo to your local GitHub account (use the "Fork" button in the upper right corner).

2. Clone your personal repo to your local computer => `git clone ${url-to-your-repo}`

3. Add the main repo as a known remote repo called "upstream" in your local env => `git remote add upstream ${url-to-main-repo}` from the root folder of the project.

### Committing changes to your local repo

1. Make your desired code changes.

2. Confirm changes => `git status`

3. Stage changes => `git add .` (for all changes) or `git add ${filename}` (for specific files only)

4. Commit changes => `git commit -m "${my-commit-message}"` (alternatively, can combine steps 3 & 4 using `git commit -am "${my-commit-message}"` which stages and commits all changes)

5. Push changes up to your personal repo => `git push origin master` (for alternate branches or remote repos, use `git push ${remote-repo-alias} ${branch-name}`)

### Submitting Pull-Requests from your personal repo

0. Test your code to ensure desired behavior, and ensure your code is pushed to your personal repo!

1. From your personal repo in GitHub, click "New pull request" button.

2. Review changes visually to confirm all changes are intended and complete.

3. Click "Create pull request" button.

4. Provide a clear, concise, accurate title to the pull request.

5. Click "Create pull request" button again to submit PR to main repo.

### Merging Pull-Requests into main repo (Dev Lead only!)

1. Review all changes for issues/concerns.

2. If changes are acceptable, click "Merge pull request" button, review/edit comment, then click "Confirm merge".

3. If changes are not acceptable, add comment to the pull request, then click "Comment"; submittor should receive comment informing him/her what to change to make the pull request acceptable.

### Getting latest changes from upstream

1. Get latest changes => `git fetch upstream`

2. Merge latest changes => `git merge upstream/master`

3. For any merge conflicts, open specified files and manually resolve conflict to get the file into desired state.

4. Stage and Commit any changes needed to resolve conflicts (see "Committing changes..." section above).

5. Continue developing!


## Development server

Run `npm run start` to run the app locally.
Alternatively, run `npm run start:mock` to run the app locally using mock data.
Navigate to `http://localhost:4200/` in your browser. Note, the app should automatically reload if you change any of the source files.


## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`.


## Recommended reading

### Angular
* [Angular docs](https://angular.io/docs)
* [Angular Style Guide](https://angular.io/guide/styleguide)
* [AirBnB JavaScript Style Guide](https://github.com/airbnb/javascript)
* [Awesome Angular - various angular resources](https://github.com/AngularClass/awesome-angular)
* [Matrix blog post about architectural basics for Angular apps](https://www.matrixres.com/resources/blogs/2017-04/building-a-complex-app-with-angular2-lessons-learned/)
* [Overview of technologies in an Angular project](https://yakovfain.com/2016/07/23/wrote-a-book-on-angular-2-do-i-know-it/), slightly dated given Angular & CLI progress but still useful
* [Thinking in Angular by Rangle.io](https://www.youtube.com/watch?v=XlqoPpLMdwY)
* [Overview of Reactive Programming](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
* [Overview of Angular Change Detection](https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html)
* [Change Detection @ng-conf2015](https://www.youtube.com/watch?v=jvKGQSFQf10)
* [Using NPM as a build tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
* [Automatic version tagging in git based on npm package version](https://coderwall.com/p/mk18zq/automatic-git-version-tagging-for-npm-modules)
* [Dev vs Prod buils in Angular-CLI](https://github.com/angular/angular-cli/wiki/build#--dev-vs---prod-builds)
* [Getting started with Sass, the CSS preprocesor being used within this project ](http://sass-lang.com/guide)
* [Angular Testing guide](https://angular.io/guide/testing)


## Recommended settings for VisualStudioCode to facilitate consistent formatting
    "editor.detectIndentation": true,
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
    "editor.trimAutoWhitespace": true,
    "files.trimTrailingWhitespace": true,

...
