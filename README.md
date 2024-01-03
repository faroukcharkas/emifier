# Emifier

## Description

Emifier is a command-line tool that automatically converts pixel (px) measurements to em units in CSS files. This enhances the accessibility, responsiveness, and scalability of your web projects.

## Version

1.1.4

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

## Adding Emifier to PATH

Emifier should be automatically added to your system's PATH when installed globally via npm. If you encounter an issue where `emifier` is not recognized as a command, you may need to manually add npm's global installation directory to your PATH.

### Finding npm's Global Installation Directory

First, find out where npm installs global packages on your system:

```bash
npm prefix -g
```

This command will return the path to npm's global installation directory.

### Updating PATH Environment Variable

#### For Windows:

1. Search for "Environment Variables" in your Windows search and select "Edit the system environment variables."
2. In the System Properties window, click on "Environment Variables."
3. Under "System variables," find and select the `Path` variable, then click "Edit."
4. Click "New" and add the path you obtained from `npm prefix -g`.
5. Click "OK" to close all dialogs and apply the changes.

#### For macOS/Linux:

Add the following line to your `.bashrc`, `.zshrc`, or equivalent shell configuration file:

```bash
export PATH="$(npm prefix -g)/bin:$PATH"
```

Then, refresh your terminal or source the configuration file:

```bash
source ~/.bashrc
# or
source ~/.zshrc
```

After these steps, you should be able to run `emifier` from your terminal.

## Dependencies

- yargs: ^17.7.2

## Author

Farouk Charkas <farouk.charkas@gmail.com>

## License

MIT License
