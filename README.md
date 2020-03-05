# Source Code of Deutsland

## The file structure of the project

```
.
├── back
│   ├── controllers
│   └── models
├── public
└── src
    ├── assets
    │   ├── approvals
    │   ├── partners
    │   └── services
    ├── modules
    │   ├── careers
    │   │   ├── components
    │   │   │   ├── career-admin-page
    │   │   │   ├── item-page
    │   │   │   └── list-page
    │   │   └── services
    │   ├── contact
    │   │   ├── components
    │   │   │   ├── admin-messages-page
    │   │   │   ├── branches
    │   │   │   ├── form
    │   │   │   ├── info
    │   │   │   └── map
    │   │   └── services
    │   ├── dtpedia
    │   │   ├── components
    │   │   │   ├── admin-page
    │   │   │   ├── list
    │   │   │   └── page
    │   │   └── services
    │   ├── main
    │   │   └── submodules
    │   │       ├── company-page
    │   │       │   └── components
    │   │       │       ├── brand-item
    │   │       │       ├── brand-list
    │   │       │       └── general-info
    │   │       ├── history-page
    │   │       │   └── components
    │   │       │       ├── item
    │   │       │       └── timeline
    │   │       ├── home-page
    │   │       │   └── components
    │   │       │       ├── counters
    │   │       │       ├── distribution
    │   │       │       ├── intro
    │   │       │       ├── partners
    │   │       │       └── trust-us
    │   │       └── services-component
    │   │           └── components
    │   │               ├── item-card
    │   │               └── list
    │   ├── news
    │   │   ├── components
    │   │   │   ├── event-admin-page
    │   │   │   ├── event-page
    │   │   │   └── slider
    │   │   └── services
    │   ├── projects
    │   │   ├── components
    │   │   └── services
    │   └── users
    │       ├── components
    │       │   ├── login
    │       │   ├── register
    │       │   └── users-admin-page
    │       └── services
    └── shared
        ├── dash-header
        ├── dash-layout
        ├── footer
        ├── header
        ├── layout
        └── sidebar
```

## Style Guide

Here's the style guide used on this project for the front-end.

1. **Font-Sizes**

- `Main`: 16px

- `Sections Heading`: 1.2rem

2. **Colors**

- `Main`: #CB6828

- `Text`: #3D3D3D

- `Secondary`: #3b3a3a

3. **Break points**

We'll use bootstrap breakpoints:

- `Desktop`: > 992px

- `Tab`: < 992px && > 576px

- `Mobile`: < 576px
