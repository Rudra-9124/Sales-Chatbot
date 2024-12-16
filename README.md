# Sales-Chatbot

### **Project Overview:**
The **Sales Chatbot** is an AI-powered solution designed to provide an interactive and efficient way for users to search and filter products on e-commerce platforms. It allows users to interact with a chatbot to search for products, apply filters (such as price, rating, and stock availability), and view detailed product information. The chatbot is built using **ReactJS** for the frontend and **Django** with **Django REST Framework** for the backend, providing a seamless integration for product searching and filtering.

### **Key Features:**
- **Product Search:**
  - Users can interact with the chatbot by entering product-related queries in natural language. The chatbot searches for products based on the query and displays the results in real-time.

- **Dynamic Product Filtering:**
  - The chatbot allows users to filter products based on various criteria:
    - **Price:** Filters based on price conditions like "greater than" or "less than" a specific value.
    - **Rating:** Filters products with a rating greater than or equal to a specified value.
    - **Stock Availability:** Allows users to search for products that are either "In Stock" or "Out of Stock."

- **Frontend Interface:**
  - Built with **ReactJS**, the chatbot offers a clean and user-friendly interface. Users can input search queries, select filters, and instantly receive product recommendations.
  - The interface dynamically updates to show products based on search results and filter selections.

- **Backend API Integration:**
  - The backend is powered by **Django** and exposes a REST API to fetch product data. It supports filtering based on various product attributes like name, category, price, rating, and stock availability.
  - The API is designed to handle GET requests and return filtered product lists in JSON format, ensuring smooth communication with the frontend.

- **Loading and Error Handling:**
  - The chatbot provides feedback to users by displaying a loading state while fetching data.
  - Error messages are shown if the API call fails, improving the user experience by informing them of any issues.

### **Tech Stack:**
- **Frontend:**
  - **ReactJS:** For building the interactive chatbot interface and managing the user interface logic.
  - **Axios:** For making API requests to fetch products based on user input.
  - **CSS:** For styling the frontend components, with a focus on a clean and responsive design.

- **Backend:**
  - **Django:** A powerful web framework used to create the REST API for product retrieval and filtering.
  - **Django REST Framework (DRF):** Used to build the API that connects the frontend with the product database.
  - **SQLite:** Used to store product data such as name, price, rating, and stock.

### **How It Works:**
1. **User Interaction:**
   - Users enter their search query (such as a product name or description) in the chatbot input box.
   - They can also apply filters like price range, minimum rating, or stock status to narrow down their search.

2. **Fetching and Filtering Products:**
   - The chatbot sends the user query and selected filters to the Django backend through the API.
   - The backend filters the product data based on the query parameters and returns the matching products.

3. **Displaying Results:**
   - The frontend receives the filtered product data and displays it dynamically.
   - Users can see detailed information about each product, such as name, price, category, rating, and stock availability.

4. **Real-time Feedback:**
   - While the data is being fetched, the user sees a loading state. If no products match the search criteria, the chatbot shows a message saying "No products found."

### **User Experience:**
- **Chat Input:** A simple input field where users can type their product queries.
- **Filters:** Dropdown filters allow users to refine their search by price, rating, or stock status.
- **Results:** Products matching the search and filter criteria are displayed in a clear, easy-to-read format, with key details such as price, rating, and stock status.

### **Future Improvements:**
- **Natural Language Processing (NLP):** Enhance the chatbot's ability to understand more complex, conversational queries.
- **Product Recommendations:** Implement machine learning algorithms to suggest products based on user preferences or browsing history.
- **Voice Assistant Integration:** Allow users to interact with the chatbot using voice commands for a more hands-free experience.

### **Conclusion:**
The **Sales Chatbot** project delivers a user-friendly and highly interactive product search and filtering experience for e-commerce platforms. With its ability to search, filter, and display products dynamically, the chatbot enhances the customer journey, making it easier for users to discover products that meet their specific needs. The combination of ReactJS for the frontend and Django for the backend ensures both performance and scalability, making this solution a powerful addition to any e-commerce platform.
