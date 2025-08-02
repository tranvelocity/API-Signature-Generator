

# API Signature Generator

## Overview

**Headers-generator** is a web-based tool designed to help developers and API users generate secure cryptographic signatures for API requests. It supports multiple hashing algorithms (SHA-1, SHA-256, SHA-512) and provides a modern, interactive interface for generating and copying custom API headers.

---

## Features

- 🔒 **Supports SHA-1, SHA-256, SHA-512 algorithms**
- 🎨 **Modern, animated UI** for a smooth user experience
- 📝 **Customizable header prefix** (Title)
- ⏱️ **Timestamp-based signature generation**
- 📋 **Copy result button** for easy integration
- 🌐 **Language support** for algorithm documentation (English & Japanese)
- 📖 **Algorithm introduction page** with detailed explanations and comparison

---

## How It Works

1. Enter your API Key and Secret.
2. Choose a custom header title and select the desired hashing algorithm.
3. Click **Generate Signature** to create the headers:
   - `X-<Title>-Api-Key`
   - `X-<Title>-Timestamp`
   - `X-<Title>-Signature`
4. Copy the result and use it in your API requests.

---

## Hash Algorithms Supported

| Algorithm | Output Size | Security | Typical Use |
|-----------|-------------|----------|-------------|
| SHA-1     | 160 bits    | Weak     | Deprecated  |
| SHA-256   | 256 bits    | Strong   | Blockchain, TLS |
| SHA-512   | 512 bits    | Very Strong | Digital signatures, high-security systems |

For a comprehensive comparison and explanation, see [algorithms-intro.html](algorithms-intro.html).

---

## Getting Started

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. (Optional) Visit `algorithms-intro.html` for more information about hash algorithms.

---

## File Structure

- `index.html` — Main signature generator UI
- `algorithms-intro.html` — Hash algorithm documentation (English/Japanese)
- `script.js` — Signature generation logic
- `style.css` — Custom styles and animations
- `background-image.jpg` — Background image for UI

---

## Screenshots

![Main UI](screenshot-main.png)
![Algorithm Intro](screenshot-algo.png)

---

## License

MIT License

---

## Author

Developed by [Hoc Tran](https://github.com/tranvelocity)

---

## Links

- [Hash Algorithm Introduction](algorithms-intro.html)
- [Source Code on GitHub](https://github.com/tranvelocity/Headers-generator)
 