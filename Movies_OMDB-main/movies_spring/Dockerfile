# Use an official OpenJDK runtime as a parent image
FROM openjdk:21-jdk




ADD target/backend-docker.jar  backend-docker.jar

# Expose the port that the application will run on
EXPOSE 8082





# Define the command to run your application
ENTRYPOINT ["java", "-jar", "backend-docker.jar"]
