## Backend Setup

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following content:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

   Replace `your_mongodb_connection_string` with your actual MongoDB URI.

4. Update the `cors` configuration in `app.js` with the URL of your frontend. For example:

   ```javascript
   const corsOptions = {
     origin: "http://localhost:3000", // Replace with your frontend URL if different
     credentials: true,
   };
   app.use(cors(corsOptions));
   ```

5. Start the backend server:

   ```bash
   npm start
   ```

   The backend server should now be running on `http://localhost:5000` (or the port you specified in the `.env` file).

## Frontend Setup

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend` directory with the following content:

   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

   Replace `http://localhost:5000` with your actual backend URL if different.

4. Start the frontend development server:

   ```bash
   npm start
   ```

   The frontend should now be running on `http://localhost:3000` (or the default React development port).
