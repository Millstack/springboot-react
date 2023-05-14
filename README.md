# Spring Boot and React CRUD Application

This repository contains a CRUD (Create, Read, Search) application built with Spring Boot for the backend REST API and React for the frontend user interface.

## Getting Started

### Prerequisites
To run this application, you need to have the following prerequisites:

- Java Development Kit (JDK) 8 or above
- Node.js and npm (Node Package Manager)
- MySQL database (with a schema named `hostbuddy_restapi`)

### Setup

1. Clone the repository to your local machine.
`git clone https://github.com/Millstack/springboot-react.git`

2. Set up the MySQL database:
- Create a MySQL database with the name `hostbuddy_restapi`
- Update the database connection properties in the application.properties file located in the springboot-backend folder. Set the correct values for spring.datasource.url, spring.datasource.username, and spring.datasource.password

3. Build and run the Spring Boot backend:
- Open a terminal and navigate to the springboot-backend folder
- Build the backend application using Maven: `./mvnw clean package`
- Run the backend application: `./mvnw spring-boot:run`

4. Install dependencies and run the React frontend:
- Open another terminal and navigate to the react-frontend folder
- Install dependencies using npm: `npm install`
- Start the React development server: `npm start`

5. Access the application:
- Open a web browser and go to http://localhost:3000 to access the React frontend

# Application Structure

The repository is structured as follows:
- `springboot-backend`: Contains the Spring Boot backend application
- `react-frontend`: Contains the React frontend application

- The Spring Boot backend follows a standard structure with packages for different components:
- `com.hostbuddy`: Base package
- `com.hostbuddy.dto`: Contains the data transfer objects (DTOs) or entity classes
- `com.hostbuddy.repository`: Contains the repository interfaces for interacting with the database
- `com.hostbuddy.service`: Contains the service interfaces and implementations
- `com.hostbuddy.controller`: Contains the REST API controllers

The React frontend code is located in the react-frontend folder

# How to Use

- The React frontend provides a user interface to interact with the backend REST API
- You can add, view all, and search by name items through the frontend
- The backend stores the items in the MySQL database
- Update the application.properties file with your own database connection details if needed

# React App

- Clone the repository: https://github.com/Millstack/springboot-react.git
- Navigate to the project directory: cd react-app
- Install the dependencies: npm install
- Start the development server: npm start
- Open your browser and visit `http://localhost:3000` to see the application


## Usage
- The home page displays a list of all items retrieved from the database
- Click on the "Add" link in the navigation bar to add a new item
- Click on the "Search" link in the navigation bar to search for an item by name

You can copy and paste this content into your repository's `README.md file`
