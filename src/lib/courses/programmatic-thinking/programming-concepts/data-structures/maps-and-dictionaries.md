In programming, maps and dictionaries are data structures used to store key-value pairs.

Maps and dictionaries are a fundamental data type in many programming languages and are used extensively in many applications. In this unit, we will explore what maps and dictionaries are, the different types of maps, when and why to use each type, and some example use cases.

## What Will You Learn

- Understand what maps and dictionaries are and how they work
- Learn about the different types of maps
- Explore when and why to use maps and dictionaries in programming
- Learn about common synonyms used for maps and dictionaries
- See some example use cases for maps and dictionaries

## Maps & Dictionaries

Maps and dictionaries are data structures used to store **key-value pairs**. They allow you to access values by their corresponding keys, rather than by their position in a sequence. This makes them extremely useful for storing and accessing data that doesn't have a natural order, such as user data or configuration settings.

In most programming languages, maps and dictionaries are interchangeable terms, and their implementations are often similar or identical.

### What is a key?

In programming, a key is a value that is used to uniquely identify a specific item or element in a data structure, such as an array, dictionary, or database table. A key is typically a string or an integer value, and it is associated with a corresponding value that contains the data or information being stored.

## Types of Maps

There are several different types of maps, each with its own advantages and disadvantages. The most common types of maps are:

- **Hashmap**: A hashmap is a type of map that uses a hash function to quickly find the location of a key. This makes lookups very fast, but can be slower when adding or deleting values.
- **B-tree**: A B-tree is a type of map that uses a balanced tree structure to store key-value pairs. This makes lookups and updates more efficient than a hashmap, but can be slower when searching for a range of keys.
- **Trie**: A trie is a type of map that stores keys in a tree structure, where each level of the tree represents a character in the key. This makes lookups very fast, but can be slower when adding or deleting values.

## When to Use Maps & Dictionaries

Maps and dictionaries are useful when you need to store and access key-value pairs. They are often used in the following scenarios:

- **Storing configuration settings**: Maps and dictionaries are often used to store configuration settings for an application, allowing the application to quickly access these settings at runtime.
- **Storing user data**: Maps and dictionaries are often used to store user data, such as usernames, passwords, and profile information.
- **Caching data**: Maps and dictionaries can be used to cache data, allowing you to quickly access frequently-used data without having to recompute or re-fetch it.

## Synonyms for Maps & Dictionaries

Maps and dictionaries are often referred to by different names in different programming languages. Some common synonyms for maps and dictionaries include:

- **Associative array**: A synonym used in languages such as PHP and Perl.
- **HashMap**: A synonym used in languages such as Ruby, Rust, C++.
- **Object**: A synonym used in languages such as JavaScript and Python.

## Example Use Cases

Here are some example use cases for maps and dictionaries:

- **Phone book**: A phone book is a good example of a map or dictionary, where each name is associated with a phone number.
- **Website cookies**: Websites often use cookies to store user preferences, such as language settings or login information. Cookies are typically stored as key-value pairs in a map or dictionary.
- **Game scores**: Games often store high scores in a map or dictionary, where each player name is associated with a score.

::question{slug="map-use-challenge" question="Give an example of when you would use a map or dictionary in a program."}