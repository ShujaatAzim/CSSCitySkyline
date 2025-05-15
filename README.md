# City Skyline
> A small app built entirely in vanilla HTML, CSS, and Javascript. Simply click the buttons in various combinations to change up the view, and witness the raw power of vanilla CSS
> without all the bells and whistles of modern libraries.
>
> I built this as a showcase for my skills doing things the "old fashioned" way. These skills are often skipped by new developers, who immediately jump into using the latest tools without
> understanding what is being taken care of for them. Worse yet, many of these developed opt to use AI; without the underlying knowledge required to ask AI the right questions, such developers
> are doing themselves a great disservice. This is my way of taking a step back and trying to create something new without some of the tools I'm used to!

## Development setup

Built with:

Vite was chosen because it is lightweight. This is not a React app, but making it a vanilla Vite project made deploying via Dokku much simpler.

If clone this repo and want to play around with the code, run these to get it running locally: 

```sh
npm i
npm run build
npm run preview
```

The terminal should tell you which port it's on.

## Release History

* 1.1.1
    * Complete migration to Vite.
* 1.1.0
    * Migrate to Vite.
    * Add rain and neon modes.
* 1.0.0
    * First release, simple HTML & CSS with minimal JS.
