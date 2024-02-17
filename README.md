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
 ## Over Veiw of Website
 # Desktop Veiw
 ![Screenshot (362)](https://github.com/shaharyaaransari/Quest-Labs/assets/113225294/24404a54-6d10-46b5-a3ef-46a7afca987c)
 
![Screenshot (363)](https://github.com/shaharyaaransari/Quest-Labs/assets/113225294/e056fc7d-3f0d-44d2-9f06-8f0aa1be034a)

![Screenshot (364)](https://github.com/shaharyaaransari/Quest-Labs/assets/113225294/e6e9d502-8ae9-48b1-a832-bb0d0108c918)
# Mobile Veiw
![WhatsApp Image 2024-02-17 at 11 27 36 AM (2)](https://github.com/shaharyaaransari/Quest-Labs/assets/113225294/bb457a5c-372f-4077-9e1e-4abdf2aa3641)
![WhatsApp Image 2024-02-17 at 11 27 36 AM (1)](https://github.com/shaharyaaransari/Quest-Labs/assets/113225294/4158dae7-3295-4db2-915e-9254cfeda358)
![WhatsApp Image 2024-02-17 at 11 27 36 AM](https://github.com/shaharyaaransari/Quest-Labs/assets/113225294/013267d7-4324-46ba-a5ac-85a2515c5d55)

