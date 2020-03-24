
In our example, I have the feeling (without really understanding why) that a dual-dependency
cycle like the one described would cause a recursive call to require until both dependencies were loaded.

I think that it would be an issue if one object did overwrite the default `exports` object because
then the other wouldn't know that it loaded, and every time we got back around to it it would try to 
reload it again, causing an infinite loop?

Erm, nope. Here's the answer:

"
The trick is that require adds modules to its cache before it starts loading the module. That way, if any require call made while it is running tries to load it, it is already known, and the current interface will be returned, rather than starting to load the module once more (which would eventually overflow the stack).

If a module overwrites its module.exports value, any other module that has received its interface value before it finished loading will have gotten hold of the default interface object (which is likely empty), rather than the intended interface value.
"