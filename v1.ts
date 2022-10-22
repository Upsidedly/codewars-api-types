/**
 * User interface returned by  `/users/{user}` endpoint
 */
export interface User {
  /**
   * Username of the user.
   */
  username: string;
  /**
   * Name of the user.
   */
  name: string;
  /**
   * Total honor points earned by the user.
   */
  honor: number;
  /**
   * Name of the clan.
   */
  clan: string;
  /**
   * The user's position on the overall leaderboard.
   */
  leaderboardPosition: number;
  /**
   * Array of skills entered by the user.
   */
  skills: string[];
  /**
   * Ranks object with overall and language ranks.
   */
  ranks: Ranks;
  codeChallenges: {
    /**
     * Number of kata authored by user.
     */
    totalAuthored: number;
    /**
     * Number of kata completed by user.
     */
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
    /**
     * Rank in integer. `[-8, -1]` maps to kyu, `[1, 8]` maps to dan
     */
    rank: number;
    /**
     * Either `{-rank} kyu` or `{rank} dan`.
     */
    name: string;
    /**
     * The color of the rank. Possible colors are `white` (7-8 kyu), `yellow` (5-6 kyu), `blue` (3-4 kyu), `purple` (1-2 kyu), `black` (1-4 dan), and `red` (5-8 dan).
     */
    color: ColorString;
    /**
     * The total score earned. This is the number that determines the rank.
     */
    score: number;
}

export interface Ranks {
  overall: RankObject;
  languages: {
    [K in OrString<LanguageString>]?: RankObject;
  };
}

export interface CompletedChallenges {
  /**
   * Total amount of pages
   */
  totalPages: number;
  /**
   * Total amount of items of all pages
   */
  totalItems: number;
  /**
   * The completed challenges
   */
  data: CompletedChallenge[];
}

export interface CompletedChallenge {
    /**
     * ID of the kata.
     */
    id: string;
    /**
     * Name of the kata.
     */
    name: string;
    /**
     * Slug of the kata.
    */
    slug: string;
    /**
     * Date and time of the completion
     */
    completedAt: string;
    /**
     * Array of languages a user completed in.
     */
    completedLanguages: OrString<LanguageString>[];
}

export interface AuthoredChallenges<Published extends boolean = boolean> {
  data: AuthoredChallenge<Published>[];
}

type OrString<T> = T | (string & Record<never, never>);

export interface AuthoredChallenge<Published extends boolean = boolean> {
  /**
   * ID of the kata
   */
  id: string;
  /**
   * Name of the kata.
   */
  name: string;
  /**
   * Description of the kata in Markdown.
   */
  description: string;
  /**
   * Rank of the kata if approved.
   */
  rank: Published extends true ? number : undefined;
  /**
   * Rank name of the kata if approved.
   */
  rankName?: Published extends true ? string : undefined;
  /**
   * Array of tags associated with the kata.
   */
  tags: OrString<TagString>[];
  /**
   * Array of language names the kata is avaliable in.
   */
  languages: OrString<LanguageString>[];
}

export interface CodeChallenge<Approved extends boolean = boolean> {
  /**
   * ID of the kata.
   */
  id: string;
  /**
   * Name of the kata.
   */
  name: string;
  /**
   * Slug of the kata.
   */
  slug: string;
  /**
   * URL of the kata.
   */
  url: `http://www.codewars.com/kata/${string}`;
  /**
   * Category of the kata.
   */
  category: string;
  /**
   * Description of the kata in Markdown.
   */
  description: string;
  /**
   * Array of tags associated with the kata.
   */
  tags: OrString<TagString>[];
  /**
   * Array of language names the kata in avaliable in.
   */
  languages: OrString<LanguageString>[];
  /**
   * Object descring the rank of the kata if approved.
   */
  rank: Approved extends true ? RankObject : undefined;
  /**
   * The author of the kata.
   */
  createdBy: UserIdentifier;
  /**
   * Date and time when the kata was first published.
   */
  publishedAt: string;
  /**
   * The approver of the kata, if approved.
   */
  approvedBy: Approved extends true ? UserIdentifier : undefined;
  /**
   * Date and time when the kata was approved, if approved.
   */
  approvedAt: string;
  /**
   * Total number of completions.
   */
  totalCompleted: number;
  /**
   * Total number of attempts
   */
  totalAttempts: number;
  /**
   * The number of bookmarks.
   */
  totalStars: number;
  /**
   * The sum of all votes casted.
   */
  voteScore: number;
  /**
   * Whether to allow contributions.
   */
  contributorsWanted: boolean;
  unresolved: {
    /**
     * Number of unresolved issues.
     */
    issues: number;
    /**
     * Number of unresolved suggestions.
     */
    suggestions: number;
  };
}

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
