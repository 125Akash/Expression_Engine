# Expression Engine

Expression Engine is a simple web application that allows users to dynamically create and manage expressions using a connector-based approach. Users can define expressions by specifying key-value pairs, operators, and scores. The submitted data is then displayed in JSON format on the screen.

## Features

- **Connector Type Option:** Users can choose a connector type (e.g., AND, OR) to define the relationship between different expressions.

- **Field Options:**
  - **Key:** Users can specify the key for their expression, indicating the attribute or field they want to filter.
  - **Operator:** Users can choose an operator (e.g., equals, greater than, contains) to define the condition for their expression.
  - **Value:** Users provide the value against which the specified key will be evaluated.
  - **Score:** Users can assign a score to each expression.

- **Add/Delete Expression:**
  - Users can add new expressions to their set of filters dynamically.
  - A dedicated button is provided to delete expressions as needed.

- **Submit Button:**
  - Once the user has defined their set of expressions, they can submit the data for processing.

- **Display in JSON Format:**
  - The submitted data is displayed on the screen in JSON format, providing users with a clear representation of their expressions and associated data.

## How to Use

1. Open the Expression Engine web application.
2. Choose the connector type for your expressions.
3. For each expression, specify the key, operator, value, and score.
4. Use the dedicated buttons to add or delete expressions as needed.
5. Click the "Submit" button to process the expressions.
6. View the results displayed on the screen in JSON format.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/expression-engine.git
   ```

2. Navigate to the project directory:

   ```bash
   cd expression-engine
   ```

3. Open the `index.html` file in your preferred web browser.

4. Start using Expression Engine to create and manage your expressions.

## Technologies Used

- HTML
- Bootstrap
- JavaScript 
- React
- Nodejs
- Vite
- react18-json-view

