# Emifier

## Description

Emifier is a command-line tool that automatically converts pixel (px) measurements to em units in CSS files. This enhances the accessibility, responsiveness, and scalability of your web projects.

## Version

1.1.2

## Installation

Install Emifier via npm:

```bash
npm install -g emifier
```

This will install Emifier globally on your system, making it available in your command line.

## Usage

To use Emifier, run the `emify` command followed by optional arguments for base pixel size and the path to your CSS file or directory.

### Syntax

```bash
emify [baseSize] [path]
```

- `baseSize`: The base font size in pixels (default: 16px).
- `path`: The path to the CSS file or directory. Defaults to the current working directory.

### Examples

Convert all `.css` files in the current directory:

```bash
emify
```

Convert a specific CSS file with a custom base size:

```bash
emify 18 path/to/your/file.css
```

Convert all `.css` files in a specific directory:

```bash
emify 16 path/to/your/directory
```

## Dependencies

- yargs: ^17.7.2

## Author

Farouk Charkas <farouk.charkas@gmail.com>

## License

MIT License
