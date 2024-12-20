# PDF Reader App

## Overview
The PDF Reader App is a web application that allows users to search for, view, and navigate through PDF documents. The app fetches PDF metadata from a remote API and provides functionalities to search, read, and share PDFs.

## Features
- **Search PDFs**: Users can search for PDFs by name.
- **View PDFs**: Users can select a PDF from the search results to view it.
- **Pagination**: Users can navigate through the pages of a PDF.
- **Share PDFs**: Users can share PDF links through various social platforms.
- **Responsive Design**: The app is optimized for both desktop and mobile devices.

## Setup Instructions

### Prerequisites
- Node.js (version 14.x or later)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pdf-reader-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pdf-reader-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App
1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the app in action.

## Assumptions
- The PDF metadata is fetched from an API endpoint that returns a list of PDFs with properties such as `name`, `author`, `published`, and `link`.
- The PDF links provided by the API endpoint are valid and accessible.
- Users will have access to modern web browsers that support embedding PDFs using `<embed>` or `<iframe>`.

## Usage

### Searching for PDFs
- Enter a search term in the search bar to filter the list of PDFs by name.
- The list view will update to display only the PDFs that match the search term.

### Viewing a PDF
- Click on the "View PDF" button next to the desired PDF in the list view.
- The app will navigate to the reader view, displaying the selected PDF.

### Navigating Through Pages
- Use the "Previous" and "Next" buttons in the reader view to navigate through the pages of the PDF.
- The current page number is displayed between the navigation buttons.

### Sharing a PDF
- Use the share buttons in the reader view to share the PDF link on various social platforms such as WhatsApp, email, etc.

## Directory Structure
```
/src
  /Components
    ListView.js
    ReaderView.js
    SearchBar.js
    ShareButtons.js
  /styles
    ReaderView.css
  App.js
  App.css
  index.js
```

## Deployment
The application can be deployed using any static site hosting service. Here's how to deploy it using Vercel:

### Deploying with Vercel
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Run the deployment command:
   ```bash
   vercel
   ```

3. Follow the prompts to complete the deployment.

### Deployed Link
You can test the application online at: [PDF Reader App](https://react-pdf-reader-zeta.vercel.app/)

## License
This project is licensed under the MIT License.
