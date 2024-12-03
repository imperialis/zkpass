# ZKPass Verification Blog

## Overview

Welcome to the ZKPass Verification Blog! This project demonstrates a secure and privacy-preserving authentication system using Zero Knowledge Proof (ZKP). It allows users to verify their identity without revealing any sensitive data, while gaining access to exclusive content on the blog once verification is successful.

This project integrates the [zkPass Transgate](https://zkpass.com) JavaScript SDK for the authentication process, leveraging Ethereum and the Zero Knowledge Proof protocol.

**Live Demo**: [ZKPass Imperialis Blog](https://zkpass-imperialis-projects.vercel.app)

---

## Features

- **Secure Verification**: The app uses zkPass Transgate and Ethereum to verify the user's identity using Zero Knowledge Proof (ZKP).
- **Exclusive Blog Access**: After successful verification, users gain access to a cocktail recipe blog with amazing cocktail recipes.
- **Privacy Preserving**: No sensitive data is collected. Only the verification of criteria required for blog access takes place.
- **Responsive**: The application is fully responsive and optimized for a variety of screen sizes.

---

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/imperialis/zkpass.git
   cd zkpass
   ```

2. **Install Dependencies**:

   This project uses `npm` to manage dependencies. Run the following command to install the necessary dependencies:

   ```bash
   npm install --force
   ```

   Use `--force` to bypass any conflicts or version mismatches during installation.

3. **Create Environment Variables**:

   You’ll need to add the following environment variables to a `.env` file at the root of the project:

   ```bash
   VITE_APP_ID=your_app_id_here
   VITE_SCHEMA_ID=your_schema_id_here
   ```

   Replace `your_app_id_here` and `your_schema_id_here` with your actual zkPass application ID and schema ID.

4. **Start the Development Server**:

   To start the app in development mode, use the following command:

   ```bash
   npm run dev
   ```

   This will start the development server at `http://localhost:5173` by default.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **zkPass Transgate SDK**: A library that implements Zero Knowledge Proof authentication.
- **Ethereum**: A decentralized platform used for authentication through smart contracts.
- **SCSS/CSS**: Styles are written in standard CSS for this project, although SCSS could be used for better styling management in future versions.

---

## Deployment

This project has been deployed on Vercel. You can view the live version at:

[ZKPass Imperialis Blog](https://zkpass-imperialis-projects.vercel.app) - Live Demo

---

## How It Works

### Verification Process

1. **Initiating Verification**:
   - The user clicks the "Start Verification" button on the homepage.
   - The app communicates with zkPass Transgate SDK to initiate the verification process.

2. **Verification**:
   - The app checks whether zkPass Transgate is available. If not, it prompts the user to install the extension.
   - If available, the app connects to Ethereum, retrieves the user's address, and sends a verification request to the zkPass Transgate service.

3. **Identity Verification**:
   - zkPass verifies the user's identity using Zero Knowledge Proofs. It ensures that the user meets the required criteria for blog access without exposing any personal data.

4. **Access Granted**:
   - Upon successful verification, the user is redirected to the exclusive cocktail recipe blog.
   - If verification fails, the user is notified and given the option to try again.

---

## Blog Content

Once verified, users gain access to a well-designed blog that includes:

- **Cocktail Recipes**: A collection of cocktail recipes from various regions of the world, such as:
  - Margarita (Mexico)
  - Mojito (Cuba)
  - Martini (United Kingdom)
  - Cosmopolitan (USA)
  - And more!

- **History of Cocktails**: A brief history of cocktails, their origins, and their cultural significance around the world.

---

## Contributions

If you would like to contribute to this project, feel free to fork the repository and create a pull request with your changes. Contributions in the form of bug fixes, feature requests, or improvements to the design are always welcome!

---

## Issues and Troubleshooting

If you run into any issues while running the project locally or on deployment, please check the following:

- **Ethereum Network Issue**: Ensure that you have the MetaMask extension installed and connected to a valid Ethereum network.
- **zkPass Transgate Extension**: Make sure that the zkPass Transgate extension is installed in your browser.

For any further issues, feel free to open an issue on the [GitHub Issues page](https://github.com/imperialis/zkpass/issues).

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---

## Acknowledgments

- **zkPass Transgate SDK** for enabling secure Zero Knowledge Proof-based identity verification.
- **Vercel** for providing seamless hosting and deployment.
```
