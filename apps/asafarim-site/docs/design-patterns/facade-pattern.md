---
sidebar_position: 3
title: "Façade Pattern"
---

Façade is a structural design pattern that presents a simplified interface to a library, a framework, or any other complex set of classes. 
Just like its name, facade, implies it is like the front of a building hides all the interiors, rooms, plumbing and so on from the outsiders. The example of such structure is like a compiler that has got parsers, lexical analyzer, tokenizer; but from a consumer standpoint when you as a framework creator are thinking about your customer and having empathy for what they want to do in their priorities you are saying yourself oh and maybe I don’t want to give them access to all the internals there maybe I just want to give them a nice compiler façade where they give me something I compile it and I return it and away you go and I hide all those internals so that’s the big pro, it gives you and your consumer a nice interface and if you allow them then, if they want to they can go around that interface and go and get the interior if you so choose. 

For instance, an app that uploads short funny videos with cats to social media could potentially use a professional video conversion library. However, all that it really needs is a class with the single method encode(filename, format). After creating such a class and connecting it with the video conversion library, you’ll have your first facade.

<a className="rm-a" href="https://refactoring.guru/design-patterns/book">Learn more about Façade</a>
<br />
<br />


But what it can be seen as a downside to these kind of patterns is actually working with a broad set of objects that belong to a sophisticated library or framework. Ordinarily, you’d need to initialize all of those objects, keep track of dependencies, execute methods in the correct order, and so on, which makes it hard to comprehend and maintain.

:::tip Solution
Having a facade is handy when you need to integrate your app with a sophisticated library that has dozens of features, but you just need a tiny bit of its functionality.
:::