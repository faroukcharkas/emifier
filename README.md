# Emifier

## Description

A tool that automatically changes all px measurements in em in a project to ensure accessibility, responsiveness, and scalability.

## Installation

To install Emify, you will need Node.js and npm installed on your system. Once these prerequisites are met, you can install Emify globally using npm:

```bash
npm install -g emifier
```

## Usage

After installation, you can use the `emifier emify [basePx] [path]` command in your terminal. The tool can process a single CSS file or an entire directory of CSS files.

### Basic Command Structure

```bash
emify [basePx] [path]
```

- `basePx`: The base font size in pixels to calculate em units. Defaults to 16px if not specified.
- `path`: The path to the CSS file or directory you want to convert. If no path is provided, Emify will use the current working directory.

### Examples

Convert all `.css` files in the current directory using the default base size:

```bash
emifier emify
```

Convert a specific CSS file with a custom base size of 18px:

```bash
emifier emify 18 path/to/your/file.css
```

Convert all `.css` files in a specific directory:

```bash
emifier emify path/to/your/directory
```

## Features

- Recursively process all CSS files in a directory
- Customizable base pixel size for em conversion
- Supports single file or bulk processing

## License

This project is licensed under the [MIT License](LICENSE).
