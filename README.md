# Product swap

Dependencies (and versions) used:

- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-router-dom": "^6.10.0"

(as per package.json)

To start project:

- ready to start!

Page structure: Pages that are accessible to unregistered users as well as registered users (users) and admin are structured through "product routers". While these pages are accessible to unregistered users, some views and functions are restricted to registered users.
Pages that are only accessible to registered users and admin are contained in "api routers".

styles: <h2 className="pt-10">Look at these {category}...</h2>

button:
className="text-center border rounded-md border-black-600 mt-5 mx-auto px-5 py-1 block hover:bg-slate-50"
