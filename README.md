# Cutecryption


This project is a Capstone that creates portable encrypted message templates in HTML for website owners, made avilable through the CuteCryption website also created here.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## App Uses
CuteCryption is used to easily create and customize message templates to include in your website. Each template provides custom keys to make your form unique to your website. 

## Problem Statement
Sending and recieving encrypted messages is overly-complicated and too time-consuming for a website owner to implement. 

## Project Information
The front end of the project is an angular web application written in typescript and html.
It gets all of its data from the [CuteCryption backend service](https://github.com/mdove92/CuteCryptionDBBackend). This is also the service we use to proxy sending emails.
The webapp itself has two main pages: 

- The home page
- The template creation page

  The home page contains information about the service CuteCryption supplies, why encryption is important, and an overview of how to use the website.
  
  The template creation page provides an interface for the user to select from a drop down of available templates, as well as input areas for providing the email address the encrypted messages will be going to and the password the recipient will use to decrypt the messages sent to them. Upon filling out the fields, selecting a template and clicking the "Generate HTML" button, the user will be taken to a page with the raw html of the template to be pasted into their website. There are also three buttons, one to copy the template to the clipboard, one to download the private key (which the user will need to add to their keyring in order to decrypt messages) and one to download the public key. The user can then copy and paste the template into their website and they will have an encrypted contact form.

## Project Setup
To setup this project, first ensure that you have the required dependencies. For this project, we rely on the following dependencies:
{
    "@angular-devkit/build-angular",
    "@angular/animations",
    "@angular/common",
    "@angular/compiler",
    "@angular/core",
    "@angular/forms",
    "@angular/platform-browser",
    "@angular/platform-browser-dynamic",
    "@angular/router",
    "@ng-select/ng-select",
    "bootstrap",
    "express",
    "file-saver",
    "node",
    "openpgp",
    "rxjs",
    "tslib",
    "typescript",
    "wowjs",
    "zone.js"
  }
  
  If you clone this repo and simply 'npm install' it should automatically get all of these dependencies for you.
  
  Additionally, we use heroku to host the web app at cutecryption.herokuapp.com.
  In order to run the app itself, the project utilizes node and express to host a server that serves up the index.html onto which the Angular app is rendered.

### HTML Email Form
The HTML Email form is a template that has two keys which we replace with actual values when generating templates for users.
"##USEREMAIL##" and "##PUBLICKEY##". When the user enters in their email address and a password, CuteCryption calls into openpgp.js to generate a private/public key pair. It then replaces the ##USEREMAIL## token with the inputted email address, and the ##PUBLICKEY## token with the string containing the public key.
The generated form is a single block of html, with a style block and script block in the same block of text. This is so the user doesn't have to keep track of multiple files. The style block has all the css for the form, and the script block contains the javascript that will do the following:
  - Get the contents of the form text area 
  - Use the public key and openpgp.js to encrypt the text
  - Send an email to the designated email address with the body being the encrypted text

### CuteCryption Front-End
The CuteCryption front end is an Angular app which has a main app module which controls the functioning of the Angular app. It also uses two components: the home component and the template component. The home component contains all the information for the home page of the web app. The template component contains the page information and business logic for operating the template creation page. There is also an "app-routing.module" which controls how a user of the webapp navigates between these pages.
