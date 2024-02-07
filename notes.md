Here is where I'll put my notes for the semester!
## GitHub
I learned that GitHub is a SUPER useful tool! I want to be much better at coding from the terminal, so I will spend more time pushing and pulling from my repository.
## AWS Server Setup
- Here's my elastic public IP Address: 52.201.130.123 
- This is how I ssh into my server:  ssh -i [key pair file with path] ubuntu@[ip address]
## Startup HTML
- I already made my startup HTML when I did this class for last semester (before I withdrew)... time to revisit it, tweak it, and see what I learn!
- Steps for updating github repository
    1. Navigate to the folder containing my project
    2. In gitbash, call gitpull (to assure that any changes made online or by anyone else are included, to avoid conflicts)
    3. Make my changes locally
    4. Call git add, and the files that I edited
    5. Call git commit -m "My update message here", to save the changes and make a note of what I changed
    6. Call git push, to update my github repository
    7. Call git status to make sure everything is up to date
- To insert text from a file into a paragraph use this function either using iframes or objects:
    -<div><object data=textfile.txt"></object></div>
    -<iframe src="path/to/yourfile.txt" width="100%" height="300"></iframe>
- To create a button which takes you to another page on the site
    <input type='button' onclick="location.href='otherPage.html';" value="Submit"/>
- Deploy to my server
    ./deployFiles.sh -k ~/Desktop/cs260/john-first-key.pem -h consistandsee.click -s startup
- Add an image
    <img src="image.jpg" alt="Image title for blind people" width="500" height="400">

## CSS Flex
- set display property to 'flex' - sets all of children of element to be displayed in a flex flow
- "flex-direction: column;" makes our flex flow column-oriented
    header {
    flex: 0 80px;
    }
    - flex 0 means it won't grow, 80px means it is 80 px tall

    footer {
    flex: 0 30px;
    }

    main {
    flex: 1;
    display: flex;
    flex-direction: row;
    }
    - Flex 1 means it gets 1 proportional unit of growth, and it will fill whatever space isn't filled by the header and footer
    - flex-direction: row sets the children of the main to be side by side
    section:nth-child(1) {
        flex: 1;
    }
    section:nth-child(2){
        flex: 3;
    }
    -nth-child(1) tells the machine I am coding specifically for the first subsection
    -flex 1 means it will fill up the space of 1 unit, while the other will fill the space of 3, 25% and 75% not matter how big the screen is
- to vertically align text, "do align-items: center"
        
## Startup CSS
- include the CSS sheet at the top of the html page
    <link rel="stylesheet" href="main.css" />
    <link rel="stylesheet" href="play.css" />
- To get rid of the bullet points on a list
    list-style-type: none;