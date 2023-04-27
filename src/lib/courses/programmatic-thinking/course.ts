import type { Course } from "$lib/types/course";
import CodeTags from "svelte-material-icons/CodeTags.svelte";

export const course: Course = {
    name: "Programmatic Thinking",
    root_units: ["introduction", "thinking-like-a-programmer", "programming-concepts", "syntax-&-programming-languages"],
    description: "Learn how to limitless possibilities of software engineering and learn to turn your ideas into reality with our expertly curated course.",
    prerequisites: [{name: "Programming", slug: "programming"}],
    next_up: [{name: "Programming", slug: "programming"}],
    image: "src/routes/(app)/Courseplaceholder.png",
    icon: CodeTags,
    units_map: {
        "introduction": {
            name: "Introduction",
            subunits: [],
            free: true,
        },
        "thinking-like-a-programmer": {
            name: "How to Think Like a Programmer",
            free: true,
            subunits: [
                "thinking-like-a-programmer/problem-solving",
                "thinking-like-a-programmer/inputs-outputs-constraints",
                "thinking-like-a-programmer/thinking-in-terms-of-data",
                "thinking-like-a-programmer/algorithmic-thinking",
                "thinking-like-a-programmer/abstraction-modularity-&-integration",
                "thinking-like-a-programmer/dealing-with-failure",
                "thinking-like-a-programmer/how-to-get-unstuck",
                "thinking-like-a-programmer/how-to-google-problems",
                "thinking-like-a-programmer/using-chatgpt-to-accelerate-learning"
            ]
        },
        "thinking-like-a-programmer/problem-solving": {
            name: "Problem Solving",
            free: true,
        },
        "thinking-like-a-programmer/inputs-outputs-constraints": {
            name: "Inputs, Outputs, and Constraints",
            free: true,
        },
        "thinking-like-a-programmer/thinking-in-terms-of-data": {
            name: "Thinking in Terms of Data",
            free: true
        },
        "thinking-like-a-programmer/algorithmic-thinking": {
            name: "Algorithmic Thinking",
        },
        "thinking-like-a-programmer/abstraction-modularity-&-integration": {
            name: "Abstraction, Modularity, and Integration",
        },
        "thinking-like-a-programmer/dealing-with-failure": {
            name: "Dealing with Failure",
        },
        "thinking-like-a-programmer/how-to-get-unstuck": {
            name: "How to Get Unstuck",
        },
        "thinking-like-a-programmer/how-to-google-problems": {
            name: "How to Google Problems",
        },
        "thinking-like-a-programmer/using-chatgpt-to-accelerate-learning": {
            name: "Using ChatGPT to Accelerate Learning",
        },
        "programming-concepts": {
            name: "Programming Concepts",
            subunits: [
                "programming-concepts/data-structures",
                "programming-concepts/syntax",
                "programming-concepts/algorithms-and-logic",
                "programming-concepts/scope",
                "programming-concepts/clean-code",
                "programming-concepts/heap-vs-stack"
            ]
        },
        "programming-concepts/data-structures": {
            name: "Data Structures",
            subunits: [
                "programming-concepts/data-structures/bits-&-booleans",
                "programming-concepts/data-structures/numbers",
                "programming-concepts/data-structures/references",
                "programming-concepts/data-structures/collections-arrays",
                "programming-concepts/data-structures/characters",
                "programming-concepts/data-structures/strings",
                "programming-concepts/data-structures/enumerations",
                "programming-concepts/data-structures/sets",
                "programming-concepts/data-structures/tuples",
                "programming-concepts/data-structures/maps-&-dictionaries",
                "programming-concepts/data-structures/structs-&-classes",
                "programming-concepts/data-structures/trees-&-graphs"
            ]
        },
        "programming-concepts/data-structures/bits-&-booleans": {
            name: "Bits and Booleans"
        },
        "programming-concepts/data-structures/numbers": {
            name: "Numbers"
        },
        "programming-concepts/data-structures/references": {
            name: "References"
        },
        "programming-concepts/data-structures/collections-arrays": {
            name: "Collections/Arrays"
        },
        "programming-concepts/data-structures/characters": {
            name: "Characters"
        },
        "programming-concepts/data-structures/strings": {
            name: "Strings"
        },
        "programming-concepts/data-structures/enumerations": {
            name: "Enumerations"
        },
        "programming-concepts/data-structures/sets": {
            name: "Sets"
        },
        "programming-concepts/data-structures/tuples": {
            name: "Tuples"
        },
        "programming-concepts/data-structures/maps-&-dictionaries": {
            name: "Maps & Dictionaries"
        },
        "programming-concepts/data-structures/structs-&-classes": {
            name: "Structs & Classes"
        },
        "programming-concepts/data-structures/trees-&-graphs": {
            name: "Trees & Graphs"
        },
        "programming-concepts/syntax": {
            name: "Syntax"
        },
        "programming-concepts/variables": {
            name: "Variables"
        },
        "programming-concepts/algorithms-and-logic": {
            name: "Algorithms and Logic",
            subunits: [
                "programming-concepts/algorithms-and-logic/sequential-logic",
                "programming-concepts/algorithms-and-logic/conditional-logic",
                "programming-concepts/algorithms-and-logic/iterative-logic",
                "programming-concepts/algorithms-and-logic/functions-&-methods",
                "programming-concepts/algorithms-and-logic/recursive-logic",
                "programming-concepts/algorithms-and-logic/time-&-space-complexity",
                "programming-concepts/algorithms-and-logic/writing-algorithms"
            ]
        },
        "programming-concepts/algorithms-and-logic/sequential-logic": {
            name: "Sequential Logic"
        },
        "programming-concepts/algorithms-and-logic/conditional-logic": {
            name: "Conditional Logic"
        },
        "programming-concepts/algorithms-and-logic/iterative-logic": {
            name: "Iterative Logic"
        },
        "programming-concepts/algorithms-and-logic/functions-&-methods": {
            name: "Functions & Methods"
        },
        "programming-concepts/algorithms-and-logic/recursive-logic": {
            name: "Recursive Logic"
        },
        "programming-concepts/algorithms-and-logic/time-&-space-complexity": {
            name: "Time & Space Complexity",
        },
        "programming-concepts/algorithms-and-logic/writing-algorithms": {
            name: "Writing Algorithms",
        },
        "programming-concepts/scope": {
            name: "Scope",
            subunits: [
                "programming-concepts/scope/global-scope",
                "programming-concepts/scope/local-block-scope",
                "programming-concepts/scope/closures-and-nested-functions",
                "programming-concepts/scope/namespaces-&-modules",
                "programming-concepts/scope/privacy",
                "programming-concepts/scope/best-practices",
                "programming-concepts/scope/shadowing"
            ]
        },
        "programming-concepts/scope/global-scope": {
            name: "Global Scope",
        },
        "programming-concepts/scope/local-block-scope": {
            name: "Local / Block Scope",
        },
        "programming-concepts/scope/closures-and-nested-functions": {
            name: "Closures and Nested Functions",
        },
        "programming-concepts/scope/namespaces-&-modules": {
            name: "Namespaces & Modules",
        },
        "programming-concepts/scope/privacy": {
            name: "Privacy",
        },
        "programming-concepts/scope/best-practices": {
            name: "Best Practices",
        },
        "programming-concepts/scope/shadowing": {
            name: "Shadowing",
        },
        "programming-concepts/clean-code": {
            name: "Clean Code",
            subunits: [
                "programming-concepts/clean-code/programming-paradigms",
                "programming-concepts/clean-code/coding-standards-and-conventions",
                "programming-concepts/clean-code/comments-as-code",
                "programming-concepts/clean-code/refactoring",
                "programming-concepts/clean-code/identifying-code-smells",
                "programming-concepts/clean-code/premature-optimization",
                "programming-concepts/clean-code/test-driven-development",
                "programming-concepts/clean-code/agile-programming"
            ]
        },
        "programming-concepts/clean-code/programming-paradigms": {
            name: "Programming Paradigms",
        },
        "programming-concepts/clean-code/coding-standards-and-conventions": {
            name: "Coding Standards and Conventions",
        },
        "programming-concepts/clean-code/comments-as-code": {
            name: "Comments As Code",
        },
        "programming-concepts/clean-code/refactoring": {
            name: "Refactoring",
        },
        "programming-concepts/clean-code/identifying-code-smells": {
            name: "Identifying Code Smells",
        },
        "programming-concepts/clean-code/premature-optimization": {
            name: "Premature optimization",
        },
        "programming-concepts/clean-code/test-driven-development": {
            name: "Test-driven development",
        },
        "programming-concepts/clean-code/agile-programming": {
            name: "Agile Programming",
        },
        "programming-concepts/heap-vs-stack": {
            name: "Heap Vs Stack",
        },
        "syntax-&-programming-languages": {
            name: "Syntax & Programming Languages",
            subunits: [
                "syntax-&-languages/how-programming-languages-work",
            ]
        },

        "syntax-&-languages/how-programming-languages-work": {
            name: "How Programming Languages Work",
            subunits: [
                "syntax-&-languages/how-programming-languages-work/interpreted-languages",
                "syntax-&-languages/how-programming-languages-work/compiled-languages"
            ]
        },

        "syntax-&-languages/how-programming-languages-work/interpreted-languages": {
            name: "Interpreted Languages"
        },

        "syntax-&-languages/how-programming-languages-work/compiled-languages": {
            name: "Compiled Languages"
        },
    }
}