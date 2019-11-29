# Simple-hiring-process-application
## Configure application DB
Edit the below configuration in resources/application.properties file
```bash
spring.datasource.url= jdbc:h2:file:D:/SimpleHiring
```

## Build
```bash
mvn package
```

## Run
```bash
mvn spring-boot:run
```

## web app accessing

#### http://localhost:8080/
#### username: demo
#### password: demo

## process explaination

#### https://www.ibm.com/support/knowledgecenter/en/SSFPJS_8.5.0/com.ibm.wbpm.main.doc/tutorial/topics/introduction_gs-tutorials_shipped.html
