import { Course } from "$lib/types/course"

export const course: Course = {
    name: "Programming",
    root_units: ["introduction", "how-to-think-like-a-programmer"], //, "how-to-think-like-a-programmer", "programming-concepts", "frontend-vs-backend", "setting-up-your-development-environment", "syntax-and-programming-languages", "web-development"],
    units_map: {
        "introduction": {
            name: "Introduction",
            subunits: ["introduction/test-unit"]
        },
        "introduction/test-unit": {
            name: "Test Unit",
        },
        "how-to-think-like-a-programmer": {
            name: "How to think like a programmer",
            subunits: ["how-to-think-like-a-programmer/problem-solving", "how-to-think-like-a-programmer/inputs-outputs-constraints", "how-to-think-like-a-programmer/thinking-in-terms-of-data", "how-to-think-like-a-programmer/algorithmic-thinking", "how-to-think-like-a-programmer/abstraction-modularity-&-integration", "how-to-think-like-a-programmer/dealing-with-failure", "how-to-think-like-a-programmer/how-to-get-unstuck", "how-to-think-like-a-programmer/how-to-google-problems", "how-to-think-like-a-programmer/using-chatgpt-to-accelerate-learning"]
        },
        "how-to-think-like-a-programmer/problem-solving": {
            name: "Problem Solving",
        },
        "how-to-think-like-a-programmer/inputs-outputs-constraints": {
            name: "Inputs, Outputs, and Constraints",
        },
        "how-to-think-like-a-programmer/thinking-in-terms-of-data": {
            name: "Thinking in terms of data",
        },
        "how-to-think-like-a-programmer/algorithmic-thinking": {
            name: "Algorithmic Thinking",
        },
        "how-to-think-like-a-programmer/abstraction-modularity-&-integration": {
            name: "Abstraction, Modularity, and Integration",
        },
        "how-to-think-like-a-programmer/dealing-with-failure": {
            name: "Dealing with Failure",
        },
        "how-to-think-like-a-programmer/how-to-get-unstuck": {
            name: "How to get unstuck",
        },
        "how-to-think-like-a-programmer/how-to-google-problems": {
            name: "How to Google Problems",
        },
        "how-to-think-like-a-programmer/using-chatgpt-to-accelerate-learning": {
            name: "Using ChatGPT to Accelerate Learning",
        },
        // "programming-concepts": {
        //     name: "Programming Concepts",
        //     subunits: ["programming-concepts/data-structures", "programming-concepts/syntax", "programming-concepts/variables", "programming-concepts/algorithms-and-logic", "programming-concepts/scope", "programming-concepts/clean-code", "programming-concepts/heap-vs-stackheap"]
        // },
        // "programming-concepts/data-structures": {
        //     name: "Data Structures",
        //     subunits: ["programming-concepts/data-structures/bits-&-booleans", "programming-concepts/data-structures/numbers", "programming-concepts/data-structures/references", "programming-concepts/data-structures/collections-and-arrays", "programming-concepts/data-structures/characters", "programming-concepts/data-structures/strings", "programming-concepts/data-structures/enumerations", "programming-concepts/data-structures/sets", "programming-concepts/data-structures/tuples", "programming-concepts/data-structures/maps-&-dictionaries", "programming-concepts/data-structures/structs-&-classes", "programming-concepts/data-structures/trees-&-graphs"]
        // },
        // "programming-concepts/data-structures/bits-&-booleans": {
        //     name: "Bits & Booleans",
        // },
        // "programming-concepts/data-structures/numbers": {
        //     name: "Numbers",
        // },
        // "programming-concepts/data-structures/references": {
        //     name: "References",
        // },
        // "programming-concepts/data-structures/collections-and-arrays": {
        //     name: "Collections/Arrays",
        // },
        // "programming-concepts/data-structures/characters": {
        //     name: "Characters",
        // },
        // "programming-concepts/data-structures/strings": {
        //     name: "Strings",
        // },
        // "programming-concepts/data-structures/enumerations": {
        //     name: "Enumerations",
        // },
        // "programming-concepts/data-structures/sets": {
        //     name: "Sets",
        // },
        // "programming-concepts/data-structures/tuples": {
        //     name: "Tuples",
        // },
        // "programming-concepts/data-structures/maps-&-dictionaries": {
        //     name: "Maps & Dictionaries",
        // },
        // "programming-concepts/data-structures/structs-&-classes": {
        //     name: "Structs & Classes",
        // },
        // "programming-concepts/data-structures/trees-&-graphs": {
        //     name: "Trees & Graphs",
        // },
        // "programming-concepts/syntax": {
        //     name: "Syntax",
        // },
        // "programming-concepts/variables": {
        //     name: "Variables",
        // },
        // "programming-concepts/algorithms-and-logic": {
        //     name: "Algorithms & Logic",
        //     subunits: ["programming-concepts/algorithms-and-logic/sequential-logic", "programming-concepts/algorithms-and-logic/conditional-logic", "programming-concepts/algorithms-and-logic/iterative-logic", "programming-concepts/algorithms-and-logic/functions-&-methods", "programming-concepts/algorithms-and-logic/recursive-logic", "programming-concepts/algorithms-and-logic/time-and-space-complexity", "programming-concepts/algorithms-and-logic/writing-algorithms"]
        // },
        // "programming-concepts/algorithms-and-logic/sequential-logic": {
        //     name: "Sequential Logic",
        // },
        // "programming-concepts/algorithms-and-logic/conditional-logic": {
        //     name: "Conditional Logic",
        // },
        // "programming-concepts/algorithms-and-logic/iterative-logic": {
        //     name: "Iterative Logic",
        // },
        // "programming-concepts/algorithms-and-logic/functions-&-methods": {
        //     name: "Functions & Methods",
        // },
        // "programming-concepts/algorithms-and-logic/recursive-logic": {
        //     name: "Recursive Logic",
        // },
        // "programming-concepts/algorithms-and-logic/time-and-space-complexity": {
        //     name: "Time & Space Complexity",
        // },
        // "programming-concepts/algorithms-and-logic/writing-algorithms": {
        //     name: "Writing Algorithms",
        // },
        // "programming-concepts/scope": {
        //     name: "Scope",
        //     subunits: ["programming-concepts/scope/global-scope", "programming-concepts/scope/local-and-block-scope", "programming-concepts/scope/closures-and-nested-functions", "programming-concepts/scope/namespaces-&-modules", "programming-concepts/scope/privacy-best-practices", "programming-concepts/scope/shadowing"]
        // },
        // "programming-concepts/scope/global-scope": {
        //     name: "Global Scope",
        // },
        // "programming-concepts/scope/local-and-block-scope": {
        //     name: "Local / Block Scope",
        // },
        // "programming-concepts/scope/closures-and-nested-functions": {
        //     name: "Closures and Nested Functions",
        // },
        // "programming-concepts/scope/namespaces-&-modules": {
        //     name: "Namespaces & Modules",
        // },
        // "programming-concepts/scope/privacy-best-practices": {
        //     name: "Privacy Best Practices",
        // },
        // "programming-concepts/scope/shadowing": {
        //     name: "Shadowing",
        // },
        // "programming-concepts/clean-code": {
        //     name: "Clean Code",
        //     //clean code has the subunits of: Programming Paradigms Coding Standards and Conventions Comments As Code Refactoring Identifying Code Smells Premature optimisation Test-driven development Agile Programming
        //     subunits: ["programming-concepts/clean-code/programming-paradigms", "programming-concepts/clean-code/coding-standards-and-conventions", "programming-concepts/clean-code/comments-as-code", "programming-concepts/clean-code/refactoring", "programming-concepts/clean-code/identifying-code-smells", "programming-concepts/clean-code/premature-optimisation", "programming-concepts/clean-code/test-driven-development", "programming-concepts/clean-code/agile-programming"]
        // },
        // "programming-concepts/clean-code/programming-paradigms": {
        //     name: "Programming Paradigms",
        // },
        // "programming-concepts/clean-code/coding-standards-and-conventions": {
        //     name: "Coding Standards & Conventions",
        // },
        // "programming-concepts/clean-code/comments-as-code": {
        //     name: "Comments As Code",
        // },
        // "programming-concepts/clean-code/refactoring": {
        //     name: "Refactoring",
        // },
        // "programming-concepts/clean-code/identifying-code-smells": {
        //     name: "Identifying Code Smells",
        // },
        // "programming-concepts/clean-code/premature-optimisation": {
        //     name: "Premature Optimisation",
        // },
        // "programming-concepts/clean-code/test-driven-development": {
        //     name: "Test-driven Development",
        // },
        // "programming-concepts/clean-code/agile-programming": {
        //     name: "Agile Programming",
        // },
        
    }
}