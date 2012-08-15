TiFog
=====

An iOS module for titanium to fast blur a view or window.

The module applies a fast blur on any view or window making it looking unfocused.
Is only a rasterizing, not a gaussian blur so the quality of the result is not very good, but is very fast.


To use it you only need to require the module in the app
~~~
	require('ti.fog');
~~~

And then to call the **setBlurred** method of the view/window with true or false as argument

~~~
	win.setBlurred(true); // this will blur the window

	win.setBlurred(false); // this will UNblur the window
~~~
