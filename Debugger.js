```javascript
// Import necessary libraries
import axios from 'axios';

class Debugger {
    constructor() {
        // Define the base URL for the Flask server
        this.baseURL = 'http://localhost:5000';
    }

    async debug(data) {
        // Extract the language and error message from the data
        const language = data.language;
        const errorMessage = data.errorMessage;

        // Define the data to send to the Flask server
        const requestData = {
            language: language,
            error_message: errorMessage
        };

        try {
            // Send a POST request to the Flask server to debug the code
            const response = await axios.post(`${this.baseURL}/debug_code`, requestData);

            // Extract the debugging advice from the response
            const debuggingAdvice = response.data.advice;

            // Return the debugging advice
            return debuggingAdvice;
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }
}

export default Debugger;
```
