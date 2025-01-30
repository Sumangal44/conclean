

# proclear

A lightweight and powerful cross-platform console clearer for Node.js. `conclean` allows you to clear the terminal screen and optionally the scrollback buffer, ensuring a clean slate for your terminal output.

---

## Features
- 🌍 **Cross-Platform**: Works seamlessly on Windows, macOS, and Linux.
- ⚡ **Lightweight**: No dependencies, minimal footprint.
- 🛠️ **Configurable**: Choose whether to clear the scrollback buffer or just the terminal screen.

---

## Installation

Install `conclean` via npm:

```bash
npm install conclean
```

---

## Usage

Here's how to use `conclean` in your Node.js project:

### Clear the Console
```javascript
import conclean from 'conclean';
conclean();
```



## Examples

### Example: Clear Console with Default Behavior
```javascript
import conclean from 'conclean';

console.log('Before clearing...');
conclean();
console.log('This appears on a clean terminal!');
```


---

## Why `conclean`?

`conclean` provides a reliable way to clean up your terminal output. Unlike other packages, it supports both clearing the screen and optionally resetting the scrollback buffer, giving you full control.

---

## Compatibility

- **Node.js**: Version v12,v18,v20 and above
- **Platforms**: Windows, macOS, and Linux

---

## License

`conclean` is licensed under the [MIT License](LICENSE).

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/sumangal44/conclean).

---

## Author

Developed by [sumangal karan](https://github.com/sumangal44). Connect with me on [Twitter](https://twitter.com/) or [LinkedIn](https://www.linkedin.com/in/).



