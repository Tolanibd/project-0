![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Writing a Project Readme

When we add a `README.md` file in the root of a git repo it appears on the repo homepage of github.

We can write this readme in standard HTML, but more commonly we would use Markdown syntax, its a way of writing HTML without actually writing HTML.

This document is written in Markdown!

Let's look at the syntax:

### Headers with the `#` symbol

| HTML | Markdown |
|------|----------|
| `<h1>On the run1</h1>` | `# On the run` |
| `<h2>Header 2</h2>` | `## Header 2` |
| `<h3>Header 3</h3>` | `### Header 3` |
| `<h4>Header 4 </h4>` | `#### Header 4` |

Well, you get the idea

### Lists

We can use `*` or `-` to create an unordered list, and numbers to create an ordered one:

```
* Item 1
* Item 2
* Item 3
```

Would create:

```
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### `em` and `strong`

We can give words emphesis using `_` and `*`:

```
This is _emphasised_, this is **strongly emphasised**.
```
Would create:

```
This is <em>emphasised</em>, this is <strong>strongly emphasised</strong>.
```

### Images and links

Images can be added like so:

House url(../assets/images/bigger.jpg);
GF url(../assets/images/gf2.jpg);
  BF url(../assets/images/asap.jpg);
```
![Shark Cat](https://i.ytimg.com/vi/Of2HU3LGdbo/maxresdefault.jpg)
```

Would create:

```
<img src="https://i.ytimg.com/vi/Of2HU3LGdbo/maxresdefault.jpg" alt="Shark Cat">
```

And links, like so:

```
[Pinterest](https://www.pinterest.com/pin/426716133413993829/)
[Google](http://google.com)
```

Would create:

```
<a href="http://google.com">Google</a>
<a href="" www.pinterest.com/pin/426716133413993829">Pinterest</s>

```

### So much more

You can basically use Markdown to create any HTML element that you can think of. For more info [checkout this cheetsheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

## What to add to your project readme

#### Installation and setup

After the title, you should add a section on how to build and run the code. For project one, you might say:

- Download or clone the repo
- `npm i` to install dependencies
- `gulp` to compile the source code and open in browser

> **Note**: You'll need to have `gulp-cli` installed globally
> `npm i -g gulp-cli`

#### A short description

You should then give a short description of the project. You should include some screenshots at this point.

#### Technologies used

You should add a list of the software and languages used in the project, for exmaple:

- HTML 5
- SCSS
- JavaScript ES6
- jQuery 3.10
- Gulp
- NPM
- Git & github

#### Challenges faced

You should write a paragraph or two on the main challenges you faced during the project and how you overcame them. You don't have to be too detailed, but just demonstrate your ability to identify and solve problems.

#### Rounding it off

Finally you should say what improvements you would like to make to the project in the future. These could include things that you do not know how to do yet.

For example you might say:

- Improve the overall styling
- Add extra difficulty levels
- Add facial recognition to track how happy users are when they are playing my game
