# Follow the Contribution Guidelines

Following are the steps to guide you:

- Step 0: Fork <a href="https://github.com/Veeresh-Rex/Blockchain-based-land-registry" target="_blank">this</a> repository.

![step0](https://user-images.githubusercontent.com/72425181/122670349-45916200-d1df-11eb-9538-8738de17dcdb.png)

- Step 1: Then go to your Git terminal and clone your forked repo on your machine.
```
git clone https://github.com/<your-account-username>/Blockchain-based-land-registry.git
```
<br>
<br>

<br>

- Step 2: Add a upstream link to main branch in your cloned repo
  ```
  git remote add upstream https://github.com/Veeresh-Rex/Blockchain-based-land-registry.git
  ```
- Step 3: Keep your cloned repo upto date by pulling from upstream (this will also avoid any merge conflicts while committing new changes)
  ```
  git pull upstream main
  ```
- Step 4: Create your feature branch (This is a necessary step, so don't skip it)
  ```
  git checkout -b <feature-name>
  ```
- Step 5: Track your changes:heavy_check_mark: .
  ```
  git add .
  ```
- Step 5: Check for your changes.
  ```
  git status
  ```
- Step 7: Commit all the changes (Write commit message as "Small Message")
  ```
  git commit -m "Write a meaningfull but small commit message"
  ```
- Step 8: Push the changes for review
  ```
  git push origin <branch-name>
  ```
- Step 9: Create a PR on Github. (Don't just hit the create a pull request button, you must write a PR message to clarify why and what are you contributing)

### 🚩 Setting up the environment

#### Client-Side

- To setup the environment in your system run the following commands
  ```
  cd Client
  npm install
  ```
- After installing all the server dependencies run the server using the following command

  ```
  npm start
  ```
