---
sidebar_position: 2 
title: "Json: Schema"
slug: "sch"
---
## What is JSON Schema?
Json is the most popular format for exchanging data on the web. 
The main use of JSON schema is to describe the structure and validation constraints of your JSON documents.

## Why JSON Schema?
It helps you specify the objects and what values are valid inside the object’s properties. JSON schema is useful in offering clear, human-readable, and machine-readable documentation.


## Specify required properties
To set an object to be required we can do like this:
For example in products, we want the property items to be required in our data.
- We go to `schema.js` file, then add the required in the form of array as follows in this position:

```json title=" JSON containing schema for product data with required properties"
var productSchema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "http://example.com/schemas/products.json",
  "title": "h+ sport products",
  "description": "schema for h+ sport product data",
  "type": "object",
  "properties": {
    "products": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "image": {
            "type": "string"
          },
          "alt": {
            "type": "string"
          }
        },
        "required": [
          "image",
          "alt",
          "name"
        ]
      }
    }
  },
  "required": [
    "products"
  ]
};
```

:::tip Focusing the required properties
```
"required": [
          "image",
          "alt",
          "name"
        ]
```
:::


## Pros of JSON Schema

- generating clear, human/machine readable documentation,
- describing the structure of data in order to ease the data structure validation
- applications made with the coding of JSON are browser compatible
- parsing functions: functions are not allowed in JSON. So, when needed to include a function, it can be written as a string. Then later, it can be converted back into a function:

:::tip Converting a string into a function in json
```javascript
const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj = JSON.parse(text);
obj.age = eval("(" + obj.age + ")");

document.getElementById("demo").innerHTML = obj.name + ", " + obj.age(); 
```
:::

:::warning
You should avoid using functions in JSON, the functions will lose their scope, and you would have to use `eval()` to convert them back into functions.
:::

## Root schema, subschema
