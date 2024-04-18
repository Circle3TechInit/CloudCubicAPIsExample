# This is an Example on how to interact with Cloud Cubic Content-Delivery within you applications.
# This example is based on NodeJS, its meant to illustrate the process of interacting with the Cubic via APIs,
  you can replicate it even do better in programming language of choice.


First thing you need to do before using this app you need to make sure you fill out the data.js file 
with your TOKEN and APP_ID that you get from [Cloud Cubic Website](https://cubic.simsknightcloudservices.co.za).

If you want to run test you can also add values to the objects inside data.js with your respective values thats corresponds with the content-delivery cubic you wish to access.
To get correct values to fill-in you can use the Cubic class's **getAllCubics** method, it retains all content-delivery cubics you have and all the right information you need.

To get the token and appID you need to have an account and a content-delivery cubic, both are free just register an account.

Fill in the missing values in the data file to make this undestanding process easy.

After updating the data file you can run **npm i** to install all dependencies.

To start the project simply run **npm start**.

To run test, first make sure all blank values in data.js have been filled with respective information, simply run **npm test**.

If test files are not available in your folder, you can ask admin for access.

If you have questions or you need more info you can contact the developer via email at: shepherd@halleppardwebsolutions.co.za
