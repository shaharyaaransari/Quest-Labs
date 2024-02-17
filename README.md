# Quest-Labs
   ## Deployed Link :
      https://quest-labs-gamma.vercel.app/
## Description
This project is a React-based web application designed to display user profiles and relevant information 
including points, ranks, badges, and point history. Here's a brief overview of the project along with the
tech stack used:

## Tech Stack
Frontend:

 <p>
        React.js: A JavaScript library for building user interfaces.
      </p>
      <p>
        CSS: Cascading Style Sheets for styling the application components.
      </p>
Backend:
  <p>  Axios: Promise-based HTTP client for making requests to backend APIs. </p>
      
   ##   Project Structure
1. App.js: Main entry point of the React application. It fetches user data, points data, rank data, badge data, and points history from the backend APIs using Axios.
2. Navbar.js: Component for displaying the navigation bar.
3. Footer.js: Component for displaying the footer.
4. Profile.js: Component responsible for rendering user profile information including profile image, details card, points, rank, level, badges, and points history.
5. ProfileImage.js: Component for displaying the user's profile image.
6. ProfileDetailsCard.js: Component for displaying user details like name.
7. Badge.js: Component for displaying badges earned by the user.
8. History.js: Component for displaying the user's points history in a table format.
9. Modal.js: Component for displaying a modal when a new badge is unlocked.

  ## How to Run
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm install.
4. Start the development server using npm run dev.
5. Access the application in your web browser at http://127.0.0.1:5173/.
## Additional Notes
1. Ensure that the backend APIs are running and accessible for fetching user data and other relevant information.
2. Customize and extend the components as per your project requirements.
3. Make sure to handle error scenarios gracefully, especially during API requests.
4. The Axios instance is configured with necessary headers including "accept", "apikey", "token", and "userid" using interceptors.

## Environment Variables
VITE_API_URL: This environment variable should be set to the base URL of the backend API, for example, https://staging.questprotocol.xyz/api.
