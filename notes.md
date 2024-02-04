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