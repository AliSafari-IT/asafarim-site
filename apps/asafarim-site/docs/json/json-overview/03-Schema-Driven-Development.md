---
sidebar_position: 3
slug: "sch-dev" 
---

# Schema-Driven Development
The basic use of `JSON-Schema` is to generate clear, human/machine readable documentation. Moreover, JSON-Schema can be a great tool for data modeling, even more efficient as a data modeling tool to that of a validation tool. Meaning that its inability to validate a value based on another value, keeps its validation feature at a basic level for development. For example, to say that the value of `ageOne` is less than the value of `ageTwo`, JSON-Schema is unable to validate that and the most it can do for us is that these are both numbers.