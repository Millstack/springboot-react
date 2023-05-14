# Spring Boot and React CRUD Application

This repository contains a CRUD (Create, Read, Update, Delete) application built with Spring Boot for the backend REST API and React for the frontend user interface.

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
