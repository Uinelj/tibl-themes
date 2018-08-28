# tibl

tibl is a bad blog "engine" that currently consists on poorly defined js functions that get markdown posts from Github and renders them client-side.

tibl is very minimal: even the post listing is in markdown, and is done by hand. In the near future tibl may get a cli tool to manage the post listing more programmatically.

_toc generation may be implemented soontm_

1. [Installation](#Installation)
    - Github Pages
    - Web server
2. [Usage](#Usage)
    - Add topics/posts
3. [Files](#Files)
4. [Customisation](#Customisation)
    - Themes
    - Nav/Footer
5. [Conclusion](#Conclusion)

## <a name="Installation"></a>Installation

Since tibl is very minimal, it doesn't require anything else than something which is able to serve html.

#### Github Pages

1. Fork this repository
2. Enable Github Pages
3. Go to your Github Pages URL

#### On a classic web server

TODO

## <a name="Usage"></a>Usage

Currently using tibl may appear a bit cumbersome.
I'd like to provide some client editor, using client-side Github oauth login plus a tiny markdown editor someday, but I don't know if it's possible.

**TLDR:** `t.html?t=sth` renders `data/topics/sth.md`, `t.html?p=sth` renders `data/topics/_sth.md`, `t.html` alone renders `database.md`.

### Adding topics/posts

I call them topic because why not but eh

* Your posts live in `data/topics` (you can rename topics posts if you edit the lines `27` and `29` of `t.html` accordingly. I'll provide a config var someday).

* Posts that begin with an underscore (`_`), well. They begin with an underscore. They are pages, and they won't be taken into account when building the post listing (when such a tool exists). It's for About/Contact pages, for example.

* Write your post as you like:
  ```markdown
  # Hello ! 

  Hello and welcome to my tiny tibl site. 
  It's fresh and quiet here.

  I like **markdown**.

  > See you !
  ```

* Add your post into the `database.md` file: 

    ```
    # Posts

    * [Hello !][hello]
    * [Blog post about things][things]

    [hello]: t.html?p=hello
    [things]: t.html?p=things
    ```

* `t.html?p=hello` will link to `data/topics/hello.md`. tibl will add `.md` at the end, so don't add it in the `database.md` or it won't work.
* Here's what your `data` file should look like:
   ```bash
   data/
        topics/
            hello.md # <- Your new post
            things.md
        database.md # <- Edited database
        foot.md
        index.md
        nav.md
   ``` 
## <a name="Files"></a>Files

   ```bash
   css/ #<- Make tibl bearable for the eyes
        normalize.css
        sakura.css # <- Using oxalorg/sakura as the classless theme
   data/ # <- All of your post content
        topics/ # <- Your posts
            hello.md
            things.md
            ...
        database.md # <- Post listing
        foot.md # <- footer
        index.md # <- index page
        nav.md # <- nav bar
    js/
        tibl.js # <- tibl javascript functions
        config.js # <- config array, currently empty :]
    index.html # <- Renders the index. Similar to t.html?p=index, I guess
    t.html # <- Renders pages and topics.
   ``` 

## <a name="Customization"></a>Customization

### Themes

  Just use classless themes.

  _Note: I just tested Sakura._

  - [Sakura](https://oxal.org/projects/sakura/demo/)
  - [Marx](https://mblode.github.io/marx/)
  - [Bare CSS](http://barecss.com)
  - [classless](https://classless.alhur.es/themes/)

### nav/footer

  I use a markdown nav and footer but if it's not ok for you use html.

  Just change `data/{nav, foot}.md` to your convinience.

## <a name="Conclusion"></a>Conclusion

  Just use something else