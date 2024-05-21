# 1D6 Launcher

The 1D6 launcher, built using [Tauri](https://tauri.app/), [React](https://react.dev/), and [Typescript](https://www.typescriptlang.org/).

## Building

### Prerequisites

- Node.js + npm / Yarn / Bun / etc.
- Rust Toolchain + Cargo
- 4gb free space on your preferred drive (mostly filled by `node_modules`)

```bash
# Clone the repo
git clone https://github.com/OneDSix/launcher

# Install the needed libraries
# This is assuming you're running it from ./
npm i
cargo install --path ./src-tauri

# Then build
# This process will take an excruciating amount o time
# It may open a tab on your browser of the react app as well
cargo tauri dev 
```

It should be noted that if you're just building, there is no need to download any of the extensions in `./vscode`.\
If you want to contribute, then it's highly recommended.
