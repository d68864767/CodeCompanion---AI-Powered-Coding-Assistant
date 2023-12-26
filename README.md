# CodeCompanion - AI-Powered Coding Assistant

CodeCompanion is an AI-powered coding assistant that helps developers write, debug, learn, and review code more efficiently. It uses OpenAI's GPT-3 or GPT-4 models to provide intelligent code analysis and generation.

## Features

- **Code Generation**: Generate code snippets in various programming languages based on natural language descriptions.
- **Debugging Aid**: Analyze error messages or problematic code segments and suggest potential fixes or optimizations.
- **Interactive Learning**: Assist in learning new programming languages or frameworks by providing explanations, examples, and best practices.
- **Automated Documentation**: Generate comments and documentation for existing code, improving readability and maintainability.
- **Code Review and Analysis**: Offer insights on code quality, suggest refactoring opportunities, and check for adherence to coding standards.
- **Customizable Workflows**: Integrate with users' existing development environments and workflows, offering personalized assistance based on individual coding styles and preferences.

## Installation

To install the necessary dependencies, run the following command:

```bash
pip install -r requirements.txt
```

## Usage

To start the server, run the following command:

```bash
python main.py
```

Then, you can send POST requests to the following endpoints:

- `/generate_code`: Generate code based on a natural language description.
- `/debug_code`: Get debugging advice for a given error message.
- `/learn_code`: Get explanations, examples, and best practices for a given programming topic.
- `/generate_documentation`: Generate comments and documentation for existing code.
- `/review_code`: Get insights on code quality and suggestions for refactoring.
- `/customize_workflow`: Customize the assistant based on your coding style and preferences.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
