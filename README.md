```
vue-ui-store
├─ .editorconfig
├─ .husky
│  ├─ pre-commit
│  └─ _
│     ├─ applypatch-msg
│     ├─ commit-msg
│     ├─ h
│     ├─ husky.sh
│     ├─ post-applypatch
│     ├─ post-checkout
│     ├─ post-commit
│     ├─ post-merge
│     ├─ post-rewrite
│     ├─ pre-applypatch
│     ├─ pre-auto-gc
│     ├─ pre-commit
│     ├─ pre-merge-commit
│     ├─ pre-push
│     ├─ pre-rebase
│     └─ prepare-commit-msg
├─ .npmrc
├─ .prettierignore
├─ .prettierrc
├─ build
│  ├─ componentBuilder.ts
│  ├─ full-component.ts
│  ├─ gulpfile.ts
│  ├─ pluginsBuilder.ts
│  ├─ utils
│  │  ├─ config.ts
│  │  ├─ delpath.ts
│  │  ├─ index.ts
│  │  ├─ paths.ts
│  │  ├─ run.ts
│  │  └─ withTaskName.ts
│  └─ utilsBuilder.ts
├─ commitlint.config.mjs
├─ docs
│  ├─ component
│  │  └─ icon.md
│  ├─ guide
│  │  ├─ installation.md
│  │  └─ quieStart.md
│  ├─ index.md
│  ├─ package.json
│  └─ vite.config.ts
├─ docs.md
├─ eslint.config.js
├─ package.json
├─ packages
│  ├─ components
│  │  ├─ gulpfile.ts
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  ├─ src
│  │  │  ├─ button
│  │  │  │  ├─ index.ts
│  │  │  │  └─ src
│  │  │  │     ├─ button.ts
│  │  │  │     └─ button.vue
│  │  │  ├─ calendar
│  │  │  │  ├─ index.ts
│  │  │  │  └─ src
│  │  │  │     ├─ calendar.ts
│  │  │  │     └─ calendar.vue
│  │  │  ├─ checkbox
│  │  │  │  ├─ index.ts
│  │  │  │  └─ src
│  │  │  │     ├─ checkbox.ts
│  │  │  │     └─ checkbox.vue
│  │  │  ├─ form
│  │  │  │  ├─ index.ts
│  │  │  │  └─ src
│  │  │  │     ├─ form-item.ts
│  │  │  │     ├─ form-item.vue
│  │  │  │     ├─ form.ts
│  │  │  │     └─ form.vue
│  │  │  ├─ icon
│  │  │  │  ├─ index.ts
│  │  │  │  └─ src
│  │  │  │     ├─ icon.ts
│  │  │  │     └─ icon.vue
│  │  │  ├─ index.ts
│  │  │  ├─ input
│  │  │  │  ├─ index.ts
│  │  │  │  └─ src
│  │  │  │     ├─ input.ts
│  │  │  │     └─ input.tsx
│  │  │  ├─ internal-icon
│  │  │  │  ├─ Loading.tsx
│  │  │  │  └─ Switcher.tsx
│  │  │  ├─ tree
│  │  │  │  ├─ index.ts
│  │  │  │  └─ src
│  │  │  │     ├─ tree-node-content.tsx
│  │  │  │     ├─ tree.ts
│  │  │  │     ├─ tree.vue
│  │  │  │     └─ treeNode.vue
│  │  │  ├─ upload
│  │  │  │  ├─ index.ts
│  │  │  │  └─ src
│  │  │  │     ├─ ajax.ts
│  │  │  │     ├─ upload-content.ts
│  │  │  │     ├─ upload-content.vue
│  │  │  │     ├─ upload-dragger.vue
│  │  │  │     ├─ upload.ts
│  │  │  │     └─ upload.vue
│  │  │  ├─ virtual-list
│  │  │  │  ├─ index.ts
│  │  │  │  └─ src
│  │  │  │     └─ virtual.tsx
│  │  │  └─ virtual-scroll-list
│  │  │     ├─ index.ts
│  │  │     └─ src
│  │  │        ├─ virtual-helper.ts
│  │  │        ├─ virtual-item.tsx
│  │  │        ├─ virtual-list.tsx
│  │  │        └─ virtual-props.ts
│  │  └─ vite.config.ts
│  ├─ plugins
│  │  ├─ gulpfile.ts
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ src
│  │     ├─ checkVersionPlugin
│  │     │  ├─ checkVersion.ts
│  │     │  ├─ gitInfo.ts
│  │     │  ├─ gitRevision.ts
│  │     │  └─ index.ts
│  │     ├─ index.ts
│  │     └─ other
│  │        └─ index.ts
│  ├─ theme-chalk
│  │  ├─ gulpfile.ts
│  │  ├─ package.json
│  │  └─ src
│  │     ├─ button.scss
│  │     ├─ calendar.scss
│  │     ├─ checkbox.scss
│  │     ├─ common
│  │     │  └─ var.scss
│  │     ├─ form-item.scss
│  │     ├─ form.scss
│  │     ├─ icon.scss
│  │     ├─ index.scss
│  │     ├─ input.scss
│  │     ├─ mixins
│  │     │  ├─ config.scss
│  │     │  └─ mixins.scss
│  │     ├─ tree.scss
│  │     ├─ upload.scss
│  │     └─ vl.scss
│  └─ utils
│     ├─ create.ts
│     ├─ gulpfile.ts
│     ├─ index.ts
│     ├─ package.json
│     └─ with-install.ts
├─ play
│  ├─ index.html
│  ├─ package.json
│  ├─ public
│  │  ├─ config.json
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.vue
│  │  ├─ components
│  │  │  ├─ calendar-play.vue
│  │  │  ├─ form-play.vue
│  │  │  ├─ list-item.vue
│  │  │  ├─ upload-play.vue
│  │  │  └─ vsl-play.vue
│  │  ├─ main.ts
│  │  ├─ plugins
│  │  │  └─ index.ts
│  │  ├─ router
│  │  │  └─ index.ts
│  │  └─ vite-env.d.ts
│  ├─ tsconfig.app.json
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ scripts
│  └─ publish.ts
├─ tsconfig.json
└─ typings
   └─ vue-shim.d.ts

```

