/*
# At start of the project we do: npm init --> ye ek node ecosystem set up krdeta h so that package.json file bnti h
which is identity card + config file of the project

why need?: Because Node projects depend on:
             external libraries (React, Express, Mongoose, etc.)
             scripts (start, build, test)
             versions (very important in real-world projects)

             package.json answers questions like:
            📦 What is this project?
            🔢 Which dependencies does it use?
            ⚙️ How do I run it?
            🧠 Which version is stable? etcc
aapse details lega and json file bnadega

what is npm init -y then? --> zyada details ni mngta fas fas json file bnadeta h

ab jse manle tune express install kia ya kuch aisa install kia toh vo khud json me change hojaegaa bina kch add kre thats so important
now the thing is package json me type:"modules" krle to have some requirement like this -- isse u can use import export types
and can also do some changes in script
 */

/*# to make version control into sync: ki semicolon lgega ya ni ya fir tab spaces kitne honge thats why same ground hoga
hence u use prettier : some commands --> npm install --save-dev --save-exact prettier
prettierrc: for configuration
.prettierignore : to ignore formatting some files
orr baaki docs me check krlena 
npx prettier . --write : to write
npx prettier . --check : to check 
*/

/*
#to automatically restart your server u use nodemon
in package json mein start is used for production so node is used and dev is used to develop so usme hm nodemon use krr skte h

# env ka use?
bhai server dont store everything because there are chances that can get leaked hence they use a secure information to take the data from there
hence we use .env : phle package download krr iska : and check for documentations and setup krow, config krow and then use them in your work

 */
