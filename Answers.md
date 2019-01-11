# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a framework for javascript which attempts to solve the problems encountered when building and deploying large scale applications. It allows for rapid development of applications that can can be deployed at scale.

1.  What does it mean to _think_ in react?

Thinking in react is breaking an application into components so that each component represents a single reusable piece of the larger application. In this way state of the application can be handled in a single place and design elements can be reused among similar looking elements even if their function is different.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Class/Stateful component extends the "Component" class defined by react. it includes access to the state property of the application which presents state data to a user and allows the user to modify this data through interaction. 

A Functional/Presentational component may change its appearance in response to "props" data (which may depend on state) but does not require access to the application's state since these elements do not modify state. Instead they simply represent data to the user in a meaningful way.

1.  Describe state.

State is data relating to the user's interaction with an application. This data may come from an external source or the user and might be updated depending on the user's interaction with the application. While props may depend on state, state does not depend on props.

1.  Describe props.

Props are data relating to the way information is presented by the application. Props may be updated by state and are a way of passing information between components to make the application interactive and responsive either to a user's interactions or changes in state from external sources (the time or weather, for instance).