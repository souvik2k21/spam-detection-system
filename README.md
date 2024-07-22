# Email/SMS Spam Detector

Welcome to the Spam Detection Service project! This service uses advanced machine learning algorithms to detect spam in SMS and emails. It is built using FastAPI for the backend and a simple HTML/CSS/JavaScript frontend. The service is designed to provide accurate spam detection to help protect your privacy and security.

## Project Structure

The project directory contains the following files:

- **app.py**: The main FastAPI application file.
- **index.html**: The homepage of the web application.
- **mymodel.pkl**: The trained machine learning model for spam detection.
- **pbg.jpg**: The background image used in the service page.
- **script.js**: The JavaScript file for the homepage.
- **service.css**: The CSS file for styling the service page.
- **service.html**: The HTML file for the spam detection service page.
- **service.js**: The JavaScript file for handling form submissions and displaying results on the service page.
- **spam_detection.ipynb**: The Jupyter Notebook used for training and evaluating the spam detection model.
- **spam.csv**: The dataset used for training the spam detection model.
- **style.css**: The CSS file for styling the homepage.
- **TfidfVectorizer.pkl**: The trained TfidfVectorizer used for transforming input text.

## Hosting

The `app.py` is hosted on Render, making the API accessible for detecting spam.

## Features

- **Text Preprocessing**: The input message is preprocessed to remove stopwords, punctuation, and perform stemming.
- **Spam Detection**: The preprocessed message is fed into a trained machine learning model to predict whether it's spam.
- **Responsive Design**: The web application is designed to be responsive and works well on different screen sizes, including mobile devices.
- **Interactive UI**: The result of the spam detection is displayed interactively with visual feedback.

## How to Run

1. Clone the repository.
2. Install the required dependencies.
3. Run the FastAPI app using `python -m uvicorn app:app --host 0.0.0.0 --port 10000`.
4. Open `index.html` or `service.html` in your browser to use the application.
