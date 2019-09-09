# \<simple-wc\>

<img src=i.png width=300>

This POC tries to show 2 separate working parts together:
- on the one side we have a **Web Component**. But not just a normal one... it's a LitElement component within another Polymer 2 component; 
- and on the other side we have a **Demo Website**. This will mock a CMS-generated site.

**What is the purpose of this proof-of-concept?**

- It demonstrates we can use LitElement components inside Polymer 2 components ✅ 
- It demonstrates how to build this kind of components and how to use it in a website via soon-to-be-deprecated HTML Imports ✅ 
- It demonstrates this architecture works in both modern (Chrome, Firefox, Safari) and older browsers (IE11) ✅ 

## ⚙️ Web Component

Our Web Component is called `simple-wc`, with a LitElement component within a Polymer 2 one.

### Go to its folder

```
$ cd simple-wc
```

### Install dependencies (it will automatically install Bower deps too)

```
$ npm i
```

### Build the component

... so that we have an ES5 bundled version we can reuse anywhere

```
$ npm run build
```

## ⚙️ Demo website

Our website will make use of the Web Component in its HTML. The component is required via bower as a local dependency. Note we require the built version.


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

## 📝 A script to rule them all

In order to allow a CD pipeline to build the site, I also wrote a main build script to do everything at once. From the main directory, just do this:

```
$ npm run build
```