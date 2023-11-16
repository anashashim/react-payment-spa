# React Payment SPA

This Single Page Application (SPA) is a React-based project that implements a payment form with a dialog box. The dialog box includes fields for the recipient's email address, currency selection, amount, and an optional description. The submit button is enabled only when all mandatory fields are filled.

## Table of Contents

1. [Build Instructions](#build-instructions)
2. [Usage Instructions](#usage-instructions)
3. [Future Improvements](#future-improvements)
4. [Assumptions](#assumptions)

## Build Instructions

To build and run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/react-payment-spa.git
    ```

2. Navigate to the project directory:

    ```bash
    cd react-payment-spa
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Usage Instructions

Once the application is running, follow these steps:

1. Click on the "Payment" button to open the dialog box.
2. Fill in the required fields:
    - To (Email Address): Enter a valid email address.
    - From (Currency): Select the currency from the dropdown.
    - Amount: Enter a positive numeric amount.
3. Optionally, provide a description in the designated field.
4. The submit button will be enabled only when all mandatory fields are filled.
5. Click the submit button to simulate a payment.

## Future Improvements

Given more time, the following improvements could be implemented:

1. **User Authentication:** Implement a real authentication system to handle unauthorized access securely.

2. **API Integration:** Replace the mock API with a real backend service to handle payment requests.

3. **Form Validation:** Enhance form validation with more detailed error messages and visual feedback.

4. **Styling:** Improve the overall user interface and add a more polished design.

## Assumptions

While designing and implementing this project, the following assumptions were made:

1. The focus is on the frontend implementation, and no real backend service is available.
2. The mock API (https://jsonplaceholder.typicode.com/payments) is used for simulating different scenarios (success, bad request, unauthorized, server error).
3. Email validation is done on the client side for simplicity.
4. Styling and design are kept minimal for the sake of the coding challenge.
