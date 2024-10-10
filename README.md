# React Counter App with CI/CD Pipeline

This project is a simple **React Counter Application** that includes a fully automated **CI/CD pipeline** using **GitHub Actions**. The pipeline tests, builds, and deploys the application as a Docker image to **Docker Hub**.

## Features

- **React** frontend with a counter (increment/decrement).
- **CI/CD Pipeline**: Automated testing, building, and publishing to Docker Hub.
- **Dockerized**: Easily deployable using Docker.

## CI/CD Pipeline

The GitHub Actions workflow automatically
1. Installs dependencies.
2. Runs tests.
3. Builds a Docker image.
4. Pushes the Docker image to Docker Hub.
5. 

## Docker Hub

Pull the latest Docker image

```bash
docker pull leshaan99/counter-app:latest
```