```
vue-ui-store
├─ .editorconfig
├─ .husky
│  ├─ pre-commit
│  └─ _
│     ├─ applypatch-msg
│     ├─ commit-msg
│     ├─ h
│     ├─ husky.sh
│     ├─ post-applypatch
│     ├─ post-checkout
│     ├─ post-commit
│     ├─ post-merge
│     ├─ post-rewrite
│     ├─ pre-applypatch
│     ├─ pre-auto-gc
│     ├─ pre-commit
│     ├─ pre-merge-commit
│     ├─ pre-push
│     ├─ pre-rebase
│     └─ prepare-commit-msg
├─ .npmrc
├─ .prettierignore
├─ .prettierrc
├─ build
│  ├─ componentBuilder.ts
│  ├─ full-component.ts
│  ├─ gulpfile.ts
│  ├─ pluginsBuilder.ts
│  ├─ utils
│  │  ├─ config.ts
│  │  ├─ delpath.ts
│  │  ├─ index.ts
│  │  ├─ paths.ts
│  │  ├─ run.ts
│  │  └─ withTaskName.ts
│  └─ utilsBuilder.ts
├─ commitlint.config.mjs
├─ docs
│  ├─ component
│  │  └─ icon.md
│  ├─ guide
│  │  ├─ installation.md
│  │  └─ quieStart.md
│  ├─ index.md
│  ├─ package.json
│  └─ vite.config.ts
├─ docs.md
├─ eslint.config.js
├─ package.json
├─ packages
│  ├─ components
│  │  ├─ button
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ button.ts
│  │  │     └─ button.vue
│  │  ├─ calendar
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ calendar.ts
│  │  │     └─ calendar.vue
│  │  ├─ checkbox
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ checkbox.ts
│  │  │     └─ checkbox.vue
│  │  ├─ form
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ form-item.ts
│  │  │     ├─ form-item.vue
│  │  │     ├─ form.ts
│  │  │     └─ form.vue
│  │  ├─ gulpfile.ts
│  │  ├─ icon
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ icon.ts
│  │  │     └─ icon.vue
│  │  ├─ index.ts
│  │  ├─ index.ts.txt
│  │  ├─ input
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ input.ts
│  │  │     └─ input.tsx
│  │  ├─ internal-icon
│  │  │  ├─ Loading.tsx
│  │  │  └─ Switcher.tsx
│  │  ├─ package.json
│  │  ├─ tree
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ tree-node-content.tsx
│  │  │     ├─ tree.ts
│  │  │     ├─ tree.vue
│  │  │     └─ treeNode.vue
│  │  ├─ upload
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ ajax.ts
│  │  │     ├─ upload-content.ts
│  │  │     ├─ upload-content.vue
│  │  │     ├─ upload-dragger.vue
│  │  │     ├─ upload.ts
│  │  │     └─ upload.vue
│  │  ├─ virtual-list
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ virtual.tsx
│  │  ├─ virtual-scroll-list
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ virtual-helper.ts
│  │  │     ├─ virtual-item.tsx
│  │  │     ├─ virtual-list.tsx
│  │  │     └─ virtual-props.ts
│  │  └─ vite.config.ts
│  ├─ plugins
│  │  ├─ gulpfile.ts
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ src
│  │     ├─ checkVersionPlugin
│  │     │  ├─ checkVersion.ts
│  │     │  ├─ gitInfo.ts
│  │     │  ├─ gitRevision.ts
│  │     │  └─ index.ts
│  │     ├─ index.ts
│  │     └─ other
│  │        └─ index.ts
│  ├─ theme-chalk
│  │  ├─ gulpfile.ts
│  │  ├─ package.json
│  │  └─ src
│  │     ├─ button.scss
│  │     ├─ calendar.scss
│  │     ├─ checkbox.scss
│  │     ├─ common
│  │     │  └─ var.scss
│  │     ├─ form-item.scss
│  │     ├─ form.scss
│  │     ├─ icon.scss
│  │     ├─ index.scss
│  │     ├─ input.scss
│  │     ├─ mixins
│  │     │  ├─ config.scss
│  │     │  └─ mixins.scss
│  │     ├─ tree.scss
│  │     ├─ upload.scss
│  │     └─ vl.scss
│  └─ utils
│     ├─ create.ts
│     ├─ gulpfile.ts
│     ├─ index.ts
│     ├─ package.json
│     └─ with-install.ts
├─ play
│  ├─ index.html
│  ├─ package.json
│  ├─ public
│  │  ├─ config.json
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.vue
│  │  ├─ components
│  │  │  ├─ calendar-play.vue
│  │  │  ├─ form-play.vue
│  │  │  ├─ list-item.vue
│  │  │  ├─ upload-play.vue
│  │  │  └─ vsl-play.vue
│  │  ├─ main.ts
│  │  ├─ plugins
│  │  │  └─ index.ts
│  │  ├─ router
│  │  │  └─ index.ts
│  │  └─ vite-env.d.ts
│  ├─ tsconfig.app.json
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ scripts
│  └─ publish.ts
├─ tsconfig.json
└─ typings
   └─ vue-shim.d.ts

```

