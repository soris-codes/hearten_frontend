## This is the repository for the frontend. Deployed to Heroku at: 

# Hearten 

### A creative writing journal app that provides visual and/or text prompts for journal entries.

## Release 0 - MVP
- A user will be able to create/save and update/delete journal entries.
- A user will see a random image when creating a new journal entry to use as inspiration


## Release 1
- A user can create an account and authenticate to create/save entries


## Release 2
- Add text prompt option
    * Create random text generator that provides a 3-word prompt
- A user is able to select the type of journal entry they are making:
    * no prompt
    * visual prompt
    * story starter text prompt
    * both image and story starter


## Release 3
- Add timer component
- A user can optionally set a timer for timed writing entries

## Release 4

- A user can share entries on social media platforms


## Architecture
- Back-end: Postgres SQL database with Django REST framework for the API 
- Front-end: React with Material UI

## Data Models
- A journal entry will consist of a a title, a body, creation_date, author, image url, and prompt text
