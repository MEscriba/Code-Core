**WEEK 11 - NODEJS**

**MONDAY**

time to practice

**TUESDAY**

**NODE.JS**

Understanding well what Node.JS is before starting to use it, will make it much easier for us to work with this powerful tool. In this exercise your task is to answer the following questions in your own words:

-What is Node.JS?

Conceived as an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

-What problem does Node.JS solve?

Node's stated number one goal is "to provide an easy way to build scalable networking programs."
the bottleneck in the entire web application architecture (including traffic throughput, processor speed, and memory speed) was the maximum number of concurrent connections a server could handle.

Node solves this problem by changing the way a connection to the server is made. Instead of spawning a new OS thread for each connection (and allocating the accompanying memory to it), each connection triggers an execution event within the Node. Node also claims that it will never deadlock, because locks are not allowed and because it does not directly block for I/O calls. Node claims that a server running it can support tens of thousands of concurrent connections.

-What is the V8 Javascript Engine?

V8 is the name of the JavaScript engine that powers Google Chrome. It's what takes our JavaScript and runs it while you're browsing with Chrome. V8 provides the runtime environment in which JavaScript runs. The browser provides the DOM and the other APIs of the web platform.

-Is Node.JS really necessary in the Development ecosystem?

Since Node.js uses fewer threads, it uses fewer resources/memory, resulting in faster execution of tasks. So for our purposes, this single-threaded architecture is equivalent to the multithreaded architecture. When one needs to process data-heavy tasks, then it makes much more sense to use multi-threaded languages ​​like Java. But for real-time applications, Node.js is the obvious choice.

-What is NVM and Why is it useful for Node.JS developers?

The nvm software allows you to install and manage different versions of NodeJS on one computer, making it easy to work with projects that require different versions.

nvm is a software that we can install to have several different versions of NodeJS on the same computer. Thanks to nvm we can install any version of NodeJS that we need in a project, be it a current version or an old version. It also allows us to exchange the version of NodeJS that we have active at a given moment, among all those that have been installed in the system.

**Node.JS Module System**

-What is a Javascript Module?

As JavaScript is used more frequently, namespaces (namespaces where the identifiers of our application coexist) and dependencies become more difficult to manage.

Taking into account that before the arrival of ES6, Javascript did not natively support the use of modules, programmers managed to develop their own module systems, taking advantage of features of the same language.


-Why are Javascript Modules necessary?

Years ago, the vast majority of applications were developed in isolation. Today, it is the opposite.
It is common that some of the requirements of a system that is being developed can be implemented using an existing solution as a base.
The moment an existing component is inserted into a new project, a dependency is created between this project and the component used.
Since these pieces need to work together, it is important that there are no conflicts between them.
So if we don't do any kind of encapsulation, it's a matter of time before 2 modules conflict.
This is one of the reasons that C libraries use a prefix on their components.
Encapsulation is essential to prevent conflicts and facilitate development.
When it comes to dependencies, in client-side JavaScript development, they have traditionally been handled implicitly.
In other words, it has always been the developer's task to ensure that dependencies are satisfied when executing each block of code. Also, ensure that these dependencies are loaded in the correct order.
As we write more Javascript code in our applications, dependency management becomes more cumbersome.

-What module standards are available in Node.JS?

Node.js has two module systems: CommonJS modules and ECMAScript modules.

-What are the differences between ESModules and CommonJS modules?

CommonJS only allows synchronous loading of modules, while ESM allows both synchronous and asynchronous loading.


-Which types of modules exist in Node.JS

here are 3 types of modules. They all work in a similar way but differ in origin.

Built-in modules: They are the native modules of the Node.js API. They do not need to be installed as they are included by default with Node.js. Some examples are the fs or stream modules. These packages are only updated if you change the version of Node.js.
Local modules: These are the modules written by the developers and form a large part of the application as a whole. As you have already read, they are structured like this in order to be able to be a reusable code.
External modules: These are, in essence, the third-party packages distributed through npm (although they may come from other repositories). These packages are installed as dependencies and, although they add functionality to the application, they should not be included in the repository since they are not part of the application.

**excercise node example**

[nodemodule_example](https://github.com/MEscriba/MEscriba/tree/main/EXAMPLE_NODE_MODULES)

-What is a Server?

The term server has two meanings in the computer world. The former refers to the computer that makes resources available over a network, and the latter refers to the program running on that computer. Consequently, two server definitions appear:

Definition Server (hardware): A hardware-based server is a physical machine integrated into a computer network on which, in addition to the operating system, one or more software-based servers run. An alternative name for a hardware-based server is "host." In principle, any computer can be used as a "host" with the corresponding server software.

Definition Server (software): A software-based server is a program that provides a special service that other programs called clients can use locally or across a network. The type of service depends on the type of server software. The basis of communication is the client-server model and, as far as data exchange is concerned, service-specific transmission protocols come into play.


- Why is a Client?

A client is a computer or software that accesses a server and retrieves special services or data from it. It is the client's task to standardize the requests, transmit them to the server and process the obtained data so that it can be displayed on an output device such as a screen. A client does not perform server tasks, but is simply an intermediate element. Typical clients are web browsers or email clients.


**WEDNESDAY**

-What is an API?

APIs are mechanisms that allow two software components to communicate with each other using a set of definitions and protocols. For example, the weather institute's software system contains daily weather data. Your phone's weather app “talks” to this system through APIs and shows you daily weather updates on your phone.

-What is a Protocol?

Protocol in computing is a formal set of standards and norms. These govern both the format and the control of the interaction between the different devices within a network or communication system. The goal is that they can transmit data between them. As a computer consultant we see more details on the subject

-What are the different types of APIs?

APIs are classified both based on their architecture and their scope of use. We have already explored the main types of API architectures, now let's look at the scope of use.

private APIs
These are internal to a company and are only used to connect systems and data within the company.
public APIs
They are open to the public and can be used by anyone. There may or may not be some authorization and cost associated with this type of API.
Partner API
They can only be accessed by authorized third-party developers to support business-to-business partnerships.
Composite APIs
These combine two or more different APIs to address complex system requirements or behaviors.


[]()

[]()

**THUESDAY**