```
vue-ui-store
├─ .editorconfig
├─ .husky
│  ├─ pre-commit
│  └─ _
│     ├─ applypatch-msg
│     ├─ commit-msg
│     ├─ h
│     ├─ husky.sh
│     ├─ post-applypatch
│     ├─ post-checkout
│     ├─ post-commit
│     ├─ post-merge
│     ├─ post-rewrite
│     ├─ pre-applypatch
│     ├─ pre-auto-gc
│     ├─ pre-commit
│     ├─ pre-merge-commit
│     ├─ pre-push
│     ├─ pre-rebase
│     └─ prepare-commit-msg
├─ .npmrc
├─ .prettierignore
├─ .prettierrc
├─ build
│  ├─ componentBuilder.ts
│  ├─ full-component.ts
│  ├─ gulpfile.ts
│  ├─ pluginsBuilder.ts
│  ├─ utils
│  │  ├─ config.ts
│  │  ├─ delpath.ts
│  │  ├─ index.ts
│  │  ├─ paths.ts
│  │  ├─ run.ts
│  │  └─ withTaskName.ts
│  └─ utilsBuilder.ts
├─ commitlint.config.mjs
├─ dist
│  └─ components
│     └─ es
│        ├─ button
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ button.d.ts
│        │     └─ button.vue.d.ts
│        ├─ calendar
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ calendar.d.ts
│        │     └─ calendar.vue.d.ts
│        ├─ checkbox
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ checkbox.d.ts
│        │     └─ checkbox.vue.d.ts
│        ├─ components
│        │  ├─ button
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ button.es.js
│        │  │     ├─ button.vue.es.js
│        │  │     └─ button.vue.es2.js
│        │  ├─ calendar
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ calendar.es.js
│        │  │     ├─ calendar.vue.es.js
│        │  │     └─ calendar.vue.es2.js
│        │  ├─ checkbox
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ checkbox.es.js
│        │  │     ├─ checkbox.vue.es.js
│        │  │     └─ checkbox.vue.es2.js
│        │  ├─ form
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ form-item.es.js
│        │  │     ├─ form-item.vue.es.js
│        │  │     ├─ form-item.vue.es2.js
│        │  │     ├─ form.es.js
│        │  │     ├─ form.vue.es.js
│        │  │     └─ form.vue.es2.js
│        │  ├─ icon
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ icon.es.js
│        │  │     ├─ icon.vue.es.js
│        │  │     └─ icon.vue.es2.js
│        │  ├─ index.es.js
│        │  ├─ input
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ input.es.js
│        │  │     └─ input.es2.js
│        │  ├─ internal-icon
│        │  │  ├─ Loading.es.js
│        │  │  └─ Switcher.es.js
│        │  ├─ tree
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ tree-node-content.es.js
│        │  │     ├─ tree.es.js
│        │  │     ├─ tree.vue.es.js
│        │  │     ├─ tree.vue.es2.js
│        │  │     ├─ treeNode.vue.es.js
│        │  │     └─ treeNode.vue.es2.js
│        │  ├─ upload
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ ajax.es.js
│        │  │     ├─ upload-content.es.js
│        │  │     ├─ upload-content.vue.es.js
│        │  │     ├─ upload-content.vue.es2.js
│        │  │     ├─ upload-dragger.vue.es.js
│        │  │     ├─ upload-dragger.vue.es2.js
│        │  │     ├─ upload.es.js
│        │  │     ├─ upload.vue.es.js
│        │  │     └─ upload.vue.es2.js
│        │  └─ virtual-list
│        │     ├─ index.es.js
│        │     └─ src
│        │        └─ virtual.es.js
│        ├─ form
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ form-item.d.ts
│        │     ├─ form-item.vue.d.ts
│        │     ├─ form.d.ts
│        │     └─ form.vue.d.ts
│        ├─ gulpfile.d.ts
│        ├─ icon
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ icon.d.ts
│        │     └─ icon.vue.d.ts
│        ├─ index.d.ts
│        ├─ index.es.js
│        ├─ input
│        │  └─ index.d.ts
│        ├─ internal-icon
│        │  ├─ Loading.d.ts
│        │  └─ Switcher.d.ts
│        ├─ tree
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ tree-node-content.d.ts
│        │     ├─ tree.d.ts
│        │     ├─ tree.vue.d.ts
│        │     └─ treeNode.vue.d.ts
│        ├─ upload
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ ajax.d.ts
│        │     ├─ upload-content.d.ts
│        │     ├─ upload-content.vue.d.ts
│        │     ├─ upload-dragger.vue.d.ts
│        │     ├─ upload.d.ts
│        │     └─ upload.vue.d.ts
│        ├─ utils
│        │  ├─ create.es.js
│        │  └─ with-install.es.js
│        ├─ virtual-list
│        │  ├─ index.d.ts
│        │  └─ src
│        │     └─ virtual.d.ts
│        ├─ virtual-scroll-list
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ virtual-helper.d.ts
│        │     ├─ virtual-item.d.ts
│        │     ├─ virtual-list.d.ts
│        │     └─ virtual-props.d.ts
│        └─ vite.config.d.ts
├─ docs
│  ├─ component
│  │  └─ icon.md
│  ├─ guide
│  │  ├─ installation.md
│  │  └─ quieStart.md
│  ├─ index.md
│  ├─ package.json
│  └─ vite.config.ts
├─ docs.md
├─ eslint.config.js
├─ package.json
├─ packages
│  ├─ components
│  │  ├─ button
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ button.ts
│  │  │     └─ button.vue
│  │  ├─ calendar
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ calendar.ts
│  │  │     └─ calendar.vue
│  │  ├─ checkbox
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ checkbox.ts
│  │  │     └─ checkbox.vue
│  │  ├─ dist
│  │  │  └─ es
│  │  │     ├─ components
│  │  │     │  ├─ button
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ button.es.js
│  │  │     │  │     ├─ button.vue.es.js
│  │  │     │  │     └─ button.vue.es2.js
│  │  │     │  ├─ calendar
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ calendar.es.js
│  │  │     │  │     ├─ calendar.vue.es.js
│  │  │     │  │     └─ calendar.vue.es2.js
│  │  │     │  ├─ checkbox
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ checkbox.es.js
│  │  │     │  │     ├─ checkbox.vue.es.js
│  │  │     │  │     └─ checkbox.vue.es2.js
│  │  │     │  ├─ form
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ form-item.es.js
│  │  │     │  │     ├─ form-item.vue.es.js
│  │  │     │  │     ├─ form-item.vue.es2.js
│  │  │     │  │     ├─ form.es.js
│  │  │     │  │     ├─ form.vue.es.js
│  │  │     │  │     └─ form.vue.es2.js
│  │  │     │  ├─ icon
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ icon.es.js
│  │  │     │  │     ├─ icon.vue.es.js
│  │  │     │  │     └─ icon.vue.es2.js
│  │  │     │  ├─ index.es.js
│  │  │     │  ├─ input
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ input.es.js
│  │  │     │  │     └─ input.es2.js
│  │  │     │  ├─ internal-icon
│  │  │     │  │  ├─ Loading.es.js
│  │  │     │  │  └─ Switcher.es.js
│  │  │     │  ├─ tree
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ tree-node-content.es.js
│  │  │     │  │     ├─ tree.es.js
│  │  │     │  │     ├─ tree.vue.es.js
│  │  │     │  │     ├─ tree.vue.es2.js
│  │  │     │  │     ├─ treeNode.vue.es.js
│  │  │     │  │     └─ treeNode.vue.es2.js
│  │  │     │  ├─ upload
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ ajax.es.js
│  │  │     │  │     ├─ upload-content.es.js
│  │  │     │  │     ├─ upload-content.vue.es.js
│  │  │     │  │     ├─ upload-content.vue.es2.js
│  │  │     │  │     ├─ upload-dragger.vue.es.js
│  │  │     │  │     ├─ upload-dragger.vue.es2.js
│  │  │     │  │     ├─ upload.es.js
│  │  │     │  │     ├─ upload.vue.es.js
│  │  │     │  │     └─ upload.vue.es2.js
│  │  │     │  └─ virtual-list
│  │  │     │     ├─ index.es.js
│  │  │     │     └─ src
│  │  │     │        └─ virtual.es.js
│  │  │     └─ utils
│  │  │        ├─ create.es.js
│  │  │        └─ with-install.es.js
│  │  ├─ form
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ form-item.ts
│  │  │     ├─ form-item.vue
│  │  │     ├─ form.ts
│  │  │     └─ form.vue
│  │  ├─ gulpfile.ts
│  │  ├─ icon
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ icon.ts
│  │  │     └─ icon.vue
│  │  ├─ index.ts
│  │  ├─ index.ts.txt
│  │  ├─ input
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ input.ts
│  │  │     └─ input.tsx
│  │  ├─ internal-icon
│  │  │  ├─ Loading.tsx
│  │  │  └─ Switcher.tsx
│  │  ├─ package.json
│  │  ├─ tree
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ tree-node-content.tsx
│  │  │     ├─ tree.ts
│  │  │     ├─ tree.vue
│  │  │     └─ treeNode.vue
│  │  ├─ upload
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ ajax.ts
│  │  │     ├─ upload-content.ts
│  │  │     ├─ upload-content.vue
│  │  │     ├─ upload-dragger.vue
│  │  │     ├─ upload.ts
│  │  │     └─ upload.vue
│  │  ├─ virtual-list
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ virtual.tsx
│  │  ├─ virtual-scroll-list
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ virtual-helper.ts
│  │  │     ├─ virtual-item.tsx
│  │  │     ├─ virtual-list.tsx
│  │  │     └─ virtual-props.ts
│  │  └─ vite.config.ts
│  ├─ plugins
│  │  ├─ dist
│  │  │  ├─ es
│  │  │  │  ├─ checkVersion
│  │  │  │  │  ├─ checkVersion.d.ts
│  │  │  │  │  ├─ checkVersion.js
│  │  │  │  │  ├─ gitInfo.d.ts
│  │  │  │  │  ├─ gitInfo.js
│  │  │  │  │  ├─ gitRevision.d.ts
│  │  │  │  │  ├─ gitRevision.js
│  │  │  │  │  ├─ index.d.ts
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ checkVersionPlugin
│  │  │  │  │  ├─ checkVersion.d.ts
│  │  │  │  │  ├─ checkVersion.js
│  │  │  │  │  ├─ gitInfo.d.ts
│  │  │  │  │  ├─ gitInfo.js
│  │  │  │  │  ├─ gitRevision.d.ts
│  │  │  │  │  ├─ gitRevision.js
│  │  │  │  │  ├─ index.d.ts
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ index.d.ts
│  │  │  │  ├─ index.js
│  │  │  │  └─ other
│  │  │  │     ├─ index.d.ts
│  │  │  │     └─ index.js
│  │  │  └─ lib
│  │  │     ├─ checkVersion
│  │  │     │  ├─ checkVersion.d.ts
│  │  │     │  ├─ checkVersion.js
│  │  │     │  ├─ gitInfo.d.ts
│  │  │     │  ├─ gitInfo.js
│  │  │     │  ├─ gitRevision.d.ts
│  │  │     │  ├─ gitRevision.js
│  │  │     │  ├─ index.d.ts
│  │  │     │  └─ index.js
│  │  │     ├─ checkVersionPlugin
│  │  │     │  ├─ checkVersion.d.ts
│  │  │     │  ├─ checkVersion.js
│  │  │     │  ├─ gitInfo.d.ts
│  │  │     │  ├─ gitInfo.js
│  │  │     │  ├─ gitRevision.d.ts
│  │  │     │  ├─ gitRevision.js
│  │  │     │  ├─ index.d.ts
│  │  │     │  └─ index.js
│  │  │     ├─ index.d.ts
│  │  │     ├─ index.js
│  │  │     └─ other
│  │  │        ├─ index.d.ts
│  │  │        └─ index.js
│  │  ├─ gulpfile.ts
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ src
│  │     ├─ checkVersionPlugin
│  │     │  ├─ checkVersion.ts
│  │     │  ├─ gitInfo.ts
│  │     │  ├─ gitRevision.ts
│  │     │  └─ index.ts
│  │     ├─ index.ts
│  │     └─ other
│  │        └─ index.ts
│  ├─ theme-chalk
│  │  ├─ gulpfile.ts
│  │  ├─ package.json
│  │  └─ src
│  │     ├─ button.scss
│  │     ├─ calendar.scss
│  │     ├─ checkbox.scss
│  │     ├─ common
│  │     │  └─ var.scss
│  │     ├─ form-item.scss
│  │     ├─ form.scss
│  │     ├─ icon.scss
│  │     ├─ index.scss
│  │     ├─ input.scss
│  │     ├─ mixins
│  │     │  ├─ config.scss
│  │     │  └─ mixins.scss
│  │     ├─ tree.scss
│  │     ├─ upload.scss
│  │     └─ vl.scss
│  └─ utils
│     ├─ create.ts
│     ├─ dist
│     │  ├─ es
│     │  │  ├─ create.d.ts
│     │  │  ├─ create.js
│     │  │  ├─ index.d.ts
│     │  │  ├─ index.js
│     │  │  ├─ with-install.d.ts
│     │  │  └─ with-install.js
│     │  └─ lib
│     │     ├─ create.d.ts
│     │     ├─ create.js
│     │     ├─ index.d.ts
│     │     ├─ index.js
│     │     ├─ with-install.d.ts
│     │     └─ with-install.js
│     ├─ gulpfile.ts
│     ├─ index.ts
│     ├─ package.json
│     └─ with-install.ts
├─ play
│  ├─ index.html
│  ├─ package.json
│  ├─ public
│  │  ├─ config.json
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.vue
│  │  ├─ components
│  │  │  ├─ calendar-play.vue
│  │  │  ├─ form-play.vue
│  │  │  ├─ list-item.vue
│  │  │  ├─ upload-play.vue
│  │  │  └─ vsl-play.vue
│  │  ├─ dist-test
│  │  │  └─ index.vue
│  │  ├─ main.ts
│  │  ├─ plugins
│  │  │  └─ index.ts
│  │  ├─ router
│  │  │  └─ index.ts
│  │  └─ vite-env.d.ts
│  ├─ tsconfig.app.json
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ scripts
│  └─ publish.ts
├─ tsconfig.json
└─ typings
   └─ vue-shim.d.ts

```

