# \<simple-wc\>

<img src=i.png width=300>

This POC tries to show 2 separate working parts together:
- on the one side we have a **Web Component**. But not just a normal one... it's a Polymer 2 component with a LitElement component in it; 
- and on the other side we have a **Demo Website**. This would act as our CMS-generated site.

**What is the purpose of this proof-of-concept?**

- Demonstrates we can use LitElement components inside Polymer 2 components ✅ 
- Demonstrates how to build this kind of components and how to use it in a website via soon-to-be-deprecated HTML Imports ✅ 
- Demonstrates this works both in modern (Chrome, Firefox, Safari) and old browsers (IE11) ✅ 

## ⚙️ Web Component

Our Web Component is called `simple-wc` and it's a Polymer 2 component with a LitElement component used in it.

### Go to its folder

```
$ cd simple-wc
```

### Install dependencies (it will automatically install Bower deps too)

```
$ npm i
```

### Build the component

So that we have an ES5 bundled version we can reuse anywhere

```
$ npm run build
```

## ⚙️ Demo website

Our website makes use of the Web Component. The component is required via bower as local dependency. Note we require the built version.


### Go to its folder

```
$ cd web
```

### Install dependencies (it will automatically install Bower deps too)

```
$ npm i
```

### Open website in your browser

```
$ npm run start
```

### All at the same time

I wrote a main build script to do everything so that the demo is easier to deploy, from the main directory, just:

```
$ npm run build
```