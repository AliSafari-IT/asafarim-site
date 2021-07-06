---
sidebar_position: 2
---
# Testing Patterns

Since applications normally change over time, you should consider best practices or design patterns from the very beginning.
Test patterns are design patterns for test software ([See More](/docs/design-patterns/overview#catalog-of-design-patterns)). 

For instance, when you use a [Singleton Design Pattern](/docs/design-patterns/singleton-pattern) if you update a page by adding one single element to it, all of the tests that use that page object will automatically take hold of that change with no further action, leading you to update the test code only for that one place.