```
vue-ui-store
├─ .editorconfig
├─ .husky
│  ├─ pre-commit
│  └─ _
│     ├─ applypatch-msg
│     ├─ commit-msg
│     ├─ h
│     ├─ husky.sh
│     ├─ post-applypatch
│     ├─ post-checkout
│     ├─ post-commit
│     ├─ post-merge
│     ├─ post-rewrite
│     ├─ pre-applypatch
│     ├─ pre-auto-gc
│     ├─ pre-commit
│     ├─ pre-merge-commit
│     ├─ pre-push
│     ├─ pre-rebase
│     └─ prepare-commit-msg
├─ .npmrc
├─ .prettierignore
├─ .prettierrc
├─ build
│  ├─ componentBuilder.ts
│  ├─ full-component.ts
│  ├─ gulpfile.ts
│  ├─ pluginsBuilder.ts
│  ├─ utils
│  │  ├─ config.ts
│  │  ├─ delpath.ts
│  │  ├─ index.ts
│  │  ├─ paths.ts
│  │  ├─ run.ts
│  │  └─ withTaskName.ts
│  └─ utilsBuilder.ts
├─ commitlint.config.mjs
├─ dist
│  └─ components
│     └─ es
│        ├─ button
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ button.d.ts
│        │     └─ button.vue.d.ts
│        ├─ calendar
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ calendar.d.ts
│        │     └─ calendar.vue.d.ts
│        ├─ checkbox
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ checkbox.d.ts
│        │     └─ checkbox.vue.d.ts
│        ├─ components
│        │  ├─ button
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ button.es.js
│        │  │     ├─ button.vue.es.js
│        │  │     └─ button.vue.es2.js
│        │  ├─ calendar
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ calendar.es.js
│        │  │     ├─ calendar.vue.es.js
│        │  │     └─ calendar.vue.es2.js
│        │  ├─ checkbox
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ checkbox.es.js
│        │  │     ├─ checkbox.vue.es.js
│        │  │     └─ checkbox.vue.es2.js
│        │  ├─ form
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ form-item.es.js
│        │  │     ├─ form-item.vue.es.js
│        │  │     ├─ form-item.vue.es2.js
│        │  │     ├─ form.es.js
│        │  │     ├─ form.vue.es.js
│        │  │     └─ form.vue.es2.js
│        │  ├─ icon
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ icon.es.js
│        │  │     ├─ icon.vue.es.js
│        │  │     └─ icon.vue.es2.js
│        │  ├─ index.es.js
│        │  ├─ input
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ input.es.js
│        │  │     └─ input.es2.js
│        │  ├─ internal-icon
│        │  │  ├─ Loading.es.js
│        │  │  └─ Switcher.es.js
│        │  ├─ tree
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ tree-node-content.es.js
│        │  │     ├─ tree.es.js
│        │  │     ├─ tree.vue.es.js
│        │  │     ├─ tree.vue.es2.js
│        │  │     ├─ treeNode.vue.es.js
│        │  │     └─ treeNode.vue.es2.js
│        │  ├─ upload
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ ajax.es.js
│        │  │     ├─ upload-content.es.js
│        │  │     ├─ upload-content.vue.es.js
│        │  │     ├─ upload-content.vue.es2.js
│        │  │     ├─ upload-dragger.vue.es.js
│        │  │     ├─ upload-dragger.vue.es2.js
│        │  │     ├─ upload.es.js
│        │  │     ├─ upload.vue.es.js
│        │  │     └─ upload.vue.es2.js
│        │  └─ virtual-list
│        │     ├─ index.es.js
│        │     └─ src
│        │        └─ virtual.es.js
│        ├─ form
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ form-item.d.ts
│        │     ├─ form-item.vue.d.ts
│        │     ├─ form.d.ts
│        │     └─ form.vue.d.ts
│        ├─ gulpfile.d.ts
│        ├─ icon
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ icon.d.ts
│        │     └─ icon.vue.d.ts
│        ├─ index.d.ts
│        ├─ index.es.js
│        ├─ input
│        │  └─ index.d.ts
│        ├─ internal-icon
│        │  ├─ Loading.d.ts
│        │  └─ Switcher.d.ts
│        ├─ tree
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ tree-node-content.d.ts
│        │     ├─ tree.d.ts
│        │     ├─ tree.vue.d.ts
│        │     └─ treeNode.vue.d.ts
│        ├─ upload
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ ajax.d.ts
│        │     ├─ upload-content.d.ts
│        │     ├─ upload-content.vue.d.ts
│        │     ├─ upload-dragger.vue.d.ts
│        │     ├─ upload.d.ts
│        │     └─ upload.vue.d.ts
│        ├─ utils
│        │  ├─ create.es.js
│        │  └─ with-install.es.js
│        ├─ virtual-list
│        │  ├─ index.d.ts
│        │  └─ src
│        │     └─ virtual.d.ts
│        ├─ virtual-scroll-list
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ virtual-helper.d.ts
│        │     ├─ virtual-item.d.ts
│        │     ├─ virtual-list.d.ts
│        │     └─ virtual-props.d.ts
│        └─ vite.config.d.ts
├─ docs
│  ├─ component
│  │  └─ icon.md
│  ├─ guide
│  │  ├─ installation.md
│  │  └─ quieStart.md
│  ├─ index.md
│  ├─ package.json
│  └─ vite.config.ts
├─ docs.md
├─ eslint.config.js
├─ package.json
├─ packages
│  ├─ components
│  │  ├─ button
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ button.ts
│  │  │     └─ button.vue
│  │  ├─ calendar
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ calendar.ts
│  │  │     └─ calendar.vue
│  │  ├─ checkbox
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ checkbox.ts
│  │  │     └─ checkbox.vue
│  │  ├─ dist
│  │  │  └─ es
│  │  │     ├─ components
│  │  │     │  ├─ button
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ button.es.js
│  │  │     │  │     ├─ button.vue.es.js
│  │  │     │  │     └─ button.vue.es2.js
│  │  │     │  ├─ calendar
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ calendar.es.js
│  │  │     │  │     ├─ calendar.vue.es.js
│  │  │     │  │     └─ calendar.vue.es2.js
│  │  │     │  ├─ checkbox
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ checkbox.es.js
│  │  │     │  │     ├─ checkbox.vue.es.js
│  │  │     │  │     └─ checkbox.vue.es2.js
│  │  │     │  ├─ form
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ form-item.es.js
│  │  │     │  │     ├─ form-item.vue.es.js
│  │  │     │  │     ├─ form-item.vue.es2.js
│  │  │     │  │     ├─ form.es.js
│  │  │     │  │     ├─ form.vue.es.js
│  │  │     │  │     └─ form.vue.es2.js
│  │  │     │  ├─ icon
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ icon.es.js
│  │  │     │  │     ├─ icon.vue.es.js
│  │  │     │  │     └─ icon.vue.es2.js
│  │  │     │  ├─ index.es.js
│  │  │     │  ├─ input
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ input.es.js
│  │  │     │  │     └─ input.es2.js
│  │  │     │  ├─ internal-icon
│  │  │     │  │  ├─ Loading.es.js
│  │  │     │  │  └─ Switcher.es.js
│  │  │     │  ├─ tree
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ tree-node-content.es.js
│  │  │     │  │     ├─ tree.es.js
│  │  │     │  │     ├─ tree.vue.es.js
│  │  │     │  │     ├─ tree.vue.es2.js
│  │  │     │  │     ├─ treeNode.vue.es.js
│  │  │     │  │     └─ treeNode.vue.es2.js
│  │  │     │  ├─ upload
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ ajax.es.js
│  │  │     │  │     ├─ upload-content.es.js
│  │  │     │  │     ├─ upload-content.vue.es.js
│  │  │     │  │     ├─ upload-content.vue.es2.js
│  │  │     │  │     ├─ upload-dragger.vue.es.js
│  │  │     │  │     ├─ upload-dragger.vue.es2.js
│  │  │     │  │     ├─ upload.es.js
│  │  │     │  │     ├─ upload.vue.es.js
│  │  │     │  │     └─ upload.vue.es2.js
│  │  │     │  └─ virtual-list
│  │  │     │     ├─ index.es.js
│  │  │     │     └─ src
│  │  │     │        └─ virtual.es.js
│  │  │     └─ utils
│  │  │        ├─ create.es.js
│  │  │        └─ with-install.es.js
│  │  ├─ form
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ form-item.ts
│  │  │     ├─ form-item.vue
│  │  │     ├─ form.ts
│  │  │     └─ form.vue
│  │  ├─ gulpfile.ts
│  │  ├─ icon
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ icon.ts
│  │  │     └─ icon.vue
│  │  ├─ index.ts
│  │  ├─ index.ts.txt
│  │  ├─ input
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ input.ts
│  │  │     └─ input.tsx
│  │  ├─ internal-icon
│  │  │  ├─ Loading.tsx
│  │  │  └─ Switcher.tsx
│  │  ├─ package.json
│  │  ├─ tree
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ tree-node-content.tsx
│  │  │     ├─ tree.ts
│  │  │     ├─ tree.vue
│  │  │     └─ treeNode.vue
│  │  ├─ upload
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ ajax.ts
│  │  │     ├─ upload-content.ts
│  │  │     ├─ upload-content.vue
│  │  │     ├─ upload-dragger.vue
│  │  │     ├─ upload.ts
│  │  │     └─ upload.vue
│  │  ├─ virtual-list
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ virtual.tsx
│  │  ├─ virtual-scroll-list
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ virtual-helper.ts
│  │  │     ├─ virtual-item.tsx
│  │  │     ├─ virtual-list.tsx
│  │  │     └─ virtual-props.ts
│  │  └─ vite.config.ts
│  ├─ plugins
│  │  ├─ dist
│  │  │  ├─ es
│  │  │  │  ├─ checkVersion
│  │  │  │  │  ├─ checkVersion.d.ts
│  │  │  │  │  ├─ checkVersion.js
│  │  │  │  │  ├─ gitInfo.d.ts
│  │  │  │  │  ├─ gitInfo.js
│  │  │  │  │  ├─ gitRevision.d.ts
│  │  │  │  │  ├─ gitRevision.js
│  │  │  │  │  ├─ index.d.ts
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ checkVersionPlugin
│  │  │  │  │  ├─ checkVersion.d.ts
│  │  │  │  │  ├─ checkVersion.js
│  │  │  │  │  ├─ gitInfo.d.ts
│  │  │  │  │  ├─ gitInfo.js
│  │  │  │  │  ├─ gitRevision.d.ts
│  │  │  │  │  ├─ gitRevision.js
│  │  │  │  │  ├─ index.d.ts
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ index.d.ts
│  │  │  │  ├─ index.js
│  │  │  │  └─ other
│  │  │  │     ├─ index.d.ts
│  │  │  │     └─ index.js
│  │  │  └─ lib
│  │  │     ├─ checkVersion
│  │  │     │  ├─ checkVersion.d.ts
│  │  │     │  ├─ checkVersion.js
│  │  │     │  ├─ gitInfo.d.ts
│  │  │     │  ├─ gitInfo.js
│  │  │     │  ├─ gitRevision.d.ts
│  │  │     │  ├─ gitRevision.js
│  │  │     │  ├─ index.d.ts
│  │  │     │  └─ index.js
│  │  │     ├─ checkVersionPlugin
│  │  │     │  ├─ checkVersion.d.ts
│  │  │     │  ├─ checkVersion.js
│  │  │     │  ├─ gitInfo.d.ts
│  │  │     │  ├─ gitInfo.js
│  │  │     │  ├─ gitRevision.d.ts
│  │  │     │  ├─ gitRevision.js
│  │  │     │  ├─ index.d.ts
│  │  │     │  └─ index.js
│  │  │     ├─ index.d.ts
│  │  │     ├─ index.js
│  │  │     └─ other
│  │  │        ├─ index.d.ts
│  │  │        └─ index.js
│  │  ├─ gulpfile.ts
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ src
│  │     ├─ checkVersionPlugin
│  │     │  ├─ checkVersion.ts
│  │     │  ├─ gitInfo.ts
│  │     │  ├─ gitRevision.ts
│  │     │  └─ index.ts
│  │     ├─ index.ts
│  │     └─ other
│  │        └─ index.ts
│  ├─ theme-chalk
│  │  ├─ gulpfile.ts
│  │  ├─ package.json
│  │  └─ src
│  │     ├─ button.scss
│  │     ├─ calendar.scss
│  │     ├─ checkbox.scss
│  │     ├─ common
│  │     │  └─ var.scss
│  │     ├─ form-item.scss
│  │     ├─ form.scss
│  │     ├─ icon.scss
│  │     ├─ index.scss
│  │     ├─ input.scss
│  │     ├─ mixins
│  │     │  ├─ config.scss
│  │     │  └─ mixins.scss
│  │     ├─ tree.scss
│  │     ├─ upload.scss
│  │     └─ vl.scss
│  └─ utils
│     ├─ create.ts
│     ├─ dist
│     │  ├─ es
│     │  │  ├─ create.d.ts
│     │  │  ├─ create.js
│     │  │  ├─ index.d.ts
│     │  │  ├─ index.js
│     │  │  ├─ with-install.d.ts
│     │  │  └─ with-install.js
│     │  └─ lib
│     │     ├─ create.d.ts
│     │     ├─ create.js
│     │     ├─ index.d.ts
│     │     ├─ index.js
│     │     ├─ with-install.d.ts
│     │     └─ with-install.js
│     ├─ gulpfile.ts
│     ├─ index.ts
│     ├─ package.json
│     └─ with-install.ts
├─ play
│  ├─ index.html
│  ├─ package.json
│  ├─ public
│  │  ├─ config.json
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.vue
│  │  ├─ components
│  │  │  ├─ calendar-play.vue
│  │  │  ├─ form-play.vue
│  │  │  ├─ list-item.vue
│  │  │  ├─ upload-play.vue
│  │  │  └─ vsl-play.vue
│  │  ├─ dist-test
│  │  │  └─ index.vue
│  │  ├─ main.ts
│  │  ├─ plugins
│  │  │  └─ index.ts
│  │  ├─ router
│  │  │  └─ index.ts
│  │  └─ vite-env.d.ts
│  ├─ tsconfig.app.json
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ scripts
│  └─ publish.ts
├─ tsconfig.json
└─ typings
   └─ vue-shim.d.ts

```

