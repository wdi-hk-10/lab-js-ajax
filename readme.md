# Practicing AJAX

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

You're about to write a lot of AJAX-backed JavaScript – using either jQuery or Vanilla JS, if you're feeling confident – that will complete our little Doughnut Shop app.

Make use of the fantastic and delicious https://api.doughnuts.ga.  Your task is to use your JS skills to list out all the doughnuts in our database and get our form working so we can add more.

> Note: Keep in mind, this API doesn't persist (so that other students can use it, too), but it does _act_ like it. When you create a new doughnut, it'll show you results as if that doughnut was persisted. Make use of it!


## Exercise

#### Requirements

- Implement a jQuery AJAX client for a simple REST service
- Get all doughnuts and append them to `#doughnuts`
- Create a doughnut using the form `#new-doughnut`
- Update a doughnut using the form `#edit-doughnut` inside modal provided
  - checkout [bootstrap#method](http://getbootstrap.com/javascript/#modals-methods) to see how to use it
- Destroy a doughnut

#### Starter Code

The starter code is very similar to the lesson. However, please fork this repo and start fresh from this one.

#### Deliverable

Make a list of existing doughnuts underneath the form, make the form work, and then, build your app to add to the list of donuts - using the information from newly created donuts - without refreshing the page.

<img width="752" src="http://i.imgur.com/847F2qx.png">
<img width="752" src="http://i.imgur.com/ilYA2pq.png">

## Additional Resources

- [http://youmightnotneedjquery.com](http://youmightnotneedjquery.com/)
- [jQuery AJAX Docs](http://api.jquery.com/jquery.ajax/)
- [Some useful jQuery DOM Manipulation Docs](http://api.jquery.com/prepend/)
- [The Official Doughnut API](https://www.doughnuts.ga/)
