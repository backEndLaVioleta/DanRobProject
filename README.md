# Dan & Rob Project 🍔 ***BLOSSH*** 🍔

###### Recipe DDBB

### What is BLOSSH?

In this project we are going to start an APP and DB that will hold the recipes and menu from [BLOSSH](https://www.blossh.com/)

[Dan](https://github.com/dan-dm) and [Rob](https://github.com/naranjito72) had decided to use MongoDB as their model for the DB

Raul wants us to have three entities:

  * Users 
  * Recipes
  * Menu

#### USERS 

Will have two roles: 

  * Admin
  * User

<ul>
  <li>User Info
    <ul>
      <li>_id: objectId</li>
      <li>firstName: string</li>
      <li>lastName: string</li>
      <li>email: string</li>
      <li>password: string</li>
      <li>role: string</li>
    </ul>
  </li>
</ul> 

Admins will be loged in and authenticated by token. They can perform CRUD in both Recipes and Menu

Users won't need to be authenticated, but they'll only be able to read Recipes and menu

#### RECIPES

Collection will include:

<ul>
  <li>Recipes Info
    <ul>
      <li>_id: objectId</li>
      <li>name: string</li>
      <li>ingridients: array[]
        <ul>
          <li>_id: product id that will be the same as product collection. objectId</li>
          <li>name: string</li>
          <li>photo: string</li>
          <li>price: decimal (optional)</li>
        </ul>  
      </li>
      <li>photo: string</li>
      <li>preparation: string</li>
    </ul>
  </li>
</ul> 

In this stage of the DB, we'll just shhow the recipes and preparation to the menu. 

Search engine. ___Need of discussion about the queries. Search for info with [*Algolia*](https://www.algolia.com)___

In thge large run, we'll love to make it linked and related to stock and cost price

#### MENU

***How many times do we cook grilled onions?. How many cakes we made this week?...*** 

These questions mean to be answered in the menu collection. Here will show the menu from the restaurant and, at least the first stage of the 

DB how many times a recipe has been used to do some of the items from the rest menu.

<ul>
  <li>menu Info
    <ul>
      <li>_id: objectId</li>
      <li>name: string</li>
      <li>recipes: array[]
        <ul>
          <li>_id: product id that will be the same as recipe collection. objectId</li>
          <li>nameRecipe: string</li>
        </ul>  
      </li>
      <li>photo: string</li>
    </ul>
  </li>
</ul> 

#### GOALS

**First stage:**

> Admins able to do both Recipes and Menus CRUD
>
> Users able to read them
>
> search engine in recipes and menu
>
> When to cook the recipes

#### presentation 24/12/21

 * [Diapos](https://slides.com/naranjito72/deck/fullscreen#/recetario-blossh) 

 * Explanation project

 * Objectives

 * End [Points](https://documenter.getpostman.com/view/9175109/UVJYLzEw) (___or at least the main ones___)

#### Presentation 26/12/21

 * Planning 🚴‍♂️
  - [Trello](https://trello.com/b/hgAzmca5/proyecto-m4-dan-y-roberto-recetario-blossh)

 * Work Done 🎟️
  - What has been done?
  
 * Blocks ⏬
  - Issues that can affect to everyone
  
 * News 📰
  - Things that we do for love 🤎

#### Documentation

Optional fields in TypeScript thanks to [StackOverFlow](https://stackoverflow.com/questions/14142071/typescript-and-field-initializers)

#### packages added 

npm install --save @nestjs/typeorm typeorm @nestjs/config mongodb

#### GIT and GITHUB

Dan and I are working together in this project. Git commands that we highly recommend to work in a team

	* ___One repository___
	
	Pick Up one of the profiles and open just one repository. 
	
	*___One main | master___
	
	One main or master branch. Is the anchor of the project. Once the repository is created, clone it into your computer
	
	> git clone htttps://github/<name Of Organization>/<name of the repository>.git
	
	*__As MANY branches requiered___
	
	Now you can check how everything is doing into your computer
	
	> git status
	
	- To see local branches
	
	> git branch 
	
	- To see remote branches
	
	> git branch -r
	
	* __Create new Branch___
	
	> git checkout -b my_new_branch_name
	
	- To work with your new branch
	
	> git checkout my_new_branch_name
	
	**Important**
	
	Your new branch **is not yet** working in remote
	
	- To push your my_new_branch_name to the remote repository
	
	> git push -u origin my_new_branch_name
	
	or
	
	> git push -u origin HEAD
	
	*___Get and work with remote branches___
	
	- Get all branches from remote
	
	> git fetch origin
	
	- check if you have the branches from remote
	
	> git branch -v -a
	
	```
	main                    5ac0dbc Update README.md
    remotes/origin/HEAD     -> origin/main
    remotes/origin/dev-dan  cbb15fe :art: Working version
    remotes/origin/dev-rob  cf50e24 dev-rob
    remotes/origin/homeWork d23d7a2 check mail work in userService
    remotes/origin/main     5ac0dbc Update README.md

	```
	- to work in local with the remote branch
	
	> git checkout -b name_branch_ you_want origin/name_branch_you_want
	
	```
	git checkout -b dev-rob origin/dev-rob
	Switched to a new branch 'dev-rob'
	Branch 'dev-rob' set up to track remote branch 'dev-rob' from 'origin'
	```
	ready to work with the desired branch
	