```
vue-ui-store
├─ .editorconfig
├─ .husky
│  ├─ pre-commit
│  └─ _
│     ├─ applypatch-msg
│     ├─ commit-msg
│     ├─ h
│     ├─ husky.sh
│     ├─ post-applypatch
│     ├─ post-checkout
│     ├─ post-commit
│     ├─ post-merge
│     ├─ post-rewrite
│     ├─ pre-applypatch
│     ├─ pre-auto-gc
│     ├─ pre-commit
│     ├─ pre-merge-commit
│     ├─ pre-push
│     ├─ pre-rebase
│     └─ prepare-commit-msg
├─ .npmrc
├─ .prettierignore
├─ .prettierrc
├─ build
│  ├─ componentBuilder.ts
│  ├─ full-component.ts
│  ├─ gulpfile.ts
│  ├─ pluginsBuilder.ts
│  ├─ utils
│  │  ├─ config.ts
│  │  ├─ delpath.ts
│  │  ├─ index.ts
│  │  ├─ paths.ts
│  │  ├─ run.ts
│  │  └─ withTaskName.ts
│  └─ utilsBuilder.ts
├─ commitlint.config.mjs
├─ dist
│  └─ components
│     └─ es
│        ├─ button
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ button.d.ts
│        │     └─ button.vue.d.ts
│        ├─ calendar
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ calendar.d.ts
│        │     └─ calendar.vue.d.ts
│        ├─ checkbox
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ checkbox.d.ts
│        │     └─ checkbox.vue.d.ts
│        ├─ components
│        │  ├─ button
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ button.es.js
│        │  │     ├─ button.vue.es.js
│        │  │     └─ button.vue.es2.js
│        │  ├─ calendar
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ calendar.es.js
│        │  │     ├─ calendar.vue.es.js
│        │  │     └─ calendar.vue.es2.js
│        │  ├─ checkbox
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ checkbox.es.js
│        │  │     ├─ checkbox.vue.es.js
│        │  │     └─ checkbox.vue.es2.js
│        │  ├─ form
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ form-item.es.js
│        │  │     ├─ form-item.vue.es.js
│        │  │     ├─ form-item.vue.es2.js
│        │  │     ├─ form.es.js
│        │  │     ├─ form.vue.es.js
│        │  │     └─ form.vue.es2.js
│        │  ├─ icon
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ icon.es.js
│        │  │     ├─ icon.vue.es.js
│        │  │     └─ icon.vue.es2.js
│        │  ├─ index.es.js
│        │  ├─ input
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ input.es.js
│        │  │     └─ input.es2.js
│        │  ├─ internal-icon
│        │  │  ├─ Loading.es.js
│        │  │  └─ Switcher.es.js
│        │  ├─ tree
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ tree-node-content.es.js
│        │  │     ├─ tree.es.js
│        │  │     ├─ tree.vue.es.js
│        │  │     ├─ tree.vue.es2.js
│        │  │     ├─ treeNode.vue.es.js
│        │  │     └─ treeNode.vue.es2.js
│        │  ├─ upload
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ ajax.es.js
│        │  │     ├─ upload-content.es.js
│        │  │     ├─ upload-content.vue.es.js
│        │  │     ├─ upload-content.vue.es2.js
│        │  │     ├─ upload-dragger.vue.es.js
│        │  │     ├─ upload-dragger.vue.es2.js
│        │  │     ├─ upload.es.js
│        │  │     ├─ upload.vue.es.js
│        │  │     └─ upload.vue.es2.js
│        │  └─ virtual-list
│        │     ├─ index.es.js
│        │     └─ src
│        │        └─ virtual.es.js
│        ├─ form
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ form-item.d.ts
│        │     ├─ form-item.vue.d.ts
│        │     ├─ form.d.ts
│        │     └─ form.vue.d.ts
│        ├─ gulpfile.d.ts
│        ├─ icon
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ icon.d.ts
│        │     └─ icon.vue.d.ts
│        ├─ index.d.ts
│        ├─ index.es.js
│        ├─ input
│        │  └─ index.d.ts
│        ├─ internal-icon
│        │  ├─ Loading.d.ts
│        │  └─ Switcher.d.ts
│        ├─ tree
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ tree-node-content.d.ts
│        │     ├─ tree.d.ts
│        │     ├─ tree.vue.d.ts
│        │     └─ treeNode.vue.d.ts
│        ├─ upload
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ ajax.d.ts
│        │     ├─ upload-content.d.ts
│        │     ├─ upload-content.vue.d.ts
│        │     ├─ upload-dragger.vue.d.ts
│        │     ├─ upload.d.ts
│        │     └─ upload.vue.d.ts
│        ├─ utils
│        │  ├─ create.es.js
│        │  └─ with-install.es.js
│        ├─ virtual-list
│        │  ├─ index.d.ts
│        │  └─ src
│        │     └─ virtual.d.ts
│        ├─ virtual-scroll-list
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ virtual-helper.d.ts
│        │     ├─ virtual-item.d.ts
│        │     ├─ virtual-list.d.ts
│        │     └─ virtual-props.d.ts
│        └─ vite.config.d.ts
├─ docs
│  ├─ component
│  │  └─ icon.md
│  ├─ guide
│  │  ├─ installation.md
│  │  └─ quieStart.md
│  ├─ index.md
│  ├─ package.json
│  └─ vite.config.ts
├─ docs.md
├─ eslint.config.js
├─ package.json
├─ packages
│  ├─ components
│  │  ├─ button
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ button.ts
│  │  │     └─ button.vue
│  │  ├─ calendar
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ calendar.ts
│  │  │     └─ calendar.vue
│  │  ├─ checkbox
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ checkbox.ts
│  │  │     └─ checkbox.vue
│  │  ├─ dist
│  │  │  └─ es
│  │  │     ├─ components
│  │  │     │  ├─ button
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ button.es.js
│  │  │     │  │     ├─ button.vue.es.js
│  │  │     │  │     └─ button.vue.es2.js
│  │  │     │  ├─ calendar
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ calendar.es.js
│  │  │     │  │     ├─ calendar.vue.es.js
│  │  │     │  │     └─ calendar.vue.es2.js
│  │  │     │  ├─ checkbox
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ checkbox.es.js
│  │  │     │  │     ├─ checkbox.vue.es.js
│  │  │     │  │     └─ checkbox.vue.es2.js
│  │  │     │  ├─ form
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ form-item.es.js
│  │  │     │  │     ├─ form-item.vue.es.js
│  │  │     │  │     ├─ form-item.vue.es2.js
│  │  │     │  │     ├─ form.es.js
│  │  │     │  │     ├─ form.vue.es.js
│  │  │     │  │     └─ form.vue.es2.js
│  │  │     │  ├─ icon
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ icon.es.js
│  │  │     │  │     ├─ icon.vue.es.js
│  │  │     │  │     └─ icon.vue.es2.js
│  │  │     │  ├─ index.es.js
│  │  │     │  ├─ input
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ input.es.js
│  │  │     │  │     └─ input.es2.js
│  │  │     │  ├─ internal-icon
│  │  │     │  │  ├─ Loading.es.js
│  │  │     │  │  └─ Switcher.es.js
│  │  │     │  ├─ tree
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ tree-node-content.es.js
│  │  │     │  │     ├─ tree.es.js
│  │  │     │  │     ├─ tree.vue.es.js
│  │  │     │  │     ├─ tree.vue.es2.js
│  │  │     │  │     ├─ treeNode.vue.es.js
│  │  │     │  │     └─ treeNode.vue.es2.js
│  │  │     │  ├─ upload
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ ajax.es.js
│  │  │     │  │     ├─ upload-content.es.js
│  │  │     │  │     ├─ upload-content.vue.es.js
│  │  │     │  │     ├─ upload-content.vue.es2.js
│  │  │     │  │     ├─ upload-dragger.vue.es.js
│  │  │     │  │     ├─ upload-dragger.vue.es2.js
│  │  │     │  │     ├─ upload.es.js
│  │  │     │  │     ├─ upload.vue.es.js
│  │  │     │  │     └─ upload.vue.es2.js
│  │  │     │  └─ virtual-list
│  │  │     │     ├─ index.es.js
│  │  │     │     └─ src
│  │  │     │        └─ virtual.es.js
│  │  │     └─ utils
│  │  │        ├─ create.es.js
│  │  │        └─ with-install.es.js
│  │  ├─ form
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ form-item.ts
│  │  │     ├─ form-item.vue
│  │  │     ├─ form.ts
│  │  │     └─ form.vue
│  │  ├─ gulpfile.ts
│  │  ├─ icon
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ icon.ts
│  │  │     └─ icon.vue
│  │  ├─ index.ts
│  │  ├─ index.ts.txt
│  │  ├─ input
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ input.ts
│  │  │     └─ input.tsx
│  │  ├─ internal-icon
│  │  │  ├─ Loading.tsx
│  │  │  └─ Switcher.tsx
│  │  ├─ package.json
│  │  ├─ tree
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ tree-node-content.tsx
│  │  │     ├─ tree.ts
│  │  │     ├─ tree.vue
│  │  │     └─ treeNode.vue
│  │  ├─ upload
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ ajax.ts
│  │  │     ├─ upload-content.ts
│  │  │     ├─ upload-content.vue
│  │  │     ├─ upload-dragger.vue
│  │  │     ├─ upload.ts
│  │  │     └─ upload.vue
│  │  ├─ virtual-list
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ virtual.tsx
│  │  ├─ virtual-scroll-list
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ virtual-helper.ts
│  │  │     ├─ virtual-item.tsx
│  │  │     ├─ virtual-list.tsx
│  │  │     └─ virtual-props.ts
│  │  └─ vite.config.ts
│  ├─ plugins
│  │  ├─ dist
│  │  │  ├─ es
│  │  │  │  ├─ checkVersion
│  │  │  │  │  ├─ checkVersion.d.ts
│  │  │  │  │  ├─ checkVersion.js
│  │  │  │  │  ├─ gitInfo.d.ts
│  │  │  │  │  ├─ gitInfo.js
│  │  │  │  │  ├─ gitRevision.d.ts
│  │  │  │  │  ├─ gitRevision.js
│  │  │  │  │  ├─ index.d.ts
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ checkVersionPlugin
│  │  │  │  │  ├─ checkVersion.d.ts
│  │  │  │  │  ├─ checkVersion.js
│  │  │  │  │  ├─ gitInfo.d.ts
│  │  │  │  │  ├─ gitInfo.js
│  │  │  │  │  ├─ gitRevision.d.ts
│  │  │  │  │  ├─ gitRevision.js
│  │  │  │  │  ├─ index.d.ts
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ index.d.ts
│  │  │  │  ├─ index.js
│  │  │  │  └─ other
│  │  │  │     ├─ index.d.ts
│  │  │  │     └─ index.js
│  │  │  └─ lib
│  │  │     ├─ checkVersion
│  │  │     │  ├─ checkVersion.d.ts
│  │  │     │  ├─ checkVersion.js
│  │  │     │  ├─ gitInfo.d.ts
│  │  │     │  ├─ gitInfo.js
│  │  │     │  ├─ gitRevision.d.ts
│  │  │     │  ├─ gitRevision.js
│  │  │     │  ├─ index.d.ts
│  │  │     │  └─ index.js
│  │  │     ├─ checkVersionPlugin
│  │  │     │  ├─ checkVersion.d.ts
│  │  │     │  ├─ checkVersion.js
│  │  │     │  ├─ gitInfo.d.ts
│  │  │     │  ├─ gitInfo.js
│  │  │     │  ├─ gitRevision.d.ts
│  │  │     │  ├─ gitRevision.js
│  │  │     │  ├─ index.d.ts
│  │  │     │  └─ index.js
│  │  │     ├─ index.d.ts
│  │  │     ├─ index.js
│  │  │     └─ other
│  │  │        ├─ index.d.ts
│  │  │        └─ index.js
│  │  ├─ gulpfile.ts
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ src
│  │     ├─ checkVersionPlugin
│  │     │  ├─ checkVersion.ts
│  │     │  ├─ gitInfo.ts
│  │     │  ├─ gitRevision.ts
│  │     │  └─ index.ts
│  │     ├─ index.ts
│  │     └─ other
│  │        └─ index.ts
│  ├─ theme-chalk
│  │  ├─ gulpfile.ts
│  │  ├─ package.json
│  │  └─ src
│  │     ├─ button.scss
│  │     ├─ calendar.scss
│  │     ├─ checkbox.scss
│  │     ├─ common
│  │     │  └─ var.scss
│  │     ├─ form-item.scss
│  │     ├─ form.scss
│  │     ├─ icon.scss
│  │     ├─ index.scss
│  │     ├─ input.scss
│  │     ├─ mixins
│  │     │  ├─ config.scss
│  │     │  └─ mixins.scss
│  │     ├─ tree.scss
│  │     ├─ upload.scss
│  │     └─ vl.scss
│  └─ utils
│     ├─ create.ts
│     ├─ dist
│     │  ├─ es
│     │  │  ├─ create.d.ts
│     │  │  ├─ create.js
│     │  │  ├─ index.d.ts
│     │  │  ├─ index.js
│     │  │  ├─ with-install.d.ts
│     │  │  └─ with-install.js
│     │  └─ lib
│     │     ├─ create.d.ts
│     │     ├─ create.js
│     │     ├─ index.d.ts
│     │     ├─ index.js
│     │     ├─ with-install.d.ts
│     │     └─ with-install.js
│     ├─ gulpfile.ts
│     ├─ index.ts
│     ├─ package.json
│     └─ with-install.ts
├─ play
│  ├─ index.html
│  ├─ package.json
│  ├─ public
│  │  ├─ config.json
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.vue
│  │  ├─ components
│  │  │  ├─ calendar-play.vue
│  │  │  ├─ form-play.vue
│  │  │  ├─ list-item.vue
│  │  │  ├─ upload-play.vue
│  │  │  └─ vsl-play.vue
│  │  ├─ dist-test
│  │  │  └─ index.vue
│  │  ├─ main.ts
│  │  ├─ plugins
│  │  │  └─ index.ts
│  │  ├─ router
│  │  │  └─ index.ts
│  │  └─ vite-env.d.ts
│  ├─ tsconfig.app.json
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ scripts
│  └─ publish.ts
├─ tsconfig.json
└─ typings
   └─ vue-shim.d.ts

```
```
vue-ui-store
├─ .editorconfig
├─ .husky
│  ├─ pre-commit
│  └─ _
│     ├─ applypatch-msg
│     ├─ commit-msg
│     ├─ h
│     ├─ husky.sh
│     ├─ post-applypatch
│     ├─ post-checkout
│     ├─ post-commit
│     ├─ post-merge
│     ├─ post-rewrite
│     ├─ pre-applypatch
│     ├─ pre-auto-gc
│     ├─ pre-commit
│     ├─ pre-merge-commit
│     ├─ pre-push
│     ├─ pre-rebase
│     └─ prepare-commit-msg
├─ .npmrc
├─ .prettierignore
├─ .prettierrc
├─ build
│  ├─ componentBuilder.ts
│  ├─ full-component.ts
│  ├─ gulpfile.ts
│  ├─ pluginsBuilder.ts
│  ├─ utils
│  │  ├─ config.ts
│  │  ├─ delpath.ts
│  │  ├─ index.ts
│  │  ├─ paths.ts
│  │  ├─ run.ts
│  │  └─ withTaskName.ts
│  └─ utilsBuilder.ts
├─ commitlint.config.mjs
├─ dist
│  └─ components
│     └─ es
│        ├─ button
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ button.d.ts
│        │     └─ button.vue.d.ts
│        ├─ calendar
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ calendar.d.ts
│        │     └─ calendar.vue.d.ts
│        ├─ checkbox
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ checkbox.d.ts
│        │     └─ checkbox.vue.d.ts
│        ├─ components
│        │  ├─ button
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ button.es.js
│        │  │     ├─ button.vue.es.js
│        │  │     └─ button.vue.es2.js
│        │  ├─ calendar
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ calendar.es.js
│        │  │     ├─ calendar.vue.es.js
│        │  │     └─ calendar.vue.es2.js
│        │  ├─ checkbox
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ checkbox.es.js
│        │  │     ├─ checkbox.vue.es.js
│        │  │     └─ checkbox.vue.es2.js
│        │  ├─ form
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ form-item.es.js
│        │  │     ├─ form-item.vue.es.js
│        │  │     ├─ form-item.vue.es2.js
│        │  │     ├─ form.es.js
│        │  │     ├─ form.vue.es.js
│        │  │     └─ form.vue.es2.js
│        │  ├─ icon
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ icon.es.js
│        │  │     ├─ icon.vue.es.js
│        │  │     └─ icon.vue.es2.js
│        │  ├─ index.es.js
│        │  ├─ input
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ input.es.js
│        │  │     └─ input.es2.js
│        │  ├─ internal-icon
│        │  │  ├─ Loading.es.js
│        │  │  └─ Switcher.es.js
│        │  ├─ tree
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ tree-node-content.es.js
│        │  │     ├─ tree.es.js
│        │  │     ├─ tree.vue.es.js
│        │  │     ├─ tree.vue.es2.js
│        │  │     ├─ treeNode.vue.es.js
│        │  │     └─ treeNode.vue.es2.js
│        │  ├─ upload
│        │  │  ├─ index.es.js
│        │  │  └─ src
│        │  │     ├─ ajax.es.js
│        │  │     ├─ upload-content.es.js
│        │  │     ├─ upload-content.vue.es.js
│        │  │     ├─ upload-content.vue.es2.js
│        │  │     ├─ upload-dragger.vue.es.js
│        │  │     ├─ upload-dragger.vue.es2.js
│        │  │     ├─ upload.es.js
│        │  │     ├─ upload.vue.es.js
│        │  │     └─ upload.vue.es2.js
│        │  └─ virtual-list
│        │     ├─ index.es.js
│        │     └─ src
│        │        └─ virtual.es.js
│        ├─ form
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ form-item.d.ts
│        │     ├─ form-item.vue.d.ts
│        │     ├─ form.d.ts
│        │     └─ form.vue.d.ts
│        ├─ gulpfile.d.ts
│        ├─ icon
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ icon.d.ts
│        │     └─ icon.vue.d.ts
│        ├─ index.d.ts
│        ├─ index.es.js
│        ├─ input
│        │  └─ index.d.ts
│        ├─ internal-icon
│        │  ├─ Loading.d.ts
│        │  └─ Switcher.d.ts
│        ├─ tree
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ tree-node-content.d.ts
│        │     ├─ tree.d.ts
│        │     ├─ tree.vue.d.ts
│        │     └─ treeNode.vue.d.ts
│        ├─ upload
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ ajax.d.ts
│        │     ├─ upload-content.d.ts
│        │     ├─ upload-content.vue.d.ts
│        │     ├─ upload-dragger.vue.d.ts
│        │     ├─ upload.d.ts
│        │     └─ upload.vue.d.ts
│        ├─ utils
│        │  ├─ create.es.js
│        │  └─ with-install.es.js
│        ├─ virtual-list
│        │  ├─ index.d.ts
│        │  └─ src
│        │     └─ virtual.d.ts
│        ├─ virtual-scroll-list
│        │  ├─ index.d.ts
│        │  └─ src
│        │     ├─ virtual-helper.d.ts
│        │     ├─ virtual-item.d.ts
│        │     ├─ virtual-list.d.ts
│        │     └─ virtual-props.d.ts
│        └─ vite.config.d.ts
├─ docs
│  ├─ component
│  │  └─ icon.md
│  ├─ guide
│  │  ├─ installation.md
│  │  └─ quieStart.md
│  ├─ index.md
│  ├─ package.json
│  └─ vite.config.ts
├─ docs.md
├─ eslint.config.js
├─ package.json
├─ packages
│  ├─ components
│  │  ├─ button
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ button.ts
│  │  │     └─ button.vue
│  │  ├─ calendar
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ calendar.ts
│  │  │     └─ calendar.vue
│  │  ├─ checkbox
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ checkbox.ts
│  │  │     └─ checkbox.vue
│  │  ├─ dist
│  │  │  └─ es
│  │  │     ├─ components
│  │  │     │  ├─ button
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ button.es.js
│  │  │     │  │     ├─ button.vue.es.js
│  │  │     │  │     └─ button.vue.es2.js
│  │  │     │  ├─ calendar
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ calendar.es.js
│  │  │     │  │     ├─ calendar.vue.es.js
│  │  │     │  │     └─ calendar.vue.es2.js
│  │  │     │  ├─ checkbox
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ checkbox.es.js
│  │  │     │  │     ├─ checkbox.vue.es.js
│  │  │     │  │     └─ checkbox.vue.es2.js
│  │  │     │  ├─ form
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ form-item.es.js
│  │  │     │  │     ├─ form-item.vue.es.js
│  │  │     │  │     ├─ form-item.vue.es2.js
│  │  │     │  │     ├─ form.es.js
│  │  │     │  │     ├─ form.vue.es.js
│  │  │     │  │     └─ form.vue.es2.js
│  │  │     │  ├─ icon
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ icon.es.js
│  │  │     │  │     ├─ icon.vue.es.js
│  │  │     │  │     └─ icon.vue.es2.js
│  │  │     │  ├─ index.es.js
│  │  │     │  ├─ input
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ input.es.js
│  │  │     │  │     └─ input.es2.js
│  │  │     │  ├─ internal-icon
│  │  │     │  │  ├─ Loading.es.js
│  │  │     │  │  └─ Switcher.es.js
│  │  │     │  ├─ tree
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ tree-node-content.es.js
│  │  │     │  │     ├─ tree.es.js
│  │  │     │  │     ├─ tree.vue.es.js
│  │  │     │  │     ├─ tree.vue.es2.js
│  │  │     │  │     ├─ treeNode.vue.es.js
│  │  │     │  │     └─ treeNode.vue.es2.js
│  │  │     │  ├─ upload
│  │  │     │  │  ├─ index.es.js
│  │  │     │  │  └─ src
│  │  │     │  │     ├─ ajax.es.js
│  │  │     │  │     ├─ upload-content.es.js
│  │  │     │  │     ├─ upload-content.vue.es.js
│  │  │     │  │     ├─ upload-content.vue.es2.js
│  │  │     │  │     ├─ upload-dragger.vue.es.js
│  │  │     │  │     ├─ upload-dragger.vue.es2.js
│  │  │     │  │     ├─ upload.es.js
│  │  │     │  │     ├─ upload.vue.es.js
│  │  │     │  │     └─ upload.vue.es2.js
│  │  │     │  └─ virtual-list
│  │  │     │     ├─ index.es.js
│  │  │     │     └─ src
│  │  │     │        └─ virtual.es.js
│  │  │     └─ utils
│  │  │        ├─ create.es.js
│  │  │        └─ with-install.es.js
│  │  ├─ form
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ form-item.ts
│  │  │     ├─ form-item.vue
│  │  │     ├─ form.ts
│  │  │     └─ form.vue
│  │  ├─ gulpfile.ts
│  │  ├─ icon
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ icon.ts
│  │  │     └─ icon.vue
│  │  ├─ index.ts
│  │  ├─ index.ts.txt
│  │  ├─ input
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ input.ts
│  │  │     └─ input.tsx
│  │  ├─ internal-icon
│  │  │  ├─ Loading.tsx
│  │  │  └─ Switcher.tsx
│  │  ├─ package.json
│  │  ├─ tree
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ tree-node-content.tsx
│  │  │     ├─ tree.ts
│  │  │     ├─ tree.vue
│  │  │     └─ treeNode.vue
│  │  ├─ upload
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ ajax.ts
│  │  │     ├─ upload-content.ts
│  │  │     ├─ upload-content.vue
│  │  │     ├─ upload-dragger.vue
│  │  │     ├─ upload.ts
│  │  │     └─ upload.vue
│  │  ├─ virtual-list
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     └─ virtual.tsx
│  │  ├─ virtual-scroll-list
│  │  │  ├─ index.ts
│  │  │  └─ src
│  │  │     ├─ virtual-helper.ts
│  │  │     ├─ virtual-item.tsx
│  │  │     ├─ virtual-list.tsx
│  │  │     └─ virtual-props.ts
│  │  └─ vite.config.ts
│  ├─ plugins
│  │  ├─ dist
│  │  │  ├─ es
│  │  │  │  ├─ checkVersion
│  │  │  │  │  ├─ checkVersion.d.ts
│  │  │  │  │  ├─ checkVersion.js
│  │  │  │  │  ├─ gitInfo.d.ts
│  │  │  │  │  ├─ gitInfo.js
│  │  │  │  │  ├─ gitRevision.d.ts
│  │  │  │  │  ├─ gitRevision.js
│  │  │  │  │  ├─ index.d.ts
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ checkVersionPlugin
│  │  │  │  │  ├─ checkVersion.d.ts
│  │  │  │  │  ├─ checkVersion.js
│  │  │  │  │  ├─ gitInfo.d.ts
│  │  │  │  │  ├─ gitInfo.js
│  │  │  │  │  ├─ gitRevision.d.ts
│  │  │  │  │  ├─ gitRevision.js
│  │  │  │  │  ├─ index.d.ts
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ index.d.ts
│  │  │  │  ├─ index.js
│  │  │  │  └─ other
│  │  │  │     ├─ index.d.ts
│  │  │  │     └─ index.js
│  │  │  └─ lib
│  │  │     ├─ checkVersion
│  │  │     │  ├─ checkVersion.d.ts
│  │  │     │  ├─ checkVersion.js
│  │  │     │  ├─ gitInfo.d.ts
│  │  │     │  ├─ gitInfo.js
│  │  │     │  ├─ gitRevision.d.ts
│  │  │     │  ├─ gitRevision.js
│  │  │     │  ├─ index.d.ts
│  │  │     │  └─ index.js
│  │  │     ├─ checkVersionPlugin
│  │  │     │  ├─ checkVersion.d.ts
│  │  │     │  ├─ checkVersion.js
│  │  │     │  ├─ gitInfo.d.ts
│  │  │     │  ├─ gitInfo.js
│  │  │     │  ├─ gitRevision.d.ts
│  │  │     │  ├─ gitRevision.js
│  │  │     │  ├─ index.d.ts
│  │  │     │  └─ index.js
│  │  │     ├─ index.d.ts
│  │  │     ├─ index.js
│  │  │     └─ other
│  │  │        ├─ index.d.ts
│  │  │        └─ index.js
│  │  ├─ gulpfile.ts
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ src
│  │     ├─ checkVersionPlugin
│  │     │  ├─ checkVersion.ts
│  │     │  ├─ gitInfo.ts
│  │     │  ├─ gitRevision.ts
│  │     │  └─ index.ts
│  │     ├─ index.ts
│  │     └─ other
│  │        └─ index.ts
│  ├─ theme-chalk
│  │  ├─ gulpfile.ts
│  │  ├─ package.json
│  │  └─ src
│  │     ├─ button.scss
│  │     ├─ calendar.scss
│  │     ├─ checkbox.scss
│  │     ├─ common
│  │     │  └─ var.scss
│  │     ├─ form-item.scss
│  │     ├─ form.scss
│  │     ├─ icon.scss
│  │     ├─ index.scss
│  │     ├─ input.scss
│  │     ├─ mixins
│  │     │  ├─ config.scss
│  │     │  └─ mixins.scss
│  │     ├─ tree.scss
│  │     ├─ upload.scss
│  │     └─ vl.scss
│  └─ utils
│     ├─ create.ts
│     ├─ dist
│     │  ├─ es
│     │  │  ├─ create.d.ts
│     │  │  ├─ create.js
│     │  │  ├─ index.d.ts
│     │  │  ├─ index.js
│     │  │  ├─ with-install.d.ts
│     │  │  └─ with-install.js
│     │  └─ lib
│     │     ├─ create.d.ts
│     │     ├─ create.js
│     │     ├─ index.d.ts
│     │     ├─ index.js
│     │     ├─ with-install.d.ts
│     │     └─ with-install.js
│     ├─ gulpfile.ts
│     ├─ index.ts
│     ├─ package.json
│     └─ with-install.ts
├─ play
│  ├─ index.html
│  ├─ package.json
│  ├─ public
│  │  ├─ config.json
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.vue
│  │  ├─ components
│  │  │  ├─ calendar-play.vue
│  │  │  ├─ form-play.vue
│  │  │  ├─ list-item.vue
│  │  │  ├─ upload-play.vue
│  │  │  └─ vsl-play.vue
│  │  ├─ dist-test
│  │  │  └─ index.vue
│  │  ├─ main.ts
│  │  ├─ plugins
│  │  │  └─ index.ts
│  │  ├─ router
│  │  │  └─ index.ts
│  │  └─ vite-env.d.ts
│  ├─ tsconfig.app.json
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ scripts
│  └─ publish.ts
├─ tsconfig.json
└─ typings
   └─ vue-shim.d.ts

```