# Loren's Full-Stack Movie Rental App

## Introduction

I developed this application to demonstrate knowledge of Ruby on Rails with a React frontend. A user is able to securely log in/out, view movies at different stores, rent and return those movies and add movies to stores to be made available to all users to rent.

## Getting Started

In order to use this application, you will need to clone the repository onto your machine, navigate into the directory and then do the following:

```
$ bundle install
```

Once finished installing, you will need to make sure there is data seeded into your database. Do this by executing the following in your console:

```
$ rails db:migrate db:seed
```

This will reset any data in the database and make sure you have good data to start with.

Then, start up a server to utilize the app:

```
rails s
```

And start your React server:

```
npm start --prefix client
```
### Errors

If you have database errors, try these commands to check and restart the server:

```
service postgresql status
sudo service postgresql restart
```


### Read More
A blog post about the initial development of this application can be found [here](https://dev.to/lorenmichael/ruby-on-rails-a-simple-movie-rental-application-4djo).