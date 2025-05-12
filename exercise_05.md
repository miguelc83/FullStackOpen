This diagram describes the behavior of the browser when accessing the SPA (Single Page Application) version of the notes application for the first time, available at:

👉 [https://studies.cs.helsinki.fi/exampleapp/spa](https://studies.cs.helsinki.fi/exampleapp/spa)

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /exampleapp/spa
    activate server
    server-->>browser: Basic HTML (page structure)
    deactivate server

    browser->>server: GET /exampleapp/spa.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET /exampleapp/spa.js
    activate server
    server-->>browser: JavaScript SPA
    deactivate server

    Note right of browser: The browser executes spa.js

    browser->>server: GET /exampleapp/data.json
    activate server
    server-->>browser: List of notes in JSON format
    deactivate server

    Note right of browser: The browser dynamically renders the notes on the page using the DOM API