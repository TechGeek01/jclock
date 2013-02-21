# [jClock](http://techgeek01.github.com/jclock)

I can haz time

# jClock

This little clock can be used as both a 12- or 24-hour display, as well as a trigger for time-based events on your website.

## Implementation

To implement this script, simply stick `<script type="text/javascript" src="https://raw.github.com/TechGeek01/jclock/master/jclock.js"></script>` into the header of your webpage, change your `<body>` tag's  `onload` attribute to `initialSet();`, and you're good to go!

## Usage

To use jClock, you can interact with the script in one of two ways.

### Display a clock

Adding a clock is easy. Simply set up the framework for one or more of these clocks, and jClock does the rest! There's also a hidden Easter egg. You won't find it directly in the source, but if you look closely, it may offer a clue as to how to trigger it.
> _**Hint:** It doesn't matter where you put floating clocks in the page, but due to the way jClock is set up, they will load slightly faster if they're further up on the page_

* Class of `24clock` - 24-hour clock
* Class of `12clock` - 12-hour clock
* ID of `float24clock` - Large 24-hour clock that will stick in the bottom left corner of the window
* ID of `float12clock` - Large 12-hour clock that will stick in the bottom left corner of the window
* ID of `float24clock` - Large 24-hour clock with black font that will stick in the bottom left corner of the window
* ID of `float12clock` - Large 12-hour clock with black font that will stick in the bottom left corner of the window

### Trigger timed events
If your site has JavaScript-handled events, you can trigger them with jClock simply by nesting your action within an if statement, and using one or more of the variables `staticYear`, `staticMonth`, `staticDate`, `year`, `month`, `date`, `h24`, `m`, or `s` as the trigger.

### Config

jClock allows you to add a config by creating a container with an ID of `jclockconfig`.
```html
<div id="jclockconfig"></div>
```

By creating and assigning values to attributes, you can tweak jClock's performance on your site.

* `data-beta` - Can be either yes or no, and will define whether or not potentially unstable features are used