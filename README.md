# Email/SMS Spam Detector

Welcome to the Spam Detection Service project! This service uses advanced machine learning algorithms to detect spam in SMS and emails. It is built using FastAPI for the backend and a simple HTML/CSS/JavaScript frontend. The service is designed to provide accurate spam detection to help protect your privacy and security.

## Project Structure

```plaintext
.
├── app.py               # The main backend application code using FastAPI. It serves the machine learning model and handles API requests.
├── index.html           # The main homepage of the web application.
├── mymodel.pkl          # The serialized machine learning model.
├── pbg.jpg              # Background image used in the web application.
├── script.js            # JavaScript file containing the client-side logic.
├── service.css          # CSS file for styling the service page.
├── service.html         # HTML file for the service page where users input their messages for spam detection.
├── service.js           # JavaScript file containing additional client-side logic for the service page.
├── spam_detection.ipynb # Jupyter Notebook containing the code for training the spam detection model.
├── spam.csv             # CSV file containing the dataset used for training the model.
├── style.css            # CSS file for styling the main index page.
└── TfidfVectorizer.pkl  # The serialized TF-IDF vectorizer used for text transformation.


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
```
