---
sidebar_position: 2
title: "Singleton Pattern"
---

Singleton is a creational design pattern that restricts the instantiation of a class to one "single" instance by providing a single point of access to the class for any other code. This is useful when exactly one object is needed to coordinate actions across the system, but it is frequently used in scenarios where it is not beneficial, introduces unnecessary restrictions in situations where a sole instance of a class is not actually required. This makes the singleton as an antipattern architecture. That's why, its usage trend is declining. 

The following example illustrates the structure of the Singleton design pattern:

```ts title="index.ts: Singleton Conceptual example"
/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class Singleton {
    private static instance: Singleton;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    public someBusinessLogic() {
        // ...
    }
}

/**
 * The client code.
 */
function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();
```
<div className="text-center">
 <form action="https://refactoring.guru/design-patterns/book" method="get" target="_blank">
    <button type="submit" class="btn btn-danger active">Learn more about Singleton →</button>
 </form>
 <br />
</div>

:::info Applicability
Use the Singleton pattern when you need stricter control over global variables. For example, a single instance available to all clients like a single database object shared by different parts of the program.
:::

:::tip Note that 
You can always adjust this limitation and allow creating any number of Singleton instances. The only piece of code that needs changing is the body of the getInstance method.
:::