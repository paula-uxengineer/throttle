# Generating random hexadecimal colors with Throttle method
>This program provides a simple and elegant solution for generating random hexadecimal (HEX) colors with the implementation of the throttle method.

## :speaker: How it works

This program utilizes the throttle method to ensure that the generation of random HEX colors occurs at a controlled rate, preventing excessive calls and optimizing performance.
Throttle Method

Throttling is a technique used to control the rate at which a function is called. In the context of this program, the throttle method limits the frequency of generating random HEX colors, ensuring a smooth and efficient user experience.

### 🕹 Features

* ```Throttle Method``` Ensures controlled generation of random HEX colors.
* ```Optimized Performance``` Prevents excessive function calls, improving efficiency.
* ```CLI for functionality checking``` Check how the user would interact.
* ```End-to-end testing``` Using TDD to verify business logic with Jest.

### :mag: Usage

Simply click the button labeled "Generate Color" to initiate the generation of a random HEX color. The throttle method will ensure that the colors are generated at an optimal rate, providing a seamless user experience.

## :mag: Why Throttle?

Throttling is a beneficial technique in software development, particularly in scenarios where the frequency of function execution needs to be controlled. Here are some characteristics and advantages of using throttle:

### :mag: Characteristics:

1. ```Controlled Execution Rate``` Throttle allows you to limit the rate at which a function is invoked. This ensures that the function is not called more frequently than a specified threshold, preventing excessive execution.

2. ```Delay Handling: Throttle``` can handle delays between function calls. It ensures that there is a minimum interval between successive function invocations, even if the events triggering the function occur more frequently.

3. ```Simple Implementation``` Throttle can be implemented using straightforward logic. It typically involves tracking the timestamp of the last function invocation and comparing it with the current time to determine whether the function should be executed.

### :ok_woman: How throttle improves the user experience
Enhanced user experience is achieved by maintaining a responsive user interface and preventing the application from becoming too sensitive to user inputs.

If a user attempts to change the background color by repeatedly clicking the color generation button, the throttle function will ensure that the color change occurs smoothly and seamlessly, even if the user clicks multiple times quickly. This provides a consistent and enjoyable user experience, as the application responds predictably and is not overwhelmed by multiple unnecessary color changes.

## :computer: Prerequisites

- Node.js (version >= 14)
- npm (version >= 6)
- Typescript
- Jest
- Vite

## :floppy_disk: Installation

1. To get started, you first need to clone the repository:

```bash
git clone [https://github.com/paula-uxengineer/to-do-list.git]
```

2. Next, install the project dependencies:

```bash
npm install
```

## :checkered_flag: How To Start

To start the app in development mode, run the following script:

```bash
npm run dev
```

## :space_invader: Scripts
This project comes with several predefined scripts in the package.json file:

```test```: Runs tests using Jest.

```bash
npm run jest
```

```dev```: Starts the development app with ts-node-dev and allows debugging

```bash
npm run dev
```

```vite```: Run the React library with Vite (make sure you are inside the directory of "front-end)

```bash
npm run vite
```

## :wrench: Dependencies 

- "react": "^18.2.0",
- "react-dom": "^18.2.0"

## :hammer: Dev Dependencies 

- "@types/react": "^18.2.55",
- "@types/react-dom": "^18.2.19",
- "@typescript-eslint/eslint-plugin": "^6.21.0",
- "@typescript-eslint/parser": "^6.21.0",
- "@vitejs/plugin-react": "^4.2.1",
- "eslint": "^8.56.0",
- "eslint-plugin-react-hooks": "^4.6.0",
- "eslint-plugin-react-refresh": "^0.4.5",
- "typescript": "^5.2.2",
- "vite": "^5.1.0"
- "@types/jest": "^29.5.12",
- "@types/node": "^20.11.16",
- "jest": "^29.7.0",
- "ts-jest": "^29.1.2",
- "typescript": "^5.3.3"

## :file_folder: Folder structure
 
```
src/
|
├── cli
│  └── cli-app.ts
|
├── front-end/
│   │   └── assets/
│   │   
|   ├── app.css
|   ├── app.tsx
|   ├── app.css
|   ├── main.tsx
|   └── index.html
|
|
└── tests
   └── app.test.ts
|
|
└── index.ts

```


## :unlock: Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes to your branch.
Submit a pull request targeting the develop branch.
For bug reports and feature requests, please open an issue on the GitHub repository.

## :mortar_board:License
This project is licensed under the MIT License. See the LICENSE file for more information.
