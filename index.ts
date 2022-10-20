export interface User {
  username: string;
  name: string;
  honor: number;
  clan: string;
  leaderboardPosition: number;
  skills: string[];
  ranks: Ranks;
  codeChallenges: {
    totalAuthored: number;
    totalCompleted: number;
  };
}

export type ColorString =
  | "white"
  | "yellow"
  | "blue"
  | "purple"
  | "black"
  | "red";

export type LanguageString =
  | "c"
  | "csharp"
  | "cpp"
  | "rust"
  | "typescript"
  | "javascript"
  | "java"
  | "lua"
  | "python"
  | "swift"
  | "clojure"
  | "coffeescript"
  | "coq"
  | "crystal"
  | "dart"
  | "elixir"
  | "fsharp"
  | "go"
  | "groovy"
  | "haskell"
  | "kotlin"
  | "lean"
  | "nasm"
  | "php"
  | "racket"
  | "ruby"
  | "scala"
  | "shell"
  | "sql"
  | "agda"
  | "bf"
  | "cfml"
  | "cobol"
  | "commonlisp"
  | "d"
  | "elm"
  | "erlang"
  | "factor"
  | "forth"
  | "fortran"
  | "haxe"
  | "indris"
  | "julia"
  | "lambdacalculus"
  | "nim"
  | "objectivec"
  | "ocaml"
  | "pascal"
  | "perl"
  | "powershell"
  | "prolog"
  | "purescript"
  | "r"
  | "raku"
  | "reason"
  | "riscv"
  | "solidity"
  | "vbnet";

export type TagString =
  | "ASCII Art"
  | "Algebra"
  | "Algorithms"
  | "Angular"
  | "Arrays"
  | "Artificial Intelligence"
  | "Asynchronous"
  | "Backend"
  | "Big Integers"
  | "Binary"
  | "Binary Search Trees"
  | "Binary Trees"
  | "Bits"
  | "Cellular Automata"
  | "Ciphers"
  | "Combinatorics"
  | "Compilers"
  | "Computational Science"
  | "Concurrency"
  | "Cryptography"
  | "Data Frames"
  | "Data Science"
  | "Data Structures"
  | "Data Visualization"
  | "Databases"
  | "Date Time"
  | "Debugging"
  | "Decorator"
  | "Deep Learning"
  | "Design Patterns"
  | "Discrete Mathematics"
  | "Domain Specific Languages"
  | "Dynamic Programming"
  | "Esoteric Languages"
  | "Event Handling"
  | "Express"
  | "Filtering"
  | "Flask"
  | "Frontend"
  | "Functional Programming"
  | "Fundamentals"
  | "Game Solvers"
  | "Games"
  | "Genetic Algorithms"
  | "Geometry"
  | "Graph Theory"
  | "Graphics"
  | "Graphs"
  | "Heaps"
  | "Image Processing"
  | "Interpreters"
  | "Iterators"
  | "JSON"
  | "Language Features"
  | "Linear Algebra"
  | "Linked Lists"
  | "Lists"
  | "Logic"
  | "Logic Programming"
  | "Machine Learning"
  | "Macros"
  | "Mathematics"
  | "Matrix"
  | "Memoization"
  | "Metaprogramming"
  | "Monads"
  | "MongoDB"
  | "Networks"
  | "Neural Networks"
  | "NoSQL"
  | "NumPy"
  | "Number Theory"
  | "Numerical Analysis"
  | "Object-oriented Programming"
  | "Parsing"
  | "Performance"
  | "Permutations"
  | "Physics"
  | "Priority Queues"
  | "Probability"
  | "Promises"
  | "Puzzles"
  | "Queues"
  | "Randomized Algorithms"
  | "React"
  | "Reactive Programming"
  | "Recursion"
  | "Refactoring"
  | "Reflection"
  | "Regular Expressions"
  | "Restricted"
  | "Reverse Engineering"
  | "Riddles"
  | "RxJS"
  | "SQL"
  | "Scheduling"
  | "Searching"
  | "Security"
  | "Set Theory"
  | "Sets"
  | "Simulation"
  | "Singleton"
  | "Sorting"
  | "Stacks"
  | "State Machines"
  | "Statistics"
  | "Streams"
  | "Strings"
  | "Theorem Proving"
  | "Threads"
  | "Trees"
  | "Tutorials"
  | "Unicode"
  | "Web Scraping"
  | "Web3";

export interface RankObject {
  rank: number;
  name: string;
  color: ColorString;
  score: number;
}

export interface Ranks {
  overall: RankObject;
  languages: {
    [K in OrString<LanguageString>]?: RankObject;
  };
}

export interface CompletedChallenges {
  totalPages: number;
  totalItems: number;
  data: CompletedChallenge[];
}

export interface CompletedChallenge {
  id: string;
  name: string;
  slug: string;
  completedAt: string;
  completedLanguages: OrString<LanguageString>[];
}

export interface AuthoredChallenges<Published extends boolean = boolean> {
  data: AuthoredChallenge<Published>[];
}

type OrString<T> = T | (string & Record<never, never>);

export interface AuthoredChallenge<Published extends boolean = boolean> {
  id: string;
  name: string;
  description: string;
  rank: Published extends true ? number : undefined;
  rankName?: Published extends true ? string : undefined;
  tags: OrString<TagString>[];
  languages: OrString<LanguageString>[];
}

export interface CodeChallenge<Approved extends boolean = boolean> {
  id: string;
  name: string;
  slug: string;
  url: `http://www.codewars.com/kata/${string}`;
  category: string;
  description: string;
  tags: OrString<TagString>[];
  languages: OrString<LanguageString>[];
  rank: Approved extends true ? RankObject : undefined;
  createdBy: UserIdentifier;
  publishedAt: string;
  approvedBy: Approved extends true ? UserIdentifier : undefined;
  approvedAt: string;
  totalCompleted: number;
  totalAttempts: number;
  totalStars: number;
  voteScore: number;
  contributorsWanted: boolean;
  unresolved: {
    issues: number;
    suggestions: number;
  };
}

export type DateString =
  `${number}-${number}-${number}T${number}:${number}:${number}Z`;

export interface UserIdentifier {
  /**
   * Username of the user
   */
  username: string;
  /**
   * URL of the user's profile
   */
  url: `http://www.codewars.com/users/${string}`;
}
