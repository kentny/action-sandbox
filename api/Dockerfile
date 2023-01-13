# base
FROM gradle:7 AS base

# build
FROM base AS test-build
COPY . /workspace
WORKDIR /workspace
RUN ./graldew build

# production
FROM openjdk:17 AS production
COPY --from=test-build /workspace/build/libs/api-0.0.1-SNAPSHOT.jar ./api.jar
CMD ["java", "-jar", "api.jar"]
