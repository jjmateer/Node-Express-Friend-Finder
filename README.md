# Node-Express-Friend-Finder

A Heroku app created with Node.js and Express to give user a new friend based on their opinions.

**ALL SCORES ARE RANDOMLY GENERATED AND ARE NOT ACCURATE FOR ANY OF THE PEOPLE**

# How does it work?

The user will submit their name along with a photo of themselves along with their opinions using an input of 1 through 5 depending on how strongly they agree with the topic.

On submit, the application will check all of the other friends scores, subtract the user's score from the current friend's score, and add the absolute value to the total difference.

The friend with the least total difference will be the users new match.
