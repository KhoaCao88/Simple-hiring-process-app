# Configure application DB
Edit the below configuration in resources/application.properties file
spring.datasource.url= jdbc:h2:file:D:/SimpleHiring

# Build whole applicaiton
mvn package

# Run
mvn spring-boot:run

# web app accessing
http://localhost:8080/
username: demo
password: demo
