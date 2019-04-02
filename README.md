
# Hearten 

### A creative writing journal app that provides visual and/or text prompts for journal entries.

This repo contains the front-end code. It is deployed to Heroku at: _________
The back-end repo is [https://github.com/soris-codes/hearten_backend]

## Release 0 - MVP
- A user will be able to create/save and update/delete journal entries.
- A user will see a random image when creating a new journal entry to use as inspiration


## Release 1
- A user can create an account and authenticate to create/save entries


## Future Releases
- Add text prompt option
    * Create random text generator that provides a 3-word prompt
    
- A user is able to select the type of journal entry they are making:
    * no prompt
    * visual prompt
    * story starter text prompt
    * both image and story starter
    
- Add timer component
    * A user can optionally set a timer for timed writing entries
    
- A user can share entries on social media platforms


## Architecture
- Back-end: Postgres SQL database with Django REST framework for the API 
- Front-end: React with Material UI

## Data Models
- A journal entry will consist of a a title, a body, creation_date, author, and an image url